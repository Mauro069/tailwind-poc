import { InputBase } from "./components/InputBase";

const syncValidator = (value: string) => {
  if (!value) return "Este campo es obligatorio";
  return null;
};

const asyncValidator = async (value: string) => {
  const isValid = await new Promise<boolean>((resolve) =>
    setTimeout(() => resolve(value !== "invalid@example.com"), 1000)
  );
  return isValid ? null : "Este correo no es válido";
};

// Custom event handlers
const handleCustomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log("Valor del input:", event.target.value);
};

const handleCustomBlur = (event: React.FocusEvent<HTMLInputElement>) => {
  console.log("El campo ha perdido el foco", event);
};

const handleCustomFocus = (event: React.FocusEvent<HTMLInputElement>) => {
  console.log("El campo ha ganado el foco", event);
};

function App() {
  return (
    <main className="w-[100vw] h-[100vh] flex items-center justify-center">
      <form className="bg-gray-200 flex flex-col gap-4 p-4 rounded w-[95vw] max-w-[500px]">
        <InputBase
          label="Correo electrónico"
          placeholder="Ingresa tu correo"
          validators={[syncValidator]}
          asyncValidators={[asyncValidator]}
          onChange={handleCustomChange}
          onBlur={handleCustomBlur}
          onFocus={handleCustomFocus}
          iconPosition="right"
        >
          {/* <ExclamationIcon /> */}
        </InputBase>

        <InputBase
          label="Contraseña"
          placeholder="Ingresa tu contraseña"
          validators={[syncValidator]}
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v6m8-6v6M4 15v6"
            />
          </svg>
        </InputBase>

        <InputBase label="Teléfono" placeholder="Ingresa tu teléfono" />
      </form>
    </main>
  );
}

export default App;
