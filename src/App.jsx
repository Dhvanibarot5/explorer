import "./App.css";
import ChangeHeading from "./components/ChangeHeading";
import Counter from "./components/Counter";
import InputField from "./components/InputField";
import MouseEvents from "./components/MouseEvents";
import ToggleText from "./components/ToggleText";

function App() {
  return (
    <div className="flex flex-wrap justify-center text-center items-center bg-black">
      <Counter />
    </div>
  );
}

export default App;
