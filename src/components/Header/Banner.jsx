import BG from '../../assets/bg.jpg'

const Banner = () => {
    return (
        <div className="bg-gradient-to-b from-[#150B2BE5] to-[#150B2B00] rounded-3xl bg-[./bg.jpg]">
            <div className="w-[60%] mx-auto py-[130px] text-center text-white">
                <h1 className="text-5xl font-bold mb-6">Discover an exceptional cooking class tailored for you!</h1>
                <p>Explore personalized cooking classes designed just for you, offering an exceptional culinary experience tailored to your preferences!</p>
            </div>
        </div>
    );
};

export default Banner;