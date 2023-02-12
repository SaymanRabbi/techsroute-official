import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero = () => {
    return (
        <section className="bg-gray-900" >
        <div className="grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 items-center justify-center h-[500px]">
        <HeroLeft/>
        <HeroRight/>              
    </div>
</section>
    );
};

export default Hero;