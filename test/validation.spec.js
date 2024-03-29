describe('validation', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof validation, 'object');
  });

  describe('validation.valid', () => {

    it('debería ser una función', () => {
      assert.equal(typeof validation.valid, 'function');
    });

    it('debería retornar true para "4083952015263"', () => {
      assert.equal(validation.valid('4083952015263'), true);
    });

    it('debería retornar false para "1234567890"', () => {
      assert.equal(validation.valid('1234567890'), false);
    });
    
  });
});
