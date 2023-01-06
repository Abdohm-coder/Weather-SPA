import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="max-h-20 h-full w-full p-2 flex items-center justify-center mt-8">
      <span className="text-xl text-accent text-center">
        {t("footer")}{" "}
        <a
          href="https://abderrezak-hadj-mahammed-abdohm-coder.vercel.app/"
          target="_blank"
          rel="noreferrer">
          <strong className="text-black cursor-pointer"> Abdo Hadj Med</strong>
        </a>
      </span>
    </footer>
  );
};

export default Footer;
