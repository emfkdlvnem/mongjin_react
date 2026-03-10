import { useHome } from "@/pages/home/hooks/useHome";

export const Home = () => {
  const { data, action, ref } = useHome();

  return <div data-page="Home" className=""></div>;
};
