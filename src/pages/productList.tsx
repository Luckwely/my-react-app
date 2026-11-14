import { Link } from "react-router";
import type { RootState } from "../app/store";
import { useSelector } from "react-redux";
import Container from "../components/container";


export default function ProductList() {
    const products = useSelector((state: RootState) => state.products.entities);
    return (
        <Container>
            <div className="grid grid-cols-4 gap-4">
                {products.map((product) => (
                    <Link
                        to={`/products/${product.id}`}
                        key={product.id}
                        className="relative bg-white p-4 border border-gray-100 shadow-md"
                    >
                        <img src={product.images?.[0]} alt="" />
                        <p className="font-bold text-lg">{product.title}</p>
                        <p className="absolute top-2 left-2 bg-red-100 text-red-800 border border-red-900 px-2 rounded-full">
                            {product.category}
                        </p>
                        <p className="font-light mb-3">{product.brand}</p>
                        <p>{product.price} €</p>
                    </Link>
                ))}
            </div>
        </Container>
    );
}
