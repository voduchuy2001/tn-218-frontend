import React from "react";

const Cart = () => {
    return (
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
                            <h3 className="text-center font-bold uppercase">
                                Giỏ hàng
                            </h3>
                        </div>
                        <div className="cart-item-detail rounded-lg shadow-lg flex p-3 mb-3 relative">
                            <img
                                src="https://image.cellphones.com.vn/200x/media/catalog/product/i/p/iphone-13-02_1.jpg"
                                className="p-2 w-[200px] h-[200px] object-contain"
                            />
                            <div>
                                <h3 className="font-semibold text-[16px]">
                                    iPhone 13 hồng
                                </h3>
                                <span className="text-blue-700 font-semibold">
                                    18.950.000{" "}
                                    <span className="align-top text-[12px]">
                                        VNĐ
                                    </span>
                                </span>
                                <span className="line-through">
                                    24.990.000
                                    <span className="align-top text-[12px]">
                                        VNĐ
                                    </span>
                                </span>
                                <span className="p-1 bg-blue-500 font-semibold rounded-lg text-white">
                                    Giảm 25%
                                </span>
                                <div className="flex my-2">
                                    <button className="countMinus">
                                        <i className="text-primary-color fas fa-minus-square text-[24px]" />
                                    </button>
                                    <input
                                        type="text"
                                        defaultValue={1}
                                        className="cart-detail-quantity w-[50px] h-[24px] text-center bg-blue-100"
                                        readOnly
                                    />
                                    <button className="countPlus">
                                        <i className="text-primary-color fas fa-plus-square text-[24px]" />
                                    </button>
                                </div>
                                {/* Promotion program */}
                                <div className="rounded-md bg-slate-100 w-full p-3">
                                    <h3>- Chương trình khuyến mãi:</h3>
                                    <span className="flex items-center">
                                        <i className="text-[8px] text-blue-700 p-1 mr-2 fas fa-circle" />
                                        <span>
                                            Thu cũ lên đời - Trợ giá 1 triệu
                                        </span>
                                    </span>
                                    <span className="flex items-center">
                                        <i className="text-[8px] text-blue-700 p-1 mr-2 fas fa-circle" />
                                        <span>
                                            Nhập mã CPSONL500 khi thanh toán
                                            VNPAY qua website hoặc CPS500 qua QR
                                            Offline tại cửa hàng để giảm thêm
                                            500k khi mua sản phẩm Apple từ 17
                                            triệu
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 p-3">
                                <a title="Xoá">
                                    <i className="fas fa-trash text-[16px] hover:text-red-600" />
                                </a>
                            </div>
                        </div>
                        <div className="cart-item-detail rounded-lg shadow-lg flex p-3 mb-3 relative">
                            <img
                                src="https://image.cellphones.com.vn/200x/media/catalog/product/i/p/iphone-13-02_1.jpg"
                                className="p-2 w-[200px] h-[200px] object-contain"
                            />
                            <div>
                                <h3 className="font-semibold text-[16px]">
                                    iPhone 13 hồng
                                </h3>
                                <span className="text-blue-700 font-semibold">
                                    18.950.000{" "}
                                    <span className="align-top text-[12px]">
                                        VNĐ
                                    </span>
                                </span>
                                <span className="line-through">
                                    24.990.000
                                    <span className="align-top text-[12px]">
                                        VNĐ
                                    </span>
                                </span>
                                <span className="p-1 bg-blue-500 font-semibold rounded-lg text-white">
                                    Giảm 25%
                                </span>
                                <div className="flex my-2">
                                    <button className="countMinus">
                                        <i className="text-primary-color fas fa-minus-square text-[24px]" />
                                    </button>
                                    <input
                                        type="text"
                                        defaultValue={1}
                                        className="cart-detail-quantity w-[50px] h-[24px] text-center bg-blue-100"
                                        readOnly
                                    />
                                    <button className="countPlus">
                                        <i className="text-primary-color fas fa-plus-square text-[24px]" />
                                    </button>
                                </div>
                                {/* Promotion program */}
                                <div className="rounded-md bg-slate-100 w-full p-3">
                                    <h3>- Chương trình khuyến mãi:</h3>
                                    <span className="flex items-center">
                                        <i className="text-[8px] text-blue-700 p-1 mr-2 fas fa-circle" />
                                        <span>
                                            Thu cũ lên đời - Trợ giá 1 triệu
                                        </span>
                                    </span>
                                    <span className="flex items-center">
                                        <i className="text-[8px] text-blue-700 p-1 mr-2 fas fa-circle" />
                                        <span>
                                            Nhập mã CPSONL500 khi thanh toán
                                            VNPAY qua website hoặc CPS500 qua QR
                                            Offline tại cửa hàng để giảm thêm
                                            500k khi mua sản phẩm Apple từ 17
                                            triệu
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 p-3">
                                <a title="Xoá">
                                    <i className="fas fa-trash text-[16px] hover:text-red-600" />
                                </a>
                            </div>
                        </div>
                        <div className="cart-item-detail rounded-lg shadow-lg flex p-3 mb-3 relative">
                            <img
                                src="https://image.cellphones.com.vn/200x/media/catalog/product/i/p/iphone-13-02_1.jpg"
                                className="p-2 w-[200px] h-[200px] object-contain"
                            />
                            <div>
                                <h3 className="font-semibold text-[16px]">
                                    iPhone 13 hồng
                                </h3>
                                <span className="text-blue-700 font-semibold">
                                    18.950.000{" "}
                                    <span className="align-top text-[12px]">
                                        VNĐ
                                    </span>
                                </span>
                                <span className="line-through">
                                    24.990.000
                                    <span className="align-top text-[12px]">
                                        VNĐ
                                    </span>
                                </span>
                                <span className="p-1 bg-blue-500 font-semibold rounded-lg text-white">
                                    Giảm 25%
                                </span>
                                <div className="flex my-2">
                                    <button className="countMinus">
                                        <i className="text-primary-color fas fa-minus-square text-[24px]" />
                                    </button>
                                    <input
                                        type="text"
                                        defaultValue={1}
                                        className="cart-detail-quantity w-[50px] h-[24px] text-center bg-blue-100"
                                        readOnly
                                    />
                                    <button className="countPlus">
                                        <i className="text-primary-color fas fa-plus-square text-[24px]" />
                                    </button>
                                </div>
                                {/* Promotion program */}
                                <div className="rounded-md bg-slate-100 w-full p-3">
                                    <h3>- Chương trình khuyến mãi:</h3>
                                    <span className="flex items-center">
                                        <i className="text-[8px] text-blue-700 p-1 mr-2 fas fa-circle" />
                                        <span>
                                            Thu cũ lên đời - Trợ giá 1 triệu
                                        </span>
                                    </span>
                                    <span className="flex items-center">
                                        <i className="text-[8px] text-blue-700 p-1 mr-2 fas fa-circle" />
                                        <span>
                                            Nhập mã CPSONL500 khi thanh toán
                                            VNPAY qua website hoặc CPS500 qua QR
                                            Offline tại cửa hàng để giảm thêm
                                            500k khi mua sản phẩm Apple từ 17
                                            triệu
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 p-3">
                                <a title="Xoá">
                                    <i className="fas fa-trash text-[16px] hover:text-red-600" />
                                </a>
                            </div>
                        </div>

                        <div className="rounded-md shadow-lg p-2">
                            <div className="flex justify-between p-2">
                                <span className="font-semibold text-[16px]">
                                    Tổng tiền tạm tính:{" "}
                                </span>
                                <span className=" text-blue-600 font-semibold">
                                    <p
                                        className="inline-block"
                                        id="total-price-cart"
                                    >
                                        69176000
                                    </p>{" "}
                                    <span className="align-top text-[12px]">
                                        VNĐ
                                    </span>
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
    );
};

export default Cart;
