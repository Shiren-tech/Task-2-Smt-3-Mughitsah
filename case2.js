const customerName = "Budi";
const productPrice = 150000;
const quantity = 3;
const discountPercent = 10;
const shippingCost = 20000;

function calculateTotal(price, quantity, discount) {
    const subtotal = price * quantity;
    const discountAmount = subtotal * (discount / 100)
    const total = subtotal - discountAmount;

    return total;
}

const calculateShipping = (total) => { 
    if (total >= 500000) {
        return 0;
    } else {
        return shippingCost;
    }
}

const total = calculateTotal(
    productPrice, 
    quantity, 
    discountPercent
);

const shipping = calculateShipping(total);

const totalPayment = total + shipping;

console.log(`
    customer: ${customerName}
    Product Price: Rp${productPrice}
    Quantity: ${quantity}
    Subtotal: ${productPrice * quantity}
    Discount: Rp${productPrice * quantity * (discountPercent / 100)}
    After Discount: Rp${total}
    Shipping: Rp${shipping}
    Total Payment: ${totalPayment}
    `)