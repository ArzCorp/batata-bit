import style from "./index.module.css";

const Carousel = ({ children, className }) => {
  return (
    <div
      className={`${style.carousel} max-w-full overflow-x-auto flex mr-1 md:justify-center ${className}`}
    >
      {children}
    </div>
  );
};

export default Carousel;
