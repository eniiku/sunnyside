import arrowPointingDown from '../../assets/images/icon-arrow-down.svg';
import headerImageMobile from '../../assets/images/mobile/image-header.jpg';

const Hero = () => {
  return (
    <header className="relative w-full h-screen my-auto">
      <img
        src={headerImageMobile}
        role="presentation"
        className="block w-full absolute -z-10"
      />
      <h1
        className=" text-white text-2xl uppercase font-bold
                  mx-auto"
      >
        we are creatives
      </h1>
      <img src={arrowPointingDown} role="presentation" className="mt-4 w-7" />
    </header>
  );
};

export default Hero;
