<template>
    <div>

    </div>
</template>

<script>
import { firebaseApp } from '@/services/firebase/app';
import { getAuth, signOut } from 'firebase/auth';

export default {
    name: 'LogoutView',
    mounted() {
        // Perform logout logic here
        const auth = getAuth(firebaseApp);
        signOut(auth).then(() => {
            console.log('User signed out.');
            this.$router.push({ name: 'home', query: { lang: this.$route.query.lang || 'en' } });
        }).catch((error) => {
            console.error('Error signing out:', error);
        });
    }
}
</script>