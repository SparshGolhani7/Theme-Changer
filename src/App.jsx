import "./App.css";
import ToggleButton from "./Component/ToggleButton";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <ToggleButton  />
    </ThemeProvider>
  );
}

export default App;
