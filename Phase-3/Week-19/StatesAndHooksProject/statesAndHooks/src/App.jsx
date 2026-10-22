import "./App.css";
import MyCounter from "./components/States/MyCounter";
import IncreaseDecreaseCount from "./components/Hooks/IncreaseDecreaseCount";
import UseEffect from "../../../ReactHooks/Hooks/src/components/UseEffect/UseEffect";

function App() {

  return (
    <>
      <MyCounter />

      <hr />
      <IncreaseDecreaseCount />

      <hr />
      <UseEffect />
    </>
  );
}

export default App;
