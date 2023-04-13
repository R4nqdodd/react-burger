const baseUrl = 'http://localhost:3000/';

describe('service is available', () => {
  before('passes', () => {
    cy.visit(baseUrl);
  })

  it('check', () => {
    cy.wait(3000).get('li[class^="burger-ingredient_item_"]').first().trigger('dragstart');
    cy.get('section').last().trigger('drop');
    cy.get('button').contains('Оформить заказ').click();
    cy.get('input[name=email]').type('111222@111222.111222');
    cy.get('input[name=password]').type('222222');
    cy.get('button').contains('Войти').click();
    cy.get('button').contains('Оформить заказ').click();
    cy.wait(20000).get('button[aria-label="закрыть"]').click();
  })
})