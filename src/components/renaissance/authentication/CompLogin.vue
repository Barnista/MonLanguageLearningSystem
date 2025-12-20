<template>
    <div class="login-container mb-5">
        <div class="card">
            <div class="text-center">
                <img src="@/assets/logo.svg" alt="App Logo" class="mb-3" width="120" height="120" />
            </div>
            <p class="text-center">Login to The Mon Language မန် to experience Mon Renaissance features.</p>
            <form @submit.prevent="handleLogin">
                <div class="form-group mb-2">
                    <label class="form-label" for="email">Email</label>
                    <input class="form-control shadow-sm" id="email" v-model="form.email" type="email" :disabled="isLoggingIn"
                        required placeholder="Enter your email" />
                </div>

                <div class="form-group mb-3">
                    <label class="form-label" for="password">Password</label>
                    <input class="form-control shadow-sm" id="password" v-model="form.password" type="password"
                        :disabled="isLoggingIn" required placeholder="Enter your password" />
                </div>

                <button type="submit" class="btn btn-primary shadow-sm w-100 mb-2" :disabled="isLoggingIn">
                    <span v-if="!isLoggingIn">Login</span>
                    <span v-else>
                        Loading...
                    </span>
                </button>
            </form>
            <!--<button @click="handleGoogleLogin" class="btn btn-danger w-100">
                <i class="bi bi-google"></i>
                Sign Up with Google
            </button>-->

            <div class="divider mt-3 mb-2">OR</div>
            <button @click="handleRegister" class="btn btn-success shadow-sm w-100" :disabled="isLoggingIn">
                Create an Account
            </button>

            <div class="links mt-2">
                <router-link :to="{ name: 'forgot-password', query: { lang: this.lang } }">Forgot
                    Password?</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { firebaseApp } from '@/services/firebase/app';
import {
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth'

export default {
    name: 'CompLogin',
    data() {
        return {
            form: {
                email: '',
                password: '',
            },
            isLoggingIn: false,
        }
    },
    created() {
        // You can add any initialization logic here if needed
        const auth = getAuth(firebaseApp);
        if (auth.currentUser) {
            this.$router.push({ name: 'dashboard', query: { lang: this.lang } });
        }
    },
    methods: {
        async handleLogin() {
            if (!this.form.password || !this.form.email) {
                alert('Please fill in all fields')
                return
            }

            const auth = getAuth(firebaseApp);
            this.isLoggingIn = true
            try {
                // Handle registration logic here
                console.log('Login:', this.form.email)
                await signInWithEmailAndPassword(auth, this.form.email, this.form.password)
                this.isLoggingIn = false
                this.$router.push({ name: 'dashboard', query: { lang: this.lang } }).catch(() => { })
            } catch (error) {
                console.error('Login Error:', error)
                this.isLoggingIn = false
                alert('Login failed. Please check your credentials and try again.')
            }
        },
        async handleGoogleLogin() {
            // Handle Google login logic here
            console.log('Google Login')

            const auth = getAuth(firebaseApp)
            const googleProvider = new GoogleAuthProvider()

            try {
                await signInWithPopup(auth, googleProvider)
                this.$router.push({ name: 'dashboard' }).catch(() => { })
            } catch (err) {
                console.error('Google Sign-In Error:', err)
                alert('Google Sign-In failed. Please try again.')
            }
        },
        async handleRegister() {
            // Navigate to the registration view
            this.$router.push({ name: 'register', query: { email: this.form.email, password: this.form.password } }).catch(() => { })
        }
    }
}
</script>

<style scoped>
.card {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
}

.divider {
    text-align: center;
    position: relative;
}

h1 {
    margin-bottom: 0.5rem;
    color: #333;
}

p {
    color: #666;
    margin-bottom: 1.5rem;
}

.form-group {
    margin-bottom: 1rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    color: #333;
    font-weight: 500;
}

input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
}

input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

button {
    width: 100%;
    padding: 0.75rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    margin-bottom: 1rem;
}

.success {
    color: #10b981;
    padding: 0.75rem;
    background: #d1fae5;
    border-radius: 4px;
    margin-bottom: 1rem;
}

.error {
    color: #ef4444;
    padding: 0.75rem;
    background: #fee2e2;
    border-radius: 4px;
    margin-bottom: 1rem;
}

.links {
    display: flex;
    justify-content: center;
}

a {
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>