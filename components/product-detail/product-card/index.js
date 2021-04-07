const ProductCard = ({ srcImage, title, content }) => {
  return (
    <div className="max-w-full md:max-w-min">
      <div className="w-72 py-5 px-3 mb-4 bg-black-warm-100 font-dm-sans">
        <figure className="mb-3">
          <img src={srcImage} alt="icono" />
        </figure>
        <h3 className="text-lg text-white mb-2 font-bold">{title}</h3>
        <p className="text-sm font-medium text-gray-250">{content}</p>
      </div>
    </div>
  );
};

export default ProductCard;
