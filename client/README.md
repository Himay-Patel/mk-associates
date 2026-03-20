# M K Associates Website

Static multi-page company website for **M K Associates**, focused on cashew and walnut machinery.

## Overview

This project is built with Next.js App Router and TypeScript, using Tailwind CSS v4 with a Material 3 token-based theme.

The website includes:

1. Home page with company profile and key stats
2. Products page with category-based listing (Cashew/Walnut)
3. Customers page grouped by product segment
4. Contact page with clickable phone, email, and map links
5. Responsive header with mobile menu + Products submenu

## Tech Stack

1. Next.js 16
2. React 19
3. TypeScript
4. Tailwind CSS v4
5. Custom global CSS token system (Material 3 palette)

## Project Structure

```text
client/
	public/
		logo.png
	src/
		app/
			page.tsx
			products/page.tsx
			customers/page.tsx
			contact/page.tsx
			layout.tsx
			globals.css
		components/
			site-header.tsx
			site-footer.tsx
			products-view.tsx
			product-card.tsx
		data/
			company-details.ts
			products.ts
			customers.ts
	tailwind.config.ts
```

## Routes

1. `/` - Home
2. `/products` - Products (defaults to cashew)
3. `/products?category=cashew` - Cashew products
4. `/products?category=walnut` - Walnut products
5. `/customers` - Customer segments
6. `/contact` - Contact details

## Getting Started

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Scripts

1. `npm run dev` - Start local dev server
2. `npm run build` - Production build
3. `npm run start` - Run production server
4. `npm run lint` - Run ESLint

## Content Management

Update business content from data files:

1. Company info: `src/data/company-details.ts`
2. Product catalog: `src/data/products.ts`
3. Customer list: `src/data/customers.ts`

## Theming

1. Material token values are defined in `src/app/globals.css`
2. Tailwind color mapping is defined in `tailwind.config.ts`
3. Theme is configured as light-only

## Notes

1. Header supports active-link highlighting for both normal and submenu routes.
2. Products submenu closes on navigation and supports mobile behavior.
3. Contact details use actionable links (`tel`, `mailto`, maps).
