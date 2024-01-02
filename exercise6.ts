//BT6
function logMethod(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (this: any, ...args: any[]) {
    console.log(`Calling method ${String(propertyKey)} with arguments:`, args);
    const result = originalMethod.apply(this, args);
    console.log(`Method ${String(propertyKey)} returned:`, result);
    return result;
  };

  return descriptor;
}

// Example class using the decorator
class ExampleClass {
  @logMethod
  calculateSum(a: number, b: number): number {
    return a + b;
  }
}

// Test
const example = new ExampleClass();
const sum = example.calculateSum(3, 5);