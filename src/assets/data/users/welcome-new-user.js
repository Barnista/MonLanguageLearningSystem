import { avatarStarterPack } from '@/assets/data/avatars/avatars';
import { achievementStarterPack } from '@/assets/data/achievements/achievements';

export default {
    giveFirstMail: function (uid, username) {
        const mail = {
            uid,
            title: 'Welcome to Mon Renaissance, ' + username + ' !!!',
            content: 'Thank you very much for choosing to be a part of us. Mon Renaissance officially welcomes our new member to a space of creativity and inspiration.',
            body: `<div><strong>✨ Dear ${username},</strong><p>Thank you very much for choosing to be a part of us. 🤝 <strong>Mon Renaissance</strong> officially welcomes our new member to a space of creativity and inspiration. 🎨✨</p><p>To celebrate the beginning of our journey together, we have attached a special gift for you in this letter 🎁, so you can experience something extraordinary from us for the first time. 🌟</p><div><p><strong>How to claim your rewards:</strong> 🏆<br>Click the green button below "Claim Rewards" and all your gifts will be stored in your profile. ✅</p></div><br><p>We hope this gift brings a smile to your face. 😊 We are excited to take care of you as our valued member. 💖</p><p>Respectfully, 🙏<br><strong>Mon Renaissance Team</strong> 🏛️</p></div>`,
            localization: {
                th: {
                    lang: 'tha',
                    title: 'ยินดีต้อนรับสู่ยุคเรเนซองค์แห่งอารยธรรมมอญครับ คุณ ' + username + ' !!!',
                    content: `เราขอขอบคุณเป็นอย่างยิ่งที่คุณเลือกเข้ามาเป็นส่วนหนึ่งกับเรา Mon Renaissance ขอต้อนรับสมาชิกใหม่เข้าสู่พื้นที่แห่งการสร้างสรรค์และแรงบันดาลใจอย่างเป็นทางการ`,
                    body: `<div><strong>✨ สวัสดีคุณ ${username},</strong><p>เราขอขอบคุณเป็นอย่างยิ่งที่คุณเลือกเข้ามาเป็นส่วนหนึ่งกับเรา 🤝 <strong>Mon Renaissance</strong> ขอต้อนรับสมาชิกใหม่เข้าสู่พื้นที่แห่งการสร้างสรรค์และแรงบันดาลใจอย่างเป็นทางการ 🎨✨</p><p>เพื่อเป็นการเฉลิมฉลองการเริ่มต้นการเดินทางไปพร้อมกับเรา เราได้แนบของขวัญสุดพิเศษให้แก่คุณไว้ในจดหมายฉบับนี้ 🎁 เพื่อให้คุณได้สัมผัสประสบการณ์สุดพิเศษจากเราเป็นครั้งแรก 🌟</p><div><p><strong>วิธีการเคลมรางวัล:</strong> 🏆<br>คุณสามารถกดปุ่มสีเขียวที่ด้านล่างนี้ แล้วของรางวัลทั้งหมดจะถูกจัดเก็บไว้ในโปรไฟล์ของคุณ ✅</p></div><br><p>เราหวังว่าของขวัญชิ้นนี้จะสร้างรอยยิ้มให้กับคุณ 😊 และเราตื่นเต้นมากที่จะได้ดูแลคุณในฐานะสมาชิกคนสำคัญของเรา 💖</p><p>ด้วยความเคารพ 🙏<br><strong>ทีมงาน Mon Renaissance</strong> 🏛️</p></div>`,
                },
                my: {
                    lang: 'mya',
                    title: 'Mon Renaissance မှ ကြိုဆိုပါတယ်၊ ' + username + '!!!',
                    content: `ကျွန်ုပ်တို့၏ အစိတ်အပိုင်းတစ်ခုအဖြစ် ပါဝင်ရန် ရွေးချယ်ခဲ့သည့်အတွက် အထူးပင် ကျေးဇူးတင်ရှိပါသည်။ ဖန်တီးမှုနှင့် စိတ်ကူးစိတ်သန်းများ ပြည့်နှက်နေသော နေရာသို့ Mon Renaissance မှ အဖွဲ့ဝင်သစ်အဖြစ် တရားဝင် လှိုက်လှဲစွာ ကြိုဆိုပါသည်။`,
                    body: `<div><strong>✨ မင်္ဂလာပါ ${username},</strong><p>ကျွန်ုပ်တို့၏ 🤝 <strong>Mon Renaissance</strong> မိသားစုတွင် ပါဝင်လာသည့်အတွက် ကျေးဇူးအထူးတင်ရှိပါသည်။ ဖန်တီးမှုနှင့် စိတ်ကူးစိတ်သန်းများ ပြည့်နှက်နေသော နေရာသို့ အဖွဲ့ဝင်အသစ်အဖြစ် လှိုက်လှဲစွာ ကြိုဆိုပါသည်။ 🎨✨</p><p>ကျွန်ုပ်တို့နှင့်အတူ ခရီးစဉ်စတင်ခြင်း အထိမ်းအမှတ်အဖြစ် အထူးလက်ဆောင်တစ်ခုကို ဤစာတွင် ပူးတွဲပေးပို့လိုက်ပါသည်။ 🎁🌟</p><div><p><strong>ဆုလာဘ်ရယူရန် နည်းလမ်း:</strong> 🏆<br>အောက်ပါ အစိမ်းရောင် "Claim Rewards" ခလုတ်ကို နှိပ်လိုက်ပါ၊ ဆုလာဘ်များအားလုံးကို သင်၏ Profile တွင် သိမ်းဆည်းသွားမည်ဖြစ်သည်။ ✅</p></div><br><p>ဤလက်ဆောင်က သင့်ကို ပျော်ရွှင်စေမည်ဟု မျှော်လင့်ပါသည်။ 😊 ကျွန်ုပ်တို့၏ အဖိုးတန်အဖွဲ့ဝင်တစ်ဦးအဖြစ် သင့်ကို ဝန်ဆောင်မှုပေးရန် အသင့်ရှိနေပါသည်။ 💖</p><p>လေးစားစွာဖြင့်၊ 🙏<br><strong>Mon Renaissance အဖွဲ့</strong> 🏛️</p></div>`,
                },
                mnw: {
                    lang: 'mnw',
                    title: 'ဒုင်တၠုင်ရုင်သၟာန်စိုပ် Mon Renaissance ရအဴ၊ ' + username + ' !!!',
                    content: `တင်ဂုဏ်ဗွဲမဂၠိုင် မဂွံရုဲစှ်ပါလုပ်ဗွဲမွဲစွံကဵုပိုဲရ။ Mon Renaissance ဒုင်တၠုင်ရုင်သၟာန်ကောန်ဂကောံတၟိ ဗွဲသၞောဝ် လုပ်စိုပ်ကၠုင်ဒၞာဲမၞုံကဵုအစောံစရာဲ ကေုာံ စိုတ်ဓါတ်မတၟိတၟေင်ရ။`,
                    body: `<div><strong>✨ မန်ဂဵုရအဴ ${username},</strong><p>တင်ဂုဏ်ဗွဲမဂၠိုင် မဂွံပါလုပ်ဗွဲမွဲစွံကဵုပိုဲရ။ 🤝 <strong>Mon Renaissance</strong> ဒုင်တၠုင်ရုင်သၟာန်ကောန်ဂကောံတၟိ ဗွဲတၟေင် လုပ်စိုပ်ကၠုင်ဒၞာဲမၞုံကဵုအစောံစရာဲ ကေုာံ စိုတ်ဓါတ်မတၟိတၟေင်ရ။ 🎨✨</p><p>သွက်ဂွံသမ္တီ ပ္ဍဲအခိင်စပ္တံတရဴမွဲစွံကဵုပိုဲဏံဂှ် ပိုဲတုပ်လဝ်လာပ်ဗဇဴတၟေင်မွဲ ပ္ဍဲလိခ်ဏံရ။ 🎁🌟</p><div><p><strong>နယ်ကေတ်လာပ်ဗဇဴ:</strong> 🏆<br>ဍဵုကဍံက်အသာ်ၚေက် "Claim Rewards" လ္ပာ်သၟဝ်ဏံတုဲ လာပ်ဗဇဴဂမၠိုင် သီဂိုင်စွံလဝ် ပ္ဍဲ Profile မၞးရ။ ✅</p></div><br><p>ပိုဲမၞုံမျှော်လဒါ် ลာပ်ဗဇဴဏံ ဂွံကဵုမၞးမၞုံကဵုဂမ္တက်မိပ်စိုတ်ရ။ 😊 ပိုဲမၞုံကဵုတသိုက်စိုတ် သွက်ဂွံလွဳပင်မၞး ပ္ဍဲကောန်ဂကောံတၟေင်ပိုဲရ။ 💖</p><p>ဗွဲမရှ်ေသှ်ေ၊ 🙏<br><strong>ဂကောံကမ္မတဳ Mon Renaissance</strong> 🏛️</p></div>`
                }
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
            open: false,
            author: 'Mon Renaissance'
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