export default function Article({ article }) {
  return (
    <article>
      {!article ? (
        <p>No article selected</p>
      ) : (
        <section>
          <h2>{article.title}</h2>
          {/* added toDate to show current date rather than a time stamp in the article */}
          <p className="date">{`Posted: ${article.date.toDate()}`}</p>
          <p className="body">{article.body}</p>
        </section>
      )}
    </article>
  );
}
