import {
  getBurgerMenuButton,
  getEmailInputField,
  getEmailValidationErrorText,
  getFirstMenuButton,
  getFirstSidenavMenuItem,
  getGreeting,
  getPrimaryButton,
  TEAL,
} from '../support/app.po';

// Function helper example, see `../support/app.po.ts` file

describe('nx-tailwind', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message and correct colors for tailwind and material', () => {
    getGreeting().contains('TailwindCSS').and('have.css', 'color', TEAL); // checks that tailwind is loaded correctly
    getPrimaryButton().contains('Primary Button');
  });

  it('should show custom validation error message when email field is empty', () => {
    getEmailInputField().clear().blur();

    getEmailValidationErrorText().contains('Please fill-in the email');
  });

  it('should hide menu on small screens', () => {
    getFirstMenuButton().should('be.visible');

    cy.viewport(320, 480);

    getFirstMenuButton().should('not.be.visible');
    getBurgerMenuButton().should('be.visible');
  });

  it('should show sidenav menu when clicking on burger icon', () => {
    cy.viewport(320, 480);

    getBurgerMenuButton().click();

    getFirstSidenavMenuItem().contains('Menu Item 1');
  });
});
