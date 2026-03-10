import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// page 연결 (위치 임시)
import HeaderNav from "./HeaderNav"; // 전체 메뉴바
import HeaderMenu from "./HeaderMenu"; // 전체 메뉴 오픈

// image (위치 임시))
import logoImage from "../images/logo.png";
import snsImage1 from "../images/blog.png";
import snsImage2 from "../images/instagram.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // 전체 메뉴 오픈
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <div
      className="relative"
      onMouseLeave={() => {
        setMenuOpen(false);
      }}
    >
      <header className="bg-white">
        {/* 상단 nav bar */}
        <div className="border-b border-[#F7F7F7]">
          <div className="max-w-[1280px] mx-auto flex items-center justify-end gap-[40px] h-[40px] border-amber-200">
            {/* Login / Join */}
            <div className="flex items-center gap-[16px] text-[14px] font-bold">
              <Link to="/login">로그인</Link>
              <Link to="/join">회원가입</Link>
            </div>

            {/* 외부 사이트 SNS */}
            <div className="flex gap-[8px]">
              <a href="https://www.instagram.com/sogang_slp_official/">
                <img
                  src={snsImage2}
                  className="w-[24px]"
                  alt="Instagram 아이콘"
                />
              </a>
              <a href="https://blog.naver.com/sogang_slp">
                <img
                  src={snsImage1}
                  className="w-[24px]"
                  alt="Instagram 아이콘"
                />
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================== */}

        {/* 하단 nav bar */}
        <div className="max-w-[1280px] mx-auto flex items-center justify-between h-[80px]">
          {/* Main Logo */}
          <h1 className="text-2xl font-bold">
            <Link to="/">
              <img
                src={logoImage}
                className="w-[96px] h-[34px]"
                alt="SLP 로고"
              />
            </Link>
          </h1>

          {/* nav bar */}
          <HeaderNav />

          {/* 전체 메뉴 버튼 */}
          <button
            className="text-black w-[35px] text-3xl cursor-pointer"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>
      {/* ========================================================== */}

      {/* 전체 메뉴 Open > HeaderMenu.jsx */}
      <HeaderMenu menuOpen={menuOpen} />
    </div>
  );
};

export default Header;
