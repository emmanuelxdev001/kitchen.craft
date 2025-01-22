import useEmblaCarousel from "embla-carousel-react";
import autoPlay from "embla-carousel-autoplay";
import pic from "../assets/vid/banner.compressed-c1ef8a6a1d9615fd7a88.avif";

const SliderScreen = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    autoPlay({ delay: 4000 }),
  ]);

  return (
    <div className="embla">
      <div
        className="embla__viewport  max-w-full mt-5 mx-auto h-64 p-4 rounded-md "
        ref={emblaRef}
      >
        <div className="embla__container h-full  bg-gradient-to-r from-transparent">
          {Array.from({ length: 10 }).map((el: any, i: number) => (
            <div
              key={`${i}${el}`}
              className="embla__slide  rounded-md mx-1 h-full flex justify-center items-center  bg-gradient-to-r from-transparent via-white to-transparent"
            >
              <img
                src={pic}
                className="object-cover w-full h-full rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderScreen;
