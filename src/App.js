import logo from "./logo.svg";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Button from "./components/Button/Button";
import Steps from "./components/Steps/Steps";
import PopularTrades from "./components/PopularTrades/PopularTrades";
import Contractors from "./components/Contractors/Contractors";
import Clients from "./components/Clients/Clients";

function App() {
  return (
    <div className='app max-w-screen-xl mx-auto'>
      <Banner></Banner>
      <Steps></Steps>
      <PopularTrades></PopularTrades>
      <Contractors></Contractors>
      <Clients></Clients>
    </div>
  );
}

export default App;
