import { useEffect, useState } from "react"
import Pagination from "./Pagination";


type ProductType = {
  id : number;
  title : string;
  price : number;
  thumbnail : string;
}


function PaginationPar() {
  
  const [products , setProducts] = useState<ProductType[]>([]);
  const [currentPage , setCurrentPage] = useState<number>(1);
  const [totalProducts , setTotalProducts] = useState<number>(0);

  const limit = 9;

  useEffect(() => {
    const skip = (currentPage - 1) * limit;
    
    const fetchProducts = async () => {
      try{
        const result = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
        const data = await result.json();
        if(data?.products){
          setProducts(data.products);
          setTotalProducts(data.total);
        }
      }
      catch(error){
        console.log(error);
      }
    }

    fetchProducts();
  } , [currentPage]);

  const totalPages = Math.ceil(totalProducts / limit);

  return (
    <div className = 'h-screen bg-black text-white p-6 space-y-4'>
      <h2 className = 'text-4xl text-center text-cyan-500'>
        Pagination Component
      </h2>
      <h1 className = 'text-2xl font-bold'>
        Products
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          products.map((product) => (
            <div 
              key = {product.id}
              className = 'border border-white/20 p-2'
            >
              <img 
                src = {product?.thumbnail} 
                alt = {product.title}
                className = "w-30 h-20 object-cover rounded"
              />
              <h2 className="font-light text-white">
                {product.title}
              </h2>
              <p className="text-gray-600">
                Price : ${product.price}
              </p>
            </div>
          ))
        }
      </div>
      {
        totalPages > 1 && (
          <Pagination 
            currentPage = {currentPage}
            totalPages = {totalPages}
            onPageChange = {(page : number) => setCurrentPage(page)}
          />
        )
      }
    </div>
  )
}

export default PaginationPar
