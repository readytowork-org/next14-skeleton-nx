
import {useTranslations} from 'next-intl';
import React from "react";
export default function Index() {
   const t = useTranslations('Index');
  return <div>
    <div>{t("title")}</div>
  </div>;
}
