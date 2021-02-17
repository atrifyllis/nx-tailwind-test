export const TEAL = 'rgb(20, 184, 166)';

export const getGreeting = () => cy.get('[data-cy=tailwind-title]');

export const getPrimaryButton = () => cy.get('[data-cy=primary]');

export const getEmailInputField = () => cy.get('[data-cy=email]');

export const getEmailValidationErrorText = () =>
  cy.get('formly-validation-message');
