import ReviewData from '@/ReviewData';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Autoplay, FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import '../../../styles/Review.module.css';
const Review = () => {
    return (
       <div className='bg-gray-900 py-14'>
       <h2 className='text-blue-600 text-3xl font-semibold uppercase text-center'>Our Happy <span className='  border-white border-b-2'>Clients</span>
       </h2>
        <div className="py-5">
        
        <Swiper 
            breakpoints={{
                // when window width is >= 640px
                480: {
                  width: 480,
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
                1366: {
                    width: 1366,
                    slidesPerView:3
                },
                900: {
                    width: 1366,
                    slidesPerView:3
                },
                1100:{
                    width: 1366,
                    slidesPerView:3
                }
                
              }}
    
        spaceBetween={30}
            freeMode={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
    pagination={{
      clickable: true,
    }}
    modules={[FreeMode, Pagination,Autoplay]}
        >
            {
                (ReviewData).slice(0,6).map((review,index) => <SwiperSlide key={index} className="py-3 my-auto px-3 rounded-md custom">
                    <div>
                        <div className="flex items-center justify-between gap-5">
                            <div className="flex items-center gap-3">
                            <img src={review?.image} className="  w-16 h-16 rounded-full" alt="" />
                            <h2 className='text-white'>{review.name}</h2>
                             </div>
                            <div>
                                {
                                [...Array(parseInt(review.rating)).keys()].map((num,index)=><FontAwesomeIcon key={index} className=" text-yellow-600" icon={faStar}></FontAwesomeIcon>)
                            }
                            </div>
                        </div>
                        <div>
                            <h1 className=" text-justify">
                                <span className="text-sm text-gray-500">
                                {
                                    review?.text
                                }
                                </span>
                            </h1>
                        </div>
                    
                    </div>   

                </SwiperSlide>)
            }
   
  </Swiper>
   </div>
       </div>
    );
};

export default Review;