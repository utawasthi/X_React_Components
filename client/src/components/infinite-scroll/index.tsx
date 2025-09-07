import { useEffect, useRef, useState } from "react"
import { mockProducts, type Product } from "./data"

const ITEMS_PER_PAGE = 10;

function InfiniteScroll() {

  const [items , setItems] = useState<Product[]>(mockProducts.slice(0 , ITEMS_PER_PAGE));
  const [page , setPage] = useState<number>(1);
  const [hasMore , setHasMore] = useState<boolean>(true);

  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting && hasMore){
        setPage((prev) => prev + 1);
      }
    }, 
    {
      threshold : 1
    }
  );

  const currentLoader = loaderRef.current;
  if(currentLoader) observer.observe(currentLoader);

  return () => {
    if(currentLoader) observer.unobserve(currentLoader);
  }
  } , [hasMore]);

  useEffect(() => {
    if(page === 1) return;

    const timeout = setTimeout(() => {
      const newItems = mockProducts.slice(0 , page * ITEMS_PER_PAGE);
      setItems(newItems);
      if(newItems.length >= mockProducts.length){
        setHasMore(false);
      }
    } , 500);

    return () => clearTimeout(timeout);

  } , [page]);

  return (
    <div className="border-t border-white/20 min-h-screen text-white flex flex-col items-center py-10">
      <h1 className="text-4xl text-orange-500 font-bold mb-20">
        Infinite Scroll List
      </h1>
      <div className="w-[400px] p-5 mb-5">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-gray-900 p-4 mb-3 rounded-lg shadow"
          >
            <h2 className="font-semibold">{item.name}</h2>
            <p className="text-sm text-gray-300">Price: ${item.price}</p>
          </div>
        ))}
      </div>

      {hasMore ? (
        <div ref={loaderRef} className="py-6">
          <span className="text-gray-400">Loading more...</span>
        </div>
      ) : (
        <p className="py-6 text-gray-400">No more items</p>
      )}
    </div>
  )
}

export default InfiniteScroll