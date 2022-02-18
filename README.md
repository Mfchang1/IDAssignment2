# WebKart

WebKart, is a responsive and user-friendly eCommerce platform designed using commerce.js, to create an interactive online shopping experience for customers.

WebKart contains the content of multiple items on stock, including the item's description and price. Customers can freely browse through and choose what they would want to purchase, by adding their desired items to a shopping cart, which has the option to remove certain items depending on the customer. With lightweight and simple design for our website, customers can focus on the functionality of WebKart and shop easily. Moreover, with the addition of React Hook Form's API for customer's input details and Stripe.js' API to tokenize customer information, collect sensitive payment details and accept payment with browser payment API to enhance their experience during payment of items, we believe that the uniqueness and complexity of our application differs to existing Ecommerce websites, therefore attracting customers to shop at WebKart. WebKart also provides customers a splendid shopping experience that is convenient and reliable.

## Design Process

WebKart is a business driven interactive web application, whereby we are able to view and track sales through statistics using commerce.js, therefore focusing on the functionality of the website. We have designed WebKart to be user friendly for customers to easily browse through the website and at the same time to be responsive on both desktop and mobile platforms. As we have focused on the functionality of our eCommerce website, we have researched and took into consideration of what features customers want to normally view and experience on an online shopping website. As customers, we would want to view the information, descripton and price of items, and also be able to add/remvoe items from a cart. Moreover, customers would also want the payment section to be especially convenient and safe.

During the creation of wireframes, we also took into consideration of what customers would want to see in a shopping website aesthetcially, and thus came up with a rather simple design. Thereafter, we researched on the colour scheme which are appealing to the eye and visualised it in our wireframe. Since WebKart is business driven website, we decided on the colours to be more professional and chose mainly dull colorus(grey & white). Our website's visual design is minimalistic, so that users are not cluttered with information, and are able to easily interact with the web application. Initially, the design of our wireframe was rather too simple, and once we started to implement its design into the website, we improved the design of our wireframe and updated our website. Here is the link to our wireframe, [Adobe XD](https://xd.adobe.com/view/9ad2b151-f7ff-48fc-aad1-233e9c76a464-cf81/).

## Features

WebKart comes with an abundance of features, to improve customer's experience and interaction.

### Existing Features

Home Page
Header Section:

- Responsive hyperlinked 'Shopping Cart' icon - click on icon to bring viewer to 'Shopping Cart Page', 'Shopping Cart' icon will increment value by 1 whenever 'Cart' icons are clicked
- Responsive 'Add to Cart' icons - click on icon to add specified item by 1 to total amount in 'Shopping Cart Page'

Shopping Cart Page

- Responsive 'Remove' button - click on button to remove all specified items in the cart
- Responsive '-','+' button - click on buttons to remove/add specified item in cart
- Price - commerce.js handles backend and changes price depending on items chosen by the customer
- Responsive 'Empty Cart' button - click on button to remove all items in the cart
- Responsive 'Checkout' button - click on button to bring viewer to 'Checkout(Shipping Address)' page

Checkout(Shipping Address) Page

- Form format - handled by React Hook Form's API
- International Country options - able to select any country worldwide, handled by commerce.js
- Shipping option(Price) - able to select between domestic and international(extra $10.00), handled by commerce.js
- Responsive 'Back' button - click on button to bring viewer back to "Shopping Cart Page'
- Responsive 'Next' button - click on button to bring viewer to "Checkout(Order Summary & Payment)" page

Checkout(Order Summary & Payment) Page

- Form format - handled by React Hook Form's API
- Payment method - able to identify type of payment method through user input(numbers), such as MasterCard, handled by Stripe.js' API
- Responsive 'Back' button - click on button to bring viewer back to "Checkout(Shipping Address)" page
- Responsive 'Pay' button - click on button to bring viewer to "Checkout(Confirmation)" page, price changes depending on the total amount of the item's price

Checkout(Confirmation) Page

- Form format - handled by React Hook Form's API
- Loading animation - handled by Stripe.js' API
- Responsive 'Back' button - click on button to bring viewer back to "Checkout(Order Summary & Payment)"

