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
      <div>
        <SubscriptionCard recommended />
      </div>
    </section>
  );
};

export default Subscription;
