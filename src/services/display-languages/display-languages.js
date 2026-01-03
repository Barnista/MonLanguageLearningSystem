import en from '@/assets/data/localizations/lang_en.json';
import th from '@/assets/data/localizations/lang_th.json';
import my from '@/assets/data/localizations/lang_my.json';
import mnw from '@/assets/data/localizations/lang_mnw.json';

export default {
    options: {
        en: {
            id: 'en',
            label: 'English',
            icon: require('@/assets/flags/en_uk.svg')
        },
        th: {
            id: 'th',
            label: 'ไทย',
            icon: require('@/assets/flags/thai.svg')
        },
        my: {
            id: 'my',
            label: 'မြန်မာ',
            icon: require('@/assets/flags/mya.svg')
        },
        mnw: {
            id: 'mnw',
            label: 'မန်',
            icon: require('@/assets/flags/mon.svg')
        }
    },
    langSet: {
        en: en,
        th: th,
        my: my,
        mnw: mnw
    },
}