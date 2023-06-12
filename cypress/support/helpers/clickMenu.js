//Helper methods could be used across different product pages
import navMenu from "../../fixtures/example";

export const gotoProductPage = (link) => {
  cy.visit(link);
};

export const gotoPage = (buttonBag) => {
  cy.get(buttonBag).click();
};

export const clickProduct = (productCardId) => {
  cy.get(productCardId).eq(0).click();
};

export const clickAddToBag = (addToBagId) => {
  cy.get(addToBagId).eq(0).click();
};

export const verifyItemInBag = (productInBag)=>{
cy.get(productInBag,{force:true}).should("be.visible");
}

