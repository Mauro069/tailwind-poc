// import "@codescript/ui";

import {
  Login,
  Button,
  ThemeColors,
  TypographyVariants,
  WrapperForm,
  WrapperFormProps,
  DarkModeToggle,
  Typography,
} from "@codescript/ui";

const formConfig: Pick<
  WrapperFormProps,
  "layout" | "fields" | "submitButtonLabel"
> = {
  layout: "vertical",
  submitButtonLabel: "Crear cuenta",
  fields: [
    {
      type: "text",
      id: "register-name",
      name: "name",
      label: "Nombre",
      placeholder: "Escribe tu nombre",
      inputContainerClassName: "my-4",
      size: 12,
    },
    {
      type: "text",
      id: "register-lastname",
      name: "lastname",
      label: "Apellido",
      placeholder: "Escribe tu apellido",
      inputContainerClassName: "my-4",
      size: 12,
    },
    {
      type: "email",
      id: "register-email",
      name: "email",
      label: "Correo electrónico",
      placeholder: "Escribe tu correo",
      inputContainerClassName: "my-4",
      size: 12,
    },
    {
      type: "password",
      id: "register-password",
      name: "password",
      label: "Contraseña",
      placeholder: "Escribe tu contraseña",
      inputContainerClassName: "my-4",
      size: 12,
    },
  ],
};

export const WebComponentsDemo = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-2">
        <Typography variant="custom" className="text-3xl font-bold underline">
          Hello world from React!
        </Typography>

        <DarkModeToggle />
      </div>

      <div className="flex p-2 mb-2 gap-4">
        <Button
          text="Button primary"
          color="primary"
          onClick={() => {
            console.log("click on primary");
          }}
        />

        <Button
          text="Button secondary"
          color="secondary"
          onClick={() => {
            console.log("click on secondary");
          }}
        />

        <Button
          text="Button tertiary"
          color="tertiary"
          onClick={() => {
            console.log("click on tertiary");
          }}
        />
      </div>

      <Login />

      <ThemeColors />

      <TypographyVariants />

      <WrapperForm
        containerClassName="max-w-md mx-auto theme-background-paper p-6 rounded-lg shadow-md my-8"
        layout={formConfig.layout}
        submitButtonLabel={formConfig.submitButtonLabel}
        fields={formConfig.fields}
        onSubmit={(values) => {
          console.log("Form submited!", values);
        }}
      />
    </div>
  );
};
