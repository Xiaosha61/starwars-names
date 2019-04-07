var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./starwars-names.json');
var getRandomItem = uniqueRandomArray(starWarsNames);

module.exports = {
    all: starWarsNames,
    random: function(number) {
        if (number === undefined) {
            return getRandomItem();
        } else {
            if (typeof number === 'number') {
                var randomItems = [];
                for (var i=0; i<number; i++) {
                    randomItems.push(getRandomItem());
                }
                return randomItems;
            }
            return [];
        }
    }
};