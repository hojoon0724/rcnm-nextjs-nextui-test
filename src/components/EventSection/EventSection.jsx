import { BlurbText } from './subcomponents/BlurbText';

/* 
data in = object

{
  eventCode: 's00e00s0',
  banner: {
    useBanner: false,
    url:``
  },
  title: ``,
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

export function EventSection({ theEvent }) {
  return (
    <div className="theEventContainer" key={theEvent.eventCode}>
      <BlurbText paragraph={theEvent.blurb} />
    </div>
  );
}
