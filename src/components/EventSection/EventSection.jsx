import { BlurbText } from './subcomponents/BlurbText';
import { formatInTimeZone } from 'date-fns-tz';
import ProgramList from './subcomponents/ProgramList';
import Image from 'next/image';

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

export default function EventSection({ theEvent }) {
  const datetime = new Date(theEvent.datetime);
  const timezone = 'America/Chicago';
  theEvent.title.url === '' ? console.log(theEvent.title) : console.log(theEvent.title.url);

  return (
    <section className="py-10">
      <div className="theEventContainer" key={theEvent.eventCode}>
        <div className="eventDateTimeVenueContainer flex flex-row justify-between py-3 text-small">
          <div className="eventDate uppercase">{formatInTimeZone(datetime, timezone, 'EEEE - MM/dd/yyyy - HH:mm')}</div>
          <div className="eventVenue uppercase">{theEvent.venue}</div>
        </div>
        <hr />
        {theEvent.title.url !== '' ? (
          <div className="eventTitleBannerPngContainer">
            <Image src={theEvent.title.url} alt={theEvent.title.text} width={2150} height={849} />
          </div>
        ) : (
          <div className="title uppercase text-4xl py-3">{theEvent.title.text}</div>
        )}
        <BlurbText paragraph={theEvent.blurb} />
        <ProgramList programArr={theEvent.program} />
      </div>
    </section>
  );
}
