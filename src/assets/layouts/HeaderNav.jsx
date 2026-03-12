// import { Link } from "react-router-dom";

const HeaderNav = ({ setSubOpen }) => {
  // const navData = [
  //   { name: "Brand Story", key: "about" },
  //   { name: "Curriculum", key: "curriculum" },
  //   { name: "학당 찾기", key: null },
  //   { name: "입학 안내", key: "admission" },
  //   { name: "가맹 문의", key: null },
  // ];

  return (
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

      {/* <ul className="flex items-center gap-[20px]">
        {navData.map((item, index) => (
          <li
            key={index}
            className="w-[180px] h-[80px] flex items-center justify-center shrink-0"
            onMouseEnter={() => setSubOpen(item.key)}
          >
            <p className="text-nanum-body-4_2 cursor-pointer hover:text-[var(--color-main-primary-100)] hover:font-extrabold">
              {item.name}
            </p>
          </li>
        ))}
      </ul> */}
    </nav>
  );
};

export default HeaderNav;
