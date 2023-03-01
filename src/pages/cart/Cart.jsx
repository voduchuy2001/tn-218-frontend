import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  selectCount,
} from "../../features/counter/counterSlice";

const Cart = () => {
  const [listCart, setListCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();
  const handlePlus = (item) => {
    console.log("add");
    axios
      .post(
        "http://127.0.0.1:8000/api/cart",
        {
          product_id: item,
          quantity: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      )
      .then((res) => {
        dispatch(increment());
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleMinus = (item, qty) => {
    axios
      .put(
        `http://127.0.0.1:8000/api/cart/${item}`,
        {
          quantity: qty,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      )
      .then((res) => {
        dispatch(decrement());
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDelete = (idProduct) =>
    axios
      .delete(`http://127.0.0.1:8000/api/cart/${idProduct}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        dispatch(decrement());
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  const handleCount = (value, item) => {
    if (value.target.checked) {
      setTotalPrice(totalPrice + item.product.price * item.quantity);
      setCheck(true);
      console.log("checked");
    } else {
      setTotalPrice(totalPrice - item.product.price * item.quantity);
      console.log("not checked");
    }
  };
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/cart", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        console.log(res.data.data.items);
        setListCart(res.data.data.items);
      })
      .catch((err) => {
        console.log(err);
        setListCart([]);
      });
  }, [useSelector(selectCount)]);
  return localStorage.getItem("user") ? (
    <div className="min-h-screen m-5">
      <div className="grids wide">
        <div className="row my-3">
          {/* Cart item */}
          <div className="col l-8 l-o-2">
            <div className="text-blue-600">
              <a className="hover:underline">
                <i className="fas fa-chevron-left mr-2" />
                Trở về
              </a>
              <h3 className="text-center font-bold uppercase">Giỏ hàng</h3>
            </div>
            {listCart.map((item) => (
              <div className="cart-item-detail rounded-lg shadow-lg flex p-3 mb-3 relative">
                <img
                  src={item.product.image}
                  className="p-2 w-[200px] h-[200px] object-contain"
                />
                <div>
                  <h3 className="font-semibold text-[16px]">
                    {item.product.name}
                  </h3>
                  <span className="text-blue-700 font-semibold">
                    {item.product.price}{" "}
                    <span className="align-top text-[12px]">USD</span>
                  </span>
                  <span className="line-through">
                    24.990.000
                    <span className="align-top text-[12px]">VNĐ</span>
                  </span>
                  <span className="p-1 bg-blue-500 font-semibold rounded-lg text-white">
                    Giảm 25%
                  </span>
                  <div className="flex my-2">
                    <button
                      className="countMinus"
                      onClick={() => {
                        if (item.quantity - 1 > 0) {
                          handleMinus(item.product_id, item.quantity - 1);
                        }
                      }}
                    >
                      <i className="text-primary-color fas fa-minus-square text-[24px]" />
                    </button>
                    <input
                      type="text"
                      value={item.quantity}
                      className="cart-detail-quantity w-[50px] h-[24px] text-center bg-blue-100"
                      readOnly
                    />
                    <button
                      className="countPlus"
                      onClick={() => handlePlus(item.product_id)}
                    >
                      <i className="text-primary-color fas fa-plus-square text-[24px]" />
                    </button>
                  </div>
                  {/* Promotion program */}
                  <div className="rounded-md bg-slate-100 w-full p-3">
                    <h3>- Chương trình khuyến mãi:</h3>
                    <span className="flex items-center">
                      <i className="text-[8px] text-blue-700 p-1 mr-2 fas fa-circle" />
                      <span>Thu cũ lên đời - Trợ giá 1 triệu</span>
                    </span>
                    <span className="flex items-center">
                      <i className="text-[8px] text-blue-700 p-1 mr-2 fas fa-circle" />
                      <span>
                        Nhập mã CPSONL500 khi thanh toán VNPAY qua website hoặc
                        CPS500 qua QR Offline tại cửa hàng để giảm thêm 500k khi
                        mua sản phẩm Apple từ 17 triệu
                      </span>
                    </span>
                  </div>
                </div>
                <div className="absolute top-0 right-0 p-3">
                  <input
                    type={"checkbox"}
                    onChange={(value) => {
                      handleCount(value, item);
                    }}
                  ></input>
                  <a
                    title="Xoá"
                    onClick={() => {
                      handleDelete(item.product_id);
                      if (check == true) {
                        setTotalPrice(
                          totalPrice - item.product.price * item.quantity
                        );
                      }
                    }}
                  >
                    <i className="fas fa-trash text-[16px] hover:text-red-600" />
                  </a>
                </div>
              </div>
            ))}

            <div className="rounded-md shadow-lg p-2">
              <div className="flex justify-between p-2">
                <span className="font-semibold text-[16px]">
                  Tổng tiền tạm tính:{" "}
                </span>
                <span className=" text-blue-600 font-semibold">
                  <p className="inline-block" id="total-price-cart">
                    {totalPrice}
                  </p>{" "}
                  <span className="align-top text-[12px]">USD</span>
                </span>
              </div>
              <div className="m-2">
                <button className="block w-full uppercase text-[16px] p-2 mb-3 font-bold bg-primary-color text-white">
                  Tiến hành đặt hàng
                </button>
                <button className="block w-full uppercase text-[16px] p-2 text-blue-500 hover:bg-blue-600 hover:text-white font-bold border-2 border-solid border-primary-color">
                  Chọn thêm sản phẩm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h1>Please Login</h1>
  );
};

export default Cart;
