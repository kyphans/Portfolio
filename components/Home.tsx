
import { FC } from "react";

interface HomeProps {
  backgroundImage: string;
}

const Home: FC<HomeProps> = ({ backgroundImage }) => {
  return (
    <div
      className="relative flex h-[calc(100vh-64px)] items-center pb-0 md:pb-40"
      id="Home"
    >
      <div
        className="absolute inset-0 z-0 -mt-16 bg-[65%_center] md:bg-[center_center]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />

      <div className="container relative z-10">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-md mb-4 font-normal tracking-[3px] text-gray-300 md:text-xl">
            WELCOME TO MY WORLD
          </h1>
          <div className="inline-block">
            <h2 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-orange-500 pb-2 font-montserrat text-4xl font-extrabold text-white md:text-7xl">
              Hi, I'm Ky Phan.
            </h2>
          </div>
          <h3 className="mb-2 font-montserrat text-4xl font-extrabold text-primary md:text-6xl">
            JS Developer.
          </h3>
          <h4 className="text-4xl font-extrabold text-primary md:text-6xl">
            based in HCM.
          </h4>
        </div>
      </div>
      {/* <div
        className="absolute inset-0 z-0 bottom-0 right-0 bg-[60%_center] md:bg-[center_center]"
        style={{
          backgroundImage: `url('/divider.svg')`,
          backgroundRepeat: "no-repeat"
        }}
      /> */}
    </div>
  );
};

export default Home;
