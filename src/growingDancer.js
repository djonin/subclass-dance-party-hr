function GrowingDancer(top, left, timeBetweenSteps, minRadius, maxRadius) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.maxRadius = maxRadius;
  this.minRadius = minRadius;
  this.direction = 1;
  this.growthStep = 1;
  this.radius = this.minRadius;
}

GrowingDancer.prototype = Object.create(Dancer.prototype);

GrowingDancer.prototype.constructor = GrowingDancer;

GrowingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  this.radius = this.radius + this.direction * this.growthStep;
  this.radius = (this.radius > 0) ? this.radius : 1;

  this.$node.css('border-width', this.radius);
  this.$node.css('border-radius', this.radius);

  var color =
    Math.floor((this.radius - this.minRadius) /
      (this.maxRadius - this.minRadius) * 255);
  this.$node.css('border-color', 'rgb(' + color + ', ' + 0 + ', ' + color +
    ')');

  if ((this.radius > this.maxRadius && this.direction > 0) ||
    (this.radius < this.minRadius && this.direction < 0)) {
    this.direction *= -1;
  }
};

function makeGrowingDancer(top, left, timeBetweenSteps) {
  return new GrowingDancer(
    top,
    left,
    timeBetweenSteps,
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 30 + 10));
}
