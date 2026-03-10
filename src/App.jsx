import { useState } from 'react';
import './App.css';

// data
import data from './data';
// image
import mainBg from './assets/main_bg.jpg';

// start App()
function App() {
  const [count, setCount] = useState(0);
  let [product] = useState(data);

  return (
    // main 쪽 부모 요소 구조
    <div className="bg-primary-content">
      {/* header */}
      <nav className="flex h-12 items-center  px-5">
        {/* home button */}
        <button className="btn btn-ghost rounded-full bg-amber-200 p-2 cursor-pointer mr-10">
          <span className="text-black">Home</span>
        </button>

        {/* nav bar */}
        <ul className="flex items-center gap-3">
          <li className="bg-neutral btn btn-ghost text-xl">
            <a href="#SLP소개">SLP소개</a>
          </li>

          <li className="bg-neutral btn btn-ghost text-xl">
            <a href="#커리큘럼">커리큘럼</a>
          </li>

          <li className="bg-neutral btn btn-ghost text-xl">
            <a href="#입학안내">입학안내</a>
          </li>

          <li className="bg-neutral btn btn-ghost text-xl">
            <a href="#SLP소식">SLP소식</a>
          </li>
        </ul>
      </nav>

      {/* main bg */}
      <div className="my-5 flex justify-center">
        <img className="w-full" src={mainBg} alt="Main Background" />
      </div>

      {/* product list */}
      <div className="mx-auto px-5">
        <h3 className="text-3xl font-bold mb-5 text-black">Product List</h3>

        <div className="flex justify-center gap-5">
          {product.map((item) => (
            <Product key={item.id} image={item.image} title={item.title} content={item.content} price={item.price} />
          ))}
        </div>
      </div>
    </div>
  );
}
// end App()

function Product(props) {
  return (
    <div className="w-100 border-2 border-amber-900 bg-amber-700 rounded-lg p-4">
      <div className="w-full mb-2">
        <img src={props.image} alt={props.title} />
      </div>

      <h3 className="text-2xl font-extrabold">{props.title}</h3>
      <p className="text-black font-bold">{props.content}</p>
      <p className="text-lg font-bold">${props.price.toLocaleString()}</p>
    </div>
  );
}

export default App;
