import navMenu from "../support/config/url";
import selectors from "../support/config/selectors";
import {
  gotoProductPage,
  clickProduct,
  clickAddToBag,
  gotoPage,
  verifyItemInBag,
} from "../support/helpers/clickMenu";

const sizes = ["ipad-2", "macbook-16"];

describe("add product to cart and verify the cart", () => {
  sizes.forEach((size) => {
    beforeEach(() => {
      cy.visit("/");
    });
    it(`visit the product page at ${size} and add item to cart  `, () => {
      cy.get("#onetrust-accept-btn-handler").click();
      gotoProductPage(navMenu.womensGifts);
      clickProduct(selectors.productCardId);
      clickAddToBag(selectors.addToBagId);
      gotoPage(selectors.buttonBag);
      verifyItemInBag(selectors.productInBag);
    });
    it(`click to login - ${size}  `, () => {
      gotoPage(selectors.buttonLogin);
      cy.fixture("example").then((data) => {
        cy.get("iframe", { force: true }).then(($iframe) => {
          const $body = $iframe.contents().find("body");

          cy.wrap($body)
            .find("#loginID")
            .invoke("show")
            .should("be.visible")
            .type(data.username);
          cy.wrap($body).find("#password").invoke("show").type(data.password);
          cy.wrap($body).find('[data-testid="loginButtonTestId"]').click();
        });
      });
    });
  });
});
