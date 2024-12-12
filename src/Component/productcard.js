import { useNavigate } from "react-router-dom";
import product from "../Data/product";
const productcard=(product)=>{
    navigate=useNavigate()
    function handelClick(){
        navigate('product/products.id')
    }
    return(
        <section>
            <div>
                <img
                 src="product.data.image"
                 onClick={handelClick}
                />
                <h1>{product.data.name}</h1>
                <h1> {product.data.description}</h1>
            </div>
        </section>
    );
}
module.exports=productcard;