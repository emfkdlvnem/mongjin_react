import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <nav
      className="flex items-center gap-[20px] text-nanum-body-4_2  text-black
       [&>*]:hover:text-[var(--color-main-primary-100)]
[&>*]:hover:font-extrabold"
    >
      <Link
        className="w-[180px] h-[80px] flex items-center justify-center"
        to="/about"
      >
        Brand Story
      </Link>
      <Link
        className="w-[180px] h-[80px] flex items-center justify-center"
        to="/curriculum"
      >
        Curriculum
      </Link>
      <Link
        className="w-[180px] h-[80px] flex items-center justify-center"
        to="/searchSchool"
      >
        학당 찾기
      </Link>
      <Link
        className="w-[180px] h-[80px] flex items-center justify-center"
        to="/admission"
      >
        입학 안내
      </Link>
      <Link
        className="w-[180px] h-[80px] flex items-center justify-center"
        to="/franchise"
      >
        가맹 문의
      </Link>
    </nav>
  );
};

export default HeaderNav;
