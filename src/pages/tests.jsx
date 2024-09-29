import { ColorTest } from '@/components/ColorTest';
import EventSection from '@/components/EventSection/EventSection';
import { allEvents } from '@/database/allEvents';
import ProgramList from '@/components/EventSection/subcomponents/ProgramList';

export default function tests() {
  const season0 = allEvents[0];
  const season1 = allEvents[1];

  // console.log(allEvents[0][0][0]);

  return (
    <>
      <ColorTest />
      <ProgramList />
      <section className="width1200">
        {allEvents.map(season =>
          season.map(half => half.map(theEvent => <EventSection theEvent={theEvent} key={theEvent.eventCode} />)),
        )}
      </section>
    </>
  );
}
