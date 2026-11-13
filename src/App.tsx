import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "./app/features/product/productSlice";
import { useEffect } from "react";
import type { AppDispatch, RootState } from "./app/store";
import type { Product } from "./types/Product";
import { Link } from "react-router";
import AppRouter from "./routes/appRouter";
import ProductList from "./pages/productList";

export default function App() {
  const dispatch = useDispatch<AppDispatch>();
  

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <div>
      <AppRouter />
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductList key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
