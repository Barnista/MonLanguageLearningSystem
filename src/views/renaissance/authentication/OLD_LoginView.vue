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
                            Become a member to unlock <strong>Mon Renaissance</strong> experience: personalized progression,
                            quests hunting, MonCoin collecting, community participation, history and culture diving, and exclusive contents designed to help you cherish the Mon Civilization.
                        </p>
                        <ul class="benefits">
                            <li>Sign up now for <strong>FREE</strong>!</li>
                            <li>Mon ethnic gets a starter <strong>EXP & MonCoin</strong> package for free.</li>
                            <li>Access to <strong>exclusive features</strong> and community workshop.</li>
                            <li>Doing quests to collect & unlock customizations, badges and MonCoins like a video games.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-5 col-xl-4">
                <div class="card m-auto">
                    <h2>
                        <img src="@/assets/logo2.svg" alt="Mon Renaissance logo" style="width: 48px; height: 48px;" />
                        {{ isRegister ? 'Create account' : 'Sign in' }}
                    </h2>
                    <form @submit.prevent="handleSubmit" class="form">
                        <label>
                            <span>Email</span>
                            <input v-model="email" type="email" required />
                        </label>

                        <label>
                            <span>Password</span>
                            <input v-model="password" type="password" minlength="6" required />
                        </label>

                        <div class="actions">
                            <button type="submit" :disabled="'loading'">
                                {{ loading ? (isRegister ? 'Creating...' : 'Signing in...') : (isRegister ? 'Create account'
                                : 'Sign in') }}
                            </button>
                            <button type="button" class="link" @click="toggleMode" :disabled="loading">
                                {{ isRegister ? 'Have an account? Sign in' : "Don't have an account? Create one" }}
                            </button>
                        </div>
                    </form>
                    <div class="divider">OR</div>
                    <button class="google" @click="signInWithGoogle" :disabled="loading">
                        Continue with Google
                    </button>
                    <p v-if="error" class="error">{{ error }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth'

export default {
    name: 'LoginView',
    setup() {
        const router = useRouter()
        const email = ref('')
        const password = ref('')
        const loading = ref(false)
        const error = ref('')
        const isRegister = ref(true)

        // Requires Firebase app to be initialized elsewhere in the project (e.g. src/firebase.js)
        const auth = getAuth()
        const googleProvider = new GoogleAuthProvider()

        const handleSubmit = async () => {
            error.value = ''
            loading.value = true
            try {
                if (isRegister.value) {
                    await createUserWithEmailAndPassword(auth, email.value, password.value)
                } else {
                    await signInWithEmailAndPassword(auth, email.value, password.value)
                }
                // On success, navigate to home (adjust route as needed)
                router.push({ name: 'Home' }).catch(() => { })
            } catch (err) {
                error.value = parseAuthError(err)
            } finally {
                loading.value = false
            }
        }

        const signInWithGoogle = async () => {
            error.value = ''
            loading.value = true
            try {
                await signInWithPopup(auth, googleProvider)
                router.push({ name: 'Home' }).catch(() => { })
            } catch (err) {
                error.value = parseAuthError(err)
            } finally {
                loading.value = false
            }
        }

        const toggleMode = () => {
            isRegister.value = !isRegister.value
            error.value = ''
        }

        function parseAuthError(err) {
            if (!err || !err.code) return String(err || 'Unknown error')
            switch (err.code) {
                case 'auth/user-not-found':
                case 'auth/wrong-password':
                    return 'Invalid email or password.'
                case 'auth/email-already-in-use':
                    return 'Email already in use.'
                case 'auth/invalid-email':
                    return 'Invalid email address.'
                case 'auth/popup-closed-by-user':
                    return 'Popup closed before completing sign in.'
                case 'auth/popup-blocked':
                    return 'Popup blocked by the browser.'
                default:
                    return err.message || err.code
            }
        }

        return {
            email,
            password,
            loading,
            error,
            isRegister,
            handleSubmit,
            signInWithGoogle,
            toggleMode,
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

.jumbotron{
text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.384);
}
</style>