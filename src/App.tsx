import "./App.css";
import { AllCardsProvider } from "./components/AllCardsProvider";
import { Main } from "./components/Main";

function App() {
  return (
    <>
      <AllCardsProvider>
        <Main />
      </AllCardsProvider>
    </>
  );
}

export default App;
