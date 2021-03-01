import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'nx-tailwind-test-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  title = 'nx-tailwind';

  menuItems = ['Menu Item 1', 'Menu Item 2'];

  form = new FormGroup({});
  model = { name: 'alex', email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'Enter your name',
        required: true,
      },
      validation: {
        messages: {
          required: 'Please fill-in your name',
        },
      },
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      },
      validation: {
        messages: {
          required: 'Please fill-in the email',
        },
      },
    },
  ];
  onSubmit() {
    console.log(this.model);
  }
}
