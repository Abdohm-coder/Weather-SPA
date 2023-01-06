import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const Navbar: React.FC = () => {
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();

  useEffect(() => {
    /*
      Change the lang attribute at html tag every time the language is changed
      ========================================================================
    */
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  return (
    <nav className="w-full max-h-14 h-14 p-2 flex items-center border-b border-gray-50 shadow">
      <div className="max-w-lg w-full mx-auto flex justify-end items-center">
        <ul className="flex text-gray-700">
          <li
            className={`text-lg mx-2 font-medium cursor-pointer ${
              language === "en" ? "text-pink-700 font-semibold" : ""
            }`}
            onClick={() => changeLanguage("en")}>
            English
          </li>
          <li
            className={`text-lg mx-2 font-medium cursor-pointer ${
              language === "ar" ? "text-pink-700 font-semibold" : ""
            }`}
            onClick={() => changeLanguage("ar")}>
            العربية
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
