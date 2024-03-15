import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";

const MenuCards = ({handleCook}) => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('recipeCard.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 lg:w-[60%]">
            {
                cards.map((card) => <SingleCard key={card.recipe_id} card={card} handleCook={handleCook}></SingleCard>)
            }
        </div>
    );
};

MenuCards.propTypes = {
    handleCook: PropTypes.func.isRequired
};

export default MenuCards;