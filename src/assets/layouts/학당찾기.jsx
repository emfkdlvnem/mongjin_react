import { useState } from "react";
import { useNavigate } from "react-router-dom";

const academyData = [
  {
    region: "서울",
    academies: [
      { name: "강남 SLP", path: "/academy/gangnam" },
      { name: "서초 SLP", path: "/academy/seocho" },
      { name: "송파 SLP", path: "/academy/songpa" },
      { name: "목동 SLP", path: "/academy/mokdong" },
    ],
  },
  {
    region: "경기",
    academies: [
      { name: "분당 SLP", path: "/academy/bundang" },
      { name: "수원 SLP", path: "/academy/suwon" },
      { name: "일산 SLP", path: "/academy/ilsan" },
      { name: "판교 SLP", path: "/academy/pangyo" },
    ],
  },
  {
    region: "인천",
    academies: [
      { name: "송도 SLP", path: "/academy/songdo" },
      { name: "청라 SLP", path: "/academy/cheongna" },
    ],
  },
  {
    region: "부산",
    academies: [
      { name: "해운대 SLP", path: "/academy/haeundae" },
      { name: "센텀 SLP", path: "/academy/centum" },
    ],
  },
];

const HeaderSearch = ({ searchOpen, setSearchOpen }) => {
  const [region, setRegion] = useState(""); // 지역 선택
  const [academy, setAcademy] = useState(""); // 학당 선택

  const navigate = useNavigate(); //선택 후 검색 클릭 시 이동

  return (
    // 해당 영역을 벗어나면 팝업이 자동 false 되도록
    <div
      className={`absolute left-0 top-[100px] w-full bg-white transition-all duration-500 overflow-hidden
        flex items-center justify-center
      ${searchOpen ? "h-[200px]" : "h-0"}`}
    >
      <p className="text-black">SLP학당찾기</p>

      <div className="text-black flex items-center gap-[16px] mx-[20px]">
        {/* 지역선택 */}
        <select
          value={region}
          className="flex-shink-0 w-[200px] h-[40px] p-[8px]  outline-none border-b-1  text-[14px] text-[#333]"
          onChange={(e) => {
            setRegion(e.target.value);
            setAcademy("");
          }}
        >
          {!region && (
            <option value="" hidden>
              지역선택
            </option>
          )}

          {academyData.map((item) => (
            <option key={item.region} value={item.region}>
              {item.region}
            </option>
          ))}
        </select>

        {/* SLP선택 */}
        <select
          value={academy}
          className="flex-shirink-0 w-[200px] h-[40px] p-[8px] outline-none border-b-1 text-[14px] text-[#333]"
          onChange={(e) => setAcademy(e.target.value)}
          disabled={!region}
        >
          {!academy && (
            <option value="" hidden>
              SLP선택
            </option>
          )}

          {academyData
            .find((item) => item.region === region)
            ?.academies.map((academy) => (
              <option key={academy.name} value={academy.path}>
                {academy.name}
              </option>
            ))}
        </select>

        {/*  검색 */}
        <button
          className="text-white cursor-pointer w-[100px] h-[40px] bg-[#ab1d22]"
          onClick={() => {
            if (academy) navigate(academy);
            setSearchOpen(false);

            // 상태 초기화하기
            setRegion("");
            setAcademy("");
          }}
        >
          검색
        </button>
      </div>

      {/* 닫기 버튼 */}
      <button
        className="cursor-pointer text-[#333] text-2xl ml-[100px]"
        onClick={() => {
          setSearchOpen(false);
        }}
      >
        ✕
      </button>
    </div>
  );
};

export default HeaderSearch;
