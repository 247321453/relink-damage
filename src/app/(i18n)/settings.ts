export const fallbackLng = "cs";
export const languages = [
  "cs",
  "ct",
  "en",
  "jp",
  "ko",
  "bp",
  "es",
  "fr",
  "ge",
  "it",
];
const languagesConst = [
  "cs",
  "ct",
  "en",
  "jp",
  "ko",
  "bp",
  "es",
  "fr",
  "ge",
  "it",
] as const;
export type Language = (typeof languagesConst)[number];
export const defaultNS = "translation";
export const cookieName = "i18next";

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    // preload: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
    // backend: {
    //   projectId: '01b2e5e8-6243-47d1-b36f-963dbb8bcae3'
    // }
  };
}
