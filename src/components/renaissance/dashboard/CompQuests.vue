<template>
  <div class="comp-quests bg-light p-3">
    <div class="d-flex justify-content-between align-items-center">
      <h3 class="mb-0"><i class="bi bi-calendar-check me-2"></i> Weekly Quests</h3>
      <div class="small text-muted text-end">
        <div>
          <strong>{{ completedCount }}</strong> / {{ quests.length }} completed
        </div>
      </div>
    </div>

    <div class="mt-3 d-flex align-items-center mb-3">
      <div class="me-3">
        <button class="btn btn-sm btn-success me-2" @click="claimAll" :disabled="!hasClaimable">Claim all</button>
        <button class="btn btn-sm btn-outline-secondary me-2" @click="completeAll">Complete all (demo)</button>
        <button class="btn btn-sm btn-outline-danger" @click="resetDaily">Reset</button>
      </div>

      <div class="ml-auto text-right small text-muted">
        Coins: <strong>{{ user.coins }}</strong> • Gems: <strong>{{ user.gems }}</strong> • Score: <strong>{{ user.score
          }}</strong>
      </div>
    </div>

    <ul class="list-group">
      <li v-for="q in quests" :key="q.id" class="list-group-item d-flex align-items-center"
        :class="{ completed: q.completed, claimed: q.claimed }">
        <div class="flex-grow-1">
          <div class="d-flex justify-content-between align-items-start">
            <div>
              <div class="font-weight-bold">{{ q.title }}</div>
              <div class="small text-muted">{{ q.description }}</div>
            </div>
            <div class="text-right small">
              <div v-if="q.claimed" class="text-success">Reward claimed</div>
              <div v-else-if="q.completed" class="text-primary">Ready to claim</div>
              <div v-else class="text-muted">Incomplete</div>
            </div>
          </div>
          <div class="mt-2 small">
            Reward: <strong>{{ renderReward(q.reward) }}</strong>
          </div>
        </div>

        <div class="ms-3 d-flex flex-column align-items-end">
          <button v-if="!q.completed" class="btn btn-sm btn-outline-primary mb-2" @click="complete(q)">Complete</button>
          <button v-else-if="!q.claimed" class="btn btn-sm btn-success mb-2" @click="claim(q)">Claim</button>
          <button class="btn btn-sm btn-outline-danger" @click="resetQuest(q)">Reset</button>
        </div>
      </li>
    </ul>

    <div v-if="quests.length === 0" class="text-muted text-center mt-3">No daily quests.</div>
  </div>
</template>

<script>
import avatar1 from '@/assets/avatars/avatar_hongsa_0001.svg';
export default {
  name: 'CompQuests',
  data() {
    return {
      user: { coins: 500, gems: 200, score: 1200, avatar: avatar1 },
      quests: [
        { id: 'q1', title: 'Complete a lesson', description: 'Finish any lesson today.', completed: false, claimed: false, reward: { type: 'coins', amount: 100 } },
        { id: 'q2', title: 'Attend an event', description: 'Join a live event or practice session.', completed: false, claimed: false, reward: { type: 'gems', amount: 10 } },
        { id: 'q3', title: 'Practice streak', description: 'Practice for at least 10 minutes.', completed: false, claimed: false, reward: { type: 'score', amount: 50 } },
        { id: 'q4', title: 'Share progress', description: 'Share your progress in community.', completed: false, claimed: false, reward: { type: 'coins', amount: 50 } },
        { id: 'q5', title: 'Daily challenge', description: 'Complete today\'s challenge.', completed: false, claimed: false, reward: { type: 'gems', amount: 5 } }
      ]
    };
  },
  computed: {
    completedCount() {
      return this.quests.filter(q => q.completed).length;
    },
    hasClaimable() {
      return this.quests.some(q => q.completed && !q.claimed);
    }
  },
  methods: {
    renderReward(r) {
      if (!r) return '';
      if (r.type === 'coins') return r.amount + ' coins';
      if (r.type === 'gems') return r.amount + ' gems';
      if (r.type === 'score') return r.amount + ' score';
      return JSON.stringify(r);
    },
    complete(q) {
      q.completed = true;
      this.$emit('questCompleted', q);
    },
    claim(q) {
      if (!q.completed || q.claimed) return;
      const r = q.reward;
      if (r.type === 'coins') this.user.coins += r.amount;
      if (r.type === 'gems') this.user.gems += r.amount;
      if (r.type === 'score') this.user.score += r.amount;
      q.claimed = true;
      this.$emit('rewardClaimed', { questId: q.id, reward: r });
    },
    claimAll() {
      this.quests.filter(q => q.completed && !q.claimed).forEach(q => this.claim(q));
    },
    completeAll() {
      this.quests.forEach(q => { q.completed = true; });
    },
    resetQuest(q) {
      q.completed = false;
      q.claimed = false;
    },
    resetDaily() {
      this.quests.forEach(q => { q.completed = false; q.claimed = false; });
    }
  }
};
</script>

<style scoped>
.comp-quests {
  border-radius: 8px;
}

.list-group-item.completed {
  background: #f7fff4;
}

.list-group-item.claimed {
  opacity: 0.7;
}
</style>