import { gerPrimaryButton, getGreeting } from '../support/app.po';

// Function helper example, see `../support/app.po.ts` file
const TEAL = 'rgb(20, 184, 166)';
describe('nx-tailwind', () => {
  beforeEach(() => cy.visit('/'));
  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');
    getGreeting().contains('TailwindCSS').and('have.css', 'color', TEAL); // checks that tailwind is loaded correctly
    gerPrimaryButton().contains('Primary Button');
  });
});
