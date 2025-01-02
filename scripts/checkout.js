import {renderOrderSummary} from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js";
import {renderCheckoutHeader} from "./checkout/checkoutHeader.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/backend-practice.js';
// import '../data/car.js';
//import '../data/cart-class.js';

Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })

]).then((values) => {
    console.log(values); 
    renderCheckoutHeader();
    renderPaymentSummary();
    renderOrderSummary();
});

// new Promise((resolve) => {
//     loadProducts(() => {
//         resolve('value1');
//     });

// }).then((value) => {

//     console.log(value);
//     return new Promise((resolve) => {
//         loadCart(() => {
//             resolve();
//         });
//     });

// }).then(() => {
//     renderCheckoutHeader();
//     renderPaymentSummary();
//     renderOrderSummary();
// });


// loadProducts(() => {
//     loadCart(() => {
//         renderCheckoutHeader();
//         renderPaymentSummary();
//         renderOrderSummary();
//     });
    
// });

