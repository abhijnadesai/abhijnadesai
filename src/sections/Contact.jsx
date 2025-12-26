import {
  Facebook,
  Github,
  Instagram,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import Form from "../components/Form";
import Title from "../components/Title";

const Contact = () => {
  return (
    <section id="contact" className="pt-32">
      <div className="container">
        <Title
          title="contact"
          highlight="me"
          subtitle="Get in touch with me"
          isCenter={false}
        />

        <div className="md:grid md:grid-cols-2 md:gap-16">
          <Form />

          <div className="mb-16 mt-8">
            <div className="mb-2 flex flex-wrap items-center justify-start gap-2">
              <Phone className="size-5" />
              <a
                className="text-lg font-semibold transition-colors duration-300 hover:text-blue-600"
                href="tel: 8310582817"
              >
                +91 8310582817
              </a>
            </div>
            <div className="mb-4 flex flex-wrap items-center justify-start gap-2">
              <Mail className="size-5" />
              <a
                className="text-lg font-semibold transition-colors duration-300 hover:text-blue-600"
                href="mailto: abhijnadesai29@gmail.com"
              >
                abhijnadesai29@gmail.com
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-start gap-4">
              <a
                href="https://www.facebook.com/share/1N35DryEu5/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:-translate-y-2 hover:text-blue-600 transition-all duration-300 ease-in-out"
              >
                <Facebook className="size-6" />
              </a>

              <a
                href="https://www.instagram.com/abhijna_desai_j.i_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:-translate-y-2 hover:text-blue-600 transition-all duration-300 ease-in-out"
              >
                <Instagram className="size-6" />
              </a>

              <a
                href="https://twitter.com/@abhijna_desai_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:-translate-y-2 hover:text-blue-600 transition-all duration-300 ease-in-out"
              >
                <Twitter className="size-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
