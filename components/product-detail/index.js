import Style from "./index.module.css";

import ProductCard from "./product-card";

const ProductDetail = () => {
  return (
    <section className="bg-black-warm pt-16 pb-11 relative">
      <figure className={`absolute -top-3 ${Style.iconFloat}`}>
        <img src="/assets/icons/brand-logo.svg" alt="icono logo" />
      </figure>
      <div className="w-10/12 mx-auto text-center">
        <h2 className="font-dm-sans font-bold text-2xl leading-6 text-white mb-6">
          Creamos un producto sin comparación.
        </h2>
        <p className="text-sm leading-4 text-gray-250 mb-6">
          Confiable y diseñado para su uso diario.
        </p>
      </div>
      <div>
        <ProductCard
          srcImage="/assets/icons/clock.svg"
          title="Tiempo real"
          content="Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento."
        />
        <ProductCard
          srcImage="/assets/icons/eye.svg"
          title="No hay tasas escondidas"
          content="Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo."
        />
        <ProductCard
          srcImage="/assets/icons/dollar-sign.svg"
          title="Compara monedas"
          content="No más rumores, con Babtabit sabrás el valor real de cada moneda en el mercado actual."
        />
        <ProductCard
          srcImage="/assets/icons/check-circle.svg"
          title="Información confiable"
          content="Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan."
        />
      </div>
    </section>
  );
};

export default ProductDetail;
