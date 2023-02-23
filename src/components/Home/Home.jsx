import React from 'react'
import Banner from '../banner/Banner';

const Home = () => {
  return (
    <>
      <Banner />
    <main className="mb-4">
      {/* Product 1 */}
      <section className>
        <div className="pt-5 pb-2 bg-white">
          <div className="grids wide">
            <div className=" bg-slate-200 relative after:border-r-transparent after:border-b-transparent after:inline-block after:absolute after:border-[16px] after:border-primary-color after:border-solid border-primary-color border-solid border-t-2 ">
              <span className="uppercase font-semibold p-[4px_8px] bg-primary-color inline-block">
                <i className="fa fa-apple pr-2" />
                Apple
              </span>
              <span className="hover:cursor-pointer text-primary-color float-right inline-block pr-3 leading-[34px]">
                Xem tất cả
                <i className=" pl-3 fas fa-chevron-right" />
              </span>
            </div>
          </div>
        </div>
        <div className="grids wide">
          <div className="row pt-1 mobile:p-[0_8px]">
            <div className="col l-2-4 md-4 c-6">
              <div className="h-[316px] transition ease-in-out duration-300 hover:scale-105 mb-2 p-2 border hover:cursor-pointer hover:border-primary-color border-gray-300 border-solid relative">
                <img
                  className="object-cover block m-auto h-[228px] w-[168px]"
                  src="https://bizweb.dktcdn.net/thumb/1024x1024/100/343/934/products/iphone-8-red-do-1-400x460.png"
                  alt
                />
                <span className="line-clamp-2 text-primary-color pb-3 leading-[20px] max-h-[40px]">
                  iPhone 8 64GB
                </span>
                <span className="block text-red-500 font-semibold text-[20px]">
                  2.300.000<span className="align-top text-[12px]"> VNĐ</span>
                </span>
                <div className=" absolute rounded-[99%] p-1 text-center bg-primary-color/80 h-10 w-10 ont-semibold top-4">
                  <span>50%</span>
                </div>
              </div>
            </div>
            <div className="col l-2-4 md-4 c-6">
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
                  2.300.000<span className="align-top text-[12px]"> VNĐ</span>
                </span>
              </div>
            </div>
            <div className="col l-2-4 md-4 c-6">
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
                  2.300.000<span className="align-top text-[12px]"> VNĐ</span>
                </span>
              </div>
            </div>
            <div className="col l-2-4 md-4 c-6">
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
                  2.300.000<span className="align-top text-[12px]"> VNĐ</span>
                </span>
              </div>
            </div>
            <div className="col l-2-4 md-4 c-6">
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
                  2.300.000<span className="align-top text-[12px]"> VNĐ</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product 2 */}
      <section className>
        <div className="pt-5 pb-2 bg-white">
          <div className="grids wide">
            <div className=" bg-slate-200 relative after:border-r-transparent after:border-b-transparent after:inline-block after:absolute after:border-[16px] after:border-primary-color after:border-solid border-primary-color border-solid border-t-2 ">
              <span className="uppercase font-semibold p-[4px_8px] bg-primary-color inline-block">
                <i className="fa fa-apple pr-2" />
                Apple
              </span>
              <span className="hover:cursor-pointer text-primary-color float-right inline-block pr-3 leading-[34px]">
                Xem tất cả
                <i className=" pl-3 fas fa-chevron-right" />
              </span>
            </div>
          </div>
        </div>
        <div className="grids wide">
          <div className="row pt-1 mobile:p-[0_8px]">
            <div className="col l-2-4 md-4 c-6">
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
                  2.300.000<span className="align-top text-[12px]"> VNĐ</span>
                </span>
              </div>
            </div>
            <div className="col l-2-4 md-4 c-6">
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
                  2.300.000<span className="align-top text-[12px]"> VNĐ</span>
                </span>
              </div>
            </div>
            <div className="col l-2-4 md-4 c-6">
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
                  2.300.000<span className="align-top text-[12px]"> VNĐ</span>
                </span>
              </div>
            </div>
            <div className="col l-2-4 md-4 c-6">
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
                  2.300.000<span className="align-top text-[12px]"> VNĐ</span>
                </span>
              </div>
            </div>
            <div className="col l-2-4 md-4 c-6">
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
                  2.300.000<span className="align-top text-[12px]"> VNĐ</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product 3 */}
      <section className>
        <div className="pt-5 pb-2 bg-white">
          <div className="grids wide">
            <div className=" bg-slate-200 relative after:border-r-transparent after:border-b-transparent after:inline-block after:absolute after:border-[16px] after:border-primary-color after:border-solid border-primary-color border-solid border-t-2 ">
              <span className="uppercase font-semibold p-[4px_8px] bg-primary-color inline-block">
                <i className="fa fa-apple pr-2" />
                Apple
              </span>
              <span className="hover:cursor-pointer text-primary-color float-right inline-block pr-3 leading-[34px]">
                Xem tất cả
                <i className=" pl-3 fas fa-chevron-right" />
              </span>
            </div>
          </div>
        </div>
        <div className="grids wide">
          <div className="row pt-1 mobile:p-[0_8px]">
            <div className="col l-2-4 md-4 c-6">
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
                  2.300.000<span className="align-top text-[12px]"> VNĐ</span>
                </span>
              </div>
            </div>
            <div className="col l-2-4 md-4 c-6">
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
                  2.300.000<span className="align-top text-[12px]"> VNĐ</span>
                </span>
              </div>
            </div>
            <div className="col l-2-4 md-4 c-6">
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
                  2.300.000<span className="align-top text-[12px]"> VNĐ</span>
                </span>
              </div>
            </div>
            <div className="col l-2-4 md-4 c-6">
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
                  2.300.000<span className="align-top text-[12px]"> VNĐ</span>
                </span>
              </div>
            </div>
            <div className="col l-2-4 md-4 c-6">
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
                  2.300.000<span className="align-top text-[12px]"> VNĐ</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}

export default Home