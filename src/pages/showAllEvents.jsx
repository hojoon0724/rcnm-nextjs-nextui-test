import { allEvents } from '@/database/allEvents';

export default function showAllEvents() {
  let blurbExample = allEvents[1][1][2].blurb;
  return <div className="blurb" dangerouslySetInnerHTML={{ __html: blurbExample }}></div>;
}
