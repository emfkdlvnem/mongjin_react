import { Link } from "react-router-dom";

const HeaderMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    // 해당 영역을 벗어나면 팝업이 자동 false 되도록
    <div
      className="relative"
      onMouseLeave={() => {
        setMenuOpen(false);
      }}
    >
      {/* 전체 메뉴 */}
      <div
        className={`absolute left-0 top-full w-full bg-white transition-all duration-300 overflow-hidden
                    ${menuOpen ? "max-h-[400px]" : "max-h-0"}`}
      >
        {" "}
        <div className="flex flex-col items-center gap-6 py-10 text-black">
          {/* Brand Story */}
          <div>
            <Link to="/about">Brand Story</Link>
            <Link to="/about/philosophy">Philosophy</Link>
            <Link to="/about/proud">Proud of Sogang</Link>
            <Link to="/about/news">SLP NEWS</Link>
          </div>

          {/* Curriculum */}
          <div>
            <Link to="/curriculum">Curriculum</Link>
            <Link to="/curriculum/loadmap">커리큘럼 로드맵</Link>
            <Link to="/curriculum/program">SLP 프로그램</Link>
            <Link to="/curriculum/elearning">이러닝 프로그램</Link>
          </div>

          {/* 학당 찾기 */}
          <div>
            <Link to="/search_school">학당 찾기</Link>
          </div>

          {/* 입학안내 */}
          <div>
            <Link to="/admission">입학 안내</Link>
            <Link to="/admission/procedure">입학 절차</Link>
            <Link to="/admission/consultation">상담예약</Link>
          </div>

          {/* 가맹문의 */}
          <div>
            <Link to="/franchise">가맹문의</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
