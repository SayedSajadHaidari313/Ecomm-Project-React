import { useState } from "react";
import Header from "./Header.js";

function AddProduct() {
  const [name, setName] = useState();
  const [file, setFile] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  async function addProduct() {
    console.warn(name, file, price, description);

    console.log("File:", file);


    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", file);
    formData.append("price", price);
    formData.append("description", description);

    console.log("FormData:", formData);

    let result = await fetch("http://localhost:8000/api/addproduct", {
      method: "POST",
      body: formData,
    });
    alert("data has been saved");
  }
  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1 className="text-center my-3">AddProduct Page</h1>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          className="form-control mb-3"
          placeholder="Enter Product Name"
        />
        <input
          type="file"
          onChange={(e) => {
            console.log(e.target.files[0]); // Check if the file is captured correctly
            setFile(e.target.files[0]);
          }}
          className="form-control mb-3"
        />
        <input
          type="text"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
          className="form-control mb-3"
          placeholder="Enter Product Price"
        />
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          className="form-control mb-3"
          placeholder="Enter Product Description"
        />

        <button className="btn btn-primary text-center" onClick={addProduct}>
          Add Product
        </button>
      </div>
    </div>
  );
}
export default AddProduct;
