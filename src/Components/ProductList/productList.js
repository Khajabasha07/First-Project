
import Product  from './product';

let products = [
    {
        pID: 1, 
        pName: 'Fresh Milk', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: true,
        image: 'https://img.freepik.com/premium-photo/fresh-milk-bottle-glass_770123-9693.jpg',
        price: 12
    },
    {
        pID: 2, 
        pName: 'Cottage Cheese', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: false,
        image: "https://www.greendna.in/cdn/shop/products/cotc_1024x1024@2x.jpg?v=1594119725",
        price: 10
    },
    {
        pID: 3, 
        pName: 'Brocoli', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: true,
        image: "https://previews.123rf.com/images/valengilda/valengilda1311/valengilda131100036/23818841-brocoli-isolated-on-white-background.jpg",
        price: 15
    },
    {
        pID: 4, 
        pName: 'oranges', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: true,
        image: "https://5.imimg.com/data5/EE/ER/MY-27568370/fresh-orange-500x500.png",
        price: 20
    },
    {
        pID: 5, 
        pName: 'Olive oil', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: false,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS33NxxZf8LJF72xXGXPRJeGnFB6YyWUuB-RuRKW328AojFcFa1VO9diieJFZuXx4NYpxU&usqp=CAU",
        price: 14
    }
]
function ProductList(){
    return(
        <div className='row'>
        <div className='col-lg-8 mx-auto'>
            <Product id={products[0].pID}
                name = {products[0].pName}
                description = {products[0].desc}
                isAvailable={products[0].isAvailable}
                imageUrl = {products[0].image}
                price={products[0].price}
            />
             <Product id={products[1].pID}
                name = {products[1].pName}
                description = {products[1].desc}
                isAvailable={products[1].isAvailable}
                imageUrl = {products[1].image}
                price={products[1].price}
            />
            <Product id={products[2].pID}
                name = {products[2].pName}
                description = {products[2].desc}
                isAvailable={products[2].isAvailable}
                imageUrl = {products[2].image}
                price={products[2].price}
            />
             <Product id={products[3].pID}
                name = {products[3].pName}
                description = {products[3].desc}
                isAvailable={products[3].isAvailable}
                imageUrl = {products[3].image}
                price={products[3].price}
            />
            <Product id={products[4].pID}
                name = {products[4].pName}
                description = {products[4].desc}
                isAvailable={products[4].isAvailable}
                imageUrl = {products[4].image}
                price={products[4].price}
            />
        </div>
    </div>
    )
}

export default ProductList