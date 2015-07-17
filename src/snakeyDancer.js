function SnakeyDancer(top, left, timeBetweenSteps, minRadius, maxRadius) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.timer = null;
  this.speed = 20;
  this.count = 1;
}

SnakeyDancer.prototype = Object.create(Dancer.prototype);

SnakeyDancer.prototype.constructor = SnakeyDancer;

SnakeyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  var copy = this.$node
  var that = this;
  var top =
    Number.parseInt(this.$node.css('top')) +
    (Math.random() > 0.5 ? 1 : -1) * Math.random() * this.speed

  var left =
    Number.parseInt(this.$node.css('left')) +
    (Math.random() > 0.5 ? 1 : -1) * Math.random() * this.speed;

  var styleSettings = {
    top: top,
    left: left
  };

  this.$node = this.$node.clone();

  this.$node.css(styleSettings);
  copy.parent().append(this.$node);

  this.count++;

  var color = 255 / this.count;

  this.$node.css(
    'border-color',
    'rgba(' + color + ', ' + Math.floor(color/ 2) + ', ' + color + ', ' + Math.random() +')');

  setTimeout(function() {
    copy.remove();
    that.count--;
    that.timer = null;
  }, Math.random() * 1000);
};

function makeSnakeyDancer(top, left, timeBetweenSteps) {
  return new SnakeyDancer(
    top,
    left,
    timeBetweenSteps
  );
}
