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

      <div className="container relative z-10 pb-16 md:pb-0">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-lg mb-6 font-normal tracking-[4px] text-gray-300 md:text-2xl md:mb-8">
            WELCOME TO MY WORLD
          </h1>
          <div className="inline-block">
            <h2 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-orange-500 pb-2 text-5xl font-extrabold text-white md:text-8xl md:pb-4" style={{ fontFamily: 'Inter Tight, sans-serif' }}>
              Hi, I'm Ky Phan.
            </h2>
          </div>
          <h3 className="mb-2 text-4xl font-extrabold bg-primary text-white md:text-7xl md:mb-3 pb-1.5" style={{ fontFamily: 'Inter Tight, sans-serif' }}>
            Web Developer
          </h3>
          <h4 className="text-4xl font-extrabold text-primary md:text-7xl" style={{ fontFamily: 'Inter Tight, sans-serif' }}>
            based in HCM.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
