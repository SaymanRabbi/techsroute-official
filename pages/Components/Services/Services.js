
import ServicesHeading from "./ServicesHeading";
import ServicesSvg from "./servicesSvg";


const Services = () => {
    return (
        <div className="bg-gray-900 py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-4">
          <ServicesHeading/>
          <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
              <ServicesSvg/>
          </div>
        </div>
      </div>
    );
};

export default Services;