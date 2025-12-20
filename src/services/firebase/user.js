import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const collName = 'User';

export default {
    collectionName: collName,
    createUserProfile: async (uid, email, firstName, lastName, avatar, gender, generation, country, monCommunity, rank, exp, gem, coin, isWelcomed) => {
        const db = getFirestore();
        const userRef = doc(db, collName, uid);
        const result = await setDoc(userRef, {
            uid,
            firstName,
            lastName,
            avatar,
            email,
            gender,
            generation,
            country,
            monCommunity,
            rank,
            exp,
            gem,
            coin,
            isWelcomed,
            createdAt: new Date().toISOString(),
        });
        await setDoc(doc(userRef, 'Mailbox', 'metadata'), {});
        await setDoc(doc(userRef, 'Quest', 'metadata'), {});

        return result;
    },
    loadUserData: async (uid) => {
        const db = getFirestore();
        const userRef = doc(db, collName, uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
            return userSnap.data();
        } else {
            return null;
        }
    }
}