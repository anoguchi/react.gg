// heart class

const colors = [
  "var(--green)",
  "var(--blue)",
  "var(--yellow)",
  "var(--pink)",
  "var(--red)",
  "var(--orange)",
  "var(--beige)",
  "var(--purple)",
];

// Animation from https://codepen.io/leusrox/pen/jKBarX

class Heart {
  constructor(x, y, color) {
    this.x = parseFloat(x || window.innerWidth / 2);
    this.y = parseFloat(y || window.innerHeight - 30);
    this.color = color || Math.floor(Math.random() * 360);
    this.phase = Math.random() * 360;
    this.radius = Math.random() * 1;
    this.speed = 1 + Math.random() * 2;
    this.scale = 0.2 + Math.random() * 0.8;
    this.grow = 0.01;
    this.alpha = 1;
    this.done = false;

    this.outer = document.createElement("div");
    this.outer.className = "heart-outer";

    this.inner = document.createElement("div");
    this.inner.className = "heart-inner";
    this.inner.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    this.outer.appendChild(this.inner);
    document.body.appendChild(this.outer);
    this.draw();
  }

  flush() {
    if (document.body.contains(this.outer)) {
      document.body.removeChild(this.outer);
    }
    this.outer = null;
    this.inner = null;
  }

  draw() {
    if (this.done) return;
    this.outer.style.transform =
      "translateX( " +
      this.x +
      "px ) translateY( " +
      this.y +
      "px ) translateZ( 0 ) scale( " +
      this.grow +
      " )";
    this.outer.style.opacity = this.alpha;
  }

  update() {
    this.alpha = this.alpha > 0 ? this.alpha - 0.0015 : this.alpha;
    this.alpha = this.alpha < 0 ? 0 : this.alpha;

    this.x += Math.cos(this.phase / 50) * this.radius;
    this.y -= this.speed;

    this.grow += (this.scale - this.grow) / 10;
    this.phase += 1;

    this.done = this.y < -100 || this.alpha <= 0 ? true : false;
  }
}

export default class HeartDemo {
  constructor() {
    this.hearts = [];
    this.loop = this.loop.bind(this);
  }

  addHeart() {
    this.hearts.push(new Heart());
  }

  loop() {
    requestAnimationFrame(this.loop);
    let i;

    // cleanup
    for (i = 0; i < this.hearts.length; ++i) {
      if (this.hearts[i].done) {
        this.hearts[i].flush();
        this.hearts.splice(i, 1);
      }
    }
    // animate
    for (i = 0; i < this.hearts.length; ++i) {
      this.hearts[i].update();
      this.hearts[i].draw();
    }
  }
}
