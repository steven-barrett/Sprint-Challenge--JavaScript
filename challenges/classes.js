// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {    
    constructor(l, w, h) {
        this.length = l;
        this.width = w;
        this.height = h;
        }
  }

    CuboidMaker.prototype.volume = function () {
    return this.length * this.width * this.height;        
    }
    CuboidMaker.prototype.surfaceArea = function () {
    let lh = this.length * this.height;
    let wh = this.width * this.height;
    let lw = this.length * this.width;

    return (lh + wh + lw) * 2;
    }          

let cuboid = new CuboidMaker(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes 
//and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
