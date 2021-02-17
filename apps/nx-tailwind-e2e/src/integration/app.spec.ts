import {
  getEmailInputField,
  getEmailValidationErrorText,
  getGreeting,
  getPrimaryButton,
  TEAL,
} from '../support/app.po';

// Function helper example, see `../support/app.po.ts` file

describe('nx-tailwind', () => {
  beforeEach(() => cy.visit('/'));
  // beforeEach(() => cy.viewport('iphone-6'));
  it('should display welcome message and correct colors for tailwind and material', () => {
    // cy.viewport(320, 480)
    // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');
    getGreeting().contains('TailwindCSS').and('have.css', 'color', TEAL); // checks that tailwind is loaded correctly
    getPrimaryButton().contains('Primary Button');
  });

  it('should show custom validation error message when email field is empty', () => {
    getEmailInputField().clear().blur();

    getEmailValidationErrorText().contains('Please fill-in the email');
  });
});
