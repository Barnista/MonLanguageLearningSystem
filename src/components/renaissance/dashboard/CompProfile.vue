<template>
  <div class="comp-profile bg-light p-3 mb-5">
    <div class="d-flex justify-content-between align-items-start">
      <h3 class="mb-0"><i class="bi bi-feather"></i> My Profile</h3>
    </div>

    <div class="profile-wrap mt-3">
      <div class="row">
        <!-- User Progression -->
        <div class="col-lg-4 mb-3">
          <div class="card shadow-sm p-3">
            <h5 class="mb-0">My Progression</h5>
            <div class="mt-3 d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center justify-content-start">
                <i class="bi bi-chevron-double-up fs-1 text-success"></i>
                <div class="ms-2">
                  <div class="small text-muted">Level</div>
                  <div class="h4 fw-bold mb-0 text-success">Lv {{ calLevelFromEXP(userData?.exp).lvl }}</div>
                </div>
              </div>
              <div class="text-right">
                <div class="small text-muted">EXP</div>
                <div class="h5 mb-0">{{ userData?.exp }}</div>
              </div>
            </div>
            <div class="mt-3">
              <div class="small text-muted mb-2">Progress to Next Level: <strong class="text-success"><i
                    class="bi bi-chevron-double-up"></i> Lv {{
                      calLevelFromEXP(userData?.exp).lvl + 1 }}</strong></div>
              <div class="progress" style="height: 20px;">
                <div class="progress-bar bg-success progress-bar-striped progress-bar-animated" role="progressbar"
                  :style="{ width: (userData?.exp / calLevelFromEXP(userData?.exp).max) * 100 + '%' }"
                  :aria-valuenow="userData?.exp" :aria-valuemin="calLevelFromEXP(userData?.exp).min"
                  :aria-valuemax="calLevelFromEXP(userData?.exp).max">
                  <strong>
                    {{ userData?.exp.toLocaleString() }} / {{ calLevelFromEXP(userData?.exp).max.toLocaleString() }} EXP
                  </strong>
                </div>
              </div>
            </div>

            <div class="mt-3">
              <div class="small text-muted">Joined</div>
              <div>{{ joinedSince }}</div>
            </div>
          </div>
        </div>

        <!-- User Achievements -->
        <div class="col-lg-8 mb-3">
          <div class="card shadow-sm p-3 mb-3">
            <div class="d-flex justify-content-around text-center">
              <div class="flex-fill pt-2 currency">
                <h5 class="mb-0">Score</h5>
                <p class="fs-5 fw-bold text-success mb-0"><i class="bi bi-trophy"></i> {{ (userData?.score
                  || 0) }}</p>
              </div>
              <div class="flex-fill pt-2 currency">
                <h5 class="mb-0">Coins</h5>
                <p class="fs-5 fw-bold text-primary mb-0"><i class="bi bi-coin"></i> {{ (userData?.coin
                  || 0).toLocaleString() }}</p>
              </div>
              <div class="flex-fill pt-2">
                <h5 class="mb-0">Gems</h5>
                <p class="fs-5 fw-bold text-primary mb-0"><i class="bi bi-gem"></i> {{ (userData?.gem ||
                  0).toLocaleString() }}</p>
              </div>
            </div>
          </div>
          <div class="card shadow-sm p-3">
            <div class="d-flex justify-content-between align-items-start mb-3">
              <h5>My Achievements</h5>
              <div>
                <router-link :to="{ path: '/dashboard/achievements', query: { lang } }"
                  class="btn btn-sm btn-outline-primary shadow-sm">
                  <i class="bi bi-award"></i>
                  All Achievements
                </router-link>
              </div>
            </div>
            <div>
              <div class="text-center text-muted py-4">
                <small>"no achievements has been unlocked yet."</small>
              </div>
            </div>
          </div>
        </div>

        <hr class="mb-4">
        <!-- AVATAR -->
        <div class="col-lg-4 mb-3">
          <div class="card shadow-sm p-3">
            <div class="form-group mb-3">
              <h5 class="mb-3">My Avatars</h5>
              <div v-if="isChangingAvatar" class="text-secondary my-3">
                <div class="spinner-border spinner-border-sm me-2" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                Changing Avatar...
              </div>
              <div class="avatar-options">
                <h6 class="">
                  5 Stars:
                  <CompFiveStars />
                </h6>
                <div v-if="avatarUnlocksSS.length == 0" class="text-center text-muted">
                  <small>
                    "no avatar has been unlocked yet."
                  </small>
                </div>
                <h6 class="mt-4">
                  4 Stars:
                  <CompFourStars />
                </h6>
                <img v-for="(avatar, index) in avatarUnlocks" :key="index" :src="getAvatarById(avatar.id).src" :alt="avatar.id"
                  :class="{ selected: editUser.avatar === avatar.id }" @click="editAvatar(avatar.id)"
                  class="avatar-img" />
              </div>
            </div>
          </div>
        </div>

        <!-- Profile -->
        <div class="col-lg-8 mb-3">
          <div class="card shadow-sm p-3">
            <div class="d-flex justify-content-between align-items-start mb-3">
              <h5>My Personal Information</h5>
              <div>
                <button v-if="!editMode" class="btn btn-sm btn-outline-primary shadow-sm" @click="startEdit">
                  <i class="bi bi-feather"></i>
                  Edit Profile
                </button>
                <div v-else>
                  <button class="btn btn-sm btn-success shadow-sm me-2" @click="saveEdit"><i class="bi bi-floppy"></i>
                    Save</button>
                  <button class="btn btn-sm btn-secondary shadow-sm" @click="cancelEdit">Cancel</button>
                </div>
              </div>
            </div>
            <div v-if="isChangingProfile" class="text-secondary mb-3">
              <div class="spinner-border spinner-border-sm me-2" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              Changing Profile...
            </div>
            <div class="row">
              <div class="form-group col-12 col-md-6 mb-3">
                <label>Email</label>
                <input disabled :value="editUser.email" class="form-control" type="email" />
              </div>
              <div class="form-group col-12 col-md-6 mb-3">
                <label>Username</label>
                <input disabled :value="'@' + editUser.username" class="form-control" type="text" />
              </div>
            </div>
            <form @submit.prevent="saveEdit">
              <div class="form-row">
                <div class="form-group col-md-8 mb-3">
                  <label>Full name</label>
                  <input :disabled="!editMode" v-model="editUser.firstName" class="form-control shadow-sm"
                    type="text" />
                </div>
                <div class="form-group col-md-8 mb-3">
                  <label>Last name</label>
                  <input :disabled="!editMode" v-model="editUser.lastName" class="form-control shadow-sm" type="text" />
                </div>
                <div class="row">
                  <div class="form-group col-md-3 mb-3">
                    <label class="form-label" for="gender">Gender<span class="text-danger">*</span>:</label>
                    <select :disabled="!editMode" class="form-control shadow-sm" id="gender" v-model="editUser.gender">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div class="form-group col-md-6 mb-3">
                    <label class="form-label" for="generation">Generation:</label>
                    <select :disabled="!editMode" class="form-control shadow-sm" id="generation"
                      v-model="editUser.generation">
                      <option value="gen-alpha">Gen Alpha (2012-2025)</option>
                      <option value="gen-z">Gen Z (1997-2012)</option>
                      <option value="gen-y">Gen Y (1981-96)</option>
                      <option value="gen-x">Gen X (1965-80)</option>
                      <option value="boomer">Boomer (1946-64)</option>
                      <option value="boomer">Silent Generation (1928-45)</option>
                    </select>
                  </div>
                </div>
                <div class="form-group col-md-6 mb-3">
                  <label class="form-label" for="country">Country:</label>
                  <select :disabled="!editMode" class="form-control shadow-sm" id="country" v-model="editUser.country">
                    <option v-for="country in countries" :key="country.code" :value="country.name">
                      {{ country.name }}
                    </option>
                  </select>
                </div>
                <div class="form-group mb-3">
                  <label class="form-label" for="monCommunity">My Mon community/town:</label>
                  <select :disabled="!editMode" class="form-control shadow-sm" id="generation"
                    v-model="editUser.monCommunity">
                    <option value="">I am not Mon 😓</option>
                    <option v-for="comm in communities" :key="comm.code" :value="comm.code">
                      {{ comm.name2 }} ----- {{ comm.name }}
                    </option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Countries from '@/assets/data/countries/countries.json'
