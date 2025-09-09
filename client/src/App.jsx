import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-md px-4">
        <div className="flex-1">
          <a className="text-xl font-bold">🍽️ My Restaurant</a>
        </div>
        <div className="flex-none gap-2">
          <a className="btn btn-ghost">เมนู</a>
          <a className="btn btn-ghost">โปรโมชั่น</a>
          <a className="btn btn-ghost">ติดต่อ</a>
        </div>
      </div>

      {/* Hero Section */}
      <div
        className="hero min-h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://source.unsplash.com/1600x900/?restaurant,food)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className="mb-5 text-5xl font-bold">
              ยินดีต้อนรับสู่ร้านอาหารของเรา
            </h1>
            <p className="mb-5">อาหารไทยต้นตำรับ สดใหม่ทุกวัน เสิร์ฟด้วยใจ</p>
            <button className="btn btn-primary">ดูเมนู</button>
          </div>
        </div>
      </div>

      {/* เมนูยอดนิยม */}
      <section className="p-10">
        <h2 className="text-3xl font-bold mb-6 text-center">เมนูแนะนำ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* รายการอาหาร */}
          {[
            {
              name: "ผัดไทย",
              price: 80,
              img: "https://source.unsplash.com/400x300/?padthai",
            },
            {
              name: "ต้มยำกุ้ง",
              price: 120,
              img: "https://source.unsplash.com/400x300/?tomyum",
            },
            {
              name: "ข้าวผัด",
              price: 70,
              img: "https://source.unsplash.com/400x300/?thaifood",
            },
          ].map((item, i) => (
            <div className="card bg-base-100 shadow-xl" key={i}>
              <figure>
                <img src={item.img} alt={item.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>ราคา {item.price} บาท</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-sm btn-primary">สั่งเลย</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ข้อมูลร้าน */}
      <footer className="footer p-10 bg-base-300 text-base-content">
        <div>
          <span className="footer-title">เกี่ยวกับร้าน</span>
          <p>
            เปิดบริการทุกวัน 10:00 - 22:00 น.
            <br /> โทร: 012-345-6789
          </p>
        </div>
        <div>
          <span className="footer-title">ช่องทางติดต่อ</span>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Line</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
