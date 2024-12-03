export default function SearchResults({ results }) {
  return (
    <article>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Article</th>
            <th>Author</th>
            <th>Points</th>
            <th>Date</th>
          </tr>
        </thead>
        {Boolean(results.length) ? (
          <tbody>
            {results.map((item, index) => {
              return (
                <tr key={item.objectID} style={{ "--delay": index }}>
                  <th>{index + 1}</th>
                  <td>
                    <a href={item.url}>{item.title}</a>
                  </td>
                  <td>{item.author}</td>
                  <td>{item.points}</td>
                  <td>
                    {new Date(item.created_at).toLocaleDateString("en-US")}
                  </td>
                </tr>
              );
            })}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td style={{ textAlign: "center", padding: "24px" }} colSpan={5}>
                No results
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </article>
  );
}
