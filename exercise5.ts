//BT5
class Rectangle {
  constructor(public length: number, public width: number) {}
  calculateArea(): number {
      return this.length * this.width;
  }
}

const rectangle1 = new Rectangle(5, 10);
const area1 = rectangle1.calculateArea();
console.log(`Diện tích HCN: ${area1}`)