import React, { useState} from "react";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";

function AddProduct({ data, setData }) {
  const options = [
    {value: "active", text: "active"},
    {value: "inactive",text: "inactive"}
]
  const[name, setName] = useState("")
  const[quantity, setQuantity] = useState("")
  const[destroyed_items, setDestroyedItems] = useState("")
  const[status_of_item, setStatus] = useState(options[0].value)
  const[buying_price, setBuyingPrice] = useState("")
  const[selling_price, setSellingPrice] = useState("")
  const[image, setImage] = useState("")
  const[user_id, setId] = useState("")


  const formData = {
    name,
    quantity,
    destroyed_items,
    status_of_item,
    buying_price,
    selling_price,
    image,
    user_id
  }


  // const location = useLocation();

  function handleSubmit(e) {
    // e.preventDefault();
    fetch("/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((info) => {
        console.log(info);
      });

    // setFormData({
    //   name: "",
    //   quantity: "",
    //   destroyed_items: "",
    //   status_of_item: "",
    //   buying_price: "",
    //   selling_price: "",
    //   image: "",
    //   user_id: "",
    // });
  }
  //handle formdata change
  // function handleChange(e) {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // }

  return (
    <>
      <h3>ADD ITEM</h3>

      <div className="new-product">
        <form onSubmit={handleSubmit} action="post">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="add-item"
            value={formData.name}
            onChange={e => setName(e.target.value)}
            placeholder="name.."
          />
          <label for="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            className="add-item"
            value={formData.quantity}
            onChange={e => setQuantity(e.target.value)}
            placeholder="quantity..."
          />
          <label for="destroyed_items">Destroyed items</label>
          <input
            type="number"
            id="destroyed_items"
            name="destroyed_items"
            className="add-item"
            value={formData.destroyed_items}
            onChange={e => setDestroyedItems(e.target.value)}
            placeholder="destroyed items..."
          />
          <label for="status">Status of item</label>

          <select className="add-item" value={formData.status_of_item} onChange={e => setStatus(e.target.value)}>
          {options.map(option => (
            <option
              id="status"
              key={option.value}
              value={option.value}
              >{option.text}
            </option>))}
          </select>
          <label for="status">Buying price(Kshs.)</label>
          <input
            type="number"
            id="price"
            name="buying_price"
            className="add-item"
            value={formData.buying_price}
            onChange={e => setBuyingPrice(e.target.value)}
            placeholder="buying price..."
          />

          <label for="status">Selling Price(Kshs.)</label>
          <input
            type="number"
            id="price"
            name="selling_price"
            className="add-item"
            value={formData.selling_price}
            onChange={e => setSellingPrice(e.target.value)}
            placeholder="selling price..."
          />

          <label for="image">Add image</label>
          <input
            type="text"
            id="img"
            name="image"
            className="add-item"
            value={formData.image}
            onChange={e => setImage(e.target.value)}
            placeholder="image.."
          />

          <label for="user_id">User_id</label>
          <input
            type="number"
            id="user"
            name="user_id"
            className="add-item"
            value={formData.user_id}
            onChange={e => setId(e.target.value)}
            placeholder="user_id
          .."
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className="clerk-2">
            <Link to="/productinfo"><button className="clerk-btn-back"> &larr; BACK </button></Link><br></br>
     </div>
    </>
  );
}
export default AddProduct;
