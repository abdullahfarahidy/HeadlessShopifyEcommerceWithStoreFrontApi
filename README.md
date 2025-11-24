# Headless Shopify E-Commerce Demo

## Overview
This project demonstrates a **headless e-commerce storefront** built with **Next.js 13**, **TypeScript**, and **Tailwind CSS**, consuming the **Shopify Storefront API**. The demo fetches product data from a Shopify dev store and displays it in a custom frontend, showcasing the **headless e-commerce architecture**.

---

## What is Headless E-Commerce?
**Headless e-commerce** is a modern approach where the **frontend (presentation layer)** is decoupled from the **backend (e-commerce platform)**. This allows:

- Full control over design and user experience
- Ability to use modern frameworks like Next.js, React, Vue, or mobile apps
- Backend still handles products, checkout, and order management

**Advantages:**

- Custom and flexible storefronts
- Improved performance and SEO
- Multi-channel integration (web, mobile, IoT)
- Easier updates without affecting backend

---

## What is Shopify Storefront API?
The **Shopify Storefront API** is a **GraphQL API** that allows developers to:

- Fetch products, collections, and customer data
- Perform checkout and cart operations
- Build fully customized shopping experiences

**Benefits of using Storefront API:**

- Headless access to Shopify backend
- Efficient GraphQL queries
- Secure access using Storefront API tokens
- Works with web, mobile, and other custom frontends

---

## Project Features
- Fetch and display products from Shopify dev store
- Show product image, title, description, and price
- Responsive grid layout using Tailwind CSS
- Demonstrates **headless e-commerce architecture** in practice
- Built with **Next.js 13 + TypeScript** and **GraphQL**

---

## Project Structure

headless-shopify-demo/
├── app/
│ └── page.tsx # Main frontend page displaying products
├── lib/
│ └── shopify.ts # GraphQL client and queries
├── public/ # Static assets
├── node_modules/ # Dependencies
├── package.json
└── .env.local # Store domain and API token


---

## Setup Instructions

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd headless-shopify-demo


Install dependencies

npm install


Create .env.local with your Shopify store domain and token:

NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=headless-storefront-demo-2.myshopify.com
NEXT_PUBLIC_STOREFRONT_ACCESS_TOKEN=shpca_XXXXXXXXXXXXXXXXXXXXXXXX


Run the development server

npm run dev


Open in browser

http://localhost:3000


You should see a responsive grid of products fetched from your Shopify store.

How It Works

Frontend is built with Next.js 13 App Router and TypeScript.

GraphQL client (graphql-request) is used to call Shopify Storefront API.

Products query retrieves:

Product ID, title, description

Image URL

First variant price (MoneyV2 object)

Fetched data is rendered dynamically in React components.

Layout is styled using Tailwind CSS, fully responsive.

Environment Variables

NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN → your dev store domain

NEXT_PUBLIC_STOREFRONT_ACCESS_TOKEN → Shopify Storefront API token

Dependencies

Next.js 13

TypeScript

Tailwind CSS

graphql-request

