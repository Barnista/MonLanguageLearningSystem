<template>
  <div class="comp-mailbox bg-light p-3">
    <div class="d-flex justify-content-between align-items-center">
      <h3 class="mb-0"><i class="bi bi-envelope"></i> Mailbox</h3>
      <div>
      </div>
    </div>

    <div class="mt-3" style="min-height: 600px;">
      <div class="d-flex mb-2">
        <button class="btn btn-sm btn-success me-2" @click="claimAllRewards" :disabled="!hasUnclaimedRewards">Claim all
          rewards</button>
      </div>

      <ul class="list-group h-100">
        <li v-for="mail in filteredMails" :key="mail.id" class="list-group-item d-flex align-items-start shadow-sm"
          :class="{ unread: !mail.read, claimed: mail.claimed }">
          <div class="flex-grow-1 py-2">
            <div class="d-flex justify-content-between">
              <div>
                <strong>{{ mail.localization[lang] ? mail.localization[lang].title : mail.title }}</strong>
                <div>
                  <span class="text-muted small">
                    {{ formatDate(mail.date) }}
                  </span>
                  <i class="text-muted small ms-1">by {{ mail.author || 'No Reply' }}</i>
                </div>
              </div>
            </div>

            <div class="mt-2" v-if="!mail.open">
              <div class="small text-muted d-flex align-items-center justify-content-between">
                <span>{{ shortText(lang != 'en' ? mail.localization[lang].content : mail.content) }}</span>
                <button class="btn btn-sm btn-success" @click="mail.open = true"><i class="bi bi-gem"></i> Read
                  more</button>
              </div>
            </div>

            <div class="mt-2" v-else>
              <div class="small" v-html="(lang != 'en') ? mail.localization[lang].body : mail.body"></div>
              <div class="mt-3">
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
                    <button class="btn btn-sm btn-outline-secondary shadow-sm" @click="mail.open = false"><i
                        class="bi bi-chevron-bar-up"></i> Minimize</button>
                    <button v-if="!mail.claimed" class="btn btn-sm btn-success fw-bold shadow-sm"
                      @click="claimRewards(mail)" :disabled="isClaiming">
                      <span v-if="!isClaiming"><i class="bi bi-gem"></i> Claim Rewards</span>
                      <span v-else>
                        <div class="spinner-border spinner-border-sm text-light" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div> Claiming...
                      </span>
                    </button>
                    <button v-else class="btn btn-sm btn-success fw-bold shadow-sm" disabled="true">
                      <i class="bi bi-check2-all"></i> Rewards Claimed
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
import { getAvatarById } from '@/assets/data/avatars/avatars';
import CompFiveStars from '@/components/renaissance/misc/stars/CompFiveStars.vue';
import CompFourStars from '@/components/renaissance/misc/stars/CompFourStars.vue';
import { getAuth } from 'firebase/auth';
import FirebaseUser from '@/services/firebase/user';

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
      user: null,
      mails: [],
      isLoading: false,
      isError: false,
      errorMsg: null,
      isClaiming: false
    };
  },
  computed: {
    filteredMails() {
      //if (this.filter === 'all') return this.mails.slice().sort((a, b) => b.date - a.date);
      //if (this.filter === 'unread') return this.mails.filter(m => !m.read).sort((a, b) => b.date - a.date);
      //if (this.filter === 'rewards') return this.mails.filter(m => m.hasRewards).sort((a, b) => b.date - a.date);
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
  created() {
    const auth = getAuth();
    this.user = auth.currentUser;
    console.log('Current user:', this.user);
  },
  mounted() {
    // Load mailbox from Firebase
    if (this.user && this.user.uid) {
      this.isLoading = true;
      FirebaseUser.getMailbox(this.user.uid).then((querySnapshot) => {
        this.mails = [];
        console.log('Count', querySnapshot.size);
        querySnapshot.forEach((doc) => {
          const mailData = doc.data();
          mailData.id = doc.id;
          this.mails.push(mailData);
          console.log('Mailbox loaded:', mailData);
        });
        this.isLoading = false;
      }).catch((error) => {
        this.isLoading = false;
        this.isError = true;
        this.errorMsg = error.message;
        console.error('Error loading mailbox:', error);
      });
    }
  },
  methods: {
    formatDate(d) {
      return (d.toDate()).toLocaleDateString();
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
    async claimRewards(mail) {
      console.log('Claiming rewards for mail:', mail);
      this.isClaiming = true;
      try {
        await FirebaseUser.depositRewards(this.user.uid, mail.rewards);
        mail = await FirebaseUser.markMailAsClaimed(this.user.uid, mail);
        this.isClaiming = false;
        console.log('Rewards claimed for mail:', mail);
        alert('Rewards claimed successfully!');
      } catch (error) {
        this.isClaiming = false;
        console.error('Error depositing rewards:', error);
      }
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