type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

let productsList: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 10,
    quantity: 5,
  },
  {
    id: 2,
    name: "Product 2",
    price: 20,
    quantity: 8,
  },
  {
    id: 3,
    name: "Product 3",
    price: 9,
    quantity: 2,
  },
  {
    id: 4,
    name: "Product 4",
    price: 28,
    quantity: 5,
  },
  {
    id: 5,
    name: "Product 5",
    price: 25,
    quantity: 1,
  },
];

const totalPrice = productsList.reduce(
  (acc: number, currentValue: Product) =>
    acc + currentValue.price * currentValue.quantity,
  0
);

const productPriceLessThan100: Product[] = productsList.filter(
  (product) => product.price < 100
);

const des: string[] = productsList.map(
  (product) =>
    `Sản phẩm ${product.name} có giá ${product.price} đồng và còn ${product.quantity} sản phẩm.`
);
const totalQuantityUnder100 = productsList.reduce(
  (acc: number, currentValue: Product) =>
    currentValue.price < 100 ? acc + currentValue.quantity : acc,
  0
);

function getDiscountedProducts(
  products: Product[],
  discount: number
): Product[] {
  if (discount <= 0 || discount >= 1) {
    console.log("Mã giảm giá phải lớn hơn 0 và nhỏ hơn 100")
  }
  const discountedProducts: Product[] = products.map((product) => {
    const discountedPrice = product.price * (1 - discount/100);
    return {
      ...product,
      price: Math.round(discountedPrice),
    };
  });

  return discountedProducts;
}

console.log(getDiscountedProducts(productsList,20))
