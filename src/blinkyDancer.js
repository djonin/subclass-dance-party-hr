function BlinkyDancer(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
}

BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  this.$node.toggle();
};

function makeBlinkyDancer(top, left, timeBetweenSteps){
    return new BlinkyDancer(top, left, timeBetweenSteps);
}
