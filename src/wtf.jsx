import * as React from "react";
import { fetchPokemon } from "./api";

export default function App() {
  const [id, setId] = React.useState(1);
  const [pokemon, setPokemon] = React.useState(null);

  React.useEffect(() => {
    const handleFetchPokemon = async () => {
      const { error, response } = await fetchPokemon(id);
      setPokemon(response);
    };

    handleFetchPokemon();
  }, [id]);

  return <main>{JSON.stringify({ id, pokemon }, null, 2)}</main>;
}
