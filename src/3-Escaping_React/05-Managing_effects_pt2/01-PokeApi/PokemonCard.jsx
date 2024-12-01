import * as React from "react";
import getColors from "image-pal-canvas";

export default function Pokemon({ loading, error, data }) {
  const imgUrl =
    data?.sprites?.other?.["official-artwork"]?.front_default ||
    "https://ui.dev/images/courses/pokemon-unknown.png";
  const [color, setColor] = React.useState("transparent");
  const [backgroundColor, setBackgroundColor] = React.useState("transparent");

  React.useEffect(() => {
    const handleLoad = () => {
      getColors(
        {
          srcUrl: imgUrl,
          mean: false,
          maxColors: 4,
          minDensity: 0.001,
          cubicCells: 27,
        },
        (_, colors) => {
          const [r, g, b] = colors[0].rgb;
          const textColor = colors.at(-2).hex;
          setColor(textColor);
          setBackgroundColor(`rgba(${r}, ${g}, ${b}, .3)`);
        }
      );
    };

    setColor("");

    const img = new Image();
    img.src = imgUrl;

    img.addEventListener("load", handleLoad);
    return () => img.removeEventListener("load", handleLoad);
  }, [imgUrl]);

  if (error) {
    return <div>{error}</div>;
  } else {
    return (
      <div className={`card ${loading ? "loading" : ""}`}>
        <div className="content">
          <div className="front" style={{ color, backgroundColor }}>
            <figure>
              <img width="475px" height="475px" src={imgUrl} alt={data?.name} />
              <figcaption>
                <h4>{data?.name}</h4>
                <h6>No:{data?.id}</h6>
              </figcaption>
            </figure>
          </div>
          <div className="back">
            <figure>
              <img
                width="64px"
                height="64px"
                src="https://ui.dev/images/courses/pokemon-logo.png"
                alt="pokemon logo"
              />
              <figcaption>Loading...</figcaption>
            </figure>
          </div>
        </div>
      </div>
    );
  }
}
