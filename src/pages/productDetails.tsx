
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import type { RootState } from '../app/store';
import Container from '../components/container';

export default function ProductDetails() {
  const { id } = useParams();
  const products = useSelector((state: RootState) => state.products.entities);
  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return <p className="py-20 text-center text-lg text-gray-500">
      Loading or product not found...
    </p>;
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10 md:py-16">
      <Container>
        <div className="mx-auto max-w-7xl">

          {/* Product header */}
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-600">
              {product.category}
            </span>

            <h1 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              {product.title}
            </h1>

            <p className="mt-4 text-lg font-medium text-slate-400">
              {product.brand}
            </p>
          </div>

          {/* Product information */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">

            {/* Product image */}
            <div className="flex min-h-[350px] items-center justify-center overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-sm md:min-h-[500px] md:p-12">
              <img
                src={product.images?.[0]}
                alt=""
                className="max-h-[450px] w-full object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Product details */}
            <div className="flex flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm md:p-10">

              <div className="border-b border-slate-100 pb-7">
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                  Product price
                </p>

                <p className="text-4xl font-extrabold tracking-tight text-indigo-600 md:text-5xl">
                  ${product.price}
                </p>
              </div>

              {/* Description */}
              <div className="border-b border-slate-100 py-7">
                <h2 className="mb-4 text-xl font-bold text-slate-900">
                  Description
                </h2>

                <p className="text-sm leading-8 text-slate-600 md:text-base">
                  {product.description}
                </p>
              </div>

              {/* Specifications */}
              <div className="pt-7">
                <h2 className="mb-6 text-xl font-bold text-slate-900">
                  Product specifications
                </h2>

                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
                    <span className="text-sm text-slate-500">Category</span>
                    <span className="text-sm font-semibold text-slate-900">
                      {product.category}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
                    <span className="text-sm text-slate-500">SKU</span>
                    <span className="rounded-md bg-slate-100 px-3 py-1 font-mono text-xs font-medium text-slate-700">
                      {product.sku}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
                    <span className="text-sm text-slate-500">Online since</span>
                    <span className="text-sm font-semibold text-slate-900">
                      {new Date(product.meta.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                {/* Dimensions */}
                <div className="mt-7 rounded-2xl bg-slate-50 p-5">
                  <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-700">
                    Dimensions
                  </h3>

                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="rounded-xl bg-white p-4 shadow-sm">
                      <p className="mb-2 text-xs text-slate-400">Width</p>
                      <p className="text-lg font-bold text-slate-900">
                        {product.dimensions.width}
                      </p>
                    </div>

                    <div className="rounded-xl bg-white p-4 shadow-sm">
                      <p className="mb-2 text-xs text-slate-400">Height</p>
                      <p className="text-lg font-bold text-slate-900">
                        {product.dimensions.height}
                      </p>
                    </div>

                    <div className="rounded-xl bg-white p-4 shadow-sm">
                      <p className="mb-2 text-xs text-slate-400">Depth</p>
                      <p className="text-lg font-bold text-slate-900">
                        {product.dimensions.depth}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <section className="mt-16 md:mt-24">

            <div className="mb-8 border-b border-slate-200 pb-6">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Customer Reviews
              </h2>

              <p className="mt-3 text-sm text-slate-500">
                See what customers are saying about this product.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {product.reviews.map((review, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-100 hover:shadow-lg md:p-8"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">

                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-lg font-bold text-indigo-600">
                        {review.reviewerName.charAt(0)}
                      </div>

                      <div>
                        <h3 className="font-bold text-slate-900">
                          {review.reviewerName}
                        </h3>

                        <p className="mt-1 text-xs text-slate-400">
                          {new Date(review.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    <span className="shrink-0 rounded-full bg-amber-50 px-3 py-1.5 text-sm font-bold text-amber-600">
                      ⭐ {review.rating}/5
                    </span>
                  </div>

                  <div className="border-t border-slate-100 pt-5">
                    <p className="text-sm leading-7 text-slate-600">
                      {review.comment}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </Container>
    </div>
  );
}
