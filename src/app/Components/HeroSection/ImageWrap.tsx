import Image from "next/image";

const ImageWrap = () => {
  return (
    <div className="md:w-[43.66%] w-full z-10 rounded-b-full overflow-hidden px-3 relative">
      <div className="circle bg-gray-300 w-80 h-80 absolute -z-10 top-0"></div>
      <img
        src="/simple.png"
        className="w-full h-max object-contain"
        alt="Hero Image"
      />
      <Image
        src="/progress-shape.png"
        height={100}
        width={100}
        className="w-full h-max object-contain absolute right-0 bottom-0 -z-10"
        alt="Hero Image"
      />
    </div>
  );
};

export default ImageWrap;
