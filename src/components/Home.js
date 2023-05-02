import React from "react";
import "./CSS/Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id={1}
            title="The lean startup"
            price={590}
            image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id={2}
            title="Kenwood KMX750RD/ KMix Stand Mixer 1000W (Red)"
            price={38990}
            image="https://m.media-amazon.com/images/I/718Bxs69wUL._SX679_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={3}
            title="MSI Katana GF76, Intel 11th Gen. i7-11800H, 43CM FHD 144Hz Gaming Laptop (16GB/512GB NVMe SSD/Windows 11 Home/Nvidia RTX3050 4GB GDDR6/Black/2.6Kg), 11UC-848IN"
            price={75990}
            image="https://m.media-amazon.com/images/I/81FNbr+8j9L._SX522_.jpg"
            rating={4}
          />
          <Product
            id={4}
            title="MSI Crosshair 15, Intel 12th Gen. i7-12700H, 40CM QHD 165Hz Gaming Laptop (16GB/1TB NVMe SSD/ Windows 11 Home/NVIDIA RTX 3070 8GB GDDR6/Black/2.47Kg), 12UGZ-1012IN"
            price={124990}
            image="https://m.media-amazon.com/images/I/81vJIuXXVwL._SX679_.jpg"
            rating={4}
          />
          <Product
            id={5}
            title="MSI Gaming Sword 15, Intel 12th Gen. i5-12500H, 40CM FHD 144Hz Gaming Laptop (16GB/1TB NVMe SSD/Windows 11 Home/Nvidia RTX 3050 4GB GDDR6/ Black/2.6Kg), A12UC-467IN"
            price={83990}
            image="https://m.media-amazon.com/images/I/41XOiBoSknL._SX300_SY300_QL70_FMwebp_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={6}
            title="Samsung Galaxy S23 Ultra 5G (Green, 12GB, 256GB Storage)"
            price={124999}
            image="https://m.media-amazon.com/images/I/41kyuER2HjL._SX300_SY300_QL70_FMwebp_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
