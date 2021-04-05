import Header from "../components/header";
import ExchangeRate from "../components/exchange-rate";
import ProductDetail from "../components/product-detail";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ExchangeRate />
        <ProductDetail />
      </main>
    </>
  );
}
