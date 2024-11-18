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
        size: 12,
        props: {
          id: 'register-name',
          name: 'name',
          label: 'Nombre',
          placeholder: 'Escribe tu nombre',
          containerClassName: 'my-4',
          defaultValue: 'John',
        },
      },
      {
        type: 'text',
        size: 12,
        props: {
          id: 'register-lastname',
          name: 'lastname',
          label: 'Apellido',
          placeholder: 'Escribe tu apellido',
          containerClassName: 'my-4',
          defaultValue: 'Doe',
        },
      },
      {
        type: 'email',
        size: 12,
        props: {
          id: 'register-email',
          name: 'email',
          label: 'Correo electrónico',
          placeholder: 'Escribe tu correo',
          containerClassName: 'my-4',
          defaultValue: 'jhon.doe@codescript.com',
        },
      },
      {
        type: 'password',
        size: 12,
        props: {
          id: 'register-password',
          name: 'password',
          label: 'Contraseña',
          placeholder: 'Escribe tu contraseña',
          containerClassName: 'my-4',
          defaultValue: 'Abcde12345',
        },
      },
      {
        type: 'textarea',
        size: 12,
        props: {
          id: 'register-description',
          name: 'description',
          label: 'Descripción',
          placeholder: 'Escribe una breve descripción',
          containerClassName: 'my-4',
          maxLength: 100,
          showCharCount: true,
          defaultValue: 'Amazing description',
        },
      },
      {
        type: 'radio',
        size: 12,
        props: {
          id: 'register-favorite-framework-react',
          name: 'favoriteFramework',
          label: 'React',
          value: 'react',
        },
      },
      {
        type: 'radio',
        size: 12,
        props: {
          id: 'register-favorite-framework-angular',
          name: 'favoriteFramework',
          label: 'Angular',
          value: 'angular',
        },
      },
      {
        type: 'select',
        size: 12,
        props: {
          id: 'register-country',
          name: 'country',
          label: 'Selecciona tu país',
          containerClassName: 'relative my-4',
          optionKey: 'label',
          labelKey: 'label',
          valueKey: 'id',
          options: [
            { id: 1, value: 'ar', label: 'Argentina' },
            { id: 2, value: 'br', label: 'Brasil' },
            { id: 3, value: 'cl', label: 'Chile' },
            { id: 4, value: 'mx', label: 'México' },
          ],
          defaultValue: 4,
        },
      },
      {
        type: 'select',
        size: 12,
        props: {
          id: 'register-favorite-countries',
          name: 'favoriteCountries',
          label: 'Selecciona tus países favoritos',
          containerClassName: 'relative my-4',
          optionKey: 'label',
          labelKey: 'label',
          valueKey: 'id',
          options: [
            { id: 1, value: 'ar', label: 'Argentina' },
            { id: 2, value: 'br', label: 'Brasil' },
            { id: 3, value: 'cl', label: 'Chile' },
            { id: 4, value: 'mx', label: 'México' },
          ],
          defaultValue: [1, 4],
          isMultiple: true,
          autoClose: false,
        },
      },
      {
        type: 'toggle',
        size: 12,
        props: {
          id: 'register-accept-terms',
          name: 'acceptTerms',
          label: 'He leído y acepto los terminos y condiciones',
          checkboxColor: 'bg-secondary',
          defaultValue: false,
        },
      },
    ],
    validations: {
      email: {
        type: 'string',
        required: true,
        email: true,
        messages: {
          required: 'El correo electrónico es obligatorio',
          email: 'El correo electrónico no es válido',
        },
      },
      password: {
        type: 'string',
        required: true,
        min: 8,
        matches: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$',
        messages: {
          required: 'La contraseña es obligatoria',
          min: 'La contraseña debe tener al menos 8 caracteres',
          matches:
            'La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número',
        },
      },
      description: {
        type: 'string',
        required: true,
        max: 350,
        messages: {
          required: 'La descripción es obligatoria',
          max: 'La descripción no puede exceder los 350 caracteres',
        },
      },
      name: {
        type: 'string',
        required: true,
        min: 3,
        max: 50,
        matches: '^[a-zA-Z ]+$',
        messages: {
          required: 'El nombre es obligatorio',
          min: 'El nombre debe tener al menos 3 caracteres',
          max: 'El nombre no puede tener más de 50 caracteres',
          matches: 'El nombre solo puede contener letras y espacios',
        },
      },
      lastname: {
        type: 'string',
        required: true,
        min: 3,
        max: 50,
        matches: '^[a-zA-Z ]+$',
        messages: {
          required: 'El apellido es obligatorio',
          min: 'El apellido debe tener al menos 3 caracteres',
          max: 'El apellido no puede tener más de 50 caracteres',
          matches: 'El apellido solo puede contener letras y espacios',
        },
      },
      acceptTerms: {
        type: 'boolean',
        oneOf: [true],
        messages: {
          oneOf: 'Para continuar es necesario que aceptes los terminos',
        },
      },
      favoriteFramework: {
        type: 'string',
        required: true,
        messages: {
          required: 'Selecciona una opción',
        },
      },
    },
  };

  onSubmit = () => {
    console.log('Submit form');
  };
}
