import React from 'react'

const Banner = () => {
  return (
    <div className="bg-slate-200 py-3 min-h-[348px]">
      <div className="grids wide">
        <div className="row">
          {/* Slider */}
          <aside className="col l-8 md-12 c-12">
            <img className='h-[320px] w-full' src="https://via.placeholder.com/1000x400" alt="" />
          </aside>
          {/* Posts */}
          <aside className="col l-4 md-0 c-0">
            <img className='h-[320px] w-full' src="https://via.placeholder.com/400x400" alt="" />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Banner