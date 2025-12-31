<template>
    <div class="comp-leaderboard bg-light p-3 mb-5">
        <div class="d-flex justify-content-between align-items-center">
            <h3 class="mb-0">Leaderboard (Top 10)</h3>
            <div class="text-muted small">Ranking by <strong>Score</strong></div>
        </div>

        <ul class="leader-list list-unstyled mt-3">
            <li v-for="(u, i) in sortedUsers" :key="u.id" class="d-flex align-items-center py-2 border-top"
                :class="{ 'highlight': i < 3, 'rank-1': i === 0, 'rank-2': i === 1, 'rank-3': i === 2 }">
                <div class="rank-small me-1">#{{ i + 1 }}</div>
                <img :src="u.avatar" alt="avatar" class="rounded-circle avatar-sm me-2" />
                <div class="flex-grow-1">
                    <div class="name">{{ u.name }}</div>
                    <div class="meta small text-muted">Lvl {{ u.level }} • {{ u.quests }} quests • {{ u.events }} events
                    </div>
                </div>
                <div class="text-right pe-3">
                    <div class="level text-success fw-bold"><i class="bi bi-trophy"></i> {{ u.score }}</div>
                </div>
            </li>
        </ul>

        <div class="mt-3">
            <h4 class="mb-0">My Rank</h4>
        </div>

        <ul class="leader-list list-unstyled mt-3">
            <li class="d-flex align-items-center py-2 border-top"
                :class="['highlight', 'rank-2']">
                <div class="rank-small me-1">#{{ 2 }}</div>
                <img src="@/assets/avatars/avatar_hongsa_0010.svg" alt="avatar" class="rounded-circle avatar-sm me-2" />
                <div class="flex-grow-1">
                    <div class="name">Htaw Lun</div>
                    <div class="meta small text-muted">Lvl 7 • 5 quests • 3 events
                    </div>
                </div>
                <div class="text-right pe-3">
                    <div class="level text-success fw-bold"><i class="bi bi-trophy"></i> 600</div>
                </div>
            </li>
        </ul>

        <div class="mt-4 d-flex justify-content-between">
            <div class="small text-muted">Sorted by <strong>score</strong>. Top 10 out of 1,500 users.</div>
            <div>
                <button class="btn btn-sm btn-primary" @click="resetSample">
                    <i class="bi bi-arrow-clockwise"></i> Refresh
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import avatar1 from '@/assets/avatars/avatar_hongsa_0001.svg';
import avatar2 from '@/assets/avatars/avatar_hongsa_0002.svg';
import avatar3 from '@/assets/avatars/avatar_hongsa_0003.svg';
import avatar4 from '@/assets/avatars/avatar_hongsa_0004.svg';
import avatar5 from '@/assets/avatars/avatar_hongsa_0005.svg';
import avatar6 from '@/assets/avatars/avatar_hongsa_0006.svg';
import avatar7 from '@/assets/avatars/avatar_hongsa_0007.svg';
import avatar8 from '@/assets/avatars/avatar_hongsa_0008.svg';
import avatar9 from '@/assets/avatars/avatar_hongsa_0009.svg';
import avatar10 from '@/assets/avatars/avatar_hongsa_0010.svg';

export default {
    name: 'CompLeaderboard',
    props: {
        lang: {
            type: String,
            default: 'en'
        }
    },
    data() {
        return {
            // sample users (include level)
            users: [
                { id: 1, name: 'Aung Hla', avatar: avatar1, score: 300, level: 15, quests: 12, events: 5 },
                { id: 2, name: 'May Zaw', avatar: avatar2, score: 200, level: 13, quests: 9, events: 9 },
                { id: 3, name: 'Ko Min', avatar: avatar3, score: 900, level: 14, quests: 6, events: 12 },
                { id: 4, name: 'Nang Ei', avatar: avatar4, score: 100, level: 10, quests: 7, events: 4 },
                { id: 5, name: 'Sai Tun', avatar: avatar5, score: 400, level: 8, quests: 3, events: 6 },
                { id: 6, name: 'Phyu Phyu', avatar: avatar6, score: 200, level: 9, quests: 2, events: 8 },
                { id: 7, name: 'Htein Lin', avatar: avatar7, score: 100, level: 7, quests: 5, events: 3 },
                { id: 8, name: 'Nai Thien', avatar: avatar8, score: 150, level: 7, quests: 5, events: 3 },
                { id: 9, name: 'Kyu Kyu', avatar: avatar9, score: 50, level: 7, quests: 5, events: 3 },
                { id: 10, name: 'Htaw Lun', avatar: avatar10, score: 600, level: 7, quests: 5, events: 3 },

            ]
        };
    },
    computed: {
        // sort purely by level (desc)
        sortedUsers() {
            return this.users.slice().sort((a, b) => b.score - a.score);
        }
    },
    created() {
        // keep initial randomization for demo (levels will also vary)
        this.randomize();
    },
    methods: {
        randomize() {
            this.users = this.users.map(u => ({
                ...u,
                // small random change to level and participation numbers
                score: Math.max(1, u.score + Math.floor(Math.random() * 5) - 2),
                level: Math.max(1, u.level + Math.floor(Math.random() * 5) - 2),
                quests: Math.max(0, u.quests + Math.floor(Math.random() * 5) - 2),
                events: Math.max(0, u.events + Math.floor(Math.random() * 5) - 2)
            }));
        },
        resetSample() {
            this.users = [
                { id: 1, name: 'Aung Hla', avatar: avatar1, level: 15, quests: 12, events: 5 },
                { id: 2, name: 'May Zaw', avatar: avatar2, level: 13, quests: 9, events: 9 },
                { id: 3, name: 'Ko Min', avatar: avatar3, level: 14, quests: 6, events: 12 },
                { id: 4, name: 'Nang Ei', avatar: avatar4, level: 10, quests: 7, events: 4 },
                { id: 5, name: 'Sai Tun', avatar: avatar5, level: 8, quests: 3, events: 6 },
                { id: 6, name: 'Phyu Phyu', avatar: avatar1, level: 9, quests: 2, events: 8 },
                { id: 7, name: 'Htein Lin', avatar: avatar2, level: 7, quests: 5, events: 3 }
            ];
        }
    }
};
</script>

<style scoped>
.comp-leaderboard {
    border-radius: 8px;
}

.lead-top {
    gap: 8px;
}

.leader-list li.highlight {
    background: linear-gradient(180deg, #fffef6, #fffcf0);
    border-radius: 6px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
}

.rank-1 {
    border-left: 6px solid #f4b400;
}

.rank-2 {
    border-left: 6px solid #c0c0c0;
}

.rank-3 {
    border-left: 6px solid #cd7f32;
}

.leader-list .avatar-sm {
    width: 36px;
    height: 36px;
}

.rank-small {
    width: 28px;
    text-align: center;
    font-weight: 700;
}
</style>