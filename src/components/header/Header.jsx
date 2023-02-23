import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="bg-primary-color">
        <div className="grids wide">
          <div className="flex justify-between items-center h-8 mobile:h-[40px] text-[12px] font-semibold">
            <div className="pc:hidden relative flex items-center h-full">
              <i className="headerMenu fas fa-bars text-[16px] font-semibold hover:bg-blue-500 p-3 hover:cursor-pointer " />
              {/* Menu mobile */}
              <div className="hidden wrapperMenu absolute top-[40px] h-screen text-[#f2f2f2] left-0 bg-[#333] w-screen z-50">
                <ul className="select-none w-full">
                  <li className="p-2 text-[16px]">
                    <form
                      action="/shop"
                      method="get"
                      className="flex justify-center"
                    >
                      <input
                        type="search"
                        name="q"
                        className="text-black w-[50%] p-2"
                      />
                      <button>
                        <i className="fas fa-search text-[12px] font-semibold hover:text-black hover:bg-[#ddd] p-3 hover:cursor-pointer " />
                      </button>
                    </form>
                  </li>
                  <li className="text-[16px] p-2 hover:bg-[#ddd] hover:text-black hover:cursor-pointer">
                    <a className="block w-full" href>
                      Trang chủ
                    </a>
                  </li>
                  <li className="text-[16px] p-2 hover:bg-[#ddd] hover:text-black hover:cursor-pointer">
                    <a className="block w-full" href>
                      Sản phẩm
                    </a>
                  </li>
                  <li className="text-[16px] p-2 hover:bg-[#ddd] hover:text-black hover:cursor-pointer">
                    <a className="block w-full" href>
                      Đơn đặt
                    </a>
                  </li>
                  <li className="text-[16px] p-2 hover:bg-[#ddd] hover:text-black hover:cursor-pointer">
                    <a className="block w-full" href>
                      ...
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tablet:hidden mobile:hidden">
              <a href="mailto:abc@gmail.com" className>
                <i className="fas fa-envelope p-1 translate-y-[1px]" />
                <span>abc@gmail.com</span>
              </a>
            </div>
            {/* Not signed*/}
            <ul className="flex justify-between gap-2">
              <li className>
                <Link to="/login">Đăng nhập</Link>
              </li>
              <p>|</p>
              <li className>
              <Link to="/register">Đăng ký</Link>
              </li>
            </ul>
            {/* Signed in */}
            <div className="hidden flex p-3">
              <span>Xin chào, Quốc Trọng</span>
              <div className="relative group">
                <img
                  src="https://via.placeholder.com/50"
                  alt
                  className="hover:cursor-pointer ml-2 rounded-full w-5 h-5"
                />

                <div className="z-10 w-[150px] bg-white right-[-10px] shadow-[0_1px_20px_0_rgb(0_0_0_/_20%)] absolute top-[calc(100%_+_10px)] animate-[fadeIn_.2s_ease-in] hidden group-hover:block">
                  <ul className="p-3">
                    <a href>
                      <li className="hover:text-primary-color pb-1">
                        Tài khoản
                      </li>
                    </a>
                    <a href>
                      <li className="hover:text-primary-color pb-1">
                        Đổi mật khẩu
                      </li>
                    </a>
                    <a className href>
                      <li className="hover:text-primary-color  pt-2 border-t-2 border-t-primary-color border-solid">
                        Đăng xuất
                      </li>
                    </a>
                  </ul>

                  <div className="absolute border-[20px]  border-b-white border-t-transparent border-l-transparent border-r-transparent top-[-30px] right-0 border-solid"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Search */}
      <div className="grids wide mobile:hidden tablet:hidden">
        <div className="flex h-24 justify-between items-center">
          <div className>
            <a href="#">
              <img
                className="border-2 border-solid border-pribg-primary-color h-[60px] object-contain"
                src="https://via.placeholder.com/50"
                alt
                srcSet
              />
            </a>
          </div>
          <div>
            <select className="border h-11 hover:opacity-80" name="viewport" id>
              <option selected value>
                All
              </option>
              <option value>Apple</option>
              <option value>Samsung</option>
              <option value>Xiaomi</option>
            </select>
            {/*//remove space
             */}
            <div className="relative inline-block">
              <input
                name="p"
                type="search"
                placeholder="Nhập sản phẩm bạn cần tìm..."
                className="focus-visible:shadow-[0_0_5px_#ccc] focus-visible:outline-none p-4 border h-11 w-96 text-[16px]"
              />
            </div>
            {/*remove space
             */}
            <button className="rounded-r-lg w-11 h-11 bg-primary-color hover:opacity-80">
              <i className="text-[20px] fas fa-search" />
            </button>
          </div>
          <div>
            <div className="flex gap-4">
              <div className>
                <a className href="tel:123456">
                  <i className="translate-y-[7px] text-[42px] text-primary-color fas fa-mobile-alt" />
                </a>
              </div>
              <div>
                <span className="block">Hotline đặt hàng</span>
                <span className="block text-[20px] text-primary-color font-semibold">
                  123456
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header