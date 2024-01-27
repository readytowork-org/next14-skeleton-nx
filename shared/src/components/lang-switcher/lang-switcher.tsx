"use client"
import {  useTransition } from "react";
import { useRouter,usePathname } from "../../utils";
import { Button } from "../button/button";
import { useLocale } from "next-intl";

/* eslint-disable-next-line */
export interface LangSwitcherProps {}
 const getFlagEmoji = (countryCode: string) =>
    String.fromCodePoint(
      //@ts-expect-error expected
      ...[...countryCode.toUpperCase()].map((x) => 0x1f1a5 + x.charCodeAt())
    )
export function LangSwitcher(props: LangSwitcherProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
    const locale = useLocale();
   function onLangChange(nextLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }
  return (
    <Button btnText= {getFlagEmoji(locale==='ja'?'jp':'gb')} shape={"circle"}
    ghost
    onClick={()=>onLangChange(locale==='ja'?'en':'ja')} disabled={isPending}/>
  );
}
LangSwitcher.displayName="LangSwitcher"
export default LangSwitcher;
