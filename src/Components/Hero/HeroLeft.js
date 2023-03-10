import styles from "../../../styles/hero.module.css";
const HeroLeft = () => {
    return (
        <div className="mr-auto place-self-center lg:col-span-6">
            <h1 className={styles.hero_heading}>Payments tool for software companies</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
            <a href="#" className={`${styles.hero_colToAc_btn} bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900`}>
                Get started
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            <a href="#" className={`${styles.hero_left_btn} dark:focus:ring-gray-800`}>
                Speak to Sales
            </a> 
        </div>
    );
};

export default HeroLeft;