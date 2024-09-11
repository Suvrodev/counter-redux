import React, { useEffect, useState } from "react";
import { useGetProductsQuery } from "../Services/ProductApi";
import ItemBox from "../../Shop/ItemBox/ItemBox";
import { useInView } from "react-intersection-observer";

const RTKShop = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const [page, setPage] = useState(0);
  useEffect(() => {
    if (inView) {
      setPage((page) => page + 1);
    }
  }, [inView]);
  console.log("Inview: ", inView);
  console.log("Page: ", page);

  const [shops, setShops] = useState([]);
  const { data, isLoading } = useGetProductsQuery(page);

  useEffect(() => {
    if (data) {
      // Make sure `data` is defined
      // setShops((prevShops) => [...prevShops, ...data]); // Spread the old and new data
      setShops([...shops, ...data]);
    }
  }, [page]);
  console.log("Shops: ", shops);

  if (isLoading) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="p-5">
      <h1 className="text-xl text-white font-bold">RTK-SHop</h1>
      {data.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {shops.map((product, idx) => (
              <ItemBox key={idx} product={product} />
            ))}
          </div>
          <div className="text-center mt-4">
            <span
              className="loading loading-spinner loading-lg bg-warning"
              ref={ref}
            ></span>
          </div>
        </div>
      ) : (
        <div>
          <h1>No Product</h1>
        </div>
      )}
    </div>
  );
};

export default RTKShop;
