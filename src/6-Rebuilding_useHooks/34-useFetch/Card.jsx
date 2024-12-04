import * as React from "react";

export default function Pokemon({ loading, error, data }) {
  const imgUrl = data?.sprites?.other?.["official-artwork"]?.front_default;

  if (error) {
    return <div>{error}</div>;
  } else {
    return (
      <div className="card">
        <div className="content">
          <figure>
            {imgUrl ? (
              <img
                key={imgUrl}
                width="475px"
                height="475px"
                src={imgUrl}
                alt={data?.name}
              />
            ) : (
              <div className="loading-placeholder" />
            )}
            <figcaption>
              <h4>{data?.name}</h4>
            </figcaption>
          </figure>
        </div>
      </div>
    );
  }
}
