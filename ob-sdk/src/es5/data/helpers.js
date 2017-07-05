module.exports = {
  getMiniOutcome: function(outcome) {
    return Object.keys(outcome).reduce(function(accumulator, value) {
      accumulator.id = outcome.id;
      accumulator.name = outcome.name;
      accumulator.price = outcome.price;
      return accumulator;
    }, {});
  },
};
