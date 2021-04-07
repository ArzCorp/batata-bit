import Carousel from "../carousel";
import SubscriptionCard from "./subscription-card";

const Subscription = () => {
  return (
    <section id="subscriptions" className="py-16 bg-white-off">
      <div className="font-dm-sans text-center w-11/12 mx-auto">
        <h2 className="font-bold text-2xl text-black-warm leading-6">
          Escoge el plan que mejor se ajuste a ti.
        </h2>
        <p className="font-medium text-sm text-gray-150 leading-4 mt-6 mb-12">
          Cualquier plan te da acceso completo a nuestra plataforma.
        </p>
      </div>
      <Carousel className="pt-4">
        <SubscriptionCard
          recommended
          typePay="Pago Anual"
          price="99"
          saving="129"
        />
        <SubscriptionCard
          recommended
          typePay="Pago Anual"
          price="499"
          saving="899"
        />
        <SubscriptionCard
          recommended
          typePay="Pago Anual"
          price="199"
          saving="229"
        />
      </Carousel>
    </section>
  );
};

export default Subscription;
