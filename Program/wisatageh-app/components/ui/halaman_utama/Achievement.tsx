import React from 'react'

export default function Achievement() {
  return (
    <section className="bg-primaryColor py-20 text-center">
      <div className="flex flex-col md:flex-row justify-evenly items-center text-black space-y-6 md:space-y-0 select-none">
        <div>
          <h1 className="text-7xl font-bold">32+</h1>
          <p className="text-lg font-bold">Tujuan Perjalanan</p>
        </div>
        <div>
          <h1 className="text-7xl font-bold">83+</h1>
          <p className="text-lg font-bold">Tur Yang Dilakukan</p>
        </div>
        <div>
          <h1 className="text-7xl font-bold">54+</h1>
          <p className="text-lg font-bold">Ulasan Diterima</p>
        </div>
        <div className="text-left">
          <h2 className="text-2xl font-extrabold select-none">
            Jelajahi Perjalanan <br />
            Petualangan <br />
            Bersama WisataGeh
          </h2>
        </div>
      </div>
    </section>
  )
}
