import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Character } from "../components/GetCharacter.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			
				<Character/>
			
		</div>
	);
}; 