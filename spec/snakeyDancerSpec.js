describe("snakeyDancer", function() {

  var snakeyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    snakeyDancer = makeSnakeyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function() {
    expect(snakeyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(snakeyDancer.$node, 'toggle');
    var tail = snakeyDancer.$node;
    snakeyDancer.step();
    expect(snakeyDancer.$node).to.not.be.equal(tail);
  });

  describe("dance", function() {
    it("should call step at least once per second", function() {
      sinon.spy(snakeyDancer, "step");
      expect(snakeyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(snakeyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(snakeyDancer.step.callCount).to.be.equal(2);
    });
  });
});
