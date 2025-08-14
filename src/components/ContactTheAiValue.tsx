"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Lang = "vi" | "en";

export default function ContactTheAiValue({ defaultLang = "vi" }: { defaultLang?: Lang }) {
  const [lang, setLang] = useState<Lang>(defaultLang);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("theaivalue_lang") as Lang | null;
      if (saved === "vi" || saved === "en") setLang(saved);
    } catch {}
  }, []);

  const changeLang = (l: Lang) => {
    setLang(l);
    try { window.localStorage.setItem("theaivalue_lang", l); } catch {}
  };

  const copy = {
    vi: {
      backHome: "Về trang chủ",
      title: "Liên hệ TheAiValue",
      subtitle:
        "Chúng tôi sẵn sàng trao đổi và tư vấn giải pháp AI phù hợp nhất cho nhu cầu của bạn.",
      infoTitle: "Thông tin liên hệ",
      address: "Hà Nội, Việt Nam",
      email: "pdchinh@gmail.com",
      phone: "+84 903 287 772",
      servicesTitle: "Dịch vụ tư vấn",
      services: [
        "Tư vấn chiến lược AI/CNTT phù hợp từng giai đoạn",
        "Ứng dụng AI vào vận hành & trải nghiệm khách hàng",
        "Thiết kế lộ trình dữ liệu & tri thức (RAG, KB)",
        "Đánh giá, POC và triển khai Chatbot/Assistant",
      ],
      ctaText: "Liên hệ ngay để nhận tư vấn miễn phí",
      ctaEmail: "Gửi email",
      ctaCall: "Gọi điện",
    },
    en: {
      backHome: "Back to home",
      title: "Contact TheAiValue",
      subtitle:
        "We’re ready to discuss and provide the most suitable AI solution for your needs.",
      infoTitle: "Contact information",
      address: "Hanoi, Vietnam",
      email: "pdchinh@gmail.com",
      phone: "+84 903 287 772",
      servicesTitle: "Advisory services",
      services: [
        "AI/IT strategy tailored to each stage",
        "Applying AI to operations & customer experience",
        "Data & knowledge roadmap (RAG, KB)",
        "Evaluation, POC and deployment of Chatbots/Assistants",
      ],
      ctaText: "Get in touch now for a free consultation",
      ctaEmail: "Send Email",
      ctaCall: "Call us",
    },
  } as const;

  const t = copy[lang];

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      {/* Accent background */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-indigo-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />

      {/* Back home */}
      <div className="absolute left-4 top-4 z-20">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs sm:text-sm text-white/80 ring-1 ring-white/5 hover:border-white/20 hover:text-white hover:ring-white/10 transition"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>{t.backHome}</span>
        </Link>
      </div>

      {/* Lang toggle */}
      <div className="absolute right-4 top-4 z-20">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 ring-1 ring-white/10 backdrop-blur">
          <button
            onClick={() => changeLang("vi")}
            className={`rounded-full px-4 py-1.5 text-[13px] transition ${
              lang === "vi" ? "bg-white text-slate-900" : "text-white/80 hover:text-white"
            }`}
          >
            VI
          </button>
          <button
            onClick={() => changeLang("en")}
            className={`rounded-full px-4 py-1.5 text-[13px] transition ${
              lang === "en" ? "bg-white text-slate-900" : "text-white/80 hover:text-white"
            }`}
          >
            EN
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-6 pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/brand/theaivalue_logo_horizontal_dark.svg"
            alt="TheAiValue"
            width={280}
            height={75}
            priority
            className="h-auto w-[200px] sm:w-[240px] lg:w-[280px]"
          />
        </div>

        {/* Heading */}
        <div className="mt-8 text-center">
          <h1 className="text-3xl font-semibold sm:text-4xl">{t.title}</h1>
          <p className="mt-3 text-white/80">{t.subtitle}</p>
        </div>

        {/* Services + Contact info */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Services */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/5">
            <div className="mb-3 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300" />
            <h2 className="text-lg font-medium">{t.servicesTitle}</h2>
            <ul className="mt-3 space-y-2 text-white/80">
              {t.services.map((s, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/5">
            <div className="mb-3 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300" />
            <h2 className="text-lg font-medium">{t.infoTitle}</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div>
                <div className="text-sm font-medium text-white/60">📍 Address</div>
                <div className="mt-1 text-white">{t.address}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-white/60">✉ Email</div>
                <div className="mt-1">
                  <a href={`mailto:${t.email}`} className="text-white hover:underline">
                    {t.email}
                  </a>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-white/60">📞 Phone</div>
                <div className="mt-1">
                  <a href={`tel:${t.phone}`} className="text-white hover:underline">
                    {t.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-white/90">{t.ctaText}</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${t.email}`}
              className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-900 ring-1 ring-white/5 shadow-md hover:-translate-y-0.5 hover:shadow-lg hover:ring-white/10 transition"
            >
              {t.ctaEmail}
            </a>
            <a
              href={`tel:${t.phone}`}
              className="rounded-2xl px-5 py-3 text-sm font-medium text-white/90 ring-1 ring-white/20 hover:text-white hover:ring-white/40 transition"
            >
              {t.ctaCall}
            </a>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-white/50">
          TheAiValue — {lang === "vi" ? "Biến AI thành giá trị thực sự" : "Turning AI into Real Value"}
        </p>
      </div>
    </section>
  );
}
