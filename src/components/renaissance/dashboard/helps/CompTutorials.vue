<template>
  <div class="comp-tutorials bg-light p-3">
    <div class="d-flex justify-content-between align-items-center">
      <h3 class="mb-0">Tutorials</h3>
      <div class="small text-muted">Complete tutorials to earn rewards and unlock features</div>
    </div>

    <div class="mt-3 row">
      <div class="col-md-4">
        <div class="list-group">
          <button
            v-for="t in tutorials"
            :key="t.id"
            @click="selectTutorial(t.id)"
            :class="['list-group-item list-group-item-action d-flex justify-content-between align-items-center', { active: selectedTutorial && selectedTutorial.id === t.id }]">
            <div>
              <div class="font-weight-bold">{{ t.title }}</div>
              <div class="small text-muted">{{ t.description }}</div>
            </div>
            <div class="text-right small">
              <div>{{ tutorialProgress(t) }} / {{ t.sections.length }}</div>
            </div>
          </button>
        </div>

        <div class="mt-3 card p-3">
          <div class="small text-muted">Your progress</div>
          <div class="mt-2">Completed: <strong>{{ completedCount }}</strong></div>
          <div class="mt-1">Rewards claimed: <strong>{{ claimedCount }}</strong></div>
          <hr />
          <button class="btn btn-sm btn-outline-secondary" @click="resetAll">Reset demo</button>
        </div>
      </div>

      <div class="col-md-8">
        <div v-if="!selectedTutorial" class="text-muted">Select a tutorial to view</div>

        <div v-else class="card p-3">
          <div class="d-flex justify-content-between align-items-start">
            <div>
              <div class="h4 mb-1">{{ selectedTutorial.title }}</div>
              <div class="small text-muted">{{ selectedTutorial.description }}</div>
            </div>
            <div class="text-right">
              <div class="small text-muted">Reward: <strong>{{ renderReward(selectedTutorial.reward) }}</strong></div>
              <div class="small text-muted">Status: <strong>{{ isTutorialCompleted(selectedTutorial) ? 'Completed' : 'In progress' }}</strong></div>
            </div>
          </div>

          <div class="mt-3">
            <div v-for="(s, idx) in selectedTutorial.sections" :key="s.id" class="section p-3 mb-2" :class="{ done: isSectionDone(selectedTutorial, s) }">
              <div class="d-flex justify-content-between align-items-start">
                <div>
                  <div class="font-weight-bold">{{ idx + 1 }}. {{ s.title }}</div>
                  <div class="small text-muted">{{ s.subtitle }}</div>
                </div>
                <div>
                  <button v-if="!isSectionDone(selectedTutorial, s)" class="btn btn-sm btn-outline-primary" @click="completeSection(selectedTutorial, s)">Mark done</button>
                  <div v-else class="small text-success">Done</div>
                </div>
              </div>

              <div class="mt-2">{{ s.content }}</div>
            </div>
          </div>

          <div class="mt-3 d-flex justify-content-between align-items-center">
            <div>
              <div class="small text-muted">Progress</div>
              <div class="progress" style="height:10px; width:240px;">
                <div class="progress-bar" role="progressbar" :style="{ width: (tutorialProgress(selectedTutorial)/selectedTutorial.sections.length*100) + '%' }"></div>
              </div>
            </div>

            <div class="text-right">
              <button v-if="isTutorialCompleted(selectedTutorial) && !isRewardClaimed(selectedTutorial)" class="btn btn-sm btn-success me-2" @click="claimTutorialReward(selectedTutorial)">Claim {{ renderReward(selectedTutorial.reward) }}</button>
              <div v-else-if="isRewardClaimed(selectedTutorial)" class="small text-muted">Reward claimed</div>
              <button v-else class="btn btn-sm btn-outline-secondary" @click="completeAllSections(selectedTutorial)">Auto-complete (demo)</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompTutorials',
  data() {
    return {
      tutorials: [
        {
          id: 't1',
          title: 'Getting Started',
          description: 'Basics of the app, navigation and first steps',
          reward: { type: 'coins', amount: 200 },
          sections: [
            { id: 's1', title: 'Welcome', subtitle: 'Intro to Mon', content: 'Welcome to Mon — this tutorial will guide you through the basics.' },
            { id: 's2', title: 'Profile & Avatar', subtitle: 'Set up your profile', content: 'Update your name, avatar and preferences in the profile page.' },
            { id: 's3', title: 'Quests & Events', subtitle: 'Daily rewards', content: 'Learn how to complete quests and join events to earn rewards.' }
          ]
        },
        {
          id: 't2',
          title: 'Gems & Gacha',
          description: 'Using Gems to pull in the banners and pity mechanics',
          reward: { type: 'gems', amount: 20 },
          sections: [
            { id: 's1', title: 'Gems Overview', subtitle: 'What are Gems?', content: 'Gems are the premium currency used to pull rewards in banners.' },
            { id: 's2', title: 'Pull Types', subtitle: 'Single & Ten pulls', content: 'Single pulls cost 160 Gems and ten-pulls cost 1600 Gems.' },
            { id: 's3', title: 'Pity System', subtitle: 'How pity works', content: 'Pity increases chances until a guaranteed higher rarity appears.' }
          ]
        },
        {
          id: 't3',
          title: 'Community & Achievements',
          description: 'How to participate and earn achievements',
          reward: { type: 'score', amount: 100 },
          sections: [
            { id: 's1', title: 'Forums', subtitle: 'Join the conversation', content: 'Share progress and help others in community.' },
            { id: 's2', title: 'Achievements', subtitle: 'Earn badges', content: 'Complete tasks to unlock achievements and badges.' }
          ]
        }
      ],

      // demo user state
      user: {
        id: 1,
        name: 'Thin Thin',
        coins: 500,
        gems: 200,
        score: 1200,
        completedTutorials: [ /* {id, completedAt, rewardClaimed} */ ],
        tutorialProgress: { /* tutorialId: { sectionId: true } */ }
      },

      selectedId: null
    };
  },
  computed: {
    selectedTutorial() {
      return this.tutorials.find(t => t.id === this.selectedId) || this.tutorials[0] || null;
    },
    completedCount() {
      return this.user.completedTutorials.length;
    },
    claimedCount() {
      return this.user.completedTutorials.filter(c => c.rewardClaimed).length;
    }
  },
  methods: {
    selectTutorial(id) { this.selectedId = id; },
    tutorialProgress(t) {
      const prog = this.user.tutorialProgress[t.id] || {};
      return Object.keys(prog).filter(k => prog[k]).length;
    },
    isSectionDone(t, s) {
      return !!(this.user.tutorialProgress[t.id] && this.user.tutorialProgress[t.id][s.id]);
    },
    completeSection(t, s) {
      if (!this.user.tutorialProgress[t.id]) this.$set(this.user.tutorialProgress, t.id, {});
      this.$set(this.user.tutorialProgress[t.id], s.id, true);
      // if all sections done mark tutorial completed
      if (this.tutorialProgress(t) === t.sections.length) this.completeTutorial(t);
    },
    isTutorialCompleted(t) {
      return !!this.user.completedTutorials.find(c => c.id === t.id);
    },
    completeTutorial(t) {
      if (this.isTutorialCompleted(t)) return;
      this.user.completedTutorials.push({ id: t.id, completedAt: new Date(), rewardClaimed: false });
      this.$emit('tutorialCompleted', { id: t.id });
    },
    isRewardClaimed(t) {
      const c = this.user.completedTutorials.find(c => c.id === t.id);
      return c ? !!c.rewardClaimed : false;
    },
    claimTutorialReward(t) {
      const c = this.user.completedTutorials.find(c => c.id === t.id);
      if (!c || c.rewardClaimed) return;
      const r = t.reward;
      if (r.type === 'coins') this.user.coins += r.amount;
      if (r.type === 'gems') this.user.gems += r.amount;
      if (r.type === 'score') this.user.score += r.amount;
      c.rewardClaimed = true;
      c.claimedAt = new Date();
      this.$emit('rewardClaimed', { tutorialId: t.id, reward: r });
    },
    renderReward(r) {
      if (!r) return '';
      if (r.type === 'coins') return r.amount + ' coins';
      if (r.type === 'gems') return r.amount + ' gems';
      if (r.type === 'score') return r.amount + ' score';
      return JSON.stringify(r);
    },
    completeAllSections(t) {
      t.sections.forEach(s => this.completeSection(t, s));
    },
    resetAll() {
      this.user.completedTutorials = [];
      this.user.tutorialProgress = {};
      this.user.coins = 500; this.user.gems = 200; this.user.score = 1200;
    }
  }
};
</script>

<style scoped>
.comp-tutorials { border-radius: 8px; }
.section { background: #fff; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }
.section.done { background: linear-gradient(180deg,#f6fffa,#f0fff6); }
</style>