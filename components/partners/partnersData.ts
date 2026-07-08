export interface Partner {
  id: string;
  name: string;
  logo: string;
  website: string;
}

export const partners: Partner[] = [
  {
    id: "tdau",
    name: "TDAU",
    logo: "/images/partners/tdau.png",
    website: "https://tdau.uz",
  },
  {
    id: "youth-union",
    name: "TDAU Youth Union",
    logo: "/images/partners/yoshlar.png",
    website:
      "https://www.instagram.com/tdauyoshlarittifoqi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    id: "zara",
    name: "Plant Protection Faculty",
    logo: "/images/partners/zara.png",
    website: "https://www.instagram.com/tdau_zara?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
];