function CloningDancer(top, left, timeBetweenSteps, timeToLive, prob, red, radius) {
  this.timeToLive = timeToLive;
  this.prob = prob;
  this.top = top;
  this.left = left;
  this.red = red;
  this.radius = radius;
  Dancer.call(this, top, left, timeBetweenSteps);
  if(this.$node){
    this.$node.css('border-width', this.radius);
    this.$node.css('border-radius', this.radius);
    this.$node.css('border-color', 'rgb(' + red + ', ' + (255-red) + ', ' + (255-red) +
      ')');
  } 
}

CloningDancer.prototype = Object.create(Dancer.prototype);

CloningDancer.prototype.constructor = CloningDancer;

CloningDancer.prototype.step = function() {

  var direction = Math.random() > 0.5 ? 1 : -1;
  var newTop = (this.top + Math.random() * 10 + this.radius)*direction;
  var newLeft = (this.left + Math.random() * 10+ this.radius)*direction;

  //clone instead of moving with probability prob
  if(Math.random()* 100 < this.prob) {
    //clone the node
    var newRadius = this.radius - Math.ceil(this.radius/10)
    var newTime = Math.ceil(this.timeBetweenSteps/2);
    var clone = new CloningDancer(newTop, newLeft, newTime, Math.floor(this.timeToLive/2), this.prob, Math.floor(this.red-(this.red/4)), newRadius);
    
    this.$node.parent().append(clone.$node);
  } else {
    //move
    this.setPosition(this.top+direction, this.left+direction);
  }

  this.timeToLive--;
  if(this.timeToLive > 0 ) {
    Dancer.prototype.step.call(this);
  } else {
    this.$node.remove();
    this.$node = null;
  }

};

function makeCloningDancer(top, left, timeBetweenSteps) {
  return new CloningDancer(
    top,
    left,
    timeBetweenSteps,
    25,
    50,
    220,
    20);
}
