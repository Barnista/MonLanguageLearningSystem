<template>
    <div class="forgot-password-container">
        <div class="card">
            <h1>Forgot Password</h1>
            <p>Enter your email address to receive password reset instructions.</p>
            
            <form @submit.prevent="handleSubmit">
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input
                        id="email"
                        v-model="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                    />
                </div>

                <button type="submit" :disabled="isLoading">
                    {{ isLoading ? 'Sending...' : 'Send Reset Link' }}
                </button>
            </form>

            <p v-if="message" :class="messageType">{{ message }}</p>

            <div class="links">
                <router-link to="/login">Back to Login</router-link>
                <router-link to="/signup">Create Account</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CompForgotPassword',
    data() {
        return {
            email: '',
            isLoading: false,
            message: '',
            messageType: ''
        };
    },
    methods: {
        async handleSubmit() {
            this.isLoading = true;
            this.message = '';

            try {
                // Replace with your API endpoint
                const response = await fetch('/api/forgot-password', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: this.email })
                });

                if (response.ok) {
                    this.messageType = 'success';
                    this.message = 'Reset link sent! Check your email.';
                    this.email = '';
                } else {
                    this.messageType = 'error';
                    this.message = 'Email not found. Please try again.';
                }
            } catch (error) {
                this.messageType = 'error';
                this.message = 'An error occurred. Please try again later.';
            } finally {
                this.isLoading = false;
            }
        }
    }
};
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
    background: #667eea;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    margin-bottom: 1rem;
    transition: background 0.3s;
}

button:hover:not(:disabled) {
    background: #764ba2;
}

button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
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
    justify-content: space-between;
}

a {
    color: #667eea;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>