<template>
  <div class="comp-events bg-light p-3">
    <div class="d-flex justify-content-between align-items-center">
      <h3 class="mb-0">Events</h3>
      <div class="small text-muted">Participate to earn rewards and unlocks</div>
    </div>

    <div class="mt-3 d-flex justify-content-between align-items-center">
      <div>
        <button class="btn btn-sm btn-outline-secondary me-2" @click="claimAllAvailable" :disabled="!hasClaimable">Claim all rewards</button>
        <button class="btn btn-sm btn-outline-danger" @click="resetAll">Reset demo</button>
      </div>
      <div class="small text-muted">User: <strong>{{ user.name }}</strong> • Coins: <strong>{{ user.coins }}</strong> • Gems: <strong>{{ user.gems }}</strong> • Score: <strong>{{ user.score }}</strong></div>
    </div>

    <div class="mt-3">
      <div v-for="event in events" :key="event.id" class="card p-3 mb-3 event-card" :class="{ ended: isEnded(event) }">
        <div class="d-flex justify-content-between align-items-start">
          <div>
            <div class="h5 mb-1">{{ event.title }}</div>
            <div class="small text-muted">{{ event.description }}</div>
            <div class="small text-muted mt-1">Duration: {{ formatDate(event.startsAt) }} — {{ formatDate(event.endsAt) }}</div>
            <div class="small text-muted">Participants: {{ event.participants.length }}</div>
          </div>

          <div class="text-right">
            <div v-if="isJoined(event)" class="small text-success font-weight-bold">Joined</div>
            <div v-else class="small text-muted">Not joined</div>
            <div class="mt-2">
              <button v-if="!isJoined(event) && !isEnded(event)" class="btn btn-sm btn-primary" @click="joinEvent(event)">Join</button>
              <button v-else-if="isEnded(event)" class="btn btn-sm btn-outline-secondary" disabled>Event ended</button>
            </div>
          </div>
        </div>

        <div class="mt-3">
          <div v-for="task in event.tasks" :key="task.id" class="d-flex align-items-center py-2 task-row" :class="{complete: taskProgress(event, task) >= task.target}">
            <div class="flex-grow-1">
              <div class="font-weight-bold">{{ task.title }}</div>
              <div class="small text-muted">{{ task.description }}</div>
              <div class="small text-muted mt-1">Progress: {{ taskProgress(event, task) }} / {{ task.target }}</div>
              <div class="progress mt-1" style="height: 8px;">
                <div class="progress-bar" role="progressbar" :style="{width: Math.min(100, (taskProgress(event, task)/task.target)*100) + '%'}"></div>
              </div>
            </div>

            <div class="ms-3 text-right">
              <button v-if="!isTaskComplete(event, task) && isJoined(event) && !isEnded(event)" class="btn btn-sm btn-outline-primary mb-2" @click="participate(event, task)">Participate</button>
              <button v-else class="btn btn-sm btn-outline-secondary mb-2" disabled>{{ isTaskComplete(event, task) ? 'Completed' : 'Locked' }}</button>

              <button v-if="isTaskComplete(event, task) && !isTaskClaimed(event, task)" class="btn btn-sm btn-success" @click="claimTaskReward(event, task)">Claim {{ renderReward(task.reward) }}</button>
              <div v-else-if="isTaskClaimed(event, task)" class="small text-muted">Reward claimed</div>
            </div>
          </div>
        </div>

        <div class="mt-3 d-flex align-items-center">
          <div class="small text-muted">Event unlocks:</div>
          <div class="ms-2 d-flex flex-wrap">
            <div v-for="u in event.unlocks" :key="u.id" class="unlock p-2 me-2 mb-2" :class="{ unlocked: isUnlockUnlocked(event,u) }">
              <div class="small font-weight-bold">{{ u.title }}</div>
              <div class="small text-muted">{{ u.desc }}</div>
              <div class="small mt-1">{{ u.reward ? renderReward(u.reward) : '' }}</div>
              <div v-if="isUnlockUnlocked(event,u)" class="small text-success">Unlocked</div>
            </div>
          </div>
        </div>

      </div>

      <div v-if="events.length === 0" class="text-muted text-center mt-3">No active events</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompEvents',
  data() {
    const now = new Date();
    const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    const nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

    return {
      user: { id: 1, name: 'Thin Thin', coins: 500, gems: 200, score: 1200 },
      events: [
        {
          id: 'e1',
          title: 'Harvest Festival',
          description: 'Participate in community harvest tasks to earn coins and unlock bonuses.',
          startsAt: now,
          endsAt: nextWeek,
          participants: [],
          tasks: [
            { id: 't1', title: 'Collect 10 herbs', description: 'Collect herbs in minigame', target: 10, reward: { type: 'coins', amount: 200 }, claimed: [] },
            { id: 't2', title: 'Help community 3 times', description: 'Help other learners', target: 3, reward: { type: 'gems', amount: 10 }, claimed: [] }
          ],
          unlocks: [
            { id: 'u1', title: 'Festival Outfit', desc: 'A special avatar outfit', reward: { type: 'item', item: { id: 'it1', name: 'Festival Outfit', qty: 1 } }, unlockedBy: { taskId: 't1', count: 10 } }
          ]
        },
        {
          id: 'e2',
          title: 'Score Sprint',
          description: 'Reach score milestones during the event to claim rewards.',
          startsAt: now,
          endsAt: tomorrow,
          participants: [],
          tasks: [
            { id: 't3', title: 'Earn 200 score', description: 'Get +200 score in activities', target: 200, reward: { type: 'score', amount: 50 }, claimed: [] }
          ],
          unlocks: [
            { id: 'u2', title: 'Sprint Badge', desc: 'A shiny badge for sprint winners', reward: { type: 'item', item: { id: 'it2', name: 'Sprint Badge', qty: 1 } }, unlockedBy: { taskId: 't3', count: 200 } }
          ]
        }
      ]
    };
  },
  computed: {
    hasClaimable() {
      return this.events.some(e => e.tasks.some(t => this.isTaskComplete(e, t) && !this.isTaskClaimed(e, t)));
    }
  },
  methods: {
    formatDate(d) { return new Date(d).toLocaleDateString(); },
    isEnded(event) { return new Date() > new Date(event.endsAt); },
    isJoined(event) { return event.participants.includes(this.user.id); },
    joinEvent(event) { if (!this.isJoined(event) && !this.isEnded(event)) event.participants.push(this.user.id); },
    participate(event, task) {
      // simulate participation by increasing user's personal progress stored in event._progress
      if (!event._progress) this.$set(event, '_progress', {});
      if (!event._progress[this.user.id]) this.$set(event._progress, this.user.id, {});
      const p = event._progress[this.user.id];
      p[task.id] = (p[task.id] || 0) + 1;
    },
    taskProgress(event, task) { return (event._progress && event._progress[this.user.id] && event._progress[this.user.id][task.id]) ? event._progress[this.user.id][task.id] : 0; },
    isTaskComplete(event, task) { return this.taskProgress(event, task) >= task.target; },
    isTaskClaimed(event, task) { if (!task.claimed) return false; return task.claimed.includes(this.user.id); },
    claimTaskReward(event, task) {
      if (!this.isTaskComplete(event, task) || this.isTaskClaimed(event, task)) return;
      const r = task.reward;
      this.applyReward(r);
      if (!task.claimed) this.$set(task, 'claimed', []);
      task.claimed.push(this.user.id);
      // check unlocks
      this.checkUnlocks(event, task);
      this.$emit('eventRewardClaimed', { eventId: event.id, taskId: task.id, reward: r });
    },
    isUnlockUnlocked(event, unlock) {
      // unlocked when specified task reaches the count
      const tId = unlock.unlockedBy.taskId;
      const req = unlock.unlockedBy.count;
      return this.taskProgress(event, event.tasks.find(t => t.id === tId)) >= req;
    },
    checkUnlocks(event, task) {
      // nothing extra here for now; unlock detection is computed on render
      console.log(event, task)
    },
    applyReward(r) {
      if (r.type === 'coins') this.user.coins += r.amount;
      if (r.type === 'gems') this.user.gems += r.amount;
      if (r.type === 'score') this.user.score += r.amount;
      if (r.type === 'item') {
        // add to inventory (simple structure)
        // try to find existing
        if (!this.user.inventory) this.$set(this.user, 'inventory', []);
        const ex = this.user.inventory.find(i => i.name === r.item.name);
        if (ex) ex.qty += r.item.qty || 1;
        else this.user.inventory.push({ id: r.item.id || ('it' + Date.now()), name: r.item.name, qty: r.item.qty || 1 });
      }
    },
    claimAllAvailable() {
      this.events.forEach(e => e.tasks.forEach(t => { if (this.isTaskComplete(e, t) && !this.isTaskClaimed(e, t)) this.claimTaskReward(e, t); }));
    },
    renderReward(r) { if (!r) return ''; if (r.type === 'coins') return r.amount + ' coins'; if (r.type === 'gems') return r.amount + ' gems'; if (r.type === 'score') return r.amount + ' score'; if (r.type === 'item') return r.item.name + (r.item.qty > 1 ? ' x' + r.item.qty : ''); return JSON.stringify(r); },
    resetAll() {
      // reset demo data
      this.user = { id: 1, name: 'Thin Thin', coins: 500, gems: 200, score: 1200 };
      this.events.forEach(e => {
        e.participants = [];
        if (e._progress) this.$delete(e, '_progress');
        e.tasks.forEach(t => this.$set(t, 'claimed', []));
      });
    }
  }
};
</script>

<style scoped>
.comp-events { border-radius: 8px; }
.event-card.ended { opacity: 0.6; }
.task-row { border-top: 1px solid #f5f5f5; }
.task-row.complete { background: #f6fffa; }
.unlock { background: #fff; border-radius: 6px; padding: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }
.unlock.unlocked { border-left: 6px solid #28a745; background: linear-gradient(180deg, #f6fffa, #f0fff6); }
</style>