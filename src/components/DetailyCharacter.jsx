import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const DetailyCharacter = () => {
  const { id } = useParams(); // capturamos el ID de la URL
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const getCharacter = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        if (!response.ok) {
          console.error("Character not found");
          return;
        }
        const data = await response.json();
        setCharacter(data); // solo un personaje
      } catch (error) {
        console.error("Error fetching character:", error);
      }
    };

    getCharacter();
  }, [id]);

  if (!character) return <p>Loading...</p>;

  return (
    <div className="container">
      <div className="card" style={{ width: "18rem" }}>
        <img src={character.image} alt={character.name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin?.name}</p>
        </div>
      </div>
    </div>
  );
};