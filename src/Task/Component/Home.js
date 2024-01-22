import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const [data, setData] = useState([]);
  const count = useSelector((state) => state.Cart.arr.length);
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate(`/Detail/${e}`);
  };
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resp) => resp.json())
      .then((res) => setData(res));
  }, []);
  return (
    <>
      <h1>Home</h1>
      <p>
        All Products{" "}
        <span
          style={{ float: "right", cursor: "pointer" }}
          onClick={() => navigate("/Cart")}
        >
          Cart : {count}{" "}
        </span>
      </p>
      <table border={2}>
        <tr>
          <th>Sr.No.</th>
          <th>Title</th>
          <th>Image</th>
          <th>Price</th>
        </tr>
        {data.map(({ id, title, image, price }) => (
          <tr onClick={() => handleClick(id)} style={{ cursor: "pointer" }}>
            <td>{id}</td>
            <td>{title}</td>
            <td>
              <img src={image} alt="imggg" height={"100px"} />
            </td>
            <td>${price}</td>
          </tr>
        ))}
      </table>
    </>
  );
};
export default Home;