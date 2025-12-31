<template>
    <div class="register-container bg-white">
        <h1>Create an Account</h1>
        <p class="text-muted">Fill in the form below to create an account.</p>
        <form @submit.prevent="handleRegister">
            <div class="form-group mb-2">
                <label class="form-label" for="email">Email<span class="text-danger">*</span>:</label>
                <input class="form-control shadow-sm" id="email" v-model="form.email" type="email"
                    placeholder="Insert your email." :disabled="isRegistering" required />
                <label v-if="isWarning && isEmailInvalid" class="form-text text-danger">Email format is invalid.</label>
            </div>
            <div class="form-group mb-2">
                <label class="form-label" for="password">Password<span class="text-danger">*</span>:</label>
                <input class="form-control shadow-sm" id="password" v-model="form.password"
                    placeholder="8-16 characters." type="password" :disabled="isRegistering" required />
                <label v-if="isWarning && isPasswordInvalid" class="form-text text-danger">Password must be 8-16
                    characters long.</label>
            </div>
            <div class="form-group mb-4">
                <label class="form-label" for="confirmPassword">Confirm Password<span
                        class="text-danger">*</span>:</label>
                <input class="form-control shadow-sm" id="confirmPassword" v-model="form.confirmPassword"
                    placeholder="Type your password again." type="password" :disabled="isRegistering" required />
                <label v-if="isWarning && isPasswordMismatch" class="form-text text-danger">Password does not match with
                    Confirm Password.</label>
            </div>

            <hr>
            <h3>My Avatar</h3>
            <div class="form-group mb-3">
                <label class="form-label">Select Avatar (4  Stars): 
                    <CompFourStars />
                </label>
                <div class="avatar-options">
                    <img v-for="(avatar, index) in avatars" :key="index" :src="avatar.src" :alt="avatar.id"
                        :class="{ selected: form.avatar === avatar.id }" @click="form.avatar = avatar.id"
                        class="avatar-img" :disabled="isRegistering" />
                </div>
            </div>

            <div class="form-group mb-2">
                <label class="form-label" for="gender">Gender<span class="text-danger">*</span>:</label>
                <select class="form-control shadow-sm" id="gender" v-model="form.gender" :disabled="isRegistering"
                    required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <label v-if="isWarning && !form.gender" class="form-text text-danger">Gender is required.</label>
            </div>

            <div class="form-group mb-2">
                <label class="form-label" for="generation">Generation<span class="text-danger">*</span>:</label>
                <select class="form-control shadow-sm" id="generation" v-model="form.generation"
                    :disabled="isRegistering" required>
                    <option value="">Select Generation</option>
                    <option value="gen-alpha">Gen Alpha (2012-2025)</option>
                    <option value="gen-z">Gen Z (1997-2012)</option>
                    <option value="gen-y">Gen Y (1981-96)</option>
                    <option value="gen-x">Gen X (1965-80)</option>
                    <option value="boomer">Boomer (1946-64)</option>
                    <option value="boomer">Silent Generation (1928-45)</option>
                </select>
                <label v-if="isWarning && !form.generation" class="form-text text-danger">Generation is
                    required.</label>
            </div>

            <div class="form-group mb-3">
                <label class="form-label" for="country">Country<span class="text-danger">*</span>:</label>
                <select class="form-control shadow-sm" id="country" v-model="form.country" :disabled="isRegistering">
                    <option value="">Select Country</option>
                    <option v-for="country in countries" :key="country.code" :value="country.name">
                        {{ country.name }}
                    </option>
                </select>
                <label v-if="isWarning && !form.country" class="form-text text-danger">Country is required.</label>
            </div>

            <div class="form-group mb-2">
                <label class="form-label" for="monCommunity">My Mon community/town <span
                        class="text-muted">(optional)</span>:</label>
                <select class="form-control shadow-sm" id="generation" v-model="form.monCommunity"
                    :disabled="isRegistering">
                    <option value="">I am not Mon 😓</option>
                    <option v-for="comm in communities" :key="comm.code" :value="comm.code">
                        {{ comm.name2 }} ----- {{ comm.name }}
                    </option>
                </select>
            </div>

            <hr>
            <h3>My Name</h3>
            <div class="form-group mb-2">
                <label class="form-label" for="firstName">First Name<span class="text-danger">*</span>:</label>
                <input class="form-control shadow-sm" id="firstName" v-model="form.firstName"
                    placeholder="1-30 characters." type="text" :disabled="isRegistering" required />
                <label v-if="isWarning && !form.firstName" class="form-text text-danger">First name is required.</label>
            </div>

            <div class="form-group mb-3">
                <label class="form-label" for="lastName">Last Name or your Village Name <span
                        class="text-muted">(optional)</span>:</label>
                <input class="form-control shadow-sm" id="lastName" v-model="form.lastName"
                    placeholder="1-30 characters." type="text" :disabled="isRegistering" />
            </div>

            <div class="form-check mt-4 mb-3">
                <input v-model="form.acceptTerms" type="checkbox" class="form-check-input shadow-sm" id="checkAccept"
                    :disabled="isRegistering" required />
                <label class="form-check-label" for="checkAccept">
                    I agree to the
                    <router-link :to="{ path: '/terms', query: { lang: this.lang } }" target="_blank">Terms of
                        Use</router-link> and
                    <router-link :to="{ path: '/privacy', query: { lang: this.lang } }" target="_blank">Privacy
                        Policy</router-link>
                </label>
                <label v-if="isWarning && !form.acceptTerms" class="form-text text-danger">You must accept the terms and
                    conditions.</label>
            </div>
            <button class="btn btn-lg btn-primary w-100 shadow-sm" type="submit" :disabled="isRegistering">
                <span v-if="!isRegistering">Register</span>
                <span v-else>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Registering...</span>
            </button>
            <label v-if="errorMessage" class="form-text text-danger">{{ errorMessage }}</label>
        </form>
    </div>
</template>

<script>
import Countries from '@/data/countries/countries.json'
import Communitites from '@/data/communities/mon-communities.json'
import { avatarStarterPack } from '@/data/avatars/avatars.js'

import FirebaseUser from '@/services/firebase/user'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile
} from 'firebase/auth'
import { firebaseApp } from '@/services/firebase/app';
import CompFourStars from '../misc/stars/CompFourStars.vue'

export default {
    name: 'CompRegister',
    components: {
        CompFourStars
    },
    props: {
        lang: {
            type: String,
            default: 'en'
        }
    },
    data() {
        return {
            form: {
                email: this.$route.query.email || '',
                password: this.$route.query.password || '',
                confirmPassword: '',
                gender: '',
                generation: '',
                country: '',
                monCommunity: '',
                firstName: '',
                lastName: '',
                username: '',
                avatar: 'avatar_hongsa_0001',
                acceptTerms: false,
            },
            isWarning: false,
            isEmailInvalid: false,
            isPasswordInvalid: false,
            isPasswordMismatch: false,
            isRegistering: false,
            avatars: avatarStarterPack,
            countries: Countries,
            communities: Communitites
        }
    },
    methods: {
        handleRegister() {
            this.isWarning = false;

            if (this.form.email && !this.form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                this.isWarning = true;
                this.isEmailInvalid = true;
            } else {
                this.isEmailInvalid = false;
            }

            if (this.form.password && (this.form.password.length < 8 || this.form.password.length > 16)) {
                this.isWarning = true;
                this.isPasswordInvalid = true;
            } else {
                this.isPasswordInvalid = false;
            }

            if (this.form.password && this.form.confirmPassword && this.form.password !== this.form.confirmPassword) {
                this.isWarning = true;
                this.isPasswordMismatch = true;
            } else {
                this.isPasswordMismatch = false;
            }

            if (!this.form.gender || !this.form.generation || !this.form.country || !this.form.firstName || !this.form.acceptTerms) {
                this.isWarning = true;
            }

            if (this.isWarning) {
                window.scrollTo(0, 0);
                return;
            } else {
                // Proceed with registration logic
                this.registerUser();
            }

            console.log('Register:', this.form)
        },
        async registerUser() {
            this.isRegistering = true;
            this.errorMessage = '';
            // Placeholder for actual registration logic (e.g., API call)
            const auth = getAuth(firebaseApp);
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, this.form.email, this.form.password);
                // Registration successful
                const user = userCredential.user;
                console.log('User registered:', user);

                await updateProfile(user, {
                    displayName: this.form.firstName + (this.form.lastName ? ' ' + this.form.lastName : ''),
                    photoURL: this.form.avatar
                });

                //generate username from email
                this.form.username = this.form.email.split('@')[0];

                await FirebaseUser.createUserProfile(
                    user.uid,
                    this.form.email,
                    this.form.username,
                    this.form.firstName,
                    this.form.lastName,
                    this.form.avatar,
                    this.form.gender,
                    this.form.generation,
                    this.form.country,
                    this.form.monCommunity,
                    0, 0, 0, 0, false
                );

                console.log('User profile created successfully.');
                await signInWithEmailAndPassword(auth, this.form.email, this.form.password)
                console.log('User logged in after registration.');
                this.isRegistering = false;
            } catch (error) {
                console.error('Registration error:', error);
                this.isRegistering = false;
                this.errorMessage = error.message;
            }
            setInterval(() => {
                if (!this.isRegistering && !this.errorMessage) {
                    this.$router.push('/dashboard', { query: { lang: this.lang } });
                }
            }, 1000);
        }
    }
}
</script>

<style scoped>
.register-container {
    max-width: 400px;
    margin: 48px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
}

.avatar-img {
    width: 60px;
    height: 60px;
    margin-right: 10px;
    cursor: pointer;
    border: 3px solid transparent;
    border-radius: 50%;
}

img.avatar-img.selected {
    border-color: #007bff;
}
</style>