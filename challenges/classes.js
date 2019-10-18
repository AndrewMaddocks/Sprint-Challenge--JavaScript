// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130
class CuboidMaker {
  constructor(cm) {
    this.length = cm.length;
    this.width = cm.width;
    this.height = cm.height;
  }
  surfArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
  volume() {
    return this.length * this.width * this.height;
  }
}
class CubeMaker extends CuboidMaker {
  constructor(cm) {
    super(cm);
  }
  cubeSurfArea() {
    return 6 * (this.length * this.width);
  }
  cubeVolume() {
    return this.length * this.length * this.length;
  }
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});
const cube = new CubeMaker({
  length: 5,
  width: 5,
  height: 5
});

console.log(cuboid.volume());
console.log(cuboid.surfArea());
console.log(cube.cubeSurfArea());
console.log(cube.cubeVolume());

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
