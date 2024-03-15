import BG from '../../assets/bg.jpg'

const Banner = () => {
    return (
        <div className="bg-cover bg-no-repeat rounded-3xl brightness-[0.95]" style={{backgroundImage:`url(${BG})`}}>
            <div className="w-[60%] mx-auto py-[130px] text-center text-white">
                <h1 className="text-5xl font-bold mb-6">Discover an exceptional cooking class tailored for you!</h1>
                <p>Explore personalized cooking classes designed just for you, offering an exceptional culinary experience tailored to your preferences!</p>
                <div className='space-x-10 mt-10 text-xl font-semibold'>
                    <button className='btn bg-[#0BE58A] rounded-3xl outline-none'>Explore Now</button>
                    <button className='btn bg-transparent rounded-3xl outline-none text-white'>Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;