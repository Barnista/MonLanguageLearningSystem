export const avatarStarterPack = [
    {
        id: 'avatar_hongsa_0001',
        name: 'Simple Hongsa - Orange',
        src: require('@/assets/avatars/avatar_hongsa_0001.svg'),
        backgroundColor: '#ffeeee',
        stars: 4,
    },
    {
        id: 'avatar_hongsa_0006',
        name: 'Simple Hongsa - Orange 2',
        src: require('@/assets/avatars/avatar_hongsa_0006.svg'),
        backgroundColor: '#6b1400',
        stars: 4,
    },
];

export const avatarStandardSSPack = [
    {
        id: 'avatar_ss_hongsa_0001',
        name: 'New Hongsa - Flame',
        src: require('@/assets/avatars/ss/avatar_ss_hongsa_0001.svg'),
        backgroundColor: '#fff6e9',
        stars: 5,
    },
    {
        id: 'avatar_ss_asva_0001',
        name: 'Asva - Flame',
        src: require('@/assets/avatars/ss/avatar_ss_asva_0001.svg'),
        backgroundColor: '#fff6e9',
        stars: 5,
    }
]

export const avatarStandardPack = [
    ...avatarStarterPack,
    {
        id: 'avatar_hongsa_0002',
        name: 'Simple Hongsa - Blue',
        src: require('@/assets/avatars/avatar_hongsa_0002.svg'),
        backgroundColor: '#ebfaff',
        stars: 4,
    },
    {
        id: 'avatar_hongsa_0003',
        name: 'Simple Hongsa - Green',
        src: require('@/assets/avatars/avatar_hongsa_0003.svg'),
        backgroundColor: '#fffaf0',
        stars: 4,
    },
    {
        id: 'avatar_hongsa_0004',
        name: 'Simple Hongsa - Ocean',
        src: require('@/assets/avatars/avatar_hongsa_0004.svg'),
        backgroundColor: '#e1fffe',
        stars: 4,
    },
    {
        id: 'avatar_hongsa_0005',
        name: 'Simple Hongsa - Rose',
        src: require('@/assets/avatars/avatar_hongsa_0005.svg'),
        backgroundColor: '#ffe9f9',
        stars: 4,
    },
    {
        id: 'avatar_hongsa_0007',
        name: 'Simple Hongsa - Blue 2',
        src: require('@/assets/avatars/avatar_hongsa_0007.svg'),
        backgroundColor: '#002738',
        stars: 4,
    },
    {
        id: 'avatar_hongsa_0008',
        name: 'Simple Hongsa - Green 2',
        src: require('@/assets/avatars/avatar_hongsa_0008.svg'),
        backgroundColor: '#113f19',
        stars: 4,
    },
    {
        id: 'avatar_hongsa_0009',
        name: 'Simple Hongsa - Ocean 2',
        src: require('@/assets/avatars/avatar_hongsa_0009.svg'),
        backgroundColor: '#003332',
        stars: 4,
    },
    {
        id: 'avatar_hongsa_0010',
        name: 'Simple Hongsa - Rose 2',
        src: require('@/assets/avatars/avatar_hongsa_0010.svg'),
        backgroundColor: '#4c122e',
        stars: 4,
    },
];

export const avatarFullPack = [
    ...avatarStandardPack,
    ...avatarStandardSSPack
];

export function getAvatarById(avatarId) {
    const allAvatars = avatarFullPack;
    return allAvatars.find(avatar => avatar.id === avatarId) || allAvatars[0];
}