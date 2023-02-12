import { faEnvelope, faLocationCrosshairs, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../../styles/Contact.module.css';
import ContactForm from './ContactForm';
const Contact = () => {
    return (
        <section className="relative z-10 overflow-hidden bg-white py-20 lg:py-[120px] dark:bg-gray-900">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap  px-4 lg:justify-between">
              <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                <div className="mb-12 max-w-[570px] lg:mb-0">
                  <span className="text-blue-600 text-3xl font-semibold">
                    Contact Us
                  </span>
                  <h2
                    className="text-dark mb-6 text-[32px] text-3xl font-bold mt-4 dark:text-white text-gray-900  uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]"
                  >
                    GET IN TOUCH WITH US
                  </h2>
                  <p className="dark:text-gray-400 text-gray-500 mb-9 text-base leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua
                    minim veniam quis nostrud exercitation ullamco
                  </p>
                  <div className="mb-8 flex w-full max-w-[370px]">
                    <div
                      class={styles.Contact_Icon_bg}
                    >
                     <FontAwesomeIcon icon={faLocationCrosshairs} className={styles.Contact_Icon_text}/>
                    </div>
                    <div className="w-full">
                      <h4 className="mb-1 text-xl font-bold dark:text-gray-400 text-gray-500">Our Location</h4>
                      <p className="dark:text-gray-400 text-gray-500 text-base">
                        Rangpur,Office Location, Bangladesh
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex w-full max-w-[370px]">
                    <div
                     class={styles.Contact_Icon_bg}
                    >
                      <FontAwesomeIcon icon={faPhone} className={styles.Contact_Icon_text}/>
                    </div>
                    <div className="w-full">
                      <h4 className="dark:text-gray-400 text-gray-500 mb-1 text-xl font-bold">Phone Number</h4>
                      <p className="dark:text-gray-400 text-gray-500 text-base">+880 17901010101</p>
                    </div>
                  </div>
                  <div className="mb-8 flex w-full max-w-[370px]">
                    <div
                      class={styles.Contact_Icon_bg}
                    >
                     <FontAwesomeIcon icon={faEnvelope} className={styles.Contact_Icon_text}/>
                    </div>
                    <div className="w-full">
                      <h4 className="dark:text-gray-400 text-gray-500 mb-1 text-xl font-bold">Email Address</h4>
                      <p className="dark:text-gray-400 text-gray-500 text-base">test@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
               <ContactForm/>
              </div>
            </div>
          </div>
        </section>
       
        
    );
};

export default Contact;