import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../../../Provider/AuthProvider";
import { fetchItems } from "../ShopSlice";
import ItemBox from "../ItemBox/ItemBox";
import { useInView } from "react-intersection-observer";

const Shop = () => {
  const { baseUrl } = useContext(AuthContext);

  const { items, isLoading, error } = useSelector((state) => state.shopR);
  const disPatch = useDispatch();

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

  useEffect(() => {
    disPatch(fetchItems(page));
  }, [disPatch, page]);

  console.log("Shop: ", items);

  if (items.length == 0) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="p-5">
      <h1 className="text-xl text-white font-bold">Shop</h1>

      {items.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {items.map((product, idx) => (
              <ItemBox key={idx} product={product} />
            ))}
          </div>
          <div className="text-center mt-4" ref={ref}>
            <span className="loading loading-spinner loading-lg bg-warning"></span>
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

export default Shop;
