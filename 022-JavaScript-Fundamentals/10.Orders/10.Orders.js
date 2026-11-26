export function solve(product, quantity) {
    let price = 0;

    switch (product) {
        case 'coffee':
            price = quantity * 1.5;
            break;
        case 'coke':
            price = quantity * 1.4;
            break;
        case 'water':
            price = quantity * 1.0;
            break;
        case 'snacks':
            price = quantity * 2.0;
            break;
        default:
            console.log('Error!');
            return;
    }

    console.log(price.toFixed(2));
}
