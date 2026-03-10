import { useLogin } from "@/pages/login/hooks/useLogin";

export const Login = () => {
  const { data, action, ref } = useLogin();

  return (
    <div
      data-page="Login"
      className="bg-edu-bg_light-20 flex h-full w-full items-center justify-center"
    >
      <div className="flex min-w-[300px] flex-col items-center gap-[30px] rounded-[20px] border-1 border-[#999] bg-white px-[30px] py-[40px]">
        <p className="text-nanum-headline-3">Login</p>
        <div className="flex w-full flex-col gap-[14px]">
          <input
            type="text"
            placeholder="아이디"
            className="h-[40px] w-full rounded-[10px] border-1 border-[#a0a0a0] px-[10px]"
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="h-[40px] w-full rounded-[10px] border-1 border-[#a0a0a0] px-[10px]"
          />
        </div>
        <button className="h-[42px] w-full rounded-[10px] bg-black font-bold text-white">
          로그인
        </button>
      </div>
    </div>
  );
};
