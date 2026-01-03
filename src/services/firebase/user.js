import { getFirestore, doc, setDoc, getDoc, updateDoc, query, where, getDocs, collection, writeBatch } from 'firebase/firestore';
import welcomeNewUser from '@/assets/data/users/welcome-new-user'
import { getAvatarById } from '@/assets/data/avatars/avatars';

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
    getMailbox: async (uid) => {
        const db = getFirestore();
        const mailboxRef = collection(db, collName, uid, 'Mailbox');
        const q = query(mailboxRef);
        const querySnapshots = await getDocs(q);

        return querySnapshots;
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
    },
    depositRewards: async (uid, rewards) => {
        const db = getFirestore();
        const userRef = doc(db, collName, uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
            const userData = userSnap.data();
            /*
                { type: 'coin', value: 10000 },
                { type: 'gem', value: 20 },
                { type: 'score', value: 100 },
                { type: 'exp', value: 801 },
                { type: 'avatar', value: 'avatar_hongsa_0003' },
                { type: 'avatar', value: 'avatar_hongsa_0008' },
                { type: 'avatar', value: 'avatar_hongsa_0005' },
                { type: 'avatar', value: 'avatar_hongsa_0010' },
            */
            let updatedRewards = {
                coin: userData.coin,
                gem: userData.gem,
                exp: userData.exp,
                score: userData.score
            };

            for (let i = 0; i < rewards.length; i++) {
                const reward = rewards[i];
                if (reward.type === 'coin') {
                    updatedRewards.coin += reward.value;
                } else if (reward.type === 'gem') {
                    updatedRewards.gem += reward.value;
                } else if (reward.type === 'exp') {
                    updatedRewards.exp += reward.value;
                } else if (reward.type === 'score') {
                    updatedRewards.score += reward.value;
                }
            }
            await updateDoc(userRef, updatedRewards);
        }

        for (let i = 0; i < rewards.length; i++) {
            const reward = rewards[i];
            if (reward.type === 'avatar') {
                const avatarDoc = doc(db, collName, uid, 'Avatar', reward.value);
                const foundAvatar = getAvatarById(reward.value);
                const newAvatar = {
                    id: reward.value,
                    stars: foundAvatar.stars,
                    claimedFrom: 'mailReward.firstMail',
                    claimedAt: new Date(),
                    uid: uid
                };
                await setDoc(avatarDoc, newAvatar);
            }
        }

        return true;
    },
    markMailAsClaimed: async (uid, mail) => {
        const db = getFirestore();
        const mailRef = doc(db, collName, uid, 'Mailbox', mail.id);
        await updateDoc(mailRef, {
            claimed: true,
            claimedAt: new Date(),
        });

        mail.claimed = true;
        mail.claimedAt = new Date();

        return mail;
    },
    getAvatarsByStars: async (uid, stars) => {
        const db = getFirestore();
        const avatarRef = collection(db, collName, uid, 'Avatar');
        const q = query(avatarRef, where('stars', '==', stars));
        const querySnapshots = await getDocs(q);

        return querySnapshots;
    }

}