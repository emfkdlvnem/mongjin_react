import "./App.css";
import { useState } from "react";

// start App()
function App() {
  const [count, setCount] = useState(0);
  let [blogTitle, setBlogTitle] = useState([
    "콜드브루 맛집",
    "라멘 맛집",
    "디저트 맛집",
  ]);

  let [likes, setLikes] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [changeTitle, setChangeTitle] = useState(0);

  let [inputText, setInputText] = useState("");

  return (
    // main 쪽 부모 요소 구조
    <div className="App">
      {/* title */}
      <div className="flex justify-center items-center w-full h-12 mb-3 bg-black">
        <h2>
          <span className="text-white text-2xl font-extrabold">Mongjins</span>
        </h2>
      </div>

      {/* list */}
      <ul className="mb-5">
        {blogTitle.map(function (a, i) {
          return (
            <li className="py-5 pl-5 border-b border-solid-1 flex flex-col gap-1 items-start">
              {/* list title */}
              <div className="flex items-center gap-1 mb-1">
                <h3
                  className="text-left font-extrabold cursor-pointer"
                  onClick={() => {
                    setModal(true);
                    setChangeTitle(i);
                  }}
                >
                  {a}
                </h3>

                <button
                  className="cursor-pointer"
                  onClick={() => {
                    let copy = [...likes];
                    copy[i]++;
                    setLikes(copy);
                  }}
                >
                  👍
                </button>

                <span>{likes[i]}</span>
              </div>

              {/* list 내용 */}
              <p>내용</p>

              {/* list 상세내용 */}
              <p>상세 내용</p>

              {/* 글수정 버튼 */}
              <button
                className="text-xs bg-[#969393] p-1 rounded cursor-pointer"
                onClick={() => {
                  let copy = [...blogTitle];
                  copy.splice(i, 1);
                  setBlogTitle(copy);
                }}
              >
                삭제
              </button>
            </li>
          );
        })}
      </ul>

      {/*  검색창 */}
      <div className="flex items-center justify-center gap-1">
        <input
          type="text"
          className="border border-solid w-100 h-10 px-2 rounded-2xl"
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />

        <button
          className="cursor-pointer rounded-3xl bg-black text-white h-10 px-2"
          onClick={() => {
            let copy = [...blogTitle];
            copy.unshift(inputText);
            setBlogTitle(copy);
          }}
        >
          <span>글 발행</span>
        </button>
      </div>

      {/* Modal 가져온 영역 > html 안에 삼항 연산자 추가하여 사용하기 true가 아닌 null이면 랜더링 x*/}
      {modal == true ? (
        <Modal blogTitle={blogTitle} changeTitle={changeTitle} />
      ) : null}
    </div>
  );
}
// end App()

// start Modal
function Modal(props) {
  return (
    <div className="bg-[#eee] text-left p-5 rounded-2xl">
      <h4 className="font-extrabold">{props.blogTitle[props.changeTitle]}</h4>
      <p>내용</p>
      <p>상세 내용</p>
    </div>
  );
}

export default App;
