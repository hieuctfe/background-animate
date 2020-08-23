export function loadImage(imagePath) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "Anonymous";
    image.addEventListener("load", () => {
      resolve(image);
    });
    image.addEventListener("error", (err) => {
      reject(err);
    });
    image.src = imagePath;
  });
}

export function getRandomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = (num >> 8) & 255;
  var b = num & 255;
  return { r, g, b };
}
