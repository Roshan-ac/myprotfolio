import ImageWrap from "./ImageWrap";

const HeroSection = () => {
  return (
    <section className="w-full">
      <div className="m-auto container py-20 container-2xl overflow-hidden min-h-screen flex items-center">
        <div className="flex md:space-y-0 px-4 space-y-6 md:flex-row flex-col items-center justify-center mt-14 w-full gap-6">
          <div className=" text-white w-full md:w-[32%]">
            <div className=" flex flex-col gap-4">
              <span className=" text-5xl text-[#6b6b6b]">{"<My Intro>"}</span>
              <div className="text-6xl leading-[4rem] w-full">
                <b className="font-bold text-green-500 mr-2">
                  Cyber-Geek 
                </b>
                <span className="text-3xl text-white">a</span>{" "}
                {"<coder/>"}
              </div>
            </div>
            <div className="my-6">
              <span className=" text-base text-[#a9a9a9] px-2 ">
                You know myself better.
              </span>
            </div>
            <div className="my-8  flex items-center gap-6 ">
              <p className="transition-all flex flex-col cursor-pointer group duration-500 space-y-2 ease-in-out px-2">
                <a href="">Let's begin our journey.</a>
                <span className=" inline-block bg-green-600 group-hover:bg-orange-300 w-28 h-1 rounded-xl"></span>
              </p>
            </div>
          </div>
          <ImageWrap />
          <div className="rounded-lg bg-black md:w-[20%] w-full space-y-4 py-8 h-max text-white">
            <div className=" w-[80%] m-auto space-y-3">
              <div className="space-y-2">
                <span className=" text-5xl font-medium text-green-500">2+</span>
                <p className=" text-lg"> Years Of Experience</p>
              </div>
              <hr className=" opacity-30 w-full" />
              <div className="space-y-2">
                <span className=" text-5xl font-medium text-green-500">4+</span>
                <p className=" text-lg">Project Complete</p>
              </div>
              <hr className=" opacity-30 w-full" />
              <div className="space-y-2">
                <span className=" text-5xl font-medium text-green-500">8+</span>
                <p className=" text-lg">Client Satisfactions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
