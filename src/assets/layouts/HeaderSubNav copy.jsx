import { Link } from "react-router-dom";

const HeaderSubNav = ({ subOpen }) => {
  const subNavData = {
    about: [
      { name: "Philosophy", path: "/about/philosophy" },
      { name: "Proud of Sogang", path: "/about/proud" },
      { name: "SLP NEWS", path: "/about/news" },
    ],
    curriculum: [
      { name: "커리큘럼 로드맵", path: "/curriculum/loadmap" },
      { name: "SLP 프로그램", path: "/curriculum/program" },
      { name: "이러닝 프로그램", path: "/curriculum/elearning" },
    ],
    admission: [
      { name: "입학 절차", path: "/admission/procedure" },
      { name: "상담예약", path: "/admission/consultation" },
    ],
  };

  const subNav = subNavData(subOpen);

  if (!subNav) return null;

  return (
    <div className="absolute top-full left-0 w-full bg-white border-t border-[var(--color-main-gray-700)]">
      <div className="max-w-[1280px] mx-auto py-[24px]">
        <div className="flex flex-col">
          <div className="w-[180px] h-[56px] flex items-center justify-center">
            {subNav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-nanum-body-3 cursor-pointer hover:text-[var(--color-main-primary-100)] hover:font-extrabold"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSubNav;
