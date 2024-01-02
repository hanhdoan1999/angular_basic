// Bài 1: Tạo một hàm TypeScript nhận vào một mảng các số nguyên và trả về tổng của chúng.
const sum = (arr: number[]): number => {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,0);
}

let array1 = [1, 2, 3, 4, 5];
console.log(sum(array1))