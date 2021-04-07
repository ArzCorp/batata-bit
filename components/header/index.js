import style from "./index.module.css";

import Link from "next/link";

const Header = () => {
  return (
    <header className="relative bg-gradient-to-bl from-black-warm to-orange-bitcoin font-dm-sans text-sm text-white pt-16 pb-16 text-center">
      <div className="w-10/12 mx-auto">
        <figure className="mb-9">
          <img
            src="/assets/icons/brand.svg"
            alt="Batatabit"
            className="mx-auto"
          />
        </figure>
        <h1 className="text-2xl mb-6 font-bold leading-6">
          La próxima revolución en el intercambio de criptomonedas.
        </h1>
        <p className="leading-4">
          Batatabit te ayuda a navegar entre los diferentes precios y
          tendencias.
        </p>
      </div>
      <div
        className={`${style.iconFloat} bg-white-off p-4 absolute -bottom-6 min-w-min border-1 shadow-lg border-black-warm`}
      >
        <div className="w-60 flex justify-between items-center">
          <Link href="/#subscriptions">
            <a className="text-black-warm font-bold">Conoce Nuestros Planes</a>
          </Link>
          <figure className="ml-3">
            <img src="/assets/icons/arrow-down.svg" alt="" />
          </figure>
        </div>
      </div>
    </header>
  );
};

export default Header;
