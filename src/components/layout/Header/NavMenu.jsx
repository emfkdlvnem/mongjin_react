import { useState } from "react";
import { Link } from "react-router-dom";

// import { navData } from "@/data/navData";
import NavItem from "./NavItem";

// image
import logoImage from "@/assets/images/logo.png";

const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between h-[80px]">
        {/* Main Logo */}
        <h1>
          <Link to="/">
            <img src={logoImage} className="w-[96px] h-[34px]" alt="SLP 로고" />
          </Link>
        </h1>

        {/* 1 depth menu */}
        <nav>
          <ul
            className="flex items-center gap-[20px] 
               "
          >
            <li
              className="w-[180px] h-[80px] flex items-center justify-center shrink-0"
              onMouseEnter={() => setSubOpen("about")}
            >
              <p className="text-nanum-body-4_2 cursor-pointer hover:text-[var(--color-main-primary-100)] hover:font-extrabold">
                Brand Story
              </p>
            </li>
            <li
              className="w-[180px] h-[80px] flex items-center justify-center shrink-0"
              onMouseEnter={() => setSubOpen("curriculum")}
            >
              <p className="text-nanum-body-4_2 cursor-pointer hover:text-[var(--color-main-primary-100)] hover:font-extrabold">
                Curriculum
              </p>
            </li>
            <li
              className="w-[180px] h-[80px] flex items-center justify-center shrink-0"
              onMouseEnter={() => setSubOpen(null)}
            >
              <p className="text-nanum-body-4_2 cursor-pointer hover:text-[var(--color-main-primary-100)] hover:font-extrabold">
                학당 찾기
              </p>
            </li>
            <li
              className="w-[180px] h-[80px] flex items-center justify-center shrink-0"
              onMouseEnter={() => setSubOpen("admission")}
            >
              <p className="text-nanum-body-4_2 cursor-pointer hover:text-[var(--color-main-primary-100)] hover:font-extrabold">
                입학 안내
              </p>
            </li>
            <li
              className="w-[180px] h-[80px] flex items-center justify-center shrink-0"
              onMouseEnter={() => setSubOpen(null)}
            >
              <p className="text-nanum-body-4_2 cursor-pointer hover:text-[var(--color-main-primary-100)] hover:font-extrabold">
                가맹 문의
              </p>
            </li>
          </ul>
        </nav>

        {/* 햄버거 버튼 */}
        <button
          className="text-3xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* 햄버거 전체 메뉴 */}

      <div
        className={`absolute left-0 top-full w-full bg-white shadow-lg z-50
              transition-all duration-300 ease-in-out overflow-hidden
              ${menuOpen ? "max-h-[600px]" : "max-h-0"}`}
      >
        <div className="flex justify-center gap-6 py-10 text-black">
          {/* Brand Story */}
          <div className="flex flex-col items-center gap-4">
            <Link to="/about">Brand Story</Link>
            <Link to="/about/philosophy">Philosophy</Link>
            <Link to="/about/proud">Proud of Sogang</Link>
            <Link to="/about/news">SLP NEWS</Link>
          </div>
          {/* Curriculum */}
          <div className="flex flex-col items-center gap-4">
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
          <div className="flex flex-col items-center gap-4">
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

export default NavMenu;
