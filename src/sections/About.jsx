import AboutImg from "../assets/about-img.jpg";
import Title from "../components/Title";

const About = () => {
  return (
    <section id="about" className="pt-32">
      <div className="container">
        <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
          <div className="mb-8 md:mb-0">
            <img
              className="object-cover rounded-2xl"
              src={AboutImg}
              alt="About Image"
            />
          </div>

          <div>
            <Title
              title="about"
              highlight="me"
              subtitle="Get To Know Me Better"
              isCenter={false}
            />
            <p className="leading-7">
              Hi, I’m Abhijna Desai J I, an MCA student at Presidency University
              who’s deep into web development and building cool stuff on the
              internet. I love taking ideas from “what if” to “it actually
              works” using clean code, modern UI, and solid logic.<br /><br /> I enjoy
              working with full-stack tech, experimenting with layouts,
              animations, and features that make websites feel smooth, fast, and
              alive. Learning new frameworks and tools is kinda my thing—I’m
              always trying to level up and stay ahead of the curve in the
              ever-changing web space.<br /><br /> On the technical side, I work with HTML,
              CSS, JavaScript, React, Node.js, Express, and MongoDB, and I enjoy
              building responsive, scalable web applications from scratch. I
              focus on writing maintainable code, structuring components
              properly, and creating user-friendly interfaces that actually feel
              good to use. Whether it’s front-end polish or back-end logic, I
              like understanding how everything connects.<br /><br /> I’m big on
              consistency, smart time management, and figuring things out
              instead of giving up. I like solving real-world problems through
              code and believe that good design and good logic should always go
              hand in hand. Team collaborations, late-night debugging, and that
              finally fixed it moment? Yeah, I live for that.<br /><br /> When I’m not
              coding, I’m probably exploring new tech, tweaking side projects,
              or thinking about how to make things better—both in code and in
              life.<br /> Still learning. Still building. Definitely not stopping
              anytime soon 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
