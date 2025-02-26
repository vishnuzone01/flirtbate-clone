import { getRequestConfig } from 'next-intl/server';
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // @ts-ignore
  const locale = await cookies()?.get("NEXT_LOCALE")?.value || "en";

  return {
    locale,
    messages: (await import(`../../public/locales/${locale}.json`)).default
  };
});