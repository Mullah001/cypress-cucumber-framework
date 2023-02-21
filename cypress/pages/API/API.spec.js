
class API {

    /**
     * This method will send the request and save the result as test
     */
    sendRequest() {
        cy.request('https://jsonplaceholder.cypress.io/comments').as('comments');
    }

    /**
     * This method will verify the response code
     * @param {number} responseCode response code to be verified
     */
    verifyResponseCode(responseCode) {
        cy.get('@comments').should((response) => {
            expect(response.status).to.eq(responseCode);
        });
    }

} export default API;