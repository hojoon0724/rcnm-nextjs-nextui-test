/* 
YYYY-MM-DDTHH:MM:SS-05:00
'-05:00' is central daylight savings time
'-06:00' for central standard time

events [season[whichHalf[{event details}]]]
events[1] <- index = season
events[1][0] <- index = spring/summer
events[1][1] <- index = fall/winter
events[1][0][0] <- index = event

{
  eventCode: 's00e00s0',
  theme: {
  background: 'dark',
  text: 'white',
  accent: 'red',}
  banner: {,
    useBanner: false,
    url:``
  },
  title: { ``,
  },
  eventStageType: '',
  datetime: '2024-03-21T19:30:00-05:00',
  venue: '',
  blurb: ``,
  tickets: {
    urlExists: false,
    url: ``,
  },
  artists: [],
  program: [
    {
      composerName: ``,
      workTitle: ``,
      workSubtitle: ``,
      compositionYear: '',
      isPremiere: false,
      performers: [],
    },
  ],
  intermissionAfterIndex: -1,
},

*/

export const allEvents = [
  [
    [
      {
        eventCode: 's00e01s2',
        theme: {
          background: 'dark',
          text: 'white',
          accent: 'red',
        },
        banner: {
          useBanner: false,
          url: ``,
        },
        title: {
          text: 'A Small Step',
          url: ``,
        },
        eventStageType: 'Stage II',
        datetime: '2021-11-06T20:00:00-05:00',
        venue: 'avilution',
        blurb: ``,
        tickets: {
          urlExists: false,
          url: ``,
        },
        artists: ['seanRitenauer', 'chrisColetti', 'jesseChristenson', 'juliaDina'],
        program: [
          {
            composerName: 'andy akiho',
            workTitle: 'hammers',
            workSubtitle: ``,
            compositionYear: '',
            isPremiere: false,
            performers: ['seanRitenauer', 'juliaDina'],
          },
          {
            composerName: 'andy akiho',
            workTitle: '-intuition)(expectation',
            workSubtitle: ``,
            compositionYear: '',
            isPremiere: false,
            performers: ['seanRitenauer', 'chrisColetti'],
          },
          {
            composerName: 'chris cerrone',
            workTitle: 'on being wrong',
            workSubtitle: ``,
            compositionYear: '',
            isPremiere: false,
            performers: ['jesseChristenson'],
          },
          {
            composerName: 'andy akiho',
            workTitle: `the ray's end`,
            workSubtitle: ``,
            compositionYear: '',
            isPremiere: false,
            performers: ['seanRitenauer', 'chrisColetti', 'juliaDina'],
          },
          {
            composerName: 'gabriela ortiz',
            workTitle: 'atlas pumas',
            workSubtitle: ``,
            compositionYear: '',
            isPremiere: false,
            performers: ['seanRitenauer', 'juliaDina'],
          },
          {
            composerName: 'robert honstein',
            workTitle: 'patter',
            workSubtitle: ``,
            compositionYear: '',
            isPremiere: false,
            performers: ['seanRitenauer', 'jesseChristenson', 'juliaDina'],
          },
          {
            composerName: 'andy akiho',
            workTitle: '21',
            workSubtitle: ``,
            compositionYear: '',
            isPremiere: false,
            performers: ['seanRitenauer', 'jesseChristenson'],
          },
          {
            composerName: 'andy akiho',
            workTitle: 'karakurenai',
            workSubtitle: ``,
            compositionYear: '',
            isPremiere: false,
            performers: ['seanRitenauer', 'chrisColetti', 'jesseChristenson', 'juliaDina'],
          },
        ],
        intermissionAfterIndex: -1,
      },
    ],
    [],
  ],
  [
    [
      {
        eventCode: 's01e01s1',
        theme: {
          background: 'dark',
          text: 'white',
          accent: 'red',
        },
        banner: {
          useBanner: false,
          url: ``,
        },
        title: {
          text: 'neo',
          url: '/assets/eventBanners/s01/s00e01s1-title.png',
        },
        eventStageType: 'stage i',
        datetime: '2022-06-16T19:30:00-05:00',
        venue: 'five points recording studio',
        blurb: `
          <p>We look back nearly 100 years when a combination of opportunity and circumstance allowed Prokofiev to write for an obscure collection of musicians. Fast forward to present day when composers chose to write for this ensemble because of the standard established by Prokofiev.</p>
          <p>Throughout this program we challenge the ways we label music by stepping into both musical worlds of the then and the now.</p>
          `,
        tickets: {
          urlExists: false,
          url: ``,
        },
        artists: [],
        program: [],
        intermissionAfterIndex: -1,
      },
      {
        eventCode: 's01e02s2',
        theme: {
          background: 'dark',
          text: 'white',
          accent: 'red',
        },
        banner: {
          useBanner: false,
          url: ``,
        },
        title: {
          text: 'struck',
          url: ``,
        },
        eventStageType: 'stage ii',
        datetime: '2022-09-08T19:30:00-05:00',
        venue: 'Stovehouse',
        blurb: `
          <p>Come to The Electric Belle @ Stovehouse to hear four of the countries best percussionists come together to perform the music of todays most exciting living composers. Be struck by music so visceral, physical, and beautiful in a venue you never knew could be a home for genre bending contemporary classical music</p>
          `,
        tickets: {
          urlExists: false,
          url: ``,
        },
        artists: [],
        program: [],
        intermissionAfterIndex: -1,
      },
    ],
    [
      {
        eventCode: 's01e03s1',
        theme: {
          background: 'dark',
          text: 'white',
          accent: 'red',
        },
        banner: {
          useBanner: true,
          url: ``,
        },
        title: {
          text: 'ground station: chris p. thompson',
          url: ``,
        },
        eventStageType: 'stage i',
        datetime: '2022-10-03T18:00:00-05:00',
        venue: 'UAH - Black Box Theater',
        blurb: `
          <p>Join us for a members-only event with Chris P. Thompson to talk about our first commission Launch Party.</p>
          `,
        tickets: {
          urlExists: false,
          url: ``,
        },
        artists: [],
        program: [],
        intermissionAfterIndex: -1,
      },
      {
        eventCode: 's01e03s2',
        theme: {
          background: 'dark',
          text: 'white',
          accent: 'red',
        },
        banner: {
          useBanner: false,
          url: ``,
        },
        title: {
          text: 'outside the box',
          url: ``,
        },
        eventStageType: 'stage ii',
        datetime: '2022-09-08T19:30:00-05:00',
        venue: 'UAH - Black Box Theater',
        blurb: `
          <p>UAH Constellation Concert Series presents Rocket City New Music, performing "in the round" at Morton Hall's state-of-the-art Black Box Theatre. The program features contemporary works for piano trio, percussion, and electronics.</p>
          `,
        tickets: {
          urlExists: false,
          url: ``,
        },
        artists: [],
        program: [],
        intermissionAfterIndex: -1,
      },
      {
        eventCode: 's01e04s1',
        theme: {
          background: 'dark',
          text: 'white',
          accent: 'red',
        },
        banner: {
          useBanner: true,
          url: ``,
        },
        title: {
          text: 'happy hour salon with: hsuan-fong chen',
          url: ``,
        },
        eventStageType: 'stage i',
        datetime: '2022-10-04T19:30:00-05:00',
        venue: 'Private Residence',
        blurb: `
          <p>Join us for a members-only event with Hsuan-Fong Chen.</p>
          <p>Wind down your day and enjoy our Happy Hour Salon featuring virtuoso oboist, Hsuan-Fong Chen. Join us at our final Stage 1 event as we approach our Season 1 finale and get a sneak peak at season 2.</p>
          `,
        tickets: {
          urlExists: false,
          url: ``,
        },
        artists: [],
        program: [],
        intermissionAfterIndex: -1,
      },
      {
        eventCode: 's01e04s2',
        theme: {
          background: 'dark',
          text: 'white',
          accent: 'red',
        },
        banner: {
          useBanner: false,
          url: ``,
        },
        title: {
          text: 'p=mv',
          url: ``,
        },
        eventStageType: 'stage ii',
        datetime: '2022-12-17T19:30:00-05:00',
        venue: 'UAH - Black Box Theater',
        blurb: `
          <p>Be a part of the equation and join us in our return to this extraordinary venue. Our first season comes to a close with a program of relentlessly rhythmic music by some of todays most exciting composers. Help us bring our first season to a fever pitch and take off into Season 2. Leave the velocity to us, the only thing missing is you!</p>
          `,
        tickets: {
          urlExists: false,
          url: ``,
        },
        artists: [],
        program: [],
        intermissionAfterIndex: -1,
      },
    ],
  ],
];
