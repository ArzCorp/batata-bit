import style from "./index.module.css";

const SubscriptionCard = ({ recommended }) => {
  const isRecommended = () => {
    if (recommended) {
      return (
        <p
          className={`${style.titleFloat} absolute rounded-md -top-4 bg-orange-bitcoin p-2 font-inter font-bold leading-3 text-white`}
        >
          Recomendado
        </p>
      );
    }
    return "";
  };
  return (
    <div className="min-w-min text-center font-inter">
      <div className="w-48 pt-8 pb-6 px-4 mx-auto relative rounded-lg shadow-md bg-white">
        {isRecommended()}
        <h2 className="font-dm-sans text-sm font-medium leading-4 mb-4">
          Pago Anual
        </h2>
        <div className="flex justify-center">
          <span className="font-medium text-xs leading-3">$</span>
          <p className="font-bold text-5xl leading-10 mb-5">99</p>
        </div>
        <p className="font-medium text-xs leading-3 mb-4 text-gray-150">
          *Ahorras $129 comparado al plan mensual.
        </p>
        <button className="border-2 mx-auto rounded-md flex justify-between items-center border-orange-bitcoin px-3 p-4 text-sm leading-4 font-bold bg-white-off">
          Escoger este
          <figure className="ml-3">
            <img src="/assets/icons/arrow-right.svg" alt="" />
          </figure>
        </button>
      </div>
    </div>
  );
};

export default SubscriptionCard;
