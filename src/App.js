import logo from "./logo.svg";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Button from "./components/Button/Button";
import Steps from "./components/Steps/Steps";

function App() {
  return (
    <div className='app max-w-screen-xl mx-auto'>
      <Banner></Banner>
      <Steps></Steps>
    </div>
  );
}

export default App;
