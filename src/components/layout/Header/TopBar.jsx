import { Link } from "react-router-dom";

// image
import snsImage1 from "@/assets/images/blog.png";
import snsImage2 from "@/assets/images/instagram.png";

const TopBar = () => {
  return (
    <div className="border-b border-[var(--color-main-gray-100)]">
      <div className="max-w-[1280px] mx-auto flex items-center justify-end gap-[40px] h-[40px]">
        {/* Login / Join */}
        <div className="flex items-center gap-[16px] text-nanum-caption-1_2">
          <Link to="/login">로그인</Link>
          <Link to="/join">회원가입</Link>
        </div>

        {/* 외부 사이트 SNS */}
        <div className="flex gap-[8px]">
          <a href="https://www.instagram.com/sogang_slp_official/">
            <img src={snsImage2} className="w-[24px]" alt="Instagram 아이콘" />
          </a>
          <a href="https://blog.naver.com/sogang_slp">
            <img src={snsImage1} className="w-[24px]" alt="Blog 아이콘" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
