import './app.css'
import CreateProduct from './Components/createProduct';
import ProductList from './Components/ProductList/productList';


function App(props){
    return (
        <div>
        <CreateProduct/>
     <   ProductList/>
     </div>
    )
}

export default App;