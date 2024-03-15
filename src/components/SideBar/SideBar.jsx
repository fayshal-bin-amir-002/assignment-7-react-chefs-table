import PropTypes from 'prop-types';

const SideBar = ({cookingCard, handlePreparing, currentCookingCard}) => { 
    return (
        <div className='w-[40%]'>
            <div className='border shadow-lg p-6 rounded-2xl'>
                <h3 className='text-center text-2xl font-semibold'>Want to cook: {cookingCard.length}</h3>
                <div className='divider'></div>
                <div className="overflow-x-auto mb-8">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            cookingCard.map((card, idx) => <tr key={idx} className="bg-base-200">
                                <th>{idx + 1}</th>
                                <td>{card.recipe_name}</td>
                                <td>{card.preparing_time} minutes</td>
                                <td>{card.calories} calories</td>
                                <td><button className='btn bg-[#0BE58A] rounded-full'
                                onClick={() => handlePreparing(card)}>Preparing</button></td>
                            </tr>)
                        }
                        </tbody>
                    </table>
                </div>
                <h3 className='text-center text-2xl font-semibold'>Currently cooking: {currentCookingCard.length}</h3>
                <div className='divider'></div>
                <div className="overflow-x-auto mb-8">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                        </thead>
                        <tbody>
                         {
                            currentCookingCard.map((card, idx) => <tr key={idx} className="bg-base-200">
                                <th>{idx + 1}</th>
                                <td>{card.recipe_name}</td>
                                <td>{card.preparing_time} minutes</td>
                                <td>{card.calories} calories</td>     
                            </tr>)
                         }
                        </tbody>
                    </table>
                </div>
                <div className='text-right space-y-2 mb-5 font-medium'>
                    <p>Total Time = {currentCookingCard.reduce((p, c) => c.preparing_time + p, 0)} minutes</p>
                    <p>Total Calories = {currentCookingCard.reduce((p, c) => c.calories + p, 0)} calories</p>
                </div>
            </div>
        </div>
    );
};

SideBar.propTypes = {
    cookingCard: PropTypes.array.isRequired,
    handlePreparing: PropTypes.func.isRequired,
    currentCookingCard: PropTypes.array.isRequired
};

export default SideBar;