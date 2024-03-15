import BG from '../../assets/bg.jpg'

const Banner = () => {
    return (
        <div style={{
            borderRadius: '24px', objectFit: 'cover', backgroundSize:'cover', 
            background: `linear-gradient(0deg, rgba(21, 11, 43, 0.90) 0%, rgba(21, 11, 43, 0.00) 100%), url(${BG}) lightgray 0px -18.896px / 100% 123.31% no-repeat`}}>
            <div className="w-full lg:w-[60%] mx-auto py-14 lg:py-[130px] px-5 text-center text-white">
                <h1 className="text-2xl lg:text-5xl font-bold mb-6">Discover an exceptional cooking class tailored for you!</h1>
                <p>Explore personalized cooking classes designed just for you, offering an exceptional culinary experience tailored to your preferences!</p>
                <div className='space-x-5 lg:space-x-10 mt-5 lg:mt-10 text-xl font-semibold'>
                    <button className='btn bg-[#0BE58A] rounded-3xl outline-none'>Explore Now</button>
                    <button className='btn bg-transparent rounded-3xl outline-none text-white'>Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;