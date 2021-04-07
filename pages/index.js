import { Head } from "next/document";

import Header from "../components/header";
import ExchangeRate from "../components/exchange-rate";
import ProductDetail from "../components/product-detail";
import MeetHim from "../components/meet-him";
import Subscription from "../components/subscriptions";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <head>
        <title>Batatabit - home</title>
      </head>
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
