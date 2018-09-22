import iEn from "iview/dist/locale/en-US";
import iUk from "iview/dist/locale/uk-UA";
import iRu from "iview/dist/locale/ru-RU";

import ru from "@/locale/ru";
import en from "@/locale/en";
import uk from "@/locale/uk";
import ky from "@/locale/ky";
import kyCyr from "@/locale/ky_cyr";

export const EN = "en";
export const RU = "ru";
export const UK = "uk";
export const KY = "ky";
export const KY_CYR = "ky-CYR";
export const L_KEY = "locale";

export const messages = {
  [EN]: { ...en, ...iEn },
  [RU]: { ...ru, ...iRu },
  [UK]: { ...uk, ...iUk },
  [KY]: { ...ky },
  [KY_CYR]: { ...kyCyr }
};
