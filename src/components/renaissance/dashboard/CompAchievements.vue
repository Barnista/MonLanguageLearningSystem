<template>
  <div class="comp-achievements bg-light p-3">
    <div class="d-flex justify-content-between align-items-center">
      <h3 class="mb-0">Achievements</h3>
      <div class="small text-muted">{{ earnedCount }} / {{ achievementsAvailable.length }} earned</div>
    </div>

    <div class="mt-3">
      <div class="row">
        <div v-for="ach in mergedAchievements" :key="ach.id" class="col-12 col-lg-6 mb-3">
          <div :class="['achievement-card p-3', { unlocked: ach.unlocked }]">
            <div class="d-flex align-items-start">
              <img :src="ach.badge" class="badge-sm me-3" />
              <div class="flex-grow-1">
                <div class="d-flex justify-content-between align-items-start">
                  <div>
                    <div class="font-weight-bold">{{ ach.title }}</div>
                    <div class="small text-muted">{{ ach.category }}</div>
                  </div>
                  <div class="text-right">
                    <div v-if="ach.unlocked" class="small text-success font-weight-bold">Unlocked</div>
                    <div v-else class="small text-muted">Locked</div>
                    <div class="small text-muted">{{ ach.points }} pts</div>
                  </div>
                </div>

                <div class="mt-2 small text-muted">{{ ach.description }}</div>

                <div class="mt-3 d-flex justify-content-between align-items-center">
                  <div class="small text-muted">{{ ach.condition }}</div>
                  <div>
                    <button v-if="!ach.unlocked" class="btn btn-sm btn-outline-primary" @click="unlock(ach.id)">Mark earned</button>
                    <div v-else class="small text-muted">{{ formatDate(ach.unlockedAt) }}</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="mergedAchievements.length === 0" class="text-muted text-center mt-3">No achievements available.</div>
    </div>
  </div>
</template>

<script>
import badge1 from '@/assets/badges/badge0001.svg';
import badge2 from '@/assets/badges/badge0002.svg';
import avatar1 from '@/assets/avatars/avatar_hongsa_0001.svg';

export default {
  name: 'CompAchievements',
  props: { lang: { type: String, default: 'en' } },
  data() {
    return {
      // All achievements available on the platform
      achievementsAvailable: [
        { id: 'ach1', title: 'First Quest', description: 'Complete your first quest.', points: 50, category: 'Quests', condition: 'Complete 1 quest', badge: badge1 },
        { id: 'ach2', title: 'Event Champion', description: 'Participate in 3 events.', points: 150, category: 'Events', condition: 'Participate in 3 events', badge: badge2 },
        { id: 'ach3', title: 'Community Helper', description: 'Help other learners.', points: 100, category: 'Community', condition: 'Make 5 helpful posts', badge: badge1 },
        { id: 'ach4', title: 'Daily Streak', description: 'Maintain a 7-day practice streak.', points: 200, category: 'Practice', condition: '7 consecutive days', badge: badge2 }
      ],

      // The current user's unlocked achievements (sample)
      user: {
        id: 42,
        name: 'Thin Thin',
        avatar: avatar1,
        achievements: [
          { id: 'ach1', unlockedAt: new Date('2024-09-01') },
          { id: 'ach3', unlockedAt: new Date('2024-10-21') }
        ]
      }
    };
  },
  computed: {
    mergedAchievements() {
      // merge available achievements with user's unlocked status
      return this.achievementsAvailable.map(a => {
        const found = this.user.achievements.find(u => u.id === a.id);
        return {
          ...a,
          unlocked: !!found,
          unlockedAt: found ? found.unlockedAt : null
        };
      });
    },
    earnedCount() {
      return this.user.achievements.length;
    }
  },
  methods: {
    unlock(id) {
      // demo helper to mark an achievement as unlocked
      if (this.user.achievements.find(a => a.id === id)) return;
      const now = new Date();
      this.user.achievements.push({ id, unlockedAt: now });
      this.$emit('achievementUnlocked', { id, unlockedAt: now });
    },
    formatDate(d) {
      if (!d) return '';
      return new Date(d).toLocaleDateString();
    }
  }
};
</script>

<style scoped>
.comp-achievements {
  border-radius: 8px;
}
.achievement-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);
  min-height: 120px;
  transition: transform .12s ease, box-shadow .12s ease;
}
.achievement-card.unlocked {
  border-left: 6px solid #28a745;
  background: linear-gradient(180deg, #f6fffa, #f0fff6);
}
.achievement-card:hover { transform: translateY(-2px); box-shadow: 0 4px 8px rgba(0,0,0,0.08); }
.badge-sm { width: 64px; height: 64px; }
</style>