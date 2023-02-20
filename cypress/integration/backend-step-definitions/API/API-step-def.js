import { Given, Then } from "cypress-cucumber-preprocessor/steps/index";
import API from "../../pages/API/API.spec";

const api = new API();

Given("I send request to API", () => {
    api.sendRequest();
});

Then("I verify response code is {number}", (responseCode) => {
    api.verifyResponseCode(responseCode);
});