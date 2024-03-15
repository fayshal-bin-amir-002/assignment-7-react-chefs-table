import PropTypes from 'prop-types';

const SideBar = ({}) => {
    return (
        <div className='w-[40%]'>
            <div className='border shadow-lg p-6 rounded-2xl'>
                <h3 className='text-center text-2xl font-semibold'>Want to cook: {}</h3>
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
                        {/* row 1 */}
                        <tr className="bg-base-200">
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td><button className='btn bg-[#0BE58A] rounded-full'>Preparing</button></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <h3 className='text-center text-2xl font-semibold'>Currently cooking: {}</h3>
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
                        {/* row 1 */}
                        <tr className="bg-base-200">
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td><button className='btn bg-[#0BE58A] rounded-full'>Preparing</button></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className='text-right space-y-2 mb-5 font-medium'>
                    <p>Total Time = {}</p>
                    <p>Total Calories = {}</p>
                </div>
            </div>
        </div>
    );
};

SideBar.propTypes = {
    
};

export default SideBar;