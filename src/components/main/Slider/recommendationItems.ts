type Recommendation = {
    text: string;
    specialistName: string;
    specialistPosition: string;
    id: number;
};

const recommendations: Recommendation[] = [
    {
        id: 1,
        text: 'Thanks guys, you are doing a great job. Honestly right now you blow away any of the competitors by having direct integration with 99% of the other toolsets I use. The fact I can hit one button and it blows up my slack/gcaht feeds. I love your time tracking app. Keep it up!',
        specialistName: 'Noah H.',
        specialistPosition: 'Founder of Chromakey.io',
    },
    {
        id: 2,
        text: "Your time tracker is incredible. Now I finally found the solution for both employees and clients. Our team is doing things way faster and finally we don't have to worry about our earnings. Thank you.",
        specialistName: 'Catherine S.',
        specialistPosition: 'Design Team Lead',
    },
    {
        id: 3,
        text: "“I'm really happy with this app because this is something I was looking for at cheap price and fortunately I found it. The plus is I'm getting features like, activities, screenshots and invoices all in one app. That's why I'm planning for going on long term basis and enjoying this time tracking software.“",
        specialistName: 'Imran Z.',
        specialistPosition: 'Senior developer',
    },
    {
        id: 4,
        text: '“You guys have done amazing work. DueFocus is really just incredible. Keep up the good work!“',
        specialistName: 'TradeThePlan CEO',
        specialistPosition: 'Design Team Lead',
    },
];

export default recommendations;
