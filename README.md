# XZEN eCommerce Platform

> eCommerce platform built with the MERN stack & Redux.

This is a full stack E-Commerce Application built using MongoDB, Express.JS, React.JS, Node.JS

## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product Sort
- Breadcrumbs for navigational trail
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / Credit Card/ UPI integration [Using Razor Pay Payments Gateway]
- Automatic Order Confirmation Email Upon Payment Completion [Using SendGrid E-Mail API]
- Database seeder (products & users)

## Usage

### ES Modules in Node

We use ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error

You can also install and setup Babel if you would like

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = Development
PORT = 5000
MONGO_URI = Your Mongo DB URI [Mongo DB connection string]
JWT_SECRET = Any Secret Key
PAYPAL_CLIENT_ID = Your Paypal Client Id [PayPal Payment Gateway]
RAZORPAY_KEY_SECRET=Your RazorPay key secret [RazorPay Payment Gateway]
RAZOR_PAY_KEY_ID=Your razor pay key id [RazorPay Payment Gateway]
SENDGRID_API_KEY= Your Sendgrid API Key [Email- Integration]
```

**Note: For basic functionality without payment gateway, authentication & Email Integration, only MONGO_URI, NODE_ENV & PORT env is required**

### Enable Email - Integration

- Add your sendgrid api key to the `.env` file
- Add your `from email Id` and `Sendgrid Template ID` in the [./backend/controllers/ordercontroller.js file](https://github.com/xosteve26/XZEN/blob/master/backend/controllers/orderController.js#L78-L79)

- **[Note: In order to obtain a `Template ID`, you must login to your sendgrid account and navigate to the 'Dynamic Template' section and create your own design template following which a template ID will be available]**

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@example.com (Admin)
123456

john@example.com (Customer)
123456

jane@example.com (Customer)
123456

```
