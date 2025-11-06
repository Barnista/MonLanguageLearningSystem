<template>
    <div class="auth-page bg-fabulous">
        <div class="row">
            <div class="col-1 col-lg-1 col-xl-2"></div>
            <div class="d-none d-lg-block col-12 col-lg-6 col-xl-6">
                <div class="intro m-auto p-4 text-white">
                    <div class="intro-text jumbotron">
                        <h1>
                            Membership — Deep dive into a Virtual Nation
                        </h1>
                        <p>
                            Become a member to unlock <strong>Mon Renaissance</strong> experience: personalized
                            progression,
                            quests hunting, MonCoin collecting, community participation, history and culture diving, and
                            exclusive contents designed to help you cherish the Mon Civilization.
                        </p>
                        <ul class="benefits">
                            <li>Sign up now for <strong>FREE</strong>!</li>
                            <li>Mon ethnic gets a starter <strong>EXP & MonCoin</strong> package for free.</li>
                            <li>Access to <strong>exclusive features</strong> and community workshop.</li>
                            <li>Doing quests to collect & unlock customizations, badges and MonCoins like a video games.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-5 col-xl-4">
                <div class="p-3 bg-light text-dark rounded border shadow m-auto">
                    <h2>
                        <img src="@/assets/48x48.png" alt="Mon Renaissance logo" style="width: 48px; height: 48px;" />
                        Join Membership
                    </h2>
                    <div>
                        <button class="btn btn-danger shadow-sm w-100 mb-2" @click="signInWithGoogle"
                            :disabled="loading">
                            Sign In with Google
                        </button>
                        <br>
                        <button class="btn btn-primary shadow-sm w-100 mb-2" @click="signInWithFacebook"
                            :disabled="loading">
                            Sign In with Facebook
                        </button>
                        <p v-if="error" class="error">{{ error }}</p>
                    </div>
                    <div>
                        <router-link :to="{ name: 'privacy-policy', query: { lang } }">Privacy Policy</router-link>
                        <br>
                        <router-link :to="{ name: 'terms-of-use', query: { lang } }">Terms of Use</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import authService from '@/services/firebase/auth-service';

// Requires Firebase app to be initialized elsewhere in the project (e.g. src/firebase.js)
const auth = getAuth()
const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()

export default {
    name: 'LoginView',
    data: () => ({
        isLoading: false
    }),
    methods: {
        signInWithGoogle() {
            authService.signInWithGoogle(auth, googleProvider).then(value => {
                console.log('USER', value.user)
            }).catch(error => {
                console.error('CATCH ERROR', error)
            });
        },
        signInWithFacebook() {
            authService.signInWithFacebook(auth, facebookProvider)
        }
    },
}
</script>

<style scoped>
.auth-page {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px 24px 128px 24px;
    height: 108vh;
}

.card {
    width: 100%;
    max-width: 420px;
    background: white;
    padding: 28px;
    border-radius: 8px;
    box-shadow: 0 6px 22px rgba(20, 36, 64, 0.08);
}

h2 {
    margin: 0 0 18px;
    font-size: 20px;
    text-align: center;
}

.form label {
    display: block;
    margin-bottom: 12px;
    font-size: 14px;
}

.form span {
    display: block;
    margin-bottom: 6px;
    color: #444;
}

.form input {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #dbe2ee;
    border-radius: 6px;
    font-size: 14px;
    background: #fff;
    box-sizing: border-box;
}

.actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
}

.actions button {
    padding: 10px 12px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    font-weight: 600;
}

.actions button[disabled] {
    opacity: 0.7;
    cursor: default;
}

.actions>button:not(.link) {
    background: #2563eb;
    color: white;
}

.link {
    background: transparent;
    color: #2563eb;
    font-size: 13px;
    padding: 8px;
}

.divider {
    text-align: center;
    margin: 18px 0;
    color: #94a3b8;
    font-size: 13px;
}

.google {
    width: 100%;
    padding: 10px 12px;
    border-radius: 6px;
    border: 1px solid #e2e8f0;
    background: white;
    cursor: pointer;
    display: block;
    font-weight: 600;
}

.google[disabled] {
    opacity: 0.7;
    cursor: default;
}

.error {
    margin-top: 14px;
    color: #b91c1c;
    font-size: 13px;
    text-align: center;
}

.jumbotron {
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.384);
}
</style>