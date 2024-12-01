import "./App.css";
import * as React from "react";

export default function CountryInfo() {
  const [countryCode, setCountryCode] = React.useState("AU");
  const [data, setData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    let ignore = false;

    const fetchCountry = async () => {
      const url = `https://restcountries.com/v2/alpha/${countryCode}`;
      setIsLoading(true);

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (ignore === false) {
          setData(data);
          setError(null);
          setIsLoading(false);
        }
      } catch (error) {
        if (ignore === false) {
          setData(null);
          setError(error);
          setIsLoading(false);
        }
      }
    };

    fetchCountry();

    return () => {
      ignore = true;
    };
  }, [countryCode]);

  const handleChange = (e) => {
    setCountryCode(e.target.value);
  };

  return (
    <div className="container">
      <section>
        <header>
          <h1>Country Info:</h1>

          <label htmlFor="country">Select a country:</label>
          <div>
            <select id="country" value={countryCode} onChange={handleChange}>
              <option value="AU">Australia</option>
              <option value="CA">Canada</option>
              <option value="CN">China</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
              <option value="IN">India</option>
              <option value="JP">Japan</option>
              <option value="MX">Mexico</option>
              <option value="GB">United Kingdom</option>
              <option value="US">United States of America</option>
            </select>
            {isLoading && <span>Loading...</span>}
            {error && <span>{error.message}</span>}
          </div>
        </header>

        {data && (
          <article>
            <h2>{data.name}</h2>
            <table>
              <tbody>
                <tr>
                  <td>Capital:</td>
                  <td>{data.capital}</td>
                </tr>
                <tr>
                  <td>Region:</td>
                  <td>{data.region}</td>
                </tr>
                <tr>
                  <td>Population:</td>
                  <td>{data.population}</td>
                </tr>
                <tr>
                  <td>Area:</td>
                  <td>{data.area}</td>
                </tr>
              </tbody>
            </table>
          </article>
        )}
      </section>
    </div>
  );
}
