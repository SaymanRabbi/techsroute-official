
// import ServicesSvg from "./servicesSvg";
import { faGlobe, faMobile, faScaleBalanced, faShuffle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "../../../styles/service.module.css";
const Services = () => {
    return (
        <div className="bg-gray-900 py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-4">
        <div className="sm:text-center">
            <h2 className="text-4xl font-semibold leading-8 text-blue-700">Our Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl">A better way to send money</p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 dark:text-gray-400 text-gray-500">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
          </div>
          <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className='grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16'>
        <div className={styles.servicesSvgHedding}>
                <div className={`${styles.servicesSubHedding} bg-indigo-500 `}>
                  {/* <!-- Heroicon name: outline/globe-alt --> */}
                    <FontAwesomeIcon icon={faGlobe} className="h-8 w-8"/>
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 dark:text-white text-gray-900">Competitive exchange rates</p>
                  <p className="mt-2 text-base leading-7 dark:text-gray-400 text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                </div>
        </div>
        <div className={styles.servicesSvgHedding}>
                <div className={`${styles.servicesSubHedding} bg-indigo-500 `}>
                  {/* <!-- Heroicon name: outline/globe-alt --> */}
                    <FontAwesomeIcon icon={faScaleBalanced} className="h-8 w-8"/>
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 dark:text-white text-gray-900">No hidden fees</p>
                  <p className="mt-2 text-base leading-7 dark:text-gray-400 text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                </div>
        </div>
        <div className={styles.servicesSvgHedding}>
                <div className={`${styles.servicesSubHedding} bg-indigo-500 `}>
                  {/* <!-- Heroicon name: outline/globe-alt --> */}
                    <FontAwesomeIcon icon={faShuffle} className="h-8 w-8"/>
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 dark:text-white text-gray-900">Transfers are instant</p>
                  <p className="mt-2 text-base leading-7 dark:text-gray-400 text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                </div>
        </div>
        <div className={styles.servicesSvgHedding}>
                <div className={`${styles.servicesSubHedding} bg-indigo-500 `}>
                  {/* <!-- Heroicon name: outline/globe-alt --> */}
                    <FontAwesomeIcon icon={faMobile} className="h-8 w-8"/>
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 dark:text-white text-gray-900">Mobile notifications</p>
                  <p className="mt-2 text-base leading-7 dark:text-gray-400 text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                </div>
        </div>
        </div>
          </div>
        </div>
      </div>
    );
};

export default Services;