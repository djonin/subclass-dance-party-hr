function SnakeyDancer(top, left, timeBetweenSteps, minRadius, maxRadius) {
  this.timer = null;
  this.speed = 20;
  this.count = 1;
  this.goTo = {
    x: $(window).width() / 2,
    y: $(window).height() / 2
  };

  Dancer.call(this, top, left, timeBetweenSteps);

  var that = this;
  $(window).mousemove(function(event) {
    that.goTo.x = event.pageX;
    that.goTo.y = event.pageY;
  });
}

SnakeyDancer.prototype = Object.create(Dancer.prototype);

SnakeyDancer.prototype.constructor = SnakeyDancer;

SnakeyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  var copy = this.$node
  var that = this;
  var top = Number.parseInt(this.$node.css('top'));
  top = top + (this.goTo.y - top) * Math.random() /2 + (Math.random() *2 -1) * 10 ;

  var left = Number.parseInt(this.$node.css('left'));
  left = left + (this.goTo.x - left ) * Math.random()/2 + (Math.random() *2 -1) * 10 ;

  var styleSettings = {
    top: top,
    left: left
  };

  this.$node = this.$node.clone();

  this.$node.css(styleSettings);
  copy.parent().append(this.$node);

  this.count++;

  var color = this.count * 10 % 255;

  this.$node.css(
    'border-color',
    'rgba('
     + color + ', '
     + Math.round(Math.random() ) * color + ', '
     + Math.round(Math.random() ) * color + ', ' +
    Math.random() + ')');

  setTimeout(function() {
    copy.remove();
    that.count--;
    that.timer = null;
  }, Math.random() * 5000);
};

function makeSnakeyDancer(top, left, timeBetweenSteps) {
  return new SnakeyDancer(
    top,
    left,
    timeBetweenSteps
  );
}
