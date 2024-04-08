export type TextFooterListItems = {
    id: number;
    text: string;
    classNames: string;
    wrapFirstWordInStrong: boolean;
};

const textFooterListItems: TextFooterListItems[] = [
    { id: 1, text: 'Duefocus. Time tracking', classNames: 'footer__list-text', wrapFirstWordInStrong: true },
    { id: 2, text: 'Duecode. Engineering metrics', classNames: 'footer__list-text', wrapFirstWordInStrong: true },
    { id: 3, text: 'Duerank. Global developers leaderboard', classNames: 'footer__list-text', wrapFirstWordInStrong: true },
    { id: 4, text: 'Duelearn. Writing better code', classNames: 'footer__list-text', wrapFirstWordInStrong: true },
    { id: 5, text: 'Duetask. Set realistic estimates', classNames: 'footer__list-lastText', wrapFirstWordInStrong: true },
];

export default textFooterListItems;
