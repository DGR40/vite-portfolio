export default function Tags({ tagList }) {
  return (
    <>
      {tagList.map((tag, index) => {
        return (
          <div className="tag" key={index}>
            <p className="tag-text">{tag}</p>
          </div>
        );
      })}
    </>
  );
}
