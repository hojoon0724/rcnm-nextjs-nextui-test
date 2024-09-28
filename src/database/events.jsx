/* 
YYYY-MM-DDTHH:MM:SS-05:00
'-05:00' is central daylight savings time
'-06:00' for central standard time

events [season[{event details}]]
events[1] <- index = season
events[1][0] <- index = one event

{
  eventCode: 's00e00s0',
  title: '',
  eventStageType: '',
  datetime: '2024-03-21T19:30:00-05:00',
  venue: '',
  blurb: ``,
  tickets: {
    urlExists: false,
    url: '',
  },
  artists: [],
  program: [
    {
      composerName: '',
      workTitle: '',
      workSubtitle: '',
      compositionYear: '2024',
      isPremiere: false,
      performers: [],
    },
  ],
  intermissionAfterIndex: -1,
  colorTheme: '',
},

*/

export const events = [
  [
    {
      eventCode: 's00e00s0',
      title: '',
      eventStageType: '',
      datetime: '2024-03-21T19:30:00-05:00',
      venue: '',
      blurb: ``,
      tickets: {
        urlExists: false,
        url: '',
      },
      artists: [],
      program: [
        {
          composerName: '',
          workTitle: '',
          workSubtitle: '',
          compositionYear: '2024',
          isPremiere: false,
          performers: [],
        },
      ],
      intermissionAfterIndex: -1,
      colorTheme: '',
    },
  ],
];
