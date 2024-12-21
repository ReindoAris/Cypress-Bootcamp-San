// <reference types="cypress"/>

describe('Login Feature',() => {
    it('Pengguna Melakukan Logout pada website', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text','Dashboard')
        cy.get('[class="oxd-userdropdown-tab"]').click();
        cy.get('[class="oxd-userdropdown-link"]').contains('Logout').click();
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Mengembalikan false untuk mencegah Cypress gagal pada uncaught exceptions
            return false;
          });
    })

    it('Pengguna Melakukan Logout pada website', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text','Dashboard')
        cy.get('[class="oxd-userdropdown-tab"]').click();
        cy.get('[class="oxd-userdropdown-link"]').contains('Change Password').click();
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Mengembalikan false untuk mencegah Cypress gagal pada uncaught exceptions
            return false;
          });
    })
})