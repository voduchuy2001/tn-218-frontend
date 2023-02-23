import React from "react";

const ListProduct = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-5 pb-2 bg-white">
        <div className="grids wide">
          <div className=" bg-slate-200 relative after:border-r-transparent after:border-b-transparent after:inline-block after:absolute after:border-[16px] after:border-primary-color after:border-solid border-primary-color border-solid border-t-2 ">
            <span className="uppercase font-semibold p-[4px_8px] bg-primary-color inline-block">
              <i className="fa fa-apple pr-2" />
              Tất cả sản phẩm
            </span>
          </div>
        </div>
      </div>
      <div className="grids wide">
        <div className="row pt-1">
          {/* Category */}
          <div className="mobile:hidden tablet:hidden col l-2">
            <div className="select-none">
              <h3 className="font-semibold bg-slate-100 p-2 border-solid border-[#e8e8e8] border-2">
                <i className="fas fa-list pr-2" /> Danh mục
              </h3>
              <ul className="bg-slate-100 p-2 border-solid border-[#e8e8e8] border-2">
                <div className="hover:cursor-pointer">

                </div>
                <li>...</li>
              </ul>
            </div>
          </div>
          <div className="col l-10">
            <div className="mobile:hidden tablet:hidden">
              <div className="flex justify-between p-3 bg-slate-100 mb-2">
                <div>
                  <span className="mr-2 text-[#555555]">Sắp xếp theo</span>
                  <span className="hover:bg-blue-200 hover:cursor-pointer mr-2 p-[4px_8px] font-semibold bg-white">
                    Mới nhất
                  </span>
                  <span className="hover:bg-blue-200 hover:cursor-pointer mr-2 p-[4px_8px] font-semibold bg-white">
                    Phổ biến
                  </span>
                  <span className="hover:bg-blue-200 hover:cursor-pointer mr-2 p-[4px_8px] font-semibold bg-white">
                    Bán chạy
                  </span>
                  <select
                    className="font-semibold hover:cursor-pointer p-[4px_8px]"
                    name
                    id
                  >
                    <option className>Giá</option>
                    <option value>Thấp đến cao</option>
                    <option value>Cao đến thấp</option>
                  </select>
                </div>
                <div>
                  <span className="text-primary-color">1</span>
                  <span className="mx-1">/14</span>
                  <i
                    className="hover:cursor-pointer p-[8px_12px] bg-white arrow-right fas fa-chevron-left pr-2 text-blue-500"
                    aria-hidden="true"
                  />
                  <i
                    className="hover:cursor-pointer p-[8px_12px] bg-white arrow-right fas fa-chevron-right pr-2 text-blue-500"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
            <div className="row mobile:p-[0_8px]">
              <div className="col l-2-4 md-4 c-6 pc:mt-3 ">
                <div className="h-[316px] transition ease-in-out duration-300 hover:scale-105 mb-2 p-2 border hover:cursor-pointer hover:border-primary-color border-gray-300 border-solid relative after:absolute after:rounded-[99%] after:content-['50%'] after:p-1 after:text-center after:bg-primary-color/80 after:h-10 after:w-10 after:font-semibold after: after:top-4">
                  <img
                    className="object-cover block m-auto h-[228px] w-[168px]"
                    src="https://bizweb.dktcdn.net/thumb/1024x1024/100/343/934/products/iphone-8-red-do-1-400x460.png"
                    alt
                  />
                  <span className="line-clamp-2 text-primary-color pb-3 leading-[20px] max-h-[40px]">
                    iPhone 8 64GB
                  </span>
                  <span className="block text-red-500 font-semibold text-[20px]">
                    2.300.000đ
                  </span>
                </div>
              </div>
              <div className="col l-2-4 md-4 c-6 pc:mt-3 ">
                <div className="h-[316px] transition ease-in-out duration-300 hover:scale-105 mb-2 p-2 border hover:cursor-pointer hover:border-primary-color border-gray-300 border-solid relative after:absolute after:rounded-[99%] after:content-['50%'] after:p-1 after:text-center after:bg-primary-color/80 after:h-10 after:w-10 after:font-semibold after: after:top-4">
                  <img
                    className="object-cover block m-auto h-[228px] w-[168px]"
                    src="https://dienthoaimoi.vn/images/products/2020/11/12/resized/ip8_den_1605168857.png"
                    alt
                  />
                  <span className="line-clamp-2 text-primary-color pb-3 leading-[20px] max-h-[40px]">
                    iPhone 8 64GB
                  </span>
                  <span className="block text-red-500 font-semibold text-[20px]">
                    2.300.000đ
                  </span>
                </div>
              </div>
              <div className="col l-2-4 md-4 c-6 pc:mt-3 ">
                <div className="h-[316px] transition ease-in-out duration-300 hover:scale-105 mb-2 p-2 border hover:cursor-pointer hover:border-primary-color border-gray-300 border-solid relative after:absolute after:rounded-[99%] after:content-['50%'] after:p-1 after:text-center after:bg-primary-color/80 after:h-10 after:w-10 after:font-semibold after: after:top-4">
                  <img
                    className="object-cover block m-auto h-[228px] w-[168px]"
                    src="https://bizweb.dktcdn.net/thumb/1024x1024/100/343/934/products/iphone-8-red-do-1-400x460.png"
                    alt
                  />
                  <span className="line-clamp-2 text-primary-color pb-3 leading-[20px] max-h-[40px]">
                    Máy lọc không khí Sharp FF-F30E Máy lọc không khí Sharp
                    FF-F30E Máy lọc không khí Sharp FF-F30E
                  </span>
                  <span className="block text-red-500 font-semibold text-[20px]">
                    2.300.000đ
                  </span>
                </div>
              </div>
              <div className="col l-2-4 md-4 c-6 pc:mt-3 ">
                <div className="h-[316px] transition ease-in-out duration-300 hover:scale-105 mb-2 p-2 border hover:cursor-pointer hover:border-primary-color border-gray-300 border-solid relative after:absolute after:rounded-[99%] after:content-['50%'] after:p-1 after:text-center after:bg-primary-color/80 after:h-10 after:w-10 after:font-semibold after: after:top-4">
                  <img
                    className="object-cover block m-auto h-[228px] w-[168px]"
                    src="https://bizweb.dktcdn.net/100/372/934/products/11-den.png?v=1582103575993"
                    alt
                  />
                  <span className="line-clamp-2 text-primary-color pb-3 leading-[20px] max-h-[40px]">
                    Máy lọc không khí Sharp FF-F30E Máy lọc không khí Sharp
                    FF-F30E Máy lọc không khí Sharp FF-F30E
                  </span>
                  <span className="block text-red-500 font-semibold text-[20px]">
                    2.300.000đ
                  </span>
                </div>
              </div>
              <div className="col l-2-4 md-4 c-6 pc:mt-3 ">
                <div className="h-[316px] transition ease-in-out duration-300 hover:scale-105 mb-2 p-2 border hover:cursor-pointer hover:border-primary-color border-gray-300 border-solid relative after:absolute after:rounded-[99%] after:content-['50%'] after:p-1 after:text-center after:bg-primary-color/80 after:h-10 after:w-10 after:font-semibold after: after:top-4">
                  <img
                    className="object-cover block m-auto h-[228px] w-[168px]"
                    src="https://bizweb.dktcdn.net/thumb/1024x1024/100/343/934/products/iphone-8-red-do-1-400x460.png"
                    alt
                  />
                  <span className="line-clamp-2 text-primary-color pb-3 leading-[20px] max-h-[40px]">
                    Máy lọc không khí Sharp FF-F30E Máy lọc không khí Sharp
                    FF-F30E Máy lọc không khí Sharp FF-F30E
                  </span>
                  <span className="block text-red-500 font-semibold text-[20px]">
                    2.300.000đ
                  </span>
                </div>
              </div>
              <div className="col l-2-4 md-4 c-6 pc:mt-3 ">
                <div className="h-[316px] transition ease-in-out duration-300 hover:scale-105 mb-2 p-2 border hover:cursor-pointer hover:border-primary-color border-gray-300 border-solid relative after:absolute after:rounded-[99%] after:content-['50%'] after:p-1 after:text-center after:bg-primary-color/80 after:h-10 after:w-10 after:font-semibold after: after:top-4">
                  <img
                    className="object-cover block m-auto h-[228px] w-[168px]"
                    src="https://bizweb.dktcdn.net/thumb/1024x1024/100/343/934/products/iphone-8-red-do-1-400x460.png"
                    alt
                  />
                  <span className="line-clamp-2 text-primary-color pb-3 leading-[20px] max-h-[40px]">
                    iPhone 8 64GB
                  </span>
                  <span className="block text-red-500 font-semibold text-[20px]">
                    2.300.000đ
                  </span>
                </div>
              </div>
              <div className="col l-2-4 md-4 c-6 pc:mt-3 ">
                <div className="h-[316px] transition ease-in-out duration-300 hover:scale-105 mb-2 p-2 border hover:cursor-pointer hover:border-primary-color border-gray-300 border-solid relative after:absolute after:rounded-[99%] after:content-['50%'] after:p-1 after:text-center after:bg-primary-color/80 after:h-10 after:w-10 after:font-semibold after: after:top-4">
                  <img
                    className="object-cover block m-auto h-[228px] w-[168px]"
                    src="https://dienthoaimoi.vn/images/products/2020/11/12/resized/ip8_den_1605168857.png"
                    alt
                  />
                  <span className="line-clamp-2 text-primary-color pb-3 leading-[20px] max-h-[40px]">
                    iPhone 8 64GB
                  </span>
                  <span className="block text-red-500 font-semibold text-[20px]">
                    2.300.000đ
                  </span>
                </div>
              </div>
              <div className="col l-2-4 md-4 c-6 pc:mt-3 ">
                <div className="h-[316px] transition ease-in-out duration-300 hover:scale-105 mb-2 p-2 border hover:cursor-pointer hover:border-primary-color border-gray-300 border-solid relative after:absolute after:rounded-[99%] after:content-['50%'] after:p-1 after:text-center after:bg-primary-color/80 after:h-10 after:w-10 after:font-semibold after: after:top-4">
                  <img
                    className="object-cover block m-auto h-[228px] w-[168px]"
                    src="https://bizweb.dktcdn.net/thumb/1024x1024/100/343/934/products/iphone-8-red-do-1-400x460.png"
                    alt
                  />
                  <span className="line-clamp-2 text-primary-color pb-3 leading-[20px] max-h-[40px]">
                    Máy lọc không khí Sharp FF-F30E Máy lọc không khí Sharp
                    FF-F30E Máy lọc không khí Sharp FF-F30E
                  </span>
                  <span className="block text-red-500 font-semibold text-[20px]">
                    2.300.000đ
                  </span>
                </div>
              </div>
              <div className="col l-2-4 md-4 c-6 pc:mt-3 ">
                <div className="h-[316px] transition ease-in-out duration-300 hover:scale-105 mb-2 p-2 border hover:cursor-pointer hover:border-primary-color border-gray-300 border-solid relative after:absolute after:rounded-[99%] after:content-['50%'] after:p-1 after:text-center after:bg-primary-color/80 after:h-10 after:w-10 after:font-semibold after: after:top-4">
                  <img
                    className="object-cover block m-auto h-[228px] w-[168px]"
                    src="https://bizweb.dktcdn.net/100/372/934/products/11-den.png?v=1582103575993"
                    alt
                  />
                  <span className="line-clamp-2 text-primary-color pb-3 leading-[20px] max-h-[40px]">
                    Máy lọc không khí Sharp FF-F30E Máy lọc không khí Sharp
                    FF-F30E Máy lọc không khí Sharp FF-F30E
                  </span>
                  <span className="block text-red-500 font-semibold text-[20px]">
                    2.300.000đ
                  </span>
                </div>
              </div>
              <div className="col l-2-4 md-4 c-6 pc:mt-3 ">
                <div className="h-[316px] transition ease-in-out duration-300 hover:scale-105 mb-2 p-2 border hover:cursor-pointer hover:border-primary-color border-gray-300 border-solid relative after:absolute after:rounded-[99%] after:content-['50%'] after:p-1 after:text-center after:bg-primary-color/80 after:h-10 after:w-10 after:font-semibold after: after:top-4">
                  <img
                    className="object-cover block m-auto h-[228px] w-[168px]"
                    src="https://bizweb.dktcdn.net/thumb/1024x1024/100/343/934/products/iphone-8-red-do-1-400x460.png"
                    alt
                  />
                  <span className="line-clamp-2 text-primary-color pb-3 leading-[20px] max-h-[40px]">
                    Máy lọc không khí Sharp FF-F30E Máy lọc không khí Sharp
                    FF-F30E Máy lọc không khí Sharp FF-F30E
                  </span>
                  <span className="block text-red-500 font-semibold text-[20px]">
                    2.300.000đ
                  </span>
                </div>
              </div>
              <div className="col l-2-4 md-4 c-6 pc:mt-3 ">
                <div className="h-[316px] transition ease-in-out duration-300 hover:scale-105 mb-2 p-2 border hover:cursor-pointer hover:border-primary-color border-gray-300 border-solid relative after:absolute after:rounded-[99%] after:content-['50%'] after:p-1 after:text-center after:bg-primary-color/80 after:h-10 after:w-10 after:font-semibold after: after:top-4">
                  <img
                    className="object-cover block m-auto h-[228px] w-[168px]"
                    src="https://bizweb.dktcdn.net/thumb/1024x1024/100/343/934/products/iphone-8-red-do-1-400x460.png"
                    alt
                  />
                  <span className="line-clamp-2 text-primary-color pb-3 leading-[20px] max-h-[40px]">
                    iPhone 8 64GB
                  </span>
                  <span className="block text-red-500 font-semibold text-[20px]">
                    2.300.000đ
                  </span>
                </div>
              </div>
              <div className="col l-2-4 md-4 c-6 pc:mt-3 ">
                <div className="h-[316px] transition ease-in-out duration-300 hover:scale-105 mb-2 p-2 border hover:cursor-pointer hover:border-primary-color border-gray-300 border-solid relative after:absolute after:rounded-[99%] after:content-['50%'] after:p-1 after:text-center after:bg-primary-color/80 after:h-10 after:w-10 after:font-semibold after: after:top-4">
                  <img
                    className="object-cover block m-auto h-[228px] w-[168px]"
                    src="https://dienthoaimoi.vn/images/products/2020/11/12/resized/ip8_den_1605168857.png"
                    alt
                  />
                  <span className="line-clamp-2 text-primary-color pb-3 leading-[20px] max-h-[40px]">
                    iPhone 8 64GB
                  </span>
                  <span className="block text-red-500 font-semibold text-[20px]">
                    2.300.000đ
                  </span>
                </div>
              </div>
              <div className="col l-2-4 md-4 c-6 pc:mt-3 ">
                <div className="h-[316px] transition ease-in-out duration-300 hover:scale-105 mb-2 p-2 border hover:cursor-pointer hover:border-primary-color border-gray-300 border-solid relative after:absolute after:rounded-[99%] after:content-['50%'] after:p-1 after:text-center after:bg-primary-color/80 after:h-10 after:w-10 after:font-semibold after: after:top-4">
                  <img
                    className="object-cover block m-auto h-[228px] w-[168px]"
                    src="https://bizweb.dktcdn.net/thumb/1024x1024/100/343/934/products/iphone-8-red-do-1-400x460.png"
                    alt
                  />
                  <span className="line-clamp-2 text-primary-color pb-3 leading-[20px] max-h-[40px]">
                    Máy lọc không khí Sharp FF-F30E Máy lọc không khí Sharp
                    FF-F30E Máy lọc không khí Sharp FF-F30E
                  </span>
                  <span className="block text-red-500 font-semibold text-[20px]">
                    2.300.000đ
                  </span>
                </div>
              </div>
              <div className="col l-2-4 md-4 c-6 pc:mt-3 ">
                <div className="h-[316px] transition ease-in-out duration-300 hover:scale-105 mb-2 p-2 border hover:cursor-pointer hover:border-primary-color border-gray-300 border-solid relative after:absolute after:rounded-[99%] after:content-['50%'] after:p-1 after:text-center after:bg-primary-color/80 after:h-10 after:w-10 after:font-semibold after: after:top-4">
                  <img
                    className="object-cover block m-auto h-[228px] w-[168px]"
                    src="https://bizweb.dktcdn.net/100/372/934/products/11-den.png?v=1582103575993"
                    alt
                  />
                  <span className="line-clamp-2 text-primary-color pb-3 leading-[20px] max-h-[40px]">
                    Máy lọc không khí Sharp FF-F30E Máy lọc không khí Sharp
                    FF-F30E Máy lọc không khí Sharp FF-F30E
                  </span>
                  <span className="block text-red-500 font-semibold text-[20px]">
                    2.300.000đ
                  </span>
                </div>
              </div>
              <div className="col l-2-4 md-4 c-6 pc:mt-3 ">
                <div className="h-[316px] transition ease-in-out duration-300 hover:scale-105 mb-2 p-2 border hover:cursor-pointer hover:border-primary-color border-gray-300 border-solid relative after:absolute after:rounded-[99%] after:content-['50%'] after:p-1 after:text-center after:bg-primary-color/80 after:h-10 after:w-10 after:font-semibold after: after:top-4">
                  <img
                    className="object-cover block m-auto h-[228px] w-[168px]"
                    src="https://bizweb.dktcdn.net/thumb/1024x1024/100/343/934/products/iphone-8-red-do-1-400x460.png"
                    alt
                  />
                  <span className="line-clamp-2 text-primary-color pb-3 leading-[20px] max-h-[40px]">
                    Máy lọc không khí Sharp FF-F30E Máy lọc không khí Sharp
                    FF-F30E Máy lọc không khí Sharp FF-F30E
                  </span>
                  <span className="block text-red-500 font-semibold text-[20px]">
                    2.300.000đ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
