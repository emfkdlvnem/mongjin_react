import { useState } from "react";
import { Link } from "react-router-dom";

// import { navData } from "@/data/navData";

// image
import logoImage from "@/assets/images/logo.png";

const NavMenu = () => {
  const navData = [
    {
      key: "about",
      title: "Brand Story",
      path: "/about",
      children: [
        { name: "Philosophy", path: "/about/philosophy" },
        { name: "Proud of Sogang", path: "/about/proud" },
        { name: "SLP NEWS", path: "/about/news" },
      ],
    },
    {
      key: "curriculum",
      title: "Curriculum",
      path: "/curriculum",
      children: [
        { name: "커리큘럼 로드맵", path: "/curriculum/loadmap" },
        { name: "SLP 프로그램", path: "/curriculum/program" },
        { name: "이러닝 프로그램", path: "/curriculum/elearning" },
      ],
    },
    {
      key: "school",
      title: "학당 찾기",
      path: "/searchSchool",
    },
    {
      key: "admission",
      title: "입학 안내",
      path: "/admission",
      children: [
        { name: "입학 절차", path: "/admission/procedure" },
        { name: "상담예약", path: "/admission/consultation" },
      ],
    },
    {
      key: "franchise",
      title: "가맹 문의",
      path: "/franchise",
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(null);

  return (
    <div
      className="relative"
      onMouseLeave={() => {
        setSubOpen(null);
        setMenuOpen(false);
      }}
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between h-[80px]">
        {/* Main Logo */}
        <h1>
          <Link to="/">
            <img src={logoImage} className="w-[96px] h-[34px]" alt="SLP 로고" />
          </Link>
        </h1>

        {/* 1 depth menu */}
        <nav>
          <ul className="flex items-center gap-[20px]">
            {navData.map((menu) => (
              <li
                key={menu.key}
                className="w-[180px] h-[80px] flex items-center justify-center shrink-0"
                onMouseEnter={() => setSubOpen(menu.key)}
              >
                <p className="text-nanum-body-4_2 cursor-pointer hover:text-[var(--color-main-primary-100)] hover:font-extrabold">
                  {menu.title}
                </p>
              </li>
            ))}
            {/* <li
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
            </li> */}
          </ul>
        </nav>

        {/* 햄버거 버튼 */}
        <button
          className="text-3xl w-[35px] cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* ========================================================== */}

      {/* 2depth 메뉴 */}
      {subOpen && (
        <div className="absolute left-0 top-[80px] w-full bg-gray-100">
          <div className="max-w-[1280px] mx-auto h-[200px] flex gap-[20px] py-6">
            {navData.map((menu) => (
              <div key={menu.key} className="w-[180px] flex flex-col shrink-0">
                {menu.children ? (
                  menu.children.map((child) => (
                    <div
                      key={child.path}
                      className="w-[180px] h-[56px] text-center"
                    >
                      <Link
                        to={child.path}
                        className="hover:text-[var(--color-main-primary-100)] hover:font-extrabold"
                      >
                        {child.name}
                      </Link>
                    </div>
                  ))
                ) : (
                  /* children 없는 메뉴 자리 유지 */
                  <div className="w-[180px]" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      {/* <div className="absolute left-0 top-[80px] w-full bg-white  transition-all duration-300">
        <div
          className="max-w-[1280px] mx-auto h-[200px] flex gap-10 py-6"
          onMouseLeave={() => setSubOpen(null)}
        >
          {subOpen === "about" && (
            <div className="w-[180px] flex flex-col text-center">
              <Link className="w-[180px] h-[56px]" to="/about/philosophy">
                Philosophy
              </Link>
              <Link className="w-[180px] h-[56px]" to="/about/proud">
                Proud of Sogang
              </Link>
              <Link className="w-[180px] h-[56px]" to="/about/news">
                SLP NEWS
              </Link>
            </div>
          )}

          {subOpen === "curriculum" && (
            <div className="w-[180px] flex flex-col text-center">
              <Link className="w-[180px] h-[56px]" to="/curriculum/loadmap">
                커리큘럼 로드맵
              </Link>
              <Link className="w-[180px] h-[56px]" to="/curriculum/program">
                SLP 프로그램
              </Link>
              <Link className="w-[180px] h-[56px]" to="/curriculum/elearning">
                이러닝 프로그램
              </Link>
            </div>
          )}

          {subOpen === "admission" && (
            <div className="w-[180px] flex flex-col text-center">
              <Link className="w-[180px] h-[56px]" to="/admission/procedure">
                입학 절차
              </Link>
              <Link className="w-[180px] h-[56px]" to="/admission/consultation">
                상담예약
              </Link>
            </div>
          )}
        </div>
      </div> */}

      {/* ========================================================== */}

      {/* 햄버거 전체 메뉴 */}
      <div
        className="relative"
        onMouseLeave={() => {
          setMenuOpen(false);
        }}
      >
        <div
          className={`absolute left-0 top-0 w-full bg-gray-100 
        transition-all duration-300 overflow-hidden
        ${menuOpen ? "max-h-[600px]" : "max-h-0"}`}
        >
          {/* <div className="flex justify-center gap-6 py-10 text-black">
            <div className="flex flex-col items-center gap-4">
              <Link to="/about">Brand Story</Link>
              <Link to="/about/philosophy">Philosophy</Link>
              <Link to="/about/proud">Proud of Sogang</Link>
              <Link to="/about/news">SLP NEWS</Link>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Link to="/curriculum">Curriculum</Link>
              <Link to="/curriculum/loadmap">커리큘럼 로드맵</Link>
              <Link to="/curriculum/program">SLP 프로그램</Link>
              <Link to="/curriculum/elearning">이러닝 프로그램</Link>
            </div>

            <div>
              <Link to="/search_school">학당 찾기</Link>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Link to="/admission">입학 안내</Link>
              <Link to="/admission/procedure">입학 절차</Link>
              <Link to="/admission/consultation">상담예약</Link>
            </div>

            <div>
              <Link to="/franchise">가맹문의</Link>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
