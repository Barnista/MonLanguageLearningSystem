import { getFirestore, doc, setDoc, getDoc, updateDoc, query, where, getDocs, collection, writeBatch } from 'firebase/firestore';
import welcomeNewUser from '@/data/users/welcome-new-user'

const collName = 'User';

export default {
    collectionName: collName,
    createUserProfile: async (uid, email, username, firstName, lastName, avatar, gender, generation, country, monCommunity, score, exp, gem, coin, isWelcomed) => {
        const db = getFirestore();
        const userRef = doc(db, collName, uid);
        const result = await setDoc(userRef, {
            uid,
            username,
            firstName,
            lastName,
            avatar,
            email,
            gender,
            generation,
            country,
            monCommunity,
            score,
            exp,
            gem,
            coin,
            isWelcomed,
            createdAt: new Date(),
        });

        //GIVE FIRST MAIL
        const firstMail = welcomeNewUser.giveFirstMail(uid, `${firstName} ${lastName}`)
        await setDoc(doc(userRef, 'Mailbox', 'firstmail'), firstMail);

        //CREATE QUEST METADATA
        await setDoc(doc(userRef, 'Quest', 'metadata'), {});

        //GIVE FIRST ACHIEVEMENT
        const firstAchievement = welcomeNewUser.giveFirstAchievement(uid);
        await setDoc(doc(userRef, 'Achievement', 'firstachievement'), firstAchievement);

        //GIVE FIRST AVATARS
        const firstAvatars = welcomeNewUser.giveFirstAvatars(uid);
        const batch = writeBatch(db);
        firstAvatars.forEach(item => {
            batch.set(doc(userRef, 'Avatar', item.id), item);
        });
        await batch.commit();

        return result;
    },
    updateUserProfile: async (uid, firstName, lastName, avatar, gender, generation, country, monCommunity) => {
        const db = getFirestore();
        const userRef = doc(db, collName, uid);
        const result = await updateDoc(userRef, {
            firstName,
            lastName,
            avatar,
            gender,
            generation,
            country,
            monCommunity
        });

        return result;
    },
    updateUserAvatar: async (uid, avatar) => {
        const db = getFirestore();
        const userRef = doc(db, collName, uid);
        const result = await updateDoc(userRef, {
            avatar,
        });

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
    },
    getMailboxCount: async (uid) => {
        const db = getFirestore();
        const mailboxRef = collection(db, collName, uid, 'Mailbox');
        const q = query(mailboxRef, where('claimed', '==', false));
        const querySnapshots = await getDocs(q);

        return querySnapshots.size;
    },
    getQuestCompletedCount: async (uid) => {
        const db = getFirestore();
        const questRef = collection(db, collName, uid, 'Quest');
        const q = query(questRef, where('completed', '==', true));
        const querySnapshots = await getDocs(q);

        return querySnapshots.size;
    },
    getQuestCount: async (uid) => {
        const db = getFirestore();
        const questRef = collection(db, collName, uid, 'Quest');
        const q = query(questRef, where('completed', '==', true), where('completed', '==', false));
        const querySnapshots = await getDocs(q);

        return querySnapshots.size;
    },
    getAchievementUnclaimedCount: async (uid) => {
        const db = getFirestore();
        const achievementRef = collection(db, collName, uid, 'Achievement');
        const q = query(achievementRef, where('claimed', '==', false));
        const querySnapshots = await getDocs(q);

        return querySnapshots.size;
    }
}