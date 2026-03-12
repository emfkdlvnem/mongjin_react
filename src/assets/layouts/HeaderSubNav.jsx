import { Link } from "react-router-dom";

const HeaderSubNav = ({ subOpen }) => {
  return (
    <div className="absolute top-full left-0 w-full bg-white border-t border-[var(--color-main-gray-700)]">
      <div className="max-w-[1280px] mx-auto py-[24px]">
        {/* 브랜드 스토리 */}
        {subOpen === "about" && (
          <div className="flex flex-col">
            <div className="w-[180px] h-[56px] flex items-center justify-center">
              <Link to="/about/philosophy">
                <span className="text-nanum-body-5_2 cursor-pointer hover:text-[var(--color-main-primary-100)] hover:font-extrabold">
                  Philosophy
                </span>
              </Link>
            </div>
            <div className="w-[180px] h-[56px] flex items-center justify-center">
              <Link to="/about/proud">
                <span className="text-nanum-body-5_2 cursor-pointer hover:text-[var(--color-main-primary-100)] hover:font-extrabold">
                  Proud of Sogang
                </span>
              </Link>
            </div>
            <div className="w-[180px] h-[56px] flex items-center justify-center">
              <Link to="/about/news">
                <span className="text-nanum-body-5_2 cursor-pointer hover:text-[var(--color-main-primary-100)] hover:font-extrabold">
                  SLP NEWS
                </span>
              </Link>
            </div>
          </div>
        )}

        {/* ================================================================= */}

        {/* 커리큘럼 */}
        {subOpen === "curriculum" && (
          <div className="flex flex-col">
            <div className="w-[180px] h-[56px] flex items-center justify-center">
              <Link to="/curriculum/loadmap">
                <span className="text-nanum-body-5_2 cursor-pointer hover:text-[var(--color-main-primary-100)] hover:font-extrabold">
                  커리큘럼 로드맵
                </span>
              </Link>
            </div>
            <div className="w-[180px] h-[56px] flex items-center justify-center">
              <Link to="/curriculum/program">
                <span className="text-nanum-body-5_2 cursor-pointer hover:text-[var(--color-main-primary-100)] hover:font-extrabold">
                  SLP 프로그램
                </span>
              </Link>
            </div>
            <div className="w-[180px] h-[56px] flex items-center justify-center">
              <Link to="/curriculum/elearning">
                <span className="text-nanum-body-5_2 cursor-pointer hover:text-[var(--color-main-primary-100)] hover:font-extrabold">
                  이러닝 프로그램
                </span>
              </Link>
            </div>
          </div>
        )}

        {/* ================================================================= */}

        {/* 입학 안내 */}
        {subOpen === "admission" && (
          <div className="flex flex-col">
            <div className="w-[180px] h-[56px] flex items-center justify-center">
              <Link to="/admission/procedure">
                <span className="text-nanum-body-5_2 cursor-pointer hover:text-[var(--color-main-primary-100)] hover:font-extrabold">
                  입학 절차
                </span>
              </Link>
            </div>
            <div className="w-[180px] h-[56px] flex items-center justify-center">
              <Link to="/admission/consultation">
                <span className="text-nanum-body-5_2 cursor-pointer hover:text-[var(--color-main-primary-100)] hover:font-extrabold">
                  상담예약
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderSubNav;
