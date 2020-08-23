import { Partial, Root } from "./Partical";
import { loadImage, getRandomRgb } from "./helper";
import { Mouse } from "./Mouse";

////////////////////////////////
const width = window.innerWidth;
const height = window.innerHeight;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
////////////////////////////////
canvas.width = width;
canvas.height = height;
const edge = 80;
////////////////////////////////
function onMouseMove({ x, y }) {
  const rootX = x;
  const rootY = y;
  const root = new Root({ x, y, rootX, rootY, rgba: getRandomRgb(), ctx });
  root.draw();
}

const mouse = new Mouse().listenMouseMouveEvent(onMouseMove);
