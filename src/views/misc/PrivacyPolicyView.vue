<template>
    <div class="privacy-policy">
        <h1>Privacy Policy & Terms of Service</h1>
        
        <section>
            <h2>1. Privacy Policy</h2>
            <p>Last updated: {{ currentDate }}</p>
            <div class="policy-content">
                <h3>Information We Collect</h3>
                <ul>
                    <li>Personal information (name, email address)</li>
                    <li>Learning progress and performance data</li>
                    <li>Usage statistics and interaction data</li>
                </ul>

                <h3>How We Use Your Information</h3>
                <ul>
                    <li>To provide and maintain our language learning services</li>
                    <li>To track your learning progress</li>
                    <li>To improve our educational content and user experience</li>
                    <li>To communicate important updates and changes</li>
                </ul>
            </div>
        </section>

        <section>
            <h2>2. General Use</h2>
            <div class="policy-content">
                <h3>Platform Usage</h3>
                <ul>
                    <li>The platform is designed for language learning purposes only</li>
                    <li>Users must not share account credentials</li>
                    <li>Content must not be reproduced without permission</li>
                    <li>Users are responsible for maintaining their account security</li>
                </ul>
            </div>
        </section>

        <section>
            <h2>3. Membership System</h2>
            <div class="policy-content">
                <h3>Membership Levels</h3>
                <ul>
                    <li>Free Basic Access</li>
                    <li>Premium Membership</li>
                    <li>Educational Institution Accounts</li>
                </ul>

                <h3>Membership Terms</h3>
                <ul>
                    <li>Memberships are non-transferable</li>
                    <li>Payment terms are subject to the selected plan</li>
                    <li>Cancellation policy applies as per membership agreement</li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'PrivacyPolicyView',
    computed: {
        currentDate() {
            return new Date().toLocaleDateString()
        }
    }
}
</script>

<style scoped>
.privacy-policy {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 40px;
}

section {
    margin-bottom: 40px;
}

h2 {
    color: #42b983;
    border-bottom: 2px solid #42b983;
    padding-bottom: 10px;
    margin-bottom: 20px;
}

h3 {
    color: #2c3e50;
    margin: 20px 0 10px;
}

.policy-content {
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
}

ul {
    padding-left: 20px;
}

li {
    margin-bottom: 8px;
    line-height: 1.6;
}
</style>