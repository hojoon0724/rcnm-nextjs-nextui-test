export function BlurbText({ paragraph }) {
  return <div className="blurb" dangerouslySetInnerHTML={{ __html: paragraph }}></div>;
}
