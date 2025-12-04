// Hammasini uzbekcha qilish ilngliz tilidagilarni
import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "Men haqimda",
  },
  {
    id: "work",
    title: "Loyihalarim",
  },
  {
    id: "contact",
    title: "Bog'lanish",
  },
];

const services: TService[] = [
  {
    title: "Web Dasturchi",
    icon: web,
  },
  {
    title: "Telegram Bot Dasturchisi",
    icon: mobile,
  },
  {
    title: "Backend Dasturchi",
    icon: backend,
  },
  {
    title: "AI Dasturchi",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Backend Dasturchi",
    companyName: "IT Park Zomin",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2024 - Hozirgi vaqtgacha",
    points: [
       "Python va tegishli backend texnologiyalar yordamida server va API-larni ishlab chiqish va qo‘llab-quvvatlash.",
        "Ma’lumotlar bazalari (MySQL, PostgreSQL, MongoDB) bilan ishlash va ularni optimallashtirish.",
        "Server tomonidagi logika, autentifikatsiya va avtorizatsiya jarayonlarini yaratish va boshqarish.",
        "Kodlarni tekshirishda ishtirok etish, unit test yozish va jamoaga konstruktiv fikr-mulohaza berish."
    ],
  },
  {
    title: "Web Dasturchi",
    companyName: "Mohirdev",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aprel 2025 - Hozirgi vaqtgacha",
    points: [
      "Web ilovalarini React.js va boshqa tegishli texnologiyalar yordamida ishlab chiqish va qo‘llab-quvvatlash.",
      "Dizaynerlar, mahsulot menejerlari va boshqa dasturchilar bilan birgalikda yuqori sifatli mahsulotlar yaratish uchun hamkorlik qilish.",
      "Moslashuvchan dizaynni amalga oshirish va turli brauzerlar bilan moslikni ta'minlash.",
      "Kodlarni ko'rib chiqishda ishtirok etish va boshqa dasturchilarga konstruktiv fikr-mulohaza berish.",
    ],
  },
  {
    title: "Telegram Bot Dasturchi",
    companyName: "BotFather",
    icon: shopify,
    iconBg: "#383E56",
    date: "Yanvar 2022 - Hozirgi vaqtgacha",
    points: [
      "Telegram botlarini ishlab chiqish va qo‘llab-quvvatlash.",
      "Foydalanuvchi tajribasini yaxshilash uchun bot interfeysini loyihalash.",
      "Botning ishlashini ta'minlash uchun server va API-larni integratsiya qilish.",
      "Kodlarni ko'rib chiqishda ishtirok etish va boshqa dasturchilarga konstruktiv fikr-mulohaza berish.",
    ],
  },
  {
    title: "AI Dasturchi",
    companyName: "ChatGPT",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Yanvar 2023 - Hozirgi vaqtgacha",
    points: [
      "Sun'iy intellekt va mashinani o'rganish modellarini ishlab chiqish va qo‘llab-quvvatlash.",
      "AI modellarini samarali ishlashi uchun optimallashtirish va sozlash.",
      "AI modellarini turli ilovalarga integratsiya qilish.",
      "Katta hajmdagi ma'lumotlarni tahlil qilish va modellarni o'qitish uchun algoritmlarni yaratish.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Bu loyiha bizning jamoamiz uchun juda muhim edi va ChatGPT bot bizga har tomonlama yordam berdi.",
    name: "Rasul Karimov",
    designation: "Frontend Dasturchi",
    company: "rasuldev",
    image: "https://avatars.mds.yandex.net/i?id=c4fe4f328f4a7635aeb73aa4d5d746ca_l-4897119-images-thumbs&ref=rim&n=13&w=720&h=720",
  },
  {
    testimonial:
      "ChatGPT bot bilan ishlash juda yoqimli va samarali bo'ldi. U har doim o'z vaqtida yordam berdi va bizning barcha ehtiyojlarimizni qondirdi.",
    name: "Aliya Tursunova",
    designation: "Loyiha Menejeri",
    company: "Startup XYZ",
    image: "https://topadvisor.biz/storage/uploads/gMvm7ISv20BIHkBOCbdxetURgGGVB9DvEed8ufAz.png",
  },
  {
    testimonial:
      "Jarvis bu juda zo'r ovozli yordamchi! U mening ish jarayonimni sezilarli darajada yaxshiladi",
    name: "Sardor Islomov",
    designation: "Yosh Dasturchi",
    company: "itsardor",
    image: "https://sun1-90.userapi.com/s/v1/ig2/vUouRrFii3jZundlYhLwnsT26S2bd4LYWFqSw4ddv1dtJadN4Suat0utHqE2wGeUgG_1Bq-dufpQL0wCEV0074JF.jpg?quality=95&crop=200,167,720,720&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720&ava=1&cs=200x200",
  },
];

const projects: TProject[] = [
  {
    name: "ChatGPT 5_bot",
    description:
      "Bu bot ChatGPT 5 modeliga asoslangan bo'lib, foydalanuvchilarga tabiiy tilni tushunish va javob berish imkonini beradi. U turli sohalarda, jumladan mijozlarga xizmat ko'rsatish, kontent yaratish va shaxsiy yordam kabi vazifalarni bajarishda yordam berishi mumkin.",
    tags: [
      {
        name: "aiogram",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://t.me/Uz_ChatGPT_AI_bot",
  },
  {
    name: "Jarvis Ovizli Yordamchi",
    description:
      "Jarvis - bu ovozli yordamchi dastur bo'lib, foydalanuvchilarga kundalik vazifalarni bajarishda yordam beradi. U ovozli buyruqlarni tushunish va javob berish qobiliyatiga ega bo'lib, shaxsiy yordamchi sifatida ishlaydi.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pyttsx3",
        color: "green-text-gradient",
      },
      {
        name: "tts",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Rassom AI_Bot",
    description:
      "Rassom AI_Bot - bu foydalanuvchilarga matnli tavsiflar asosida tasvirlar yaratishga imkon beruvchi Telegram botidir. U ilg'or sun'iy intellekt modellaridan foydalanib, foydalanuvchilarning ijodiy g'oyalarini jonli tasvirlarga aylantiradi.",
    tags: [
      {
        name: "aiogram",
        color: "blue-text-gradient",
      },
      {
        name: "telebot",
        color: "green-text-gradient",
      },
      {
        name: "infip",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://t.me/Rassom_Chizadigan_AI_bot",
  },
];

export { services, technologies, experiences, testimonials, projects };
