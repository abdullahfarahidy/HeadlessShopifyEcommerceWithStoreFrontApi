import { GraphQLClient, gql } from "graphql-request";

// Store domain + storefront token
const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
const token = process.env.NEXT_PUBLIC_STOREFRONT_ACCESS_TOKEN!;

// Shopify GraphQL client
export const client = new GraphQLClient(
  `https://${domain}/api/2025-01/graphql.json`,
  {
    headers: {
      "X-Shopify-Storefront-Access-Token": token,
      "Content-Type": "application/json",
    },
  }
);

// GraphQL: Fetch products
export const GET_PRODUCTS_QUERY = gql`
  query getProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
          description
          images(first: 1) {
            edges {
              node {
                url
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                id
                priceV2 {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
`;

// TS types
export interface ProductImage {
  node: {
    url: string;
  };
}

export interface ProductVariant {
  node: {
    id: string;
    priceV2: {
      amount: string;
      currencyCode: string;
    };
  };
}

export interface ProductNode {
  node: {
    id: string;
    title: string;
    description: string;
    images: { edges: ProductImage[] };
    variants: { edges: ProductVariant[] };
  };
}

export interface ProductsResponse {
  products: { edges: ProductNode[] };
}
