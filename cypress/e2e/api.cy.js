describe('HTTP requests', () => {

    it('Get', ()=>{
    cy.request({method:'GET', url: '/get'})
      .then(function(response){
      expect(response.body).have.property('url')
      })
    })

    
    it('Post', ()=>{
    cy.request({method:'POST', url: '/post', body: {
      "name": "Lana", 
      "age": "18"
    }, 
    headers: {
      "content-type": "application/json"
    }}).then(function(response){
        expect(response.body).have.property('json')
        expect(response.body.json).to.deep.equal({
          "name": "Lana", 
          "age": "18"
        })
      })
    })
})
