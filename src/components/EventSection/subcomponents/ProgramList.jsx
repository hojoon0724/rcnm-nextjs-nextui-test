export default function ProgramList({ programArr }) {
  return programArr ? (
    programArr.length > 0 ? (
      <div className="programContainer uppercase">
        <h2 className="py-2">Program</h2>
        {programArr.map(work => (
          <div className="workRow py-1.5 leading-4 text-small flex" key={`${work.composerName}-${work.workTitle}`}>
            <div className="composerName pr-2 w-52">{work.composerName}</div>
            <div className="workTitle">
              {work.workTitle} {work.compositionYear === `` ? `` : `(${work.compositionYear})`}
            </div>
          </div>
        ))}
      </div>
    ) : (
      ''
    )
  ) : (
    ''
  );
}
