"use client";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-white dark:bg-darkGunmetal h-screen p-10">
      <p className="text-lightBlue mb-6 text-2xl dark:text-white">
        Monitoring App
      </p>

      <button
        className=" bg-white text-blueViolet dark:bg-darkGunmetal dark:text-white rounded-lg "
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? "Light" : "Dark"}
      </button>
    </div>
  );
}
