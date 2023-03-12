import axios from "axios";
import React, { useEffect, useState } from "react";

const Checkout = () => {
    const [list, setList] = useState(
        JSON.parse(localStorage.getItem("listCost"))
    );
    const [info, setInfo] = useState([]);
    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/auth/user-profile", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "access_token"
                    )}`,
                },
            })
            .then((res) => {
                setInfo(res.data);
                setList(
                    list.map((item) => {
                        const { id, ...rest } = item; // destructuring to take out the key "id"
                        return { product_id: id, ...rest }; // returning a new object with the updated key name
                    })
                );
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const handleSubmit = () => {
        axios
            .post(
                "http://127.0.0.1:8000/api/orders",
                {
                    user_id: info.id,
                    items: list,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "access_token"
                        )}`,
                    },
                }
            )
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };
    return (
        <div className="bg-gradient-to-tl from-white to-blue-100 p-5">
            <div className="grids wide min-h-screen">
                <div className="row">
                    <div className="col l-12 md-12 c-12">
                        <div className="w-full h-[100px] flex items-center justify-center flex-col bg-blue-400">
                            <span className="text-black font-semibold text-[16px]">
                                TỔNG TIỀN: {localStorage.getItem("totalCost")}{" "}
                                USD
                            </span>
                            <span className="text-black uppercase font-semibold text-[16px]">
                                Số lượng sản phẩm: {list.length}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col l-6 c-12 md-12">
                        <div className="p-1 flex justify-center items-center">
                            <h3 className="font-semibold text-[24px] uppercase">
                                Thông tin khách hàng
                            </h3>
                            <a className="ml-2 text-blue-600 underline">
                                thay đổi
                            </a>
                        </div>
                        <form id="fCheckout" action className="p-5 shadow-lg">
                            <div className="form-group row my-4">
                                <label
                                    className="col l-4 md-12"
                                    htmlFor="fullname"
                                >
                                    Họ tên:
                                </label>
                                <input
                                    disabled
                                    type="text"
                                    name="fullname"
                                    className="focus:outline-none focus:border-[1px] focus:border-solid focus:border-primary-color col l-8 md-12 c-12 w-full bg-blue-100 p-1"
                                    id="fullname"
                                    value={info.name}
                                />
                                <span className="error-message col l-o-4 text-red-600" />
                            </div>
                            <div className="form-group row my-4">
                                <label
                                    className="col l-4 md-12 c-12"
                                    htmlFor="email"
                                >
                                    Email:
                                </label>
                                <input
                                    disabled
                                    type="email"
                                    name="email"
                                    className="focus:outline-none focus:border-[1px] focus:border-solid focus:border-primary-color col l-8 md-12 c-12 w-full bg-blue-100 p-1"
                                    id="email"
                                    value={info.email}
                                />
                                <span className="error-message col l-o-4 text-red-600" />
                            </div>
                            <div className="form-group row my-4">
                                <label
                                    className="col l-4 md-12 c-12"
                                    htmlFor="phone"
                                >
                                    Số điện thoại:
                                </label>
                                <input
                                    disabled
                                    type="tel"
                                    name="phone"
                                    className="focus:outline-none focus:border-[1px] focus:border-solid focus:border-primary-color col l-8 md-12 c-12 w-full bg-blue-100 p-1"
                                    id="phone"
                                />
                                <span className="error-message col l-o-4 text-red-600" />
                            </div>
                            <div className="form-group row my-4">
                                <label className="col l-4" htmlFor="address">
                                    Địa chỉ:
                                </label>
                                <textarea
                                    disabled
                                    name="address"
                                    className="focus:outline-none focus:border-[1px] focus:border-solid focus:border-primary-color col l-8 w-full bg-blue-100"
                                    id="address"
                                    defaultValue={""}
                                />
                                <span className="error-message col l-o-4 text-red-600" />
                            </div>
                            <div className=" border-[1px] border-solid border-[#aaa] p-3 my-3">
                                <h5 className="font-semibold">
                                    Phương thức thanh toán:
                                </h5>
                                <div className>
                                    <input
                                        defaultChecked
                                        type="radio"
                                        name="paymentMethods"
                                        defaultValue
                                        id="COD"
                                    />
                                    <label htmlFor="COD" className="ml-3">
                                        COD
                                    </label>
                                </div>
                                <div className>
                                    <input
                                        type="radio"
                                        name="paymentMethods"
                                        defaultValue
                                        id="COD"
                                    />
                                    <label htmlFor="COD" className="ml-3">
                                        Paypal
                                    </label>
                                </div>
                            </div>
                            <button
                                className="button btnCheckout uppercase w-full btn-primary"
                                onClick={() => {
                                    handleSubmit();
                                }}
                            >
                                Đặt hàng
                            </button>
                        </form>
                    </div>
                    <div className="col l-6 md-12 c-12 tablet:mt-5 mobile:mt-5">
                        <div className="p-5 shadow-lg h-[460px] overflow-auto">
                            {list.map((item) => (
                                <div className="last:border-0 p-2 my-2 flex items-center justify-between border-b-[1px] border-solid border-[#aaa]">
                                    <img
                                        className=" shadow-md p-2 w-[60px] h-[60px]"
                                        src={item.image}
                                        alt
                                    />
                                    <div>
                                        <h4 className="font-semibold">
                                            {item.name}
                                        </h4>
                                        <span>{item.price} USD</span>
                                    </div>
                                    <div>
                                        <span className="text-[12px]">
                                            x&nbsp;
                                        </span>
                                        <span className="font-semibold text-[16px]">
                                            {item.quantity}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
