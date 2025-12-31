import { avatarStarterPack } from '@/data/avatars/avatars';
import { achievementStarterPack } from '@/data/achievements/achievements';

export default {
    giveFirstMail: function (uid, username) {
        const mail = {
            uid,
            title: 'Welcome to Mon Renaissance, ' + username + ' !!!',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in eleifend augue. Quisque molestie diam lorem, et venenatis felis malesuada et. Aenean augue turpis, molestie in velit vitae, faucibus congue ex. Nunc lacinia consectetur ex, vitae molestie mi tincidunt eu. Etiam at nunc vulputate, porttitor sapien eleifend, lacinia turpis. Nam hendrerit feugiat pretium. Nullam sit amet felis id sem gravida sagittis. Curabitur ullamcorper ipsum mauris, in auctor nisi facilisis eu. Vestibulum in luctus sem. Integer ullamcorper aliquam neque eget aliquet. Donec in felis efficitur, posuere augue congue, suscipit ligula. Suspendisse potenti.<br><br>Cras porta, nulla id semper consequat, odio nulla gravida felis, ac vestibulum nibh libero eu enim. Proin ultrices, ligula sit amet efficitur sodales, justo dolor blandit tortor, vitae iaculis massa lacus ornare est. Maecenas eu nisl eu risus eleifend commodo sit amet elementum magna. Morbi vitae mi nunc. Donec suscipit metus sed nisi eleifend ultrices. Nam pellentesque mattis dui at iaculis. Nam fermentum nulla eget risus vestibulum, non vehicula urna viverra. Morbi mattis tempus ullamcorper. Nulla tristique, nunc sit amet gravida blandit, ante nulla consequat urna, condimentum efficitur dui urna condimentum justo.',
            localization: {
                th: {
                    lang: 'tha',
                    title: 'ยินดีต้อนรับสู่ยุคเรเนซองค์แห่งอารยธรรมมอญครับ คุณ ' + username + ' !!!',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in eleifend augue. Quisque molestie diam lorem, et venenatis felis malesuada et. Aenean augue turpis, molestie in velit vitae, faucibus congue ex. Nunc lacinia consectetur ex, vitae molestie mi tincidunt eu. Etiam at nunc vulputate, porttitor sapien eleifend, lacinia turpis. Nam hendrerit feugiat pretium. Nullam sit amet felis id sem gravida sagittis. Curabitur ullamcorper ipsum mauris, in auctor nisi facilisis eu. Vestibulum in luctus sem. Integer ullamcorper aliquam neque eget aliquet. Donec in felis efficitur, posuere augue congue, suscipit ligula. Suspendisse potenti.<br><br>Cras porta, nulla id semper consequat, odio nulla gravida felis, ac vestibulum nibh libero eu enim. Proin ultrices, ligula sit amet efficitur sodales, justo dolor blandit tortor, vitae iaculis massa lacus ornare est. Maecenas eu nisl eu risus eleifend commodo sit amet elementum magna. Morbi vitae mi nunc. Donec suscipit metus sed nisi eleifend ultrices. Nam pellentesque mattis dui at iaculis. Nam fermentum nulla eget risus vestibulum, non vehicula urna viverra. Morbi mattis tempus ullamcorper. Nulla tristique, nunc sit amet gravida blandit, ante nulla consequat urna, condimentum efficitur dui urna condimentum justo.',
                },
                my: {
                    lang: 'mya',
                    title: 'Mon Renaissance မှ ကြိုဆိုပါတယ်၊ ' + username + '!!!',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in eleifend augue. Quisque molestie diam lorem, et venenatis felis malesuada et. Aenean augue turpis, molestie in velit vitae, faucibus congue ex. Nunc lacinia consectetur ex, vitae molestie mi tincidunt eu. Etiam at nunc vulputate, porttitor sapien eleifend, lacinia turpis. Nam hendrerit feugiat pretium. Nullam sit amet felis id sem gravida sagittis. Curabitur ullamcorper ipsum mauris, in auctor nisi facilisis eu. Vestibulum in luctus sem. Integer ullamcorper aliquam neque eget aliquet. Donec in felis efficitur, posuere augue congue, suscipit ligula. Suspendisse potenti.<br><br>Cras porta, nulla id semper consequat, odio nulla gravida felis, ac vestibulum nibh libero eu enim. Proin ultrices, ligula sit amet efficitur sodales, justo dolor blandit tortor, vitae iaculis massa lacus ornare est. Maecenas eu nisl eu risus eleifend commodo sit amet elementum magna. Morbi vitae mi nunc. Donec suscipit metus sed nisi eleifend ultrices. Nam pellentesque mattis dui at iaculis. Nam fermentum nulla eget risus vestibulum, non vehicula urna viverra. Morbi mattis tempus ullamcorper. Nulla tristique, nunc sit amet gravida blandit, ante nulla consequat urna, condimentum efficitur dui urna condimentum justo.',
                },
            },
            date: new Date(),
            rewards: [
                { type: 'coin', value: 10000 },
                { type: 'gem', value: 20 },
                { type: 'score', value: 100 },
                { type: 'exp', value: 801 },
                { type: 'avatar', value: 'avatar_hongsa_0003' },
                { type: 'avatar', value: 'avatar_hongsa_0008' },
                { type: 'avatar', value: 'avatar_hongsa_0005' },
                { type: 'avatar', value: 'avatar_hongsa_0010' },
            ],
            claimed: false,
            open: false
        };

        return mail;
    },
    giveFirstAvatars: function (uid) {
        let unlockedAvatars = [];

        avatarStarterPack.forEach(avatar => {
            unlockedAvatars.push({
                id: avatar.id,
                stars: 4,
                claimedFrom: 'starterPack',
                claimedAt: new Date(),
                uid: uid
            });
        });

        return unlockedAvatars;
    },
    giveFirstAchievement: function (uid) {
        let unlockedAchievement = {
            id: achievementStarterPack[0].id,
            claimedFrom: 'starterPack',
            claimedAt: new Date(),
            uid: uid
        };
        return unlockedAchievement;
    }
}