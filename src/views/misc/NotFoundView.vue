<template>
    <div class="not-found">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <router-link to="/">Go back to Home</router-link>
    </div>
</template>

<script setup>
// No script logic needed for this simple Not Found page
</script>

<style scoped>
.not-found {
    text-align: center;
    margin-top: 10vh;
}
.not-found h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}
.not-found p {
    margin-bottom: 2rem;
    color: #666;
}
</style>