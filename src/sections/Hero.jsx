import HeroImg from "../assets/hero-image.png";

const Hero = () => {
  return (
    <section id="home">
      <div className="z-40">
        <div className="container h-screen flex items-center justify-center text-center">
          <div className="max-w-[800px] mx-auto">
            {/* Image */}
            <div className="mb-6">
              <img
                className="size-[200px] rounded-full mx-auto bg-gradient-to-r from-blue-600 to-purple-600 object-cover"
                src={HeroImg}
                alt="hero image"
              />
            </div>

            {/* Content */}
            <div>
              <h1 className="mb-2 text-3xl font-extrabold capitalize leading-[1.2] md:text-5xl">
                Hey, I’m{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Abhijna Desai J I
                </span>
              </h1>

              <b>Full Stack Developer | MERN Stack</b>
              <p className="mb-4 md:text-lg">
                I turn complex data into clean, functional web experiences.
                Driven by design, powered by logic, and focused on building
                modern web solutions that solve real problems.
              </p>
              <a
                className="px-6 py-3 inline-block capitalize font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md"
                href="#projects"
              >
                View my Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
