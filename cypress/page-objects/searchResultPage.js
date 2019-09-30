class SearchResultPage{
    getProductByDocId(docId)
    {
        return cy.get(`a[href="/product/${docId}"]`);
    }
}

export default new SearchResultPage()