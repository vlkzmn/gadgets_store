# Online gadgets store
A single-page application implements online store functionality. User can browse products, add them to the cart and favorites, search products, sort products, change the quantity of products in the cart, and view product details (this app has limited functionality).

# [LIVE DEMO](https://vlkzmn.github.io/gadgets_store/)
(the server is hosted on free hosting render.com, there may be delays in data loading)

# [SERVER REPO](https://github.com/vlkzmn/gadgets_store_api)

# Technologies used
- React
- SCSS
- TypeScript
- Node
- Express
- Sequelize
- PostgreSQL

# Preview
<p align="center">
  <img src="https://github.com/vlkzmn/gadgets_store/raw/main/public/img/preview.gif">
</p>

# Features & Functionality

## Server
- Implemented with Node.js and Express.
- PostgreSQL database used.
- The database is filled from source json files.
- Working server and database is hosted on Render.com

## Home page
- Picture sliders with the ability to scroll by clicking on the arrows. 
- Products slider for Hot prices block, the products with a discount starting from the biggest absolute value.
- Brand new block slider with newest products starting from the most expensive.

## Category page
- Products are fetched from the server by category.
- Ability to sort products by name, price, and age is implemented.
- All sorting parameters are saved in the URL.
- Pagination is implemented. The number of products displayed on the page can be changed by the user.
- Search and filter products by name is implemented.

## Product details page
- Product details are fetched from the server.
- User can pick a color and capacity of the product.
- Photos of the product can be changed by clicking on the thumbnails.
- User can add the product to the cart or favorites.

## Cart page
- User can change the quantity of products in the cart and remove products from the cart.
- Cart items count is shown near the Cart icon in the header.
- Total amount and quantity are calculated automatically.
- Cart items are saved in the local storage.

## Favorites page
- User can add products to favorites and remove them from favorites.
- Favorites count is shown near the Favorites icon in the header.
- Favorites are saved in the local storage.