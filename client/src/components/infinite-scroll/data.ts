
export interface Product {
  id : number;
  name : string;
  price : string;
}

export const mockProducts : Product[] = Array.from({length : 100} , (_ , i) => ({
  id : i + 1,
  name : `Product ${i + 1}`,
  price : (Math.random() * 100).toFixed(2),
}));