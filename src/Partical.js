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
