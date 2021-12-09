const { Dog, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Dog model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  describe('Validators', () => {
    beforeEach(() => Dog.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Dog.create({ name: 'Pug' });
      });
    });
  });

 // Testing:
 
  describe('Validators', () => {
    beforeEach(() => Dog.sync({ force: true }));
    describe('height', () => {
      it('should throw an error if height is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid height')))
          .catch(() => done());
      });
      it('should work when its a valid height', () => {
        Dog.create({ height: '3 - 6' });
      });
    });
  });

  describe('Validators', () => {
    beforeEach(() => Dog.sync({ force: true }));
    describe('weight', () => {
      it('should throw an error if weight is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid weight')))
          .catch(() => done());
      });
      it('should work when its a valid weight', () => {
        Dog.create({ weight: '5 - 10' });
      });
    });
  });

  describe('Validators', () => {
    beforeEach(() => Dog.sync({ force: true }));
    describe('image', () => {
      it('should throw an error if image is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid link image')))
          .catch(() => done());
      });
      it('should work when its a valid link image', () => {
        Dog.create({ image: 'https://www.lookslikefilm.com/wp-content/uploads/2019/02/Danielle-Kilgore-Hack.jpg' });
      });
    });
  });

  describe('Validators', () => {
    beforeEach(() => Dog.sync({ force: true }));
    describe('life_span', () => {
      it('should throw an error if life span is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid life span')))
          .catch(() => done());
      });
      it('should work when its a valid life span', () => {
        Dog.create({ life_span: '1 - 16' });
      });
    });
  });

});
