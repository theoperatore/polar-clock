var Polar = function Polar(canvas) {

    this.center = {
        x : canvas.width / 2,
        y : canvas.height / 2
    };

    this.canvasHeight = canvas.height;
    this.canvasWidth = canvas.width;

    this.ctx = canvas.getContext('2d');

    this.hrRadius = 0;
    this.minRadius = 0;
    this.secRadius = 0;

    this.hrWidth = 0;
    this.minWidth = 0;
    this.secWidth = 0;

    this.hrColor = '#333333';
    this.minColor = '#AAAAAA';
    this.secColor = '#DDDDDD';

    this.startAngle = (3 * Math.PI / 2);

    this._currHrs = 0;
    this._currMins = 0;
    this._currSecs = 0;

    this._currRadsHr = 0;
    this._currRadsMin = 0;
    this._currRadsSec = 0;

    this._currDegsHr = 0;
    this._currDegsMin = 0;
    this._currDegsSec = 0;

    this._animation = null;
}

Polar.prototype.update = function() {

    var now = new Date();

    //update seconds
    this._currSecs = 6 * (now.getSeconds() + (now.getMilliseconds() / 1000));
    this._currRadsSec = Math.PI * (this._currSecs / 180);
    this._currDegsSec = this._currRadsSec - (Math.PI / 2);

    //update mins
    this._currMins = 6 * (now.getMinutes() + (now.getSeconds() / 60) + (now.getMilliseconds() / 1000 / 60));
    this._currRadsMin = Math.PI * (this._currMins / 180);
    this._currDegsMin = this._currRadsMin - (Math.PI / 2);

    //update hrs
    this._currHrs = 15 * (now.getHours() + (now.getMinutes() / 60) + (now.getSeconds() / 60 / 60) + (now.getMilliseconds() / 1000 / 60 / 60));
    this._currRadsHr = Math.PI * (this._currHrs / 180);
    this._currDegsHr = this._currRadsHr - (Math.PI / 2);

}

Polar.prototype.draw = function() {

    if (this.ctx) {

        this.ctx.clearRect(0,0,this.canvasWidth, this.canvasHeight);

        //drawSecs
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.secColor;
        this.ctx.lineWidth = this.secWidth;
        this.ctx.arc(this.center.x, this.center.y, this.secRadius, this.startAngle, this._currDegsSec, false);
        this.ctx.stroke();

        //draw Mins
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.minColor;
        this.ctx.lineWidth = this.minWidth;
        this.ctx.arc(this.center.x, this.center.y, this.minRadius, this.startAngle, this._currDegsMin, false);
        this.ctx.stroke();

        //draw Hrs
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.hrColor;
        this.ctx.lineWidth = this.hrWidth;
        this.ctx.arc(this.center.x, this.center.y, this.hrRadius, this.startAngle, this._currDegsHr, false);
        this.ctx.stroke();
    }
}
