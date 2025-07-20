import en from './en';
import th from './th';

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
        }
    },
    langSet: {
        en: en,
        th: th
    }
}