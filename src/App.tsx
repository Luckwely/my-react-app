import { useDispatch } from "react-redux";
import { fetchProduct } from "./app/features/product/productSlice";
import { useEffect } from "react";
import type { AppDispatch } from "./app/store";
import AppRouter from "./routes/appRouter";

export default function App() {
  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <div>
      <AppRouter />
    </div>
  );
}
