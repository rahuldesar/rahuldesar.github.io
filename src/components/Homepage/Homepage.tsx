import RandomizeWords from "@components/RandomizeWords";

const Homepage = () => {
  return (
    <section className=" pt-8 sm:pt-20">
      <div className="container mx-auto items-center">
        <div className="flex flex-wrap items-start">
          <div className="flex flex-col pt-5 md:w-1/2 lg:pr-36">
            <h2 className="hover:bg-pos-10 mb-5 bg-gradient-to-l from-catDarkGreen via-catDarkOverlay1 to-catDarkLavender bg-size-200 bg-clip-text bg-pos-0 text-3xl font-bold text-transparent drop-shadow-2xl transition-all duration-700 hover:bg-pos-100 sm:text-5xl">
              Rahul Deshar
            </h2>

            <h3 className="drop-shadow-2x text-xl font-bold sm:text-xl">
              <span className="inline-block text-catDarkGreen">
                <RandomizeWords sourceWord="React Developer" />
              </span>
            </h3>
            <h4 className="drop-shadow-2x mb-4 text-lg font-bold sm:text-lg">
              at Truemark Technology
            </h4>

            <p>
              Passionate React developer with a flair for full-stack solutions.
              Proficient in CI/CD, I bring a design-oriented mindset to create
              seamless, user-centric digital experiences.
            </p>
            <h3 className="drop-shadow-2x mt-8 animate-bounce text-xl font-bold sm:text-2xl">
              SITE: UNDER CONSTRUCTION
            </h3>
            <p className="mb-8 text-lg text-white">
              Meanwhile check this{" "}
              <a
                href="https://notes.rahuldeshar.com.np"
                className="animate-pulse font-bold text-blue-500 hover:animate-none hover:text-catDarkSky"
              >
                cheatsheet page
              </a>
            </p>
          </div>
          {/* <span className="inline-block rounded bg-indigo-50 px-2 py-1 text-xs font-medium tracking-widest text-indigo-500">
              Pill
            </span> */}
          <div className="flex flex-col items-start  md:w-1/2">
            <h2 className="title-font text-1xl mb-4 mt-4 block w-full text-center font-medium sm:text-2xl">
              About me
            </h2>
            <p className="mb-8 leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
              quo quae soluta nulla illum debitis, fugit eius perspiciatis
              laborum aliquid sapiente voluptas id, maxime odio alias veritatis
              repellendus, consequatur maiores.
            </p>

            <p className="mb-8 leading-relaxed">
              Soluta sint, pariatur itaque fugiat voluptatem sunt dolores veniam
              quae quibusdam quidem aliquam suscipit unde sapiente quasi impedit
              consequatur neque doloremque non reprehenderit. Omnis amet facere
              quaerat quos aut magni!
            </p>
            <div className="mb-4 mt-auto flex w-full flex-wrap items-center border-b-2 border-gray-100 pb-4">
              <a className="inline-flex items-center text-indigo-500">
                Learn More
                <svg
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="ml-auto mr-3 inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400">
                <svg
                  className="mr-1 h-4 w-4"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                1.2K
              </span>
              <span className="inline-flex items-center text-sm leading-none text-gray-400">
                <svg
                  className="mr-1 h-4 w-4"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
                6
              </span>
            </div>
            <a className="inline-flex items-center">
              <span className="flex flex-grow flex-col pl-4">
                <span className="title-font font-medium ">Rahul Deshar</span>
                <span className="mt-0.5 text-xs tracking-widest text-gray-400">
                  Developer
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
