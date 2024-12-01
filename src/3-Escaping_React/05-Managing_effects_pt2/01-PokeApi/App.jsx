import "./App.css";
import * as React from "react";
import { fetchPokemon } from "./api";
import Carousel from "./Carousel";
import PokemonCard from "./PokemonCard";

export default function App() {
  const [id, setId] = React.useState(1);
  const [pokemon, setPokemon] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const handlePrevious = () => {
    if (id > 1) {
      setId(id - 1);
    }
  };

  const handleNext = () => setId(id + 1);

  React.useEffect(() => {
    let ignore = false;

    const handleFetchPokemon = async () => {
      setLoading(true);
      setError(null);

      const { error, response } = await fetchPokemon(id);

      if (ignore) {
        return;
      } else if (error) {
        setError(error.message);
      } else {
        setPokemon(response);
      }

      setLoading(false);
    };

    handleFetchPokemon();

    return () => {
      ignore = true;
    };
  }, [id]);

  return (
    <Carousel onPrevious={handlePrevious} onNext={handleNext}>
      <PokemonCard loading={loading} error={error} data={pokemon} />
    </Carousel>
  );
}
