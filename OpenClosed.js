// Open / Closed Principle - Classes should be open for extension but not for modification

class paymentProcessor {
    processPayment (amount) {
        throw new Error('First Implement the Process Payment Method, Method not implemented');
    }
}


class Paypal extends paymentProcessor {
    processPayment (amount) {
        console.log(`Processing payment of ${amount} through PayPal`);
    }
}

class Stripe extends paymentProcessor {
    processPayment (amount) {
        console.log(`Processing payment of ${amount} through Stripe`);
    }
}


const main = () => {
    const payPal = new Paypal();
    payPal.processPayment(100);
    const stripe = new Stripe();
    stripe.processPayment(200);


}

main();