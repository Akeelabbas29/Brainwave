import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Button from "./components/Button.jsx";
import Header from "./components/header.jsx";
const App = () => {
  return (
    <>
      <div className="pt-[4.5rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>

      <ButtonGradient />
    </>
  );
};
export default App;
