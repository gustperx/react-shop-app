import { Alert } from "../../components/ui";
import { TableList } from "../../components/language";
import { useLanguage } from "../../hooks";

export const LanguagePage = () => {
  const { languages, errorMessage } = useLanguage();

  return (
    <>
      {errorMessage ? <Alert message={errorMessage} alert="alert-error" /> : ""}

      <TableList languages={languages} />
    </>
  );
};
