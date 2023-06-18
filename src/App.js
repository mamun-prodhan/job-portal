import "./App.css";
import Banner from "./components/Banner/Banner";
import Steps from "./components/Steps/Steps";
import PopularTrades from "./components/PopularTrades/PopularTrades";
import Contractors from "./components/Contractors/Contractors";
import Clients from "./components/Clients/Clients";
import TradeBrittany from "./components/TradeBrittany/TradeBrittany";
import FindWork from "./components/FindWork/FindWork";
import Help from "./components/Help/Help";

function App() {
  return (
    <div className="app max-w-screen-xl mx-auto">
      {/* The Better Way - banner */}
      <Banner></Banner>
      {/* Find a Tradeperson section */}
      <Steps></Steps>
      {/* Popular Trades section */}
      <PopularTrades></PopularTrades>
      {/* Contractors section */}
      <Contractors></Contractors>
      {/* Clients section */}
      <Clients></Clients>
      {/* Why people turn to find a trade brittany */}
      <TradeBrittany></TradeBrittany>
      {/* Find-Great work */}
      <FindWork></FindWork>
      {/* We are here to help section */}
      <Help></Help>
    </div>
  );
}

export default App;
