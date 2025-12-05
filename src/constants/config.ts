// Hammasini uzbekcha qilish ilngliz tilidagilarni
type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "doniyorbek-coder.uz",
    fullName: "Doniyorbek",
    email: "coderdoniyorbek@mail.com",
  },
  hero: {
    name: "Doniyorbek",
    p: ["Yosh dasturchiman.", "Turli xil web saytlar, platformalar va Telegram botlar ishlab chiqaraman."],
  },
  contact: {
    p: "Aloqa",
    h2: "Bog'lanish",
    form: {
      name: {
        span: "Ismingiz",
        placeholder: "Ismingiz nima?",
      },
      email: { span: "Emailingiz", placeholder: "Emailingiz nima?" },
      message: {
        span: "Xabaringiz",
        placeholder: "Nima demoqchisiz?",
      },
    },
  },
  sections: {
    about: {
      p: "Kirish",
      h2: "Umumiy ma'lumot",
      content: `Men Frontend, Backend va Sun'iy intellekt yo‘nalishlarini chuqur o‘rgangan bo‘lib,
    zamonaviy web texnologiyalarini puxta egallaganman. Frontend dasturlash tillarini,
    xususan Backend va boshqa zamonaviy texnikalarni yaxshi bilaman va ularni amaliy loyihalarda
    samarali qo‘llay olaman.

    Jizzax viloyati Zomin tumanida yashayman va IT Park Zomin filialida tahsil olaman.
    Dasturlashga bo‘lgan qiziqishim erta boshlangan bo‘lib, ustozim Suyunov Husan
    menga katta motivatsiya va to‘g‘ri yo‘l ko‘rsatib kelmoqda. Har kuni yangi bilimlar o‘rganish,
    ulardan real loyihalarda foydalanish va o‘zimni yanada rivojlantirishga intilaman.

    Mening maqsadim — mijozlar g‘oyalarini sifatli, qulay va innovatsion echimlar orqali hayotga tatbiq etish.
    Keling, g‘oyalaringizni birgalikda chinakam loyihaga aylantiraylik!`,
    },
    experience: {
      p: "Hozirgacha nimalar qildim",
      h2: "Ish tajribasi",
    },
    feedbacks: {
      p: "Boshqalar men haqimda nima deyishadi ?",
      h2: "Sharhlar",
    },
    works: {
      p: "Mening ishlarim",
      h2: "Loyihalarim",
      content: `Quyidagi loyihalar mening ko'nikmalarim va tajribamni
    haqiqiy ish misollari orqali namoyish etadi. Har bir loyiha qisqacha
    tavsiflangan bo'lib, kod omborlariga va jonli namoyishlarga havolalar
    o'z ichiga oladi. Bu mening murakkab muammolarni hal qilish, turli
    texnologiyalar bilan ishlash va loyihalarni samarali boshqarish
    qobiliyatimi aks ettiradi.`,
    },
  },
};
