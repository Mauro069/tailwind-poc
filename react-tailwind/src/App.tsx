import { EyeIcon } from "./components/Icons";
import { InputBase } from "./components/InputBase";

function App() {
  return (
    <div className="p-4">
      <InputBase label="Username" placeholder="Enter your username"></InputBase>

      <InputBase
        label="Password"
        type="password"
        placeholder="Enter your password"
        iconPosition="left"
        errorMessage="Password is required"
      >
        <EyeIcon className="h-5 w-5" />
      </InputBase>
    </div>
  );
}

export default App;
