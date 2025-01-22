import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules"; // Import Swiper modules

const Slider = () => {
  return (
    <div className="w-full my-6">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, Pagination, Navigation]} // Pass modules
      >
        <SwiperSlide>
          <div className="h-64 bg-yellow-200 flex items-center justify-center text-xl font-bold">
            Special Discount on Organic Products!
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-64 bg-green-200 flex items-center justify-center text-xl font-bold">
            Fresh Fruits & Vegetables at Low Prices!
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-64 bg-blue-200 flex items-center justify-center text-xl font-bold">
            Buy One Get One Free on Selected Items!
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
