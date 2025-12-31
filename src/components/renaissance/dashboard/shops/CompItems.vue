<template>
  <div class="comp-items bg-light p-3">
    <div class="d-flex justify-content-between align-items-center">
      <h3 class="mb-0">Shop Items</h3>
      <div class="small text-muted">Buy items with coins. Exchange coins for Gems (160 coins = 1 gem).</div>
    </div>

    <div class="mt-3 d-flex justify-content-between align-items-center">
      <div>
        <button class="btn btn-sm btn-outline-secondary me-2" @click="refreshStore">Refresh</button>
        <button class="btn btn-sm btn-outline-danger" @click="clearCart">Clear cart</button>
      </div>
      <div class="text-right small text-muted">Coins: <strong>{{ user.coins }}</strong> • Gems: <strong>{{ user.gems }}</strong></div>
    </div>

    <div class="mt-3 row">
      <div class="col-md-8">
        <div class="row">
          <div v-for="item in storeItems" :key="item.id" class="col-sm-6 mb-3">
            <div class="card p-3">
              <div class="d-flex align-items-start">
                <img :src="item.icon" class="icon-sm me-3" />
                <div class="flex-grow-1">
                  <div class="font-weight-bold">{{ item.name }}</div>
                  <div class="small text-muted">{{ item.desc }}</div>
                  <div class="mt-2">Price: <strong>{{ item.price.toLocaleString() }} coins</strong></div>
                </div>
                <div class="ms-2">
                  <button class="btn btn-sm btn-primary" @click="addToCart(item)">Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card p-3">
          <h6>Cart</h6>
          <div v-if="cart.length === 0" class="text-muted">No items in cart.</div>
          <ul class="list-group mb-3" v-else>
            <li v-for="(c, idx) in cart" :key="idx" class="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <div class="font-weight-bold">{{ c.name }}</div>
                <div class="small text-muted">x{{ c.qty }}</div>
              </div>
              <div>
                <div class="small">{{ c.price * c.qty }} coins</div>
                <div class="mt-1">
                  <button class="btn btn-sm btn-outline-secondary me-1" @click="changeQty(c.id, -1)">-</button>
                  <button class="btn btn-sm btn-outline-secondary" @click="changeQty(c.id, 1)">+</button>
                </div>
              </div>
            </li>
          </ul>

          <div class="d-flex justify-content-between align-items-center mb-2">
            <div>Total</div>
            <div><strong>{{ cartTotal }} coins</strong></div>
          </div>

          <div class="d-flex">
            <button class="btn btn-sm btn-success me-2" :disabled="user.coins < cartTotal || cartTotal === 0" @click="checkout">Buy</button>
            <button class="btn btn-sm btn-outline-primary" @click="exchangeCoinsForGems">Exchange coins for Gems</button>
          </div>

          <div class="mt-3 small text-muted">Exchange rate: 160 coins = 1 gem</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import avatar2 from '@/assets/avatars/avatar_hongsa_0002.svg';
import avatar3 from '@/assets/avatars/avatar_hongsa_0003.svg';

export default {
  name: 'CompItems',
  data() {
    return {
      user: { coins: 1200, gems: 5 },
      storeItems: [
        { id: 's1', name: 'Small Gem Pack', desc: '1 gem', price: 1 * 160, icon: avatar2 },
        { id: 's2', name: 'Medium Gem Pack', desc: '5 gems', price: 5 * 160, icon: avatar3 },
        { id: 's3', name: 'Premium Gem Pack', desc: '10 +2 gems', price: 10 * 160, icon: avatar2 },
        { id: 's4', name: 'New Hongsa Pack', desc: '+10 New Hongsa avatars', price: 20000, icon: avatar3 }
      ],
      cart: []
    };
  },
  computed: {
    cartTotal() {
      return this.cart.reduce((s, c) => s + c.price * c.qty, 0);
    }
  },
  methods: {
    refreshStore() {
      // placeholder for refreshing offers
      this.$emit('refreshStore');
    },
    addToCart(item) {
      const existing = this.cart.find(c => c.id === item.id);
      if (existing) existing.qty++;
      else this.cart.push({ ...item, qty: 1 });
    },
    changeQty(id, delta) {
      const c = this.cart.find(ci => ci.id === id);
      if (!c) return;
      c.qty = Math.max(0, c.qty + delta);
      if (c.qty === 0) this.cart = this.cart.filter(ci => ci.id !== id);
    },
    clearCart() {
      this.cart = [];
    },
    checkout() {
      if (this.user.coins < this.cartTotal) { alert('Not enough coins'); return; }
      this.user.coins -= this.cartTotal;
      // grant items
      if (!this.user.inventory) this.$set(this.user, 'inventory', []);
      this.cart.forEach(c => {
        const ex = this.user.inventory.find(i => i.name === c.name);
        if (ex) ex.qty += c.qty;
        else this.user.inventory.push({ id: c.id, name: c.name, qty: c.qty });
      });
      this.$emit('purchase', { items: this.cart.slice(), total: this.cartTotal });
      this.clearCart();
    },
    exchangeCoinsForGems() {
      const rate = 160;
      if (this.user.coins < rate) { alert('Not enough coins to exchange'); return; }
      const maxGems = Math.floor(this.user.coins / rate);
      const want = prompt(`Enter gems to buy (max ${maxGems}):`, '1');
      const n = parseInt(want, 10);
      if (!n || n < 1 || n > maxGems) return;
      const cost = n * rate;
      this.user.coins -= cost;
      this.user.gems += n;
      this.$emit('exchange', { gems: n, cost });
    }
  }
};
</script>

<style scoped>
.comp-items { border-radius: 8px; }
.card { background: #fff; border-radius: 8px; }
.icon-sm { width: 48px; height: 48px; }
</style>