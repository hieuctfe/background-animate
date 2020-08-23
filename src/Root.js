export class Root {
  constructor({ x, y, rootX = 0, rootY = 0, rgba, alpha = 1, rotate }) {
    this.x = x;
    this.y = y;
    this.rootX = rootX;
    this.rootY = rootY;
    this.rgba = rgba;

    this.rotate = rotate;
    this.alpha = alpha;
    this.speedX = 0;
    this.speedY = 0;
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
  caculateNextFrame() {
    this.speedX = Math.random() - 0.5;
    this.speedY = Math.random() - 0.5;
    this.x += this.speedX;
    this.y += this.speedY;

    const distanceX = this.x - this.rootX;
    const distanceY = this.y - this.rootY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    return;
  }
}
