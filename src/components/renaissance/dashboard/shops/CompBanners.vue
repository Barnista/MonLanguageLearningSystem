<template>
  <div class="comp-banners bg-light p-3">
    <div class="d-flex justify-content-between align-items-center">
      <h3 class="mb-0">Gems Gacha</h3>
      <div class="text-muted small">Use <strong>Gems</strong> to pull for rewards</div>
    </div>

    <div class="mt-3 card p-3">
      <div class="d-flex align-items-center justify-content-between">
        <div>
          <div class="small text-muted">Gems</div>
          <div class="h4 mb-0">{{ user.gems }}</div>
        </div>

        <div class="text-right">
          <div class="small text-muted">Coins</div>
          <div class="h4 mb-0">{{ user.coins }}</div>
        </div>

        <div>
          <div class="small text-muted">5★ pity</div>
          <div class="h5 mb-0">{{ pity5 }}/90</div>
        </div>

        <div>
          <div class="small text-muted">4★ pity</div>
          <div class="h5 mb-0">{{ pity4 }}/10</div>
        </div>
      </div>

      <hr />

      <div class="d-flex align-items-center">
        <button class="btn btn-lg btn-primary me-3" :disabled="user.gems < costPerPull" @click="pull(1)">Pull x1 ({{ costPerPull }} Gems)</button>
        <button class="btn btn-lg btn-outline-primary" :disabled="user.gems < costPerTen" @click="pull(10)">Pull x10 ({{ costPerTen }} Gems)</button>
      </div>

      <div class="mt-3 small text-muted">Rates (approx): 5★ base 0.6% with pity at 90; 4★ base 5.1% pity at 10.</div>
    </div>

    <div class="mt-3">
      <h5>Recent Pulls</h5>
      <div class="d-flex flex-wrap">
        <div v-for="(p, idx) in recentPulls" :key="idx" class="pull-card p-2 me-2 mb-2" :class="'star-' + p.rarity">
          <div class="small text-muted">#{{ p.index }}</div>
          <div class="font-weight-bold">{{ p.rarity }}★</div>
          <div class="small">{{ p.item }}</div>
        </div>
      </div>
    </div>

    <div class="mt-3 card p-3">
      <h5 class="mb-2">Inventory</h5>
      <div>Coins: <strong>{{ user.coins }}</strong></div>
      <div class="small text-muted">Five-star package = 1,600 coins; Four-star = 800; Three-star = 80</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CompBanners',
  data() {
    return {
      costPerPull: 160,
      costPerTen: 1600,
      // simple user mock
      user: {
        gems: 2000,
        coins: 500
      },
      // pity counters
      pity5: 0,
      pity4: 0,
      recentPulls: [] // latest first
    };
  },
  methods: {
    // draw logic approximating Genshin pity system
    pull(count = 1) {
      const totalCost = count === 10 ? this.costPerTen : this.costPerPull * count;
      if (this.user.gems < totalCost) {
        alert('Not enough Gems');
        return;
      }
      this.user.gems -= totalCost;

      const results = [];
      for (let i = 0; i < count; i++) {
        const res = this.drawOne();
        results.push(res);
        this.applyReward(res);
      }

      // guarantee rule: ensure at least one 4★ in a 10-pull
      if (count === 10 && !results.some(r => r.rarity >= 4)) {
        // replace a random result with a forced 4★
        const idx = Math.floor(Math.random() * 10);
        const forced = this.forceFourStar();
        // roll back reward of replaced
        this.rollbackReward(results[idx]);
        results[idx] = forced;
        this.applyReward(forced);
      }

      // push to recent pulls (show latest first), keep limited size
      for (let i = results.length - 1; i >= 0; i--) {
        const r = results[i];
        this.recentPulls.unshift({ index: this.recentPulls.length + 1, ...r });
      }
      if (this.recentPulls.length > 50) this.recentPulls.splice(50);
    },
    // draw a single pull taking pity into account
    drawOne() {
      // Calculate chance for 5★
      const base5 = 0.006; // 0.6%
      const softPityStart = 75;
      let chance5 = base5;
      if (this.pity5 >= softPityStart) {
        // simple linear increase to guarantee at 90
        const steps = 90 - softPityStart; // 15
        const extra = (this.pity5 - softPityStart + 1) / steps * (1 - base5);
        chance5 = Math.min(1, base5 + extra);
      }
      // If pity reaches 89 (0-based) next is guaranteed 5★ at pity 90
      if (this.pity5 >= 89) {
        chance5 = 1;
      }

      // base 4★ chance
      const base4 = 0.051; // 5.1%
      let chance4 = base4;
      if (this.pity4 >= 9) chance4 = 1; // guarantee at 10

      const roll = Math.random();
      if (roll < chance5) {
        // 5★ obtained
        this.pity5 = 0;
        this.pity4 = 0; // resets 4★ pity as well
        return this.makeReward(5);
      }

      // if didn't get 5★, check 4★
      if (roll < chance5 + chance4) {
        this.pity5++;
        this.pity4 = 0;
        return this.makeReward(4);
      }

      // 3★
      this.pity5++;
      this.pity4++;
      return this.makeReward(3);
    },
    // force a 4★ pull used for 10-pull guarantee
    forceFourStar() {
      this.pity5++;
      this.pity4 = 0;
      return this.makeReward(4);
    },
    makeReward(star) {
      if (star === 5) return { rarity: 5, item: '5★ Coin Pack (1,600)' };
      if (star === 4) return { rarity: 4, item: '4★ Coin Pack (800)' };
      return { rarity: 3, item: '3★ Coin Pack (80)' };
    },
    applyReward(r) {
      if (!r) return;
      if (r.rarity === 5) this.user.coins += 1600;
      if (r.rarity === 4) this.user.coins += 800;
      if (r.rarity === 3) this.user.coins += 80;
    },
    rollbackReward(r) {
      if (!r) return;
      if (r.rarity === 5) this.user.coins -= 1600;
      if (r.rarity === 4) this.user.coins -= 800;
      if (r.rarity === 3) this.user.coins -= 80;
    }
  }
};
</script>

<style scoped>
.comp-banners {
  border-radius: 8px;
}
.card {
  background: #fff;
  border-radius: 8px;
}
.pull-card {
  width: 120px;
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);
}
.pull-card.star-5 { border-left: 6px solid #f4b400; background: linear-gradient(180deg, #fffaf0, #fff6e6); }
.pull-card.star-4 { border-left: 6px solid #c0c0c0; background: linear-gradient(180deg, #f7f8fb, #f2f3f7); }
.pull-card.star-3 { border-left: 6px solid #dcdcdc; background: #fff; }
</style>