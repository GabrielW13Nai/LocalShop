import React, { useState} from "react";
// import { useLocation } from "react-router-dom";

function AddProduct({ data, setData }) {
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    destroyed_items: "",
    status_of_item: "",
    buying_price: "",
    selling_price: "",
    image: "",
    user_id: "",
  });

  // const location = useLocation();

  function handleSubmit(e) {
    e.preventDefault();
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

    setFormData({
      name: "",
      quantity: "",
      destroyed_items: "",
      status_of_item: "",
      buying_price: "",
      selling_price: "",
      image: "",
      user_id: "",
    });
  }
  //handle formdata change
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

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
            value={formData.name}
            onChange={handleChange}
            placeholder="name.."
          />
          <label for="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="quantity..."
          />
          <label for="destroyed_items">Destroyed items</label>
          <input
            type="number"
            id="destroyed_items"
            name="destroyed_items"
            value={formData.destroyed_items}
            onChange={handleChange}
            placeholder="destroyed items..."
          />
          <label for="status">Status of item</label>
          <input
            type="text"
            id="status"
            name="status_of_item"
            value={formData.status_of_item}
            onChange={handleChange}
            placeholder="status of Item..."
          />
          <label for="status">Buying price</label>
          <input
            type="number"
            id="price"
            name="buying_price"
            value={formData.buying_price}
            onChange={handleChange}
            placeholder="buying price..."
          />

          <label for="status">Selling Price</label>
          <input
            type="number"
            id="price"
            name="selling_price"
            value={formData.selling_price}
            onChange={handleChange}
            placeholder="selling price..."
          />

          <label for="image">Add image</label>
          <input
            type="text"
            id="img"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="image.."
          />

          <label for="user_id">User_id</label>
          <input
            type="number"
            id="user"
            name="user_id"
            value={formData.user_id}
            onChange={handleChange}
            placeholder="user_id
          .."
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}
export default AddProduct;
