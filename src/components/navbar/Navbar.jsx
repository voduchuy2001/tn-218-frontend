import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { selectCount } from "../../features/counter/counterSlice";
import { useSelector } from "react-redux";

const activeClass = ({ isActive }) => {
    return isActive
        ? `bg-primary-color hover:cursor-pointer p-2 text-white`
        : `hover:bg-primary-color hover:opacity-80 hover:text-white hover:cursor-pointer p-2`;
};

const Navbar = () => {
    const [listCart, setListCart] = useState([]);
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
      
    return (
        <nav className="h-11 bg-secondary-color mobile:hidden tablet:hidden">
            <div className="grids wide">
                <div className="h-11 flex justify-between items-center font-semibold">
                    <div className="flex h-11">
                        <NavLink className={activeClass} to="/">
                            Trang chủ
                        </NavLink>
                        <NavLink className={activeClass} to="/products">
                            <p>Sản phẩm</p>
                        </NavLink>
                        <NavLink className={activeClass} to="/orders">
                            Đơn hàng
                        </NavLink>
                    </div>
                    {localStorage.getItem("user") ? (
            <div className="group relative  hover:cursor-pointer font-semibold bg-primary-color p-[4px_12px] rounded-lg">
              {/* Cart */}
              <div className="flex gap-2 justify-center items-center">
                <p>Giỏ hàng</p>
                <i className="text-[24px] fas fa-shopping-cart" />
              </div>
              <div
                className="border-solid border-2 border-primary-color 
                 absolute top-[1px] right-1 rounded-[99%] w-5 h-5 leading-[16px] 
                 text-center text-white text-[12px] bg-black"
              >
                <p id="cart-count">{listCart.length}</p>
              </div>
              {/* Cart hover */}
              <div
                className="animate-[fadeIn_.2s_ease-in] group-hover:block hidden 
             shadow-[0_1px_20px_0_rgb(0_0_0_/_20%)] z-10 bg-white w-[400px] 
             right-0 border-solid rounded-[2px] absolute top-[calc(100%_+_10px)]  "
              >
                {/* triagle draw */}
                <div
                  className="top-[-30px] right-8 absolute border-solid border-[20px] 
                 border-b-white border-t-transparent border-r-transparent border-l-transparent"
                ></div>
                <h3 className="cursor-default text-[#757575] text-[12px] m-[8px_0_8px_12px]">
                  Sản phẩm đã thêm
                </h3>
                {listCart.length === 0 ? (
                  <div className="hidden cursor-default">
                    <img src="./img/empty-cart.webp" alt />
                  </div>
                ) : (
                  <ul className="max-h-[370px] overflow-y-scroll">
                    
                    {listCart.map((item)=>(
                      <li key={item.id} className="item-cart hover:bg-slate-100 flex align-center">
                      <img
                        className="m-3 w-[40px] h-[40px] border-solid border-[1px] border-[#e8e8e8]"
                        src={item.product.image}
                        alt="IMAGE"
                      />
                      <div className="w-[100%] mr-3">
                        <div className="flex justify-between">
                          <h5>{item.product.name}</h5>
                          <div>
                            <span className="text-primary-color">
                              {item.product.price}
                              <span className="align-top text-[12px]">
                                {" "}
                                USD
                              </span>
                            </span>
                            <span className="text-[10px] text-[#757575]">
                              x
                            </span>
                            <span className="text-[12px] text-[#757575]">
                              {item.quantity}
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[14px] text-[#757575] font-[300]">
                            Phân loại: VIP
                          </span>
                          <a onclick="app.removeItemCart(event)">
                            <span className="hover:text-primary-color text-[14px] text-[#757575]">
                              Xoá
                            </span>
                          </a>
                        </div>
                      </div>
                    </li>
                    ))}
                  </ul>
                )}

                {/* Has carts */}

                <div className="p-2 text-right cursor-default">
                                <Link
                                    to="/cart"
                                    className="hover:opacity-90 font-semibold text-[12px] p-[8px_12px] bg-primary-color text-white"
                                >
                                    Xem giỏ hàng
                                </Link>
                            </div>
                            
              </div>
            </div>
          ) : (
            <></>
          )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
