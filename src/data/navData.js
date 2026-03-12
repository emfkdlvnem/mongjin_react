export const navData = [
  {
    key: "about",
    name: "Brand Story",
    path: "/about",
    children: [
      { name: "Philosophy", path: "/about/philosophy" },
      { name: "Proud of Sogang", path: "/about/proud" },
      { name: "SLP NEWS", path: "/about/news" },
    ],
  },
  {
    key: "curriculum",
    name: "Curriculum",
    path: "/curriculum",
    children: [
      { name: "커리큘럼 로드맵", path: "/curriculum/loadmap" },
      { name: "SLP 프로그램", path: "/curriculum/program" },
      { name: "이러닝 프로그램", path: "/curriculum/elearning" },
    ],
  },
  {
    key: "school",
    name: "학당 찾기",
    path: "/searchSchool",
  },
  {
    key: "admission",
    name: "입학 안내",
    path: "/admission",
    children: [
      { name: "입학 절차", path: "/admission/procedure" },
      { name: "상담예약", path: "/admission/consultation" },
    ],
  },
  {
    key: "franchise",
    name: "가맹 문의",
    path: "/franchise",
  },
];
