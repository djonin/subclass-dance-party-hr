// Creates and returns a new dancer object that can step

function Dancer(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.timeBetweenSteps = timeBetweenSteps;

  this.step();
}
Dancer.prototype.lineUp = function () {
    this.setPosition(
        $(window).height() * Math.random(),
        100
    );
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  // this.top = top;
  // this.left = left;
  if(this.$node)
    this.$node.css(styleSettings);
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};
