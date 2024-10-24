describe('Покупка аватара', function () {

    it('Авторизация', function () {
         cy.visit('https://pokemonbattle.ru/login');
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN') ;
         cy.get('#password').type('USER_PASSWORD');
         cy.get('.auth__button').click();
         cy.visit('https://pokemonbattle.ru');
         cy.wait(2000);
         cy.get('.header__container > .header__id').click();
         cy.wait(2000);
         cy.get('[href="/shop"]').contains('Смена аватара'); 
         cy.get('[href="/shop"]').click({ force: true });
         cy.wait(2000);
         cy.get(':nth-child(9) > .shop__button').click({ force: true })
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('NAME');
         cy.get('.pay-btn').click({ force: true });
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click({ force: true });
         cy.get('.payment__success1').contains('Покупка прошла успешно');
})
})
