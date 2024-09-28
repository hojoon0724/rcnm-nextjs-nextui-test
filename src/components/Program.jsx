import { allEvents } from '@/database/allEvents';

export function Program({ season, children }) {
  return (
    <>
      {allEvents[season].map(theEvent => (
        <div className={`container flex flex-col`} key={theEvent.title}>
          <div className="flex flex-row justify-between">
            <div className="theEventTitle flex w-auto m-auto">{theEvent.title}</div>
            <div className="theEventStage flex w-auto m-auto">{theEvent.eventStageType}</div>
            {children}
          </div>
        </div>
      ))}
    </>
  );
}
