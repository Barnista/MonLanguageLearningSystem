<template>
  <div class="comp-mailbox bg-light p-3">
    <div class="d-flex justify-content-between align-items-center">
      <h3 class="mb-0"><i class="bi bi-envelope"></i> Mailbox</h3>
      <div>
      </div>
    </div>

    <div class="mt-3">
      <div class="d-flex mb-2">
        <button class="btn btn-sm btn-success me-2" @click="claimAllRewards" :disabled="!hasUnclaimedRewards">Claim all
          rewards</button>
      </div>

      <ul class="list-group">
        <li v-for="mail in filteredMails" :key="mail.id" class="list-group-item d-flex align-items-start"
          :class="{ unread: !mail.read, claimed: mail.claimed }">

          <div class="flex-grow-1">
            <div class="d-flex justify-content-between">
              <div>
                <strong>{{ mail.localization[lang] ? mail.localization[lang].title : mail.title }}</strong>
                <div>
                  <span class="text-muted small">
                    {{ formatDate(mail.date) }}
                  </span>
                  <i class="text-muted small ms-1">by Admin</i>
                </div>
              </div>
            </div>

            <div class="mt-2" v-if="!mail.open">
              <div class="small text-muted d-flex align-items-center justify-content-between">
                <span>{{ shortText(mail.body) }}</span>
                <button class="btn btn-sm btn-success" @click="mail.open = true">Read more</button>
              </div>
            </div>

            <div class="mt-2" v-else>
              <div class="small" v-html="mail.body"></div>
              <div class="mt-3" v-if="mail.hasRewards">
                <div class="text-muted me-2">Rewards:</div>
                <div class="d-flex flex-wrap align-items-top justify-content-start mb-2">
                  <div v-for="(reward, idx) in mail.rewards" :key="idx" class="mb-2">
                    <div v-if="reward.type == 'score'"
                      class="text-center rounded border pt-2 pb-1 px-4 me-1 shadow-sm text-success">
                      <i class="fs-3 d-block bi bi-trophy"></i>
                      <span class="fs-5">{{ reward.value.toLocaleString() }}</span>
                    </div>
                    <div v-if="reward.type == 'coin'"
                      class="text-center rounded border pt-2 pb-1 px-3 me-1 shadow-sm text-primary">
                      <i class="fs-3 d-block bi bi-coin"></i>
                      <span class="fs-5">{{ reward.value.toLocaleString() }}</span>
                    </div>
                    <div v-if="reward.type == 'gem'"
                      class="text-center rounded border pt-2 pb-1 px-4 me-1 shadow-sm text-primary">
                      <i class="fs-3 d-block bi bi-gem"></i>
                      <span class="fs-5">{{ reward.value.toLocaleString() }}</span>
                    </div>
                    <div v-if="reward.type == 'exp'"
                      class="text-center rounded border pt-2 pb-1 px-3 me-1 shadow-sm text-success">
                      <i class="fs-3 d-block bi bi-chevron-double-up"></i>
                      <span class="fs-5">EXP {{ reward.value.toLocaleString() }}</span>
                    </div>
                    <div v-if="reward.type == 'avatar'"
                      class="text-center rounded border pt-2 pb-1 px-3 me-1 shadow-sm text-primary">
                      <img :src="getAvatarById(reward.value).src" class="avatar-img">
                      <div class="mt-1">
                        <CompFiveStars v-if="getAvatarById(reward.value).stars == 5" class="small" />
                        <CompFourStars v-if="getAvatarById(reward.value).stars == 4" class="small" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-end mb-2">
                  <div class="btn-group">
                    <button class="btn btn-sm btn-outline-secondary shadow-sm"
                      @click="mail.open = false">Minimize</button>
                    <button class="btn btn-sm btn-success shadow-sm" :disabled="mail.claimed"
                      @click="claimReward(mail)">
                      Claim Rewards
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </li>
      </ul>

      <div v-if="filteredMails.length === 0" class="text-center text-muted mt-3">No messages found.</div>
    </div>

  </div>
</template>

<script>
import avatar1 from '@/assets/avatars/avatar_hongsa_0001.svg';
import avatar2 from '@/assets/avatars/avatar_hongsa_0002.svg';
import { getAvatarById } from '@/data/avatars/avatars';
import CompFiveStars from '@/components/renaissance/misc/stars/CompFiveStars.vue';
import CompFourStars from '@/components/renaissance/misc/stars/CompFourStars.vue';

