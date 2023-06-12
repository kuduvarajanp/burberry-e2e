import navMenu from "../support/config/url";
import selectors from "../support/config/selectors";
import {
  gotoProductPage,
  clickProduct,
  clickAddToBag,
  gotoPage,
  verifyItemInBag,
} from "../support/helpers/clickMenu";

describe("add product to cart and verify the cart", () => {
  beforeEach(() => {
    cy.viewport(1300, 520);
    cy.visit("/");
    cy.get("#onetrust-accept-btn-handler").click();
  });
  it("visit the product page and add item to cart  ", () => {
    gotoProductPage(navMenu.womensGifts);
    clickProduct(selectors.productCardId);
    clickAddToBag(selectors.addToBagId);
    gotoPage(selectors.buttonBag);
    verifyItemInBag(selectors.productInBag);
  });
  it("click to login  ", () => {
    gotoPage(selectors.buttonLogin);
    cy.fixture("example").then((data) => {
      cy.get("iframe", { force: true }).then(($iframe) => {
        const $body = $iframe.contents().find("body");

        cy.wrap($body)
          .find("#loginID", { force: true })
          .should("be.visible")
          .type(data.username);
        cy.wrap($body).find("#password", { force: true }).type(data.password);
        cy.wrap($body).find('[data-testid="loginButtonTestId"]').click();
      });
    });
  });
});
