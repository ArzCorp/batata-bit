import Style from "./index.module.css";

const ExchangeRate = () => {
  return (
    <section className="font-dm-sans bg-white-off pt-14 pb-20">
      <span
        className={`${Style.backgroundImage} block bg-bitcoin w-48 h-48 mb-10 mx-auto`}
      ></span>
      <div className="text-center">
        <h2 className="font-bold text-2xl leading-6 mb-6">
          Visibilizamos todas las tasas de cambio.
        </h2>
        <p className="font-medium text-sm leading-5 text-gray-150 mb-12">
          Traemos información en tiempo real de las casas de cambio y las
          monedas más importantes del mundo.
        </p>
      </div>
      <div className="w-9/12 mx-auto">
        <h2 className="font-bold mb-3 text-lg text-orange-bitcoin leading-6 text-left">
          Monedas
        </h2>
        <div
          className={`${Style.grid} bg-white font-inter text-base rounded-xl pl-4 px-2 text-gray-50 font-normal`}
        >
          <p className="py-3 font-medium">Bitcoin</p>
          <p className="py-3 pr-2 text-right text-gray-150">$1.96</p>
          <span className="my-auto m-3 block text-right bg-trending-down w-3 h-3"></span>
          <p className="py-3 font-medium">Ethereum</p>
          <p className="py-3 pr-2 text-right text-gray-150">$0.07</p>
          <span className="my-auto m-3 block text-right bg-trending-up w-3 h-3"></span>
          <p className="py-3 font-medium">Ripple</p>
          <p className="py-3 pr-2 text-right text-gray-150">$2.15</p>
          <span className="my-auto m-3 block text-right bg-trending-down w-3 h-3"></span>
          <p className="py-3 font-medium">Stellar</p>
          <p className="py-3 pr-2 text-right text-gray-150">$4.96</p>
          <span className="my-auto m-3 block text-right bg-trending-down w-3 h-3"></span>
        </div>
        <div className="max-w-max bg-orange-soft mt-4 p-2 mx-auto">
          <h3>
            <span className="font-extrabold">Actualizado:</span> 19 Julio 23:45
          </h3>
        </div>
      </div>
    </section>
  );
};

export default ExchangeRate;
