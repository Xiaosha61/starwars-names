var expect = require('chai').expect;
var starwars = require('./index');

describe('starwars-names', function() {
    describe('all', () => {
        it('should be an array of strings', () => {
            expect(starwars.all).to.satisfy(isArrayOfStrings);
    
            function isArrayOfStrings(array) {
                return array.every((item) => typeof item === 'string')
            }
        });
    
        it('should contain Lucas', () => {
            expect(starwars.all).to.include('Lucas');
        });
    })

    describe('random', () => {
        it('should return a random item from the starwars.all', () => {
            var randomItem = starwars.random();
            expect(starwars.all).to.include(randomItem);
        });

        it('should return an array of random items if passed a number', () => {
            var randomItems = starwars.random(3);
            expect(randomItems).to.have.length(3);
            randomItems.forEach((item) => {
                expect(starwars.all).to.include(item);
            })
        })
    })
});