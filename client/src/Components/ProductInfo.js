
import { useHistory } from "react-router-dom";

function ProductInfo(){
    return (
        <>
        <div className="product-information">
          <div onClick={handleAdd} className="icons">
            <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9t-km7l-fz4xsYz_o7cK_2hWgJ1puvsI3Pg&usqp=CAU" alt="not found"/>
             <p>ADD PRODUCT</p>
          </div>
          <div onClick={handleView} className="icons">
            <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvNddxuJAgTkl_DC8LzJSeh44dIlECzQc-EA&usqp=CAU" alt="not found" />
            <p>VIEW PRODUCT</p>
          </div>
        </div>
      </>)
}
export default ProductInfo;
