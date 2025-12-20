export const avatarStarterPack = [
    {
        id: 'avatar1',
        src: require('@/assets/avatars/avatar1.svg'),
        backgroundColor: '#ffeeee',
    },
    {
        id: 'avatar2',
        src: require('@/assets/avatars/avatar2.svg'),
        backgroundColor: '#ebfaff',
    },
    {
        id: 'avatar3',
        src: require('@/assets/avatars/avatar3.svg'),
        backgroundColor: '#fffaf0',
    },
    {
        id: 'avatar4',
        src: require('@/assets/avatars/avatar4.svg'),
        backgroundColor: '#e1fffe',
    },
    {
        id: 'avatar5',
        src: require('@/assets/avatars/avatar5.svg'),
        backgroundColor: '#ffe9f9',
    },
    {
        id: 'avatar6',
        src: require('@/assets/avatars/avatar6.svg'),
        backgroundColor: '#6b1400',
    },
    {
        id: 'avatar7',
        src: require('@/assets/avatars/avatar7.svg'),
        backgroundColor: '#002738',
    },
    {
        id: 'avatar8',
        src: require('@/assets/avatars/avatar8.svg'),
        backgroundColor: '#113f19',
    },
    {
        id: 'avatar9',
        src: require('@/assets/avatars/avatar9.svg'),
        backgroundColor: '#003332',
    },
    {
        id: 'avatar10',
        src: require('@/assets/avatars/avatar10.svg'),
        backgroundColor: '#4c122e',
    },
];

export const avatarFullPack = [
    ...avatarStarterPack,
];

export function getAvatarById(avatarId) {
    const allAvatars = avatarFullPack;
    return allAvatars.find(avatar => avatar.id === avatarId) || allAvatars[0];
}