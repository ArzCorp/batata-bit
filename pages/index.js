import Header from "../components/header";
import ExchangeRate from "../components/exchange-rate";
import ProductDetail from "../components/product-detail";
import MeetHim from "../components/meet-him";
import Subscription from "../components/subscriptions";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ExchangeRate />
        <ProductDetail />
        <MeetHim />
        <Subscription />
        <Footer />
      </main>
    </>
  );
}
