
const allocate = (sales, purchases) => {
    orderArrayByDate(sales, 'created');
    orderArrayByDate(purchases, 'receiving');

    let supply = [];

    while(purchases.length > 0) {
        supplyOrder(supply, sales, purchases);
    }

    return supply;
};

const supplyOrder = (supply, sales, purchases) => {
    let sale = sales[0];
    let purchase = purchases[0];

    let q = purchase.quantity - sale.quantity;

    if (q >= 0) {
        supply.push({
            id: sale.id,
            supplyDate: purchase.date.toJSON().split('T')[0]
        });
        purchase.quantity -= sale.quantity;
        sales.shift();
    } else {
        sale.quantity -= purchase.quantity;
    }

    if (q <= 0) {
        purchases.shift();
    }
};

const orderArrayByDate = (array, dateProp) => {
    for(let i=0; i < array.length; i++){
        let d = array[i][dateProp];
        array[i]['date'] = new Date(d);
        delete array[i][dateProp];
    }

    array.sort((a, b) => a.date.getTime() - b.date.getTime());

    return array;
}

module.exports = allocate;