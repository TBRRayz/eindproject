class Vector {
 public x: number = 0;
 public y: number = 0;

 constructor(x: number = 0, y: number = 0) {
  this.x = x;
  this.y = y;
 }

 public normalize = (magnitude: number = 1): Vector => {
  var len: number = Math.sqrt(this.x * this.x + this.y * this.y);
  this.x /= len;
  this.y /= len;
  return this;
 }

 public rotate = (radians: number): void => {
  var cos: number = Math.cos(radians);
  var sin: number = Math.sin(radians);
  var x: number = (cos * this.x) + (sin * this.y);
  var y: number = (cos * this.y) - (sin * this.x);
  this.x = x;
  this.y = y;
 }

 public getAngle = (): number => {
  return Math.atan2(this.y, this.x);
 }

 public multiply = (value: number): void => {
  this.x *= value;
  this.y *= value;
 }

 public add = (value: Vector): void => {
  this.x += value.x;
  this.y += value.y;
 }

 public subtract = (value: Vector): void => {
  this.x -= value.x;
  this.y -= value.y;
 }

}