export default {
  name: 'CompMailbox',
  components: {
    CompFiveStars,
    CompFourStars
  },
  props: { lang: { type: String, default: 'en' } },
  data() {
    return {
      getAvatarById: getAvatarById,
      filter: 'all',
      user: {
        id: 1,
        name: 'Thin Thin',
        coins: 120,
        inventory: [
          { id: 'i1', name: 'Gold Coin', qty: 120, icon: avatar2 }
        ]
      },
      mails: [
        {
          id: 'm1',
          title: 'Welcome new user !!!',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in eleifend augue. Quisque molestie diam lorem, et venenatis felis malesuada et. Aenean augue turpis, molestie in velit vitae, faucibus congue ex. Nunc lacinia consectetur ex, vitae molestie mi tincidunt eu. Etiam at nunc vulputate, porttitor sapien eleifend, lacinia turpis. Nam hendrerit feugiat pretium. Nullam sit amet felis id sem gravida sagittis. Curabitur ullamcorper ipsum mauris, in auctor nisi facilisis eu. Vestibulum in luctus sem. Integer ullamcorper aliquam neque eget aliquet. Donec in felis efficitur, posuere augue congue, suscipit ligula. Suspendisse potenti.<br><br>Cras porta, nulla id semper consequat, odio nulla gravida felis, ac vestibulum nibh libero eu enim. Proin ultrices, ligula sit amet efficitur sodales, justo dolor blandit tortor, vitae iaculis massa lacus ornare est. Maecenas eu nisl eu risus eleifend commodo sit amet elementum magna. Morbi vitae mi nunc. Donec suscipit metus sed nisi eleifend ultrices. Nam pellentesque mattis dui at iaculis. Nam fermentum nulla eget risus vestibulum, non vehicula urna viverra. Morbi mattis tempus ullamcorper. Nulla tristique, nunc sit amet gravida blandit, ante nulla consequat urna, condimentum efficitur dui urna condimentum justo.',
          localization: {
            th: {
              lang: 'tha',
              title: 'ยินดีต้อนรับและสวัสดีปีใหม่ 2026 ครับ !!!',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in eleifend augue. Quisque molestie diam lorem, et venenatis felis malesuada et. Aenean augue turpis, molestie in velit vitae, faucibus congue ex. Nunc lacinia consectetur ex, vitae molestie mi tincidunt eu. Etiam at nunc vulputate, porttitor sapien eleifend, lacinia turpis. Nam hendrerit feugiat pretium. Nullam sit amet felis id sem gravida sagittis. Curabitur ullamcorper ipsum mauris, in auctor nisi facilisis eu. Vestibulum in luctus sem. Integer ullamcorper aliquam neque eget aliquet. Donec in felis efficitur, posuere augue congue, suscipit ligula. Suspendisse potenti.<br><br>Cras porta, nulla id semper consequat, odio nulla gravida felis, ac vestibulum nibh libero eu enim. Proin ultrices, ligula sit amet efficitur sodales, justo dolor blandit tortor, vitae iaculis massa lacus ornare est. Maecenas eu nisl eu risus eleifend commodo sit amet elementum magna. Morbi vitae mi nunc. Donec suscipit metus sed nisi eleifend ultrices. Nam pellentesque mattis dui at iaculis. Nam fermentum nulla eget risus vestibulum, non vehicula urna viverra. Morbi mattis tempus ullamcorper. Nulla tristique, nunc sit amet gravida blandit, ante nulla consequat urna, condimentum efficitur dui urna condimentum justo.',
            },
            my: {
              lang: 'mya',
              title: '၂၀၂၆ ခုနှစ် နှစ်သစ်ကို ကြိုဆိုပါတယ်၊ ပျော်ရွှင်ပါစေ!!!',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in eleifend augue. Quisque molestie diam lorem, et venenatis felis malesuada et. Aenean augue turpis, molestie in velit vitae, faucibus congue ex. Nunc lacinia consectetur ex, vitae molestie mi tincidunt eu. Etiam at nunc vulputate, porttitor sapien eleifend, lacinia turpis. Nam hendrerit feugiat pretium. Nullam sit amet felis id sem gravida sagittis. Curabitur ullamcorper ipsum mauris, in auctor nisi facilisis eu. Vestibulum in luctus sem. Integer ullamcorper aliquam neque eget aliquet. Donec in felis efficitur, posuere augue congue, suscipit ligula. Suspendisse potenti.<br><br>Cras porta, nulla id semper consequat, odio nulla gravida felis, ac vestibulum nibh libero eu enim. Proin ultrices, ligula sit amet efficitur sodales, justo dolor blandit tortor, vitae iaculis massa lacus ornare est. Maecenas eu nisl eu risus eleifend commodo sit amet elementum magna. Morbi vitae mi nunc. Donec suscipit metus sed nisi eleifend ultrices. Nam pellentesque mattis dui at iaculis. Nam fermentum nulla eget risus vestibulum, non vehicula urna viverra. Morbi mattis tempus ullamcorper. Nulla tristique, nunc sit amet gravida blandit, ante nulla consequat urna, condimentum efficitur dui urna condimentum justo.',
            },
          },
          date: new Date('2026-01-01'),
          read: false,
          hasRewards: true,
          reward: { type: 'coins', amount: 50 },
          rewards: [
            { type: 'coin', value: 10000 },
            { type: 'gem', value: 20 },
            { type: 'score', value: 100 },
            { type: 'exp', value: 801 },
            { type: 'avatar', value: 'avatar_hongsa_0003' },
            { type: 'avatar', value: 'avatar_hongsa_0008' },
            { type: 'avatar', value: 'avatar_hongsa_0005' },
            { type: 'avatar', value: 'avatar_hongsa_0010' },
          ],
          claimed: false,
          open: false
        },
        {
          id: 'm2',
          title: 'Weekly Event',
          body: 'You participated and earned an item reward!',
          localization: {

          },
          date: new Date('2024-11-21'),
          read: false,
          hasRewards: true,
          reward: { type: 'item', item: { id: 'i2', name: 'Event Badge', qty: 1 } },
          rewards: [
            { type: 'coin', value: 1000 },
          ],
          claimed: false,
          open: false
        },
      ]
    };
  },
  computed: {
    filteredMails() {
      if (this.filter === 'all') return this.mails.slice().sort((a, b) => b.date - a.date);
      if (this.filter === 'unread') return this.mails.filter(m => !m.read).sort((a, b) => b.date - a.date);
      if (this.filter === 'rewards') return this.mails.filter(m => m.hasRewards).sort((a, b) => b.date - a.date);
      return this.mails;
    },
    hasUnread() {
      return this.mails.some(m => !m.read);
    },
    hasRead() {
      return this.mails.some(m => m.read);
    },
    hasUnclaimedRewards() {
      return this.mails.some(m => m.hasRewards && !m.claimed);
    }
  },
  methods: {
    formatDate(d) {
      return new Date(d).toLocaleDateString();
    },
    shortText(t) {
      if (!t) return '';
      return t.length > 80 ? t.slice(0, 80) + '...' : t;
    },
    toggleRead(mail) {
      mail.read = !mail.read;
    },
    deleteMail(id) {
      this.mails = this.mails.filter(m => m.id !== id);
    },
    deleteAllRead() {
      this.mails = this.mails.filter(m => !m.read);
    },
    markAllRead() {
      this.mails.forEach(m => m.read = true);
    },
    claimReward(mail) {
      if (!mail.hasRewards || mail.claimed) return;
      const r = mail.reward;
      if (r.type === 'coins') {
        this.user.coins += r.amount;
      } else if (r.type === 'item') {
        // add item to inventory (simple merge if same name)
        const existing = this.user.inventory.find(i => i.name === r.item.name);
        if (existing) existing.qty += r.item.qty || 1;
        else this.user.inventory.push({ id: r.item.id || 'it' + Date.now(), name: r.item.name, qty: r.item.qty || 1, icon: avatar1 });
      }
      mail.claimed = true;
      mail.read = true;
      this.$emit('rewardClaimed', { mailId: mail.id, reward: r });
    },
    claimAllRewards() {
      this.mails.filter(m => m.hasRewards && !m.claimed).forEach(m => this.claimReward(m));
    },
    renderReward(r) {
      if (!r) return '';
      if (r.type === 'coins') return r.amount + ' coins';
      if (r.type === 'item') return r.item.name + (r.item.qty && r.item.qty > 1 ? ' x' + r.item.qty : '');
      return JSON.stringify(r);
    }
  }
};
</script>

<style scoped>
.avatar-img {
  width: 44px;
  height: 44px;
  border: 1px solid gainsboro;
  border-radius: 50%;
}

.comp-mailbox {
  border-radius: 8px;
}

.list-group-item.unread {
  background: #fffef6;
}

.list-group-item.claimed {
  opacity: 0.8;
}
</style>