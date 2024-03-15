import PropTypes from 'prop-types';
import { IoMdTime } from "react-icons/io";
import { FaFireAlt } from "react-icons/fa";

const SingleCard = ({card, handleCook}) => {
    const {recipe_image, recipe_name, description, ingredients, calories, preparing_time} = card;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={recipe_image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{recipe_name}</h2>
                <p>{description}</p>
                <div className='divider'></div>
                <h3 className='text-lg font-medium'>Ingredients: {ingredients.length}</h3>
                <ul className='list-disc ms-4 opacity-60'>
                    {
                        ingredients.map((i, idx) => <li key={idx}>{i}</li>)
                    }
                </ul>
                <div className='divider'></div>
                <div className='flex items-center gap-10 mb-6'>
                    <p className='flex items-center gap-3'><IoMdTime /> <span>{preparing_time} minutes</span></p>
                    <p className='flex items-center gap-3'><FaFireAlt /> <span>{calories} calories</span></p>
                </div>
                <div className="card-actions">
                <button className="btn bg-[#0BE58A] text-lg font-medium rounded-3xl"
                onClick={() => handleCook(card)}>Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

SingleCard.propTypes = {
    card: PropTypes.object.isRequired,
    handleCook: PropTypes.func.isRequired
};

export default SingleCard;