import { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { Link } from "react-router-dom"

export const Character = () => {
    const { store, dispatch } = useGlobalReducer()
    console.log(store)
    const getCharacter = async () => {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character')
            const data = await response.json();
            console.log(data)
            dispatch({ type: 'tomar_personajes', payload: data.results })  //dispatch tiene type y payload
            if (response.status === 404) {
                console.error("Character not found.");
                return;
            }
        } catch (error) {
            console.error("Error loading contacts:", error);
        }
    }
    useEffect(() => {
        getCharacter()
    }, [])

    return (
        <div className="container">
            <div className="row">
                {store.characters?.map(character => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4" key={character.id}>
                        <div className="card h-100" style={{ width: "100%" }}>
                            <img src={character.image} alt={character.name} className="card-img-top" />
                            <div className="card-body">
                                <Link to={`/character/${character.id}`} className="text-decoration-none">
                                    {character.name}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}