import en from './en.json';
import th from './th.json';
import mnw from './mnw.json';

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
        mnw: {
            id: 'mnw',
            label: 'မန်',
            icon: require('@/assets/flags/mon.svg')
        }
    },
    langSet: {
        en: en,
        th: th,
        mnw: mnw
    }
}