Further Plans

- Will like to expand WebKart and sell items pertaining to clothing; wider variety

### Features Left to Implement

- include options for customers to choose what type of item they would like to buy once WebKart has expanded, Clothing, Food, Hardware etc.

## Technologies Used

- [React Hook Form's API](https://react-hook-form.com/api)
  - The project uses **React Hook Form API** for the implementation of form format in the project, during Checkout
- [Commerce.js API](https://commercejs.com/)
  - The project uses **Commerce.js API** for the implementaton of attaching products to display to customers, and collect any data via statistics from customers at checkout
- [Stripe.js API](https://stripe.com/en-sg?utm_campaign=paid_brand-SG_en_Search_Brand_Stripe-1455342179&utm_medium=cpc&utm_source=google&ad_content=421733339183&utm_term=aud-491317518397:kwd-326624549184&utm_matchtype=e&utm_adposition=&utm_device=c&gclid=EAIaIQobChMIspysvLCJ9gIVcJFmAh1hagj1EAAYASAAEgJvDvD_BwE)
  - The project uses **Stripe.js API** to tokenize customer information, collect sensitive payment and accept payment with browser payment APIs
- [Material UI library](https://mui.com/)
  - The project uses **Material UI Library** to add icons
- [React Library](https://reactjs.org/)
  - The project uses **React Library** to build the user interface for this project
- [Netlify]
  - The project uses **Netlify** to muliply productivity and host the website application

## Testing

1. Responsive Hyperlinked Icon (Shopping Cart Icon) & Responsive Icon (Add to Cart Icon)

   1. Go to Home Page
   2. Click on top left icon (Shopping Cart Icon), and verify that it brings you to 'Shopping Cart' Page
   3. Click on any 'Add to Cart Icon' and ensure that it updates 'Shopping Cart Icon' by updating the number on it

2. Responsive buttons

   1. Go to 'Shopping Cart' page
   2. Click on 'Remove' button and verify that it removes the specified item entirely
   3. Click on '-','+' buttons and verify that it adds/removes specified item depending on customer's choice
   4. Click on 'Empty Cart' button and verify that all items in the cart are removed
   5. Click on 'start adding some!' when 'Empty Cart' button is clicked and ensure that it brings viewer to Home Page
   6. Click on 'Checkout' button and verify that it brings viewer to 'Checkout(Shipping Address) Page'

3. Checkout(Shipping Address) Form

   1. Go to 'Checkout(Shipping Address)' Page
   2. Click on 'Back to Cart' button and verify that it brings viewer to 'Shopping Cart' Page
   3. Click on 'Next' button, without filling up the form entirely and verify that it prompts viewer to fill up the unfilled section
   4. Click on 'Next' button after filling up the form and verify that it brings viewer to 'Checkout(Order Summary & Payment) Page'

4. Checkout(Order Summary & Payment) Form

   1. Go to 'Checkout(Order Summary & Payment)' Page
   2. Verify that the items and its price stated corresponds to the items chosen by the viewer
   3. Click on 'Pay' without filling up card number and verify that it prompts viewer to fill up the unfilled section
   4. Click on 'Pay' after filling up card number and verify that it brings user to 'Checkout(Confirmation) Page'
   5. Click on 'Back' button and verify that it brings viewer to Checkout(Shipping Address) page

5. Checkout(Confirmation) Form
   1. Go to 'Checkout(Confirmation)' page
   2. Verify that there is a loading animation and verify that it states 'Your order has been confirmed'

When inputting a fake card number in Checkout(Order Summary & Payment) page, the Stripe.js API will validate if it is a real number, and thus will show an error in Checkout(Confirmation) Page

## Credits

### Content

- NA

### Media

- The photos used for WebKart icon is obtained from [Flaticon](https://www.flaticon.com/free-icon/supermarket_2552168)

### Acknowledgements

- I received inspiration for this project from,
  [Muroexe](https://eu.muroexe.com/)

### GitHub Link

- Link to Github,
  [GitHub](https://github.com/Mfchang1/IDAssignment2)