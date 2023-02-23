import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="h-11 bg-secondary-color mobile:hidden tablet:hidden">
      <div className="grids wide">
        <div className="h-11 flex justify-between items-center font-semibold">
          <div className="flex h-11">
            <Link className="bg-primary-color hover:cursor-pointer p-2"
            to="/"
            >
              Trang chủ
            </Link>
            <Link
              className="hover:bg-primary-color hover:opacity-80 hover:cursor-pointer p-2"
              to="/products"
            >
              <p className>Sản phẩm</p>
            </Link>
            <p className="hover:bg-primary-color hover:opacity-80 hover:cursor-pointer p-2">
              Đơn hàng
            </p>
          </div>
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
              <p id="cart-count">7</p>
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
              {/* No carts */}
              <div className="hidden cursor-default">
                <img src="./img/empty-cart.webp" alt />
              </div>
              {/* Has carts */}
              <ul className="max-h-[370px] overflow-y-scroll">
                <li className="item-cart hover:bg-slate-100 flex align-center">
                  <img
                    className="m-3 w-[40px] h-[40px] border-solid border-[1px] border-[#e8e8e8]"
                    src="https://via.placeholder.com/40"
                    alt
                  />
                  <div className="w-[100%] mr-3">
                    <div className="flex justify-between">
                      <h5>Đồng hồ trẻ em</h5>
                      <div>
                        <span className="text-primary-color">
                          2.000.000
                          <span className="align-top text-[12px]"> VNĐ</span>
                        </span>
                        <span className="text-[10px] text-[#757575]">x</span>
                        <span className="text-[12px] text-[#757575]">2</span>
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
                <li className="item-cart hover:bg-slate-100 flex align-center">
                  <img
                    className="m-3 w-[40px] h-[40px] border-solid border-[1px] border-[#e8e8e8]"
                    src="https://via.placeholder.com/40"
                    alt
                  />
                  <div className="w-[100%] mr-3">
                    <div className="flex justify-between">
                      <h5>Đồng hồ trẻ em</h5>
                      <div>
                        <span className="text-primary-color">
                          2.000.000
                          <span className="align-top text-[12px]"> VNĐ</span>
                        </span>
                        <span className="text-[10px] text-[#757575]">x</span>
                        <span className="text-[12px] text-[#757575]">2</span>
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
                <li className="item-cart hover:bg-slate-100 flex align-center">
                  <img
                    className="m-3 w-[40px] h-[40px] border-solid border-[1px] border-[#e8e8e8]"
                    src="https://via.placeholder.com/40"
                    alt
                  />
                  <div className="w-[100%] mr-3">
                    <div className="flex justify-between">
                      <h5>Đồng hồ trẻ em</h5>
                      <div>
                        <span className="text-primary-color">
                          2.000.000
                          <span className="align-top text-[12px]"> VNĐ</span>
                        </span>
                        <span className="text-[10px] text-[#757575]">x</span>
                        <span className="text-[12px] text-[#757575]">2</span>
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
                <li className="item-cart hover:bg-slate-100 flex align-center">
                  <img
                    className="m-3 w-[40px] h-[40px] border-solid border-[1px] border-[#e8e8e8]"
                    src="https://via.placeholder.com/40"
                    alt
                  />
                  <div className="w-[100%] mr-3">
                    <div className="flex justify-between">
                      <h5>Đồng hồ trẻ em</h5>
                      <div>
                        <span className="text-primary-color">
                          2.000.000
                          <span className="align-top text-[12px]"> VNĐ</span>
                        </span>
                        <span className="text-[10px] text-[#757575]">x</span>
                        <span className="text-[12px] text-[#757575]">2</span>
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
                <li className="item-cart hover:bg-slate-100 flex align-center">
                  <img
                    className="m-3 w-[40px] h-[40px] border-solid border-[1px] border-[#e8e8e8]"
                    src="https://via.placeholder.com/40"
                    alt
                  />
                  <div className="w-[100%] mr-3">
                    <div className="flex justify-between">
                      <h5>Đồng hồ trẻ em</h5>
                      <div>
                        <span className="text-primary-color">
                          2.000.000
                          <span className="align-top text-[12px]"> VNĐ</span>
                        </span>
                        <span className="text-[10px] text-[#757575]">x</span>
                        <span className="text-[12px] text-[#757575]">2</span>
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
                <li className="item-cart hover:bg-slate-100 flex align-center">
                  <img
                    className="m-3 w-[40px] h-[40px] border-solid border-[1px] border-[#e8e8e8]"
                    src="https://via.placeholder.com/40"
                    alt
                  />
                  <div className="w-[100%] mr-3">
                    <div className="flex justify-between">
                      <h5>Đồng hồ trẻ em</h5>
                      <div>
                        <span className="text-primary-color">
                          2.000.000
                          <span className="align-top text-[12px]"> VNĐ</span>
                        </span>
                        <span className="text-[10px] text-[#757575]">x</span>
                        <span className="text-[12px] text-[#757575]">2</span>
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
                <li className="item-cart hover:bg-slate-100 flex align-center">
                  <img
                    className="m-3 w-[40px] h-[40px] border-solid border-[1px] border-[#e8e8e8]"
                    src="https://via.placeholder.com/40"
                    alt
                  />
                  <div className="w-[100%] mr-3">
                    <div className="flex justify-between">
                      <h5>Đồng hồ trẻ em</h5>
                      <div>
                        <span className="text-primary-color">
                          2.000.000
                          <span className="align-top text-[12px]"> VNĐ</span>
                        </span>
                        <span className="text-[10px] text-[#757575]">x</span>
                        <span className="text-[12px] text-[#757575]">2</span>
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
              </ul>
              <div className="p-2 text-right cursor-default">
                <button className="hover:opacity-90 font-semibold text-[12px] p-[8px_12px] bg-primary-color">
                  Xem giỏ hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar