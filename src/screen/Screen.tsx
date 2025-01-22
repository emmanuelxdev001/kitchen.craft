import pic from "../assets/vid/video-templates-cover_173w-25d7829b4359672c110d.jpg";
import AnimatedLogoCloud from "../layout/LogoBar";
import SliderScreen from "./Slider";

const Screen = () => {
  const data = Array.from({ length: 5 });

  return (
    <div>
      <SliderScreen />

      <AnimatedLogoCloud />

      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.map((props: any, i: number) => (
            <div
              key={`${i}${props}`}
              className="h-[280px] md:h-[350px] lg:h-[430px] border rounded-md  flex flex-col"
            >
              <img
                src={pic}
                alt="banner"
                className="flex-1 h-[85%] object-cover rounded-t-md"
              />
              <p className="text-[16px] md:text-[20px]  md:mt-2 p-2">Title</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Screen;