import Communitites from '@/assets/data/communities/mon-communities.json'

import { firebaseApp } from '@/services/firebase/app';
import { getAuth, updateCurrentUser, updateProfile } from 'firebase/auth';
import FirebaseUser from '@/services/firebase/user';
import { avatarStarterPack, getAvatarById } from '@/assets/data/avatars/avatars';
import Progression from '@/assets/data/progression/progression';
import CompFiveStars from '../misc/stars/CompFiveStars.vue';
import CompFourStars from '../misc/stars/CompFourStars.vue';

export default {
  name: 'CompProfile',
  components: {
    CompFiveStars,
    CompFourStars
  },
  props: {
    lang: { type: String, default: 'en' }
  },
  data() {
    return {
      editMode: false,
      editUser: {},
      newItem: { name: '', qty: 1 },
      currentUser: null,
      userData: null,
      avatars: avatarStarterPack,
      avatarUnlocksSS: [],
      avatarUnlocks: [],
      getAvatarById: getAvatarById,
      countries: Countries,
      communities: Communitites,
      isChangingAvatar: false,
      isChangingProfile: false,
      calLevelFromEXP: Progression.calLevelFromEXP,
      joinedSince: ''
    };
  },
  computed: {
    totalInventory() {
      return this.userData.inventory.reduce((s, it) => s + Number(it.qty || 0), 0);
    }
  },
  created() {
    const auth = getAuth(firebaseApp);
    if (!auth.currentUser) {
      this.$router.push({ name: 'login', query: { lang: this.lang } });
    } else {
      this.currentUser = auth.currentUser;
      FirebaseUser.loadUserData(auth.currentUser.uid).then((userData) => {
        // User data loaded
        this.userData = userData;
        this.joinedSince = userData?.createdAt ? new Date(userData.createdAt.toDate()).toLocaleDateString() : new Date().toLocaleDateString();
        console.log('User data loaded:', this.userData);
        //copy data to editUser
        this.editUser = JSON.parse(JSON.stringify(this.userData));
      }).catch((error) => {
        console.error('Error loading userData data:', error);
      });
      console.log('User is authenticated:', auth.currentUser);
    }
  },
  mounted() {
    // load unlocked avatars
    FirebaseUser.getAvatarsByStars(this.currentUser.uid, 5).then((querySnapshot) => {
      this.avatarUnlocks = [];
      querySnapshot.forEach((doc) => {
        const avatarData = doc.data();
        this.avatarUnlocksSS.push(avatarData);
      });
      console.log('5-star avatars loaded:', this.avatarUnlocks);
    }).catch((error) => {
      console.error('Error loading 5-star avatars:', error);
    });

    FirebaseUser.getAvatarsByStars(this.currentUser.uid, 4).then((querySnapshot) => {
      this.avatarUnlocks = [];
      querySnapshot.forEach((doc) => {
        const avatarData = doc.data();
        this.avatarUnlocks.push(avatarData);
      });
      console.log('4-star avatars loaded:', this.avatarUnlocks);
    }).catch((error) => {
      console.error('Error loading 4-star avatars:', error);
    });
  },
  methods: {
    async editAvatar(avatarId) {
      this.isChangingAvatar = true;
      this.editUser.avatar = avatarId;

      await FirebaseUser.updateUserAvatar(this.editUser.uid, this.editUser.avatar);
      await this.updateMyUser();

      console.log('avatar changed');
      this.isChangingAvatar = false;
    },
    startEdit() {
      this.editUser = JSON.parse(JSON.stringify(this.userData));
      this.editMode = true;
    },
    cancelEdit() {
      this.editUser = JSON.parse(JSON.stringify(this.userData));
      this.editMode = false;
    },
    resetEdit() {
      this.editUser = JSON.parse(JSON.stringify(this.userData));
    },
    async saveEdit() {
      try {
        this.isChangingProfile = true;
        // basic validation
        if (!this.editUser.firstName || !this.editUser.lastName) {
          alert('Please fill name and username');
          return;
        }
        this.userData = JSON.parse(JSON.stringify(this.editUser));
        this.editMode = false;
        // TODO: emit save event or call API to persist
        //this.$emit('save', this.userData);

        //update userProfile
        await FirebaseUser.updateUserProfile(
          this.editUser.uid,
          this.editUser.firstName,
          this.editUser.lastName,
          this.editUser.avatar,
          this.editUser.gender,
          this.editUser.generation,
          this.editUser.country,
          this.editUser.monCommunity
        );

        //update user
        await this.updateMyUser();

        console.log('user updated successfully');
        this.isChangingProfile = false;
      } catch (error) {
        console.error('user update error', error);
        this.isChangingProfile = false;
      }
    },
    async updateMyUser() {
      //update user
      await updateProfile(this.currentUser, {
        displayName: this.editUser.firstName + (this.editUser.lastName ? ' ' + this.editUser.lastName : ''),
        photoURL: this.editUser.avatar
      });
      const auth = getAuth(firebaseApp);
      this.currentUser.displayName = this.editUser.firstName + (this.editUser.lastName ? ' ' + this.editUser.lastName : '');
      this.currentUser.photoURL = this.editUser.avatar;
      await updateCurrentUser(auth, this.currentUser);
      console.log('currentUser updated', this.currentUser);
    },
    addItem() {
      if (!this.newItem.name || this.newItem.qty < 1) return;
      const id = 'i' + Date.now();
      this.userData.inventory.push({ id, name: this.newItem.name, qty: this.newItem.qty, icon: this.avatars[Math.floor(Math.random() * this.avatars.length)] });
      this.newItem = { name: '', qty: 1 };
    },
    removeItem(id) {
      this.userData.inventory = this.userData.inventory.filter(i => i.id !== id);
    },
    updateItemQty(id, value) {
      const item = this.userData.inventory.find(i => i.id === id);
      if (item) item.qty = Math.max(0, Number(value));
    },
    findEditItemQty(id) {
      const item = this.userData.inventory.find(i => i.id === id);
      return item ? item.qty : 0;
    },
    formatDate(d) {
      return new Date(d).toLocaleDateString();
    }
  }
};
</script>

<style scoped>
.currency {
  border-right: 1px solid #dee2e6;
}

.avatar-img {
  width: 70px;
  height: 70px;
  margin-right: 10px;
  cursor: pointer;
  border: 3px solid transparent;
  border-radius: 50%;
}

img.avatar-img.selected {
  border-color: #007bff;
}

.comp-profile {
  border-radius: 8px;
}

.avatar-lg {
  width: 72px;
  height: 72px;
  border-radius: 8px;
}

.avatar-md {
  width: 48px;
  height: 48px;
  border-radius: 6px;
}

.icon-sm {
  width: 32px;
  height: 32px;
}

.badge-sm {
  width: 56px;
  height: 56px;
}

.card {
  background: #fff;
  border-radius: 8px;
}

.achievement {
  width: 120px;
  background: #fff;
  border-radius: 8px;
  text-align: center;
}
</style>