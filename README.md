polar-clock
===========

A portable polar clock animation defined in a canvas element utilizing an object-oriented approach.

##Usage

Simply include the `polar.js` file in the html document you want a polar clock to show.

Then in another javascript file, you have access to the `Polar` constructor:

```javascript

var canvas, clock;

//get canvas and new clock
canvas = document.getElementById('yourCanvasId');
clock = new Polar(canvas);

```

And with that, you can also set other properties:

```javascript

//set width of individual 'hands'
clock.secWidth = 8.75;
clock.minWidth = 2.50;
clock.hrWidth  = 15.0;

```
```javascript
//set radii
clock.secRadius = 205;
clock.minRadius = 127.5;
clock.hrRadius  = 75;
```
```javascript
//set 'top of the clock'
clock.startAngle = (3 * Math.PI / 2);
```
```javascript
//set colors of 'hands'
clock.secColor = '#57FF52';
clock.minColor = '#DD4E22';
clock.hrColor  = '#FFFF5D';

```

Once you have your clock all set just the way you like, drawing is handled any way you like:

- using `requestAnimationFrame`
- using `setInterval` or `setTimeout`

###Drawing

Using `requestAnimationFrame` is simple:

```javascript
//create wrapper function
function yeahClock() {

    clock.update();  //update clock
    clock.draw();    //draw clock

    requestAnimationFrame(yeahClock); //start next frame

}

//start everything off
requestAnimationFrame(yeahClock);
```

Using `setInterval` takes a similar approach but you can specify how often to update rather than 'as fast as possible':

```javascript
//create intervale
setInterval(function() {

    clock.update();
    clock.draw();

//update every 1 second (1000 milliseconds)
}, 1000);
```

##Other

Feel free to use and modify the code. Just shoot credit for the base idea here if you end up using it in any way.
