import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'angular-tailwind';

  formConfig = {
    layout: 'vertical',
    submitButtonLabel: 'Crear cuenta',
    fields: [
      {
        type: 'text',
        id: 'register-name',
        name: 'name',
        label: 'Nombre',
        placeholder: 'Escribe tu nombre',
        inputContainerClassName: 'my-4',
        size: 12,
      },
      {
        type: 'text',
        id: 'register-lastname',
        name: 'lastname',
        label: 'Apellido',
        placeholder: 'Escribe tu apellido',
        inputContainerClassName: 'my-4',
        size: 12,
      },
      {
        type: 'email',
        id: 'register-email',
        name: 'email',
        label: 'Correo electrónico',
        placeholder: 'Escribe tu correo',
        inputContainerClassName: 'my-4',
        size: 12,
      },
      {
        type: 'password',
        id: 'register-password',
        name: 'password',
        label: 'Contraseña',
        placeholder: 'Escribe tu contraseña',
        inputContainerClassName: 'my-4',
        size: 12,
      },
    ],
  };

  onSubmit = () => {
    console.log('Submit form');
  };
}
