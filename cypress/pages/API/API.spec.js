
class API {

    /**
     * This method will send the request and save the result as test
     */
    sendRequest() {
        cy.request("GET", "https://reqres.in/api/users?page=2").as('test');
    }

    /**
     * This method will verify the response code
     * @param {number} responseCode response code to be verified
     */
    verifyResponseCode(responseCode) {
        cy.get('@test').should((response) => {
            expect(response.status).to.eq(responseCode);
        });
    }

} export default API;