import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  let post = "강남구청 맛집";
  let [blogTitle, setBlogTitle] = useState([
    "콜드브루 맛집",
    "라멘 맛집",
    "아이스크림 맛집",
  ]);
  let [thumsUp, setThumsUp] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  let [changeTitle, setChangeTitle] = useState(0);

  // useState 변경 요소가 잦은 부분만 사용
  // destructuring 문법
  // let [a, b] = [1, 2];

  // 부모 함수 state에 있는걸 자식 컴포넌트로 전송하려면 props를 사용한다. 부모 > 자식만 가능

  return (
    <div className="App">
      {/* header */}
      <div className="bg-black w-full py-2 mb-2">
        <h2 id="{post}" className="text-white">
          Mongjins
        </h2>
      </div>

      {/* list  a는 배열값이고 i는 배열인덱스 */}
      {blogTitle.map(function (a, i) {
        return (
          <div className="pl-5 py-5 text-left border-b border-solid-1" key={i}>
            <div className="flex items-center gap-1">
              <h3
                className="font-extrabold cursor-pointer"
                onClick={() => {
                  setModal(true);
                  setChangeTitle(i);
                }}
              >
                {/* {blogTitle[i]} */}
                {a}
              </h3>

              <button
                className="cursor-pointer"
                onClick={() => {
                  let copyThumsUp = [...thumsUp];
                  copyThumsUp[i]++;
                  setThumsUp(copyThumsUp);
                }}
              >
                <span>👍</span>
              </button>
              <span>{thumsUp[i]}</span>
            </div>
            <p>26.02.19</p>
          </div>
        );
      })}

      <button
        onClick={() => {
          setChangeTitle(0);
        }}
      ></button>

      {/* modal area */}
      {/* html 중간에 추가되는 삼항연산자 */}
      {/* {조건식 ? 참일 때 실행 할 코드 : 거짓일 때 실행 할 코드} */}
      {modal == true ? (
        <Modal changeTitle={changeTitle} blogTitle={blogTitle} />
      ) : null}
    </div>
  );
}

// function App 바깥 영역의 function에 작성

// 컴포넌트의 장점
// 반복적인 html 축약할때 컴포넌트 사용하기 좋음
// 큰 페이지들
// 자주 변경 되는것들

function Modal(props) {
  return (
    // 병렬 태그 작성 X
    <div className="mt-5 p-5 bg-[#eee] text-left">
      <h4 className="font-extrabold">{props.blogTitle[props.changeTitle]}</h4>
      <p>내용</p>
      <p>상세내용</p>

      <button>글수정</button>
    </div>
  );
}
export default App;
