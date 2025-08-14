"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Lang = "vi" | "en";

export default function HeroTheAiValue({ defaultLang = "vi" }: { defaultLang?: Lang }) {
  const [lang, setLang] = useState<Lang>(defaultLang);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("theaivalue_lang") as Lang | null;
      if (saved === "vi" || saved === "en") setLang(saved);
    } catch {}
  }, []);

  const changeLang = (l: Lang) => {
    setLang(l);
    try {
      window.localStorage.setItem("theaivalue_lang", l);
    } catch {}
  };

  const copy = {
    vi: {
      title: "TheAiValue — Biến AI thành giá trị thực sự",
      subtitle:
        "Thiết kế, triển khai và vận hành các giải pháp AI mang lại giá trị rõ ràng, bền vững cho tổ chức và cá nhân.",
      slogan:
        "Giải pháp AI tiên tiến + am hiểu thực tiễn — từ cá nhân tới tập đoàn lớn.",
      primary: "Bắt đầu tư vấn",
      secondary: "Xem giải pháp",
      tertiary: "Case study",
      highlights: [
        "Giải pháp AI cho mọi quy mô",
        "Tích hợp nhanh chóng, dễ mở rộng",
        "Tri thức doanh nghiệp + công nghệ tiên tiến",
        "Đồng hành lâu dài, tối ưu liên tục",
      ],
    },
    en: {
      title: "TheAiValue — Turning AI into Real Value",
      subtitle:
        "We design, deploy, and operate AI solutions that deliver clear, sustainable value for organizations and individuals.",
      slogan:
        "Cutting-edge AI + practical insight — from individuals to large enterprises.",
      primary: "Get a consult",
      secondary: "Explore solutions",
      tertiary: "Case studies",
      highlights: [
        "AI solutions for all scales",
        "Fast integration & easy to scale",
        "Enterprise knowledge + cutting-edge tech",
        "Long-term partnership & continuous optimization",
      ],
    },
  } as const;

  const t = copy[lang];

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      {/* Accent blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-indigo-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />

      {/* Lang toggle */}
      <div className="absolute right-4 top-4 z-20">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 shadow-sm ring-1 ring-white/10 backdrop-blur">
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

      {/* Logo */}
      <div className="pt-20 sm:pt-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex justify-center">
            <Image
              src="/brand/theaivalue_logo_horizontal_dark.svg"
              alt="TheAiValue"
              width={320}
              height={86}
              priority
              className="h-auto w-[220px] sm:w-[260px] lg:w-[320px]"
            />
          </div>

          {/* Headline */}
          <div className="mt-8 text-center">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl drop-shadow-[0_1px_0_rgba(0,0,0,0.25)]">
              {t.title}
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-white/80">{t.subtitle}</p>
            {/* Slogan */}
            <p className="mx-auto mt-2 max-w-2xl text-sm italic text-cyan-300">{t.slogan}</p>

            {/* Menu Buttons */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-900 ring-1 ring-white/5 shadow-md hover:-translate-y-0.5 hover:shadow-lg hover:ring-white/10 transition"
              >
                {t.primary}
              </Link>
              <Link
                href="/solutions"
                className="rounded-2xl px-5 py-3 text-sm font-medium text-white/90 ring-1 ring-white/20 hover:text-white hover:ring-white/40 transition"
              >
                {t.secondary}
              </Link>
              <Link
                href="/cases"
                className="rounded-2xl px-5 py-3 text-sm font-medium text-white/90 ring-1 ring-white/20 hover:text-white hover:ring-white/40 transition"
              >
                {t.tertiary}
              </Link>
            </div>

            {/* Highlights */}
            <div className="mt-26 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {t.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3 ring-1 ring-white/5 shadow-sm hover:border-white/20 transition"
                >
                  <span className="inline-block h-3 w-3 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300 flex-shrink-0" />
                  <span className="text-sm text-white/80">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom padding */}
      <div className="pb-16 sm:pb-20" />
    </section>
  );
}
