import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-white text-lg md:text-xl font-medium mb-4 md:mb-0 uppercase">
            © 2023 Made with 💜 by Sarthak Goel
          </h2>
          <span className="flex items-center">
            <SocialMediaIcons />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;