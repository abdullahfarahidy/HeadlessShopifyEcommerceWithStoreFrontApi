"use client";

import { useEffect, useState } from "react";
import {
  client,
  GET_PRODUCTS_QUERY,
  ProductNode,
  ProductsResponse,
} from "../lib/shopify";

async function fetchProducts(): Promise<ProductNode[]> {
  const data = await client.request<ProductsResponse>(GET_PRODUCTS_QUERY, {
    first: 13,
  });
  return data.products.edges;
}

export default function Home() {
  const [products, setProducts] = useState<ProductNode[]>([]);
  const [cart, setCart] = useState<{ id: string; title: string; price: string }[]>(
    []
  );

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  function handleAddToCart(product: ProductNode) {
    const variant = product.node.variants.edges[0].node;

    setCart((prev) => [
      ...prev,
      {
        id: variant.id,
        title: product.node.title,
        price: variant.priceV2.amount,
      },
    ]);
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      {/* Header */}
      <header className="flex items-center justify-between mb-10">
        <h1 className="text-4xl font-bold text-black dark:text-white">
          Headless Shopify Storefront
        </h1>

        <div className="relative">
          <button className="bg-black text-white dark:bg-white dark:text-black px-6 py-2 rounded-md font-medium shadow">
            Cart ({cart.length})
          </button>
        </div>
      </header>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(({ node }) => {
          const image = node.images.edges[0]?.node.url;
          const variant = node.variants.edges[0].node;

          return (
            <div
              key={node.id}
              className="border rounded-lg p-4 bg-white dark:bg-zinc-900 shadow hover:shadow-lg transition hover:-translate-y-1"
            >
              {image && (
                <img
                  src={image}
                  alt={node.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
              )}

              <h2 className="text-xl font-semibold text-black dark:text-white">
                {node.title}
              </h2>

              <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1 line-clamp-2">
                {node.description}
              </p>

              <p className="text-lg font-bold mt-3 text-black dark:text-white">
                ${variant.priceV2.amount} {variant.priceV2.currencyCode}
              </p>

              <button
                onClick={() => handleAddToCart({ node })}
                className="mt-4 w-full bg-black text-white dark:bg-white dark:text-black py-2 rounded-md hover:opacity-80 transition"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
