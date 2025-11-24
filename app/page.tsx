import { client, GET_PRODUCTS_QUERY, ProductNode, ProductsResponse } from "../lib/shopify";

async function fetchProducts(): Promise<ProductNode[]> {
  const data = await client.request<ProductsResponse>(GET_PRODUCTS_QUERY, { first: 5 });
  return data.products.edges;
}

export default async function Home() {
  const products = await fetchProducts();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-black dark:text-white">
        Headless Shopify Storefront Demo
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(({ node }) => (
          <div
            key={node.id}
            className="border rounded-md p-4 bg-white dark:bg-zinc-900"
          >
            {node.images.edges[0]?.node.url && (
              <img
                src={node.images.edges[0].node.url}
                alt={node.title}
                className="w-full h-48 object-cover mb-4 rounded"
              />
            )}
            <h2 className="text-xl font-semibold text-black dark:text-white mb-2">
              {node.title}
            </h2>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-2">
              {node.description}
            </p>
            <p className="text-lg font-bold text-black dark:text-white">
              ${node.variants.edges[0]?.node.priceV2.amount} {node.variants.edges[0]?.node.priceV2.currencyCode}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
