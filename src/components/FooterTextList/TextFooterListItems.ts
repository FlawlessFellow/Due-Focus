export type TextFooterListItems = {
    id?: number;
    text: string;
    classNames: string;
    wrapFirstWordInStrong: boolean;
};

const textFooterListItems: TextFooterListItems[] = [
    { text: 'Duefocus. Time tracking', classNames: 'footer__list-text', wrapFirstWordInStrong: true },
    { text: 'Duecode. Engineering metrics', classNames: 'footer__list-text', wrapFirstWordInStrong: true },
    { text: 'Duerank. Global developers leaderboard', classNames: 'footer__list-text', wrapFirstWordInStrong: true },
    { text: 'Duelearn. Writing better code', classNames: 'footer__list-text', wrapFirstWordInStrong: true },
    { text: 'Duetask. Set realistic estimates', classNames: 'footer__list-lastText', wrapFirstWordInStrong: true },
];

export default textFooterListItems;
