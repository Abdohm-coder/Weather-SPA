import Main from "./components/main";
import Navbar from "./components/navbar";
import { useTranslation } from "react-i18next";
import Footer from "./components/footer";

const App: React.FC = () => {
  const {
    i18n: { language },
  } = useTranslation();
  /* 
    Change in the direction between RTL and LTR depends on the language
    ===================================================================
  */
  const dir = language === "ar" ? "rtl" : "ltr";
  return (
    <section dir={dir}>
      <Navbar />
      <Main />
      <Footer />
    </section>
  );
};

export default App;
