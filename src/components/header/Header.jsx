import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
<<<<<<< HEAD
import {
    increment
  } from "../../features/counter/counterSlice"
import {useDispatch } from 'react-redux';

=======
import { increment } from "../../features/counter/counterSlice";
>>>>>>> 0a21d3199e47b5c060ba807b8be3f191ce597ea6
const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
    };
    const bodyParameters = {
        key: "logout",
    };

    const [isMenuShow, setIsMenuShow] = useState(false);
   

    const handleLogout = () => {
        axios
            .post(
                "http://127.0.0.1:8000/api/auth/logout",
                bodyParameters,
                config
            )
            .then((res) => {
                console.log(res);
                localStorage.clear();
                dispatch(increment());
                navigate("/login");
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <header>
            <div className="bg-primary-color">
                <div className="grids wide">
                    <div className="flex justify-between items-center h-8 mobile:h-[40px] text-[12px] font-semibold">
                        <div className="pc:hidden relative flex items-center h-full">
                            <i
                                onClick={() => setIsMenuShow(!isMenuShow)}
                                className="text-white fas fa-bars text-[16px] font-semibold hover:bg-blue-500 p-3 hover:cursor-pointer "
                            />
                            {/* Menu mobile */}
                            {isMenuShow ? (
                                <div className="lg:hidden md:hidden wrapperMenu absolute top-[40px] h-screen text-[#f2f2f2] left-0 bg-[#333] w-screen z-50">
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
                                            <span className="block w-full">
                                                Trang chủ
                                            </span>
                                        </li>
                                        <li className="text-[16px] p-2 hover:bg-[#ddd] hover:text-black hover:cursor-pointer">
                                            <span className="block w-full">
                                                Sản phẩm
                                            </span>
                                        </li>
                                        <li className="text-[16px] p-2 hover:bg-[#ddd] hover:text-black hover:cursor-pointer">
                                            <span className="block w-full">
                                                Đơn đặt
                                            </span>
                                        </li>
                                        <li className="text-[16px] p-2 hover:bg-[#ddd] hover:text-black hover:cursor-pointer">
                                            <span className="block w-full">
                                                ...
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="tablet:hidden mobile:hidden">
                            <span className="text-white">
                                <i className="fas fa-envelope p-1 translate-y-[1px]" />
                                <span>abc@gmail.com</span>
                            </span>
                        </div>
                        {/* Not signed*/}
                        <ul
                            className={
                                localStorage.getItem("user")
                                    ? "hidden justify-between gap-2"
                                    : " flex justify-between gap-2"
                            }
                        >
                            <li>
                                <Link className="text-white" to="/login">
                                    Đăng nhập
                                </Link>
                            </li>
                            <p className="text-white">|</p>
                            <li>
                                <Link className="text-white" to="/register">
                                    Đăng ký
                                </Link>
                            </li>
                        </ul>
                        {/* Signed in */}
                        <div
                            className={
                                localStorage.getItem("user")
                                    ? " flex p-3"
                                    : "hidden p-3"
                            }
                        >
                            <span>
                                Xin chào, {localStorage.getItem("user")}
                            </span>
                            <div className="relative group">
                                <img
                                    alt="none"
                                    src="https://via.placeholder.com/50"
                                    className="hover:cursor-pointer ml-2 rounded-full w-5 h-5"
                                />

                                <div className="z-10 w-[150px] bg-white right-[-10px] shadow-[0_1px_20px_0_rgb(0_0_0_/_20%)] absolute top-[calc(100%_+_10px)] animate-[fadeIn_.2s_ease-in] hidden group-hover:block">
                                    <ul className="p-3">
                                        <span>
                                            <li className="hover:text-primary-color pb-1">
                                                Tài khoản
                                            </li>
                                        </span>

                                        <Link to="/change-password">
                                            <li className="hover:text-primary-color pb-1">
                                                Đổi mật khẩu
                                            </li>
                                        </Link>

                                        <span
                                            onClick={() => {
                                                handleLogout();
                                            }}
                                        >
                                            <li className="hover:text-primary-color  pt-2 border-t-2 border-t-primary-color border-solid">
                                                Đăng xuất
                                            </li>
                                        </span>
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
                    <div>
                        <span>
                            <img
                                alt="none"
                                className="border-2 border-solid border-pribg-primary-color h-[60px] object-contain"
                                src="https://w7.pngwing.com/pngs/713/936/png-transparent-online-shopping-shopping-cart-logo-e-commerce-market-blue-angle-company.png"
                            />
                        </span>
                    </div>
                    <div>
                        <select
                            className="border h-11 hover:opacity-80"
                            name="viewport"
                        >
                            <option value="all">All</option>
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
                            <i className="text-[20px] fas fa-search text-white" />
                        </button>
                    </div>
                    <div>
                        <div className="flex gap-4">
                            <div>
                                <span>
                                    <i className="translate-y-[7px] text-[42px] text-primary-color fas fa-mobile-" />
                                </span>
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
};

export default Header;
