

function ContentCelebirty({ maleCelebrity, femaleCelebrity }) {
  return (
    <>
      {/* 남자 유명인 */}
      {typeof maleCelebrity === 'object' &&
      Object.keys(maleCelebrity).length > 0 ? (
        <div className="fin-content">
          <h3>🙍‍♂️ 같은 이름을 가진 남자 유명인!</h3>
          {Object.entries(maleCelebrity).map(([k, v]) => (
            <div key={k}>
              {k} <br />
            </div>
          ))}
        </div>
      ) : null}

      {/* 여자 유명인 */}
      {typeof femaleCelebrity === 'object' &&
      Object.keys(femaleCelebrity).length > 0 ? (
        <div className="fin-content">
          <h3>🙍‍♀️ 같은 이름을 가진 여자 유명인!</h3>
          {Object.entries(femaleCelebrity).map(([k, v]) => (
            <div key={k}>
              {k}
              <br />
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
}

export default ContentCelebirty;
