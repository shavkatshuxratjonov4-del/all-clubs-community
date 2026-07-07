import { News } from "./types";

export const news: News[] = [
  {
    id: "eco-forum-2026",

    title: "2026-yilgi Ekoforum muvaffaqiyatli o'tkazildi",

    excerpt:
      "Eco Club tomonidan tashkil etilgan yillik ekologik forumda 250 dan ortiq talaba ishtirok etdi.",

    content:
      "Forum davomida ekologiya, iqlim o'zgarishi va yashil texnologiyalar haqida mutaxassislar ma'ruza qilishdi.",

    image: "/images/news/eco-forum.jpg",

    club: "Eko-klub",

    author: "Admin",

    publishedAt: "2026-07-05",

    featured: true,

    status: "published",
  },

  {
    id: "travel-chimgan",

    title: "Sayohat klubi Chimyonga tashrif buyurdi",

    excerpt:
      "Talabalar Chimyon tog'larida unutilmas dam olish kunlarini o'tkazishdi.",

    content:
      "Sayohat davomida talabalar tog' sayri, sport o'yinlari va jamoaviy mashg'ulotlarda qatnashishdi.",

    image: "/images/news/travel.jpg",

    club: "Sayohat klubi",

    author: "Admin",

    publishedAt: "2026-07-02",

    featured: false,

    status: "published",
  },

  {
    id: "debate-win",

    title: "Debat klubi chempionlikni qo'lga kiritdi",

    excerpt:
      "TDAU Debat klubi hududiy musobaqada faxrli 1-o'rinni egalladi.",

    content:
      "Musobaqa davomida talabalar yuqori nutq madaniyati va mantiqiy fikrlashi bilan hakamlar e'tiborini qozondi.",

    image: "/images/news/debate.jpg",

    club: "Munozara klubi",

    author: "Admin",

    publishedAt: "2026-06-28",

    featured: false,

    status: "published",
  },
];