export class Partical {
  constructor({
    x,
    y,
    image,
    rgba,
    width = 20,
    height = 20,
    alpha = 1,
    rotate,
  }) {
    this.x = x;
    this.y = y;
    this.rotate = rotate;
    this.image = image;
    this.width = width;
    this.height = height;
    this.alpha = alpha;
    this.rgba = rgba;
  }
  draw(ctx) {
    // const cx = this.x + 0.5 * this.width;
    // const cy = this.y + 0.5 * this.height;
    // ctx.save();
    // ctx.translate(cx, cy);
    // ctx.rotate((this.rotate * Math.PI) / 180);
    // ctx.translate(-cx, -cy);
    // ctx.globalAlpha = this.alpha > 0 ? this.alpha : 0;
    // drawing
    if (this.image) {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    } else if (this.rgba) {
      const { r, g, b, a } = this.rgba;
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    //
    // ctx.restore();
  }
}

export class Root {
  constructor({
    x,
    y,
    rgba,
    rootX = 0,
    rootY = 0,
    distance = 80,
    ctx,
    alpha = 1,
    rotate,
  }) {
    this.x = x;
    this.y = y;
    this.rootX = rootX;
    this.rootY = rootY;
    this.distance = distance;
    this.rgba = rgba;
    this.ctx = ctx;

    this.rotate = rotate;
    this.alpha = alpha;
    this.speedX = 0;
    this.speedY = 0;
  }
  draw() {
    this.caculateNextFrame();
    if (this.radius > 0) {
      if (this.image) {
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      } else if (this.rgba) {
        const { r, g, b, a } = this.rgba;
        this.ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a || Math.random()})`;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.strokeWidth = 0.2;
        this.ctx.fill();
        this.ctx.stroke();
      }
      requestAnimationFrame(this.draw.bind(this));
    } else {
      cancelAnimationFrame(this.draw);
    }
  }
  caculateNextFrame() {
    this.speedX += (Math.random() - 0.5) / 2;
    this.speedY += (Math.random() - 0.5) / 2;
    this.x += this.speedX;
    this.y += this.speedY;

    const distanceX = this.x - this.rootX;
    const distanceY = this.y - this.rootY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    this.radius = ((-distance / this.distance + 1) * this.distance) / 10;
  }
}
