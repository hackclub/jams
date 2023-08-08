---
title: 'Making a Basic Particle Physics Simulation'
description: Creating a basic particle physics simulation and rendering using p5.js
contributor: 'sahitid'
originalAuthor: 'SquarePear'
thumbnail: '[particle physics thumbnail final demo](https://cloud-k50jkthdw.vercel.app/0particle-physics-summary.png)'
timeEstimate: '30-45 Min'
difficulty: 'Beginner'
keywords: 'Beta, motion, fractal, particle, physics, particle physics'
language: 'JS'
presentation: ''
presentationPlay: ''
presentationPDF: ''
notes: ''
poster: ''
video: ''
slug: 'particle-physics'
---

In this workshop, you're going to use p5.js, along with 🌟 PHYSICS 🌟, to animate colorful particles. Along the way, you'll learn a little bit about:

- how to use p5.js
- some basic physics concepts
- how _fun_ creative coding is

All of the different particles will act like planets in orbit. They'll all apply forces (gravity) to each other depending on their mass and their distance from each other. The main difference here is that they are much closer together than real planets. This is so you don't have to wait an entire year for one particle to orbit another.

When you are done with this workshop, you should end up with something similar to this!

[![Final product](https://camo.githubusercontent.com/588608bd77901d32e460818794b2832627e4a785d69bee0821115166d7be3a1b/68747470733a2f2f636c6f75642d6f64646a696971356b2e76657263656c2e6170702f3073756d6d6172792e676966)](https://camo.githubusercontent.com/588608bd77901d32e460818794b2832627e4a785d69bee0821115166d7be3a1b/68747470733a2f2f636c6f75642d6f64646a696971356b2e76657263656c2e6170702f3073756d6d6172792e676966)

This workshop should take 30-45 minutes to complete.

## Getting Set Up

First you need to setup your project. I created a basic p5.js [boilerplate](https://en.wikipedia.org/wiki/Boilerplate_code) that you can use to easily start coding.

1. Go to [https://repl.it/@SquarePear/p5-boilerplate](https://repl.it/@SquarePear/p5-boilerplate)
2. Click "fork" to make a copy for you to edit

## Making a Particle

The first step in this project is to create a class to manage the particles. Before you can do this, you should create a new file to store the class for easier readability.

1. Create a new file called `particle.js`
2. Add this file in between the `<body>` `</body>` tags of the `index.html` file:

```html
...
<body>
  <script src="particle.js"></script>
  <script src="sketch.js"></script>
</body>
...
```

3. Add the class definition to `particle.js`

```js
class Particle {}
```

A [class](https://en.wikipedia.org/wiki/Class_(computer_programming)) is just a way of connecting a set of variables and functions in one package. Now that you have a particle class, you need to define what the particle can do.

Inside your newly-created `Particle` class, add:

```js
class Particle {
  constructor (x, y, mass) {
    // Setup particle
  }

  draw() {
    // Draw particle
  }

  applyForce(force) {
    // Apply force to particle
  }

  physics(particle) {
    // Use particle
  }

  update() {
    // Update particle
  }
}
```

We just added a list of functions that objects of this class can perform. With the basic structure set up, lets go through each function individually and add the code.

```js
...
constructor(x, y, mass) {
  this.position = createVector(x, y)
  this.acceleration = createVector(0, 0)
  this.velocity = createVector(0, 0)
  this.mass = mass

  // radius = (mass / π) ** 0.5
  this.radius = Math.sqrt(this.mass / PI) * SCALE
  // set random color for particle
  this.color = color(random(0, 255), random(0, 255), random(0, 255))
}
...
```

The [constructor](https://en.wikipedia.org/wiki/Constructor_(object-oriented_programming)) is used to create an instance of a class. In this case, we use it to set up all of the variables when we make a new particle. The [`createVector()`](https://p5js.org/reference/#/p5/createVector) function is provided by p5 to easily make a [vector object](https://p5js.org/reference/#/p5.Vector). This is just a 2d line or position with a few helper functions to easily modify the values.

Next, let's add the code for drawing the particle.

```js
...
draw() {
  // Remove outline
  noStroke()
  // Set fill to particles color
  fill(this.color)
  // Draw particle
  ellipse(this.position.x, this.position.y, this.radius * 2)
}
...
```

This one is much simpler. All this function does it set the color using the [`fill()`](https://p5js.org/reference/#/p5/fill) function and then draws the particle using p5's [`ellipse()`](https://p5js.org/reference/#/p5/ellipse) function.

Next, let's add the code for applying force to the particle.

```js
...
applyForce(force) {
  // acceleration = force / mass
  this.acceleration.add(p5.Vector.div(force, this.mass))
}
...
```

Here we see the first physics formula. This calculates how much acceleration the object should have based on the force applied. We use [Newton's second law of motion](https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion#Constant_Mass)—`F=ma` or `Force = mass * acceleration`— to calculate this acceleration.

Next, let's add the code for applying real-world physics to a particle.

```js
...
physics(particle) {
  // Don't apply to self
  if (this === particle) return

  // mass1 * mass2
  let mass = this.mass * particle.mass
  // radius1 + radius2
  let radius = this.radius + particle.radius
  // Distance between particles
  let distance = this.position.dist(particle.position)

  // Don't apply if particles are touching
  if (distance <= radius) return

  // force = G * mass1 * mass2 / distance ** 2
  let force = p5.Vector.sub(this.position, particle.position)
    .setMag(G * mass  / (distance ** 2))

  // Apply the force
  particle.applyForce(force)
}
...
```

This one looks complicated, but if you think about it in terms of physics it is actually surprisingly simple.

- The first line is just making sure it isn't trying to compare itself.
- Next, we declare a few variables.
- The second if statement is just used to stop the forces when the particles are colliding. This isn't 100% necessary, but things will probably break if they get too close.
- The `force` variable points from the affected particle to the affecter.
- Next the magnitude is set to the amount of force using the [gravitational formula](https://en.wikipedia.org/wiki/Newton%27s_law_of_universal_gravitation).
- Finally, the force is applied to the particle.

Finall y, let's write some code for updating the properties of the particle:

```js
...
update() {
  let deltaVelocity = p5.Vector.mult(this.acceleration, deltaTime)

  this.velocity.set(this.velocity.add(deltaVelocity))

  this.position.set(this.position.add(p5.Vector.mult(this.velocity, deltaTime)))

  this.acceleration.set(0, 0)
}
...
```

This might also look a bit intimidating at first, but if you break it down into sections it is much easier to understand.

- The first line just calculates the change in acceleration. [`deltaTime`](https://p5js.org/reference/#/p5/deltaTime) is used to keep the forces constant no matter how many frames per second you are getting.
- The next line adds the acceleration to the velocity.
- Then the velocity is added to the position, again using `deltaTime` to keep constant changes.
- Finally you reset the acceleration to zero. The velocity stays because of momentum.

Yay! You set up the Particle class! Now you can go back to the main sketch and set up the particle management.

## Managing the Particles

Open the `sketch.js` file in the left sidebar. Right now the code should look like this:

```js
function setup () {
  createCanvas(400, 400)
}

function draw () {
  background(51, 51, 51)
}
```

The [`setup()`](https://github.com/hackclub/hackclub/blob/main/workshops/particle_physics) function is run once at the beginning of the program to do any setup you might need. We use it to create the canvas using [`createCanvas()`](https://github.com/hackclub/hackclub/blob/main/workshops/particle_physics). This creates a 400x400 pixel canvas for us to draw on.

The [`draw()`](https://github.com/hackclub/hackclub/blob/main/workshops/particle_physics) function is run every frame of the program. This can be used to update the animation every frame. We will use it to perform the the physics updates and draw the particles to the canvas.

This file is where we're going to write all the program logic, from creating the `Particle`s we just wrote, to applying physics to them and animating them.

First, we will create the array of particles we will be displaying. Then we need to update and display them every frame inside `draw()`.

First, we need to set some constants and cerate an array of particles we will be displaying. Above the `setup()` function, at the beginning of the file, add:

```js
// Constants
const G = 6.67e-11
const SCALE = 0.001

// Array to store particles
let particles = []
```

In physics, `G` refers to the [Gravitational Constant](https://simple.wikipedia.org/wiki/Gravitational_constant), which is 6.67 x 10-11 N⋅m2⋅kg-2 (which we'll write as 6.67e-11 in JS). This constant is used as the basis for all sorts of fun equations.

Now, let's set up our canvas. In the `setup()` function, add:

```js
function setup() {
  createCanvas(400, 400)

  // Loop and create each particles
  for (let i = 0; i < 10; i++) {
    let x = random(0, width)
    let y = random(0, height)
    let mass = random(2e8, 1e9)

    // Add the new particle to the list
    particles.push(new Particle(x, y, mass))
  }
}
```

All we're doing in the `setup()` function is creating a random location on the canvas, as well as a random mass, for the particle. Then, we create a new `Particle` with this data and add it it to the array of particles we just created.

All of the building blocks are in place. Finally, we're going to use the `draw()` function to animate the particles we created according to the rules of physics. In the `draw()` function, add:

```js
function draw() {
  // Set the background of the canvas to a dark gray
  background(51, 51, 51)

  // Loop all particles twice
  for (const particleA of particles)
    for (const particleB of particles)
      if (particleA !== particleB) particleA.physics(particleB)

  // Loop particles again
  for (const particle of particles) {
    // Update the particle with the new acceleration and velocity
    particle.update()
    // Draw the particle on the canvas
    particle.draw()
  }
}
```

- First, we set the background of our canvas to a dark gray
- Then, we loop through the array of particles twice. If the two particles in the nested for loop are different, we use the `physics()` function we wrote earlier to apply physics to them
- After that, we loop through the array of particles again and update each `Particle` object with the new data as a result of running `physics` on the particles.
- And finally, to see the changes, we draw the particle.

We're going through this slowly and step-by-step, but don't forget that because all of thise code is in the `draw()` function, it's run dozens (sometimes hundreds) of times per second. This is how the smooth animation that you'll see in a second is created.

Here's the final sketch.js code:

## You're Finished!

Click the green "Run" button at the top of the page. You should see some colorful particles movine!

And with that, you should now have a working—although very basic—simulation of gravity between particles. This simulation is roughly what would happen in real life with these exact masses and distances. The values themselves are a bit over exaggerated to be more visually interesting.

- [Final Code](https://repl.it/@SquarePear/Particle-Physics#sketch.js)
- [Final Project](https://particle-physics.squarepear.repl.co/)

## What to Do Next?

Try changing some values and see how they affect the simulation. Add some extra features like creating a particle on click, anti-particles, or maybe apply this concept in a whole different way?

1. [Add on Click](https://repl.it/@SquarePear/Particle-Physics-Add-on-Click#sketch.js): Add a particle whenever you click on the canvas
2. [Anti-Particles](https://repl.it/@SquarePear/Particle-Physics-Anti-Particle#sketch.js): Anti-particles that repel other particles instead of attracting
3. [Physical Text](https://repl.it/@SquarePear/Particle-Physics-Text#sketch.js): Trace letters with particles
