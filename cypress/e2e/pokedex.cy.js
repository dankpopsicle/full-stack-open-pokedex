describe('Pokedex', function() {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  it('front page can be opened', function() {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('can navigate to a pokemon page', function() {
    cy.get('a[href*="venusaur"]').click()
    cy.contains('chlorophyll')
  })
})