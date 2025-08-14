"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Lang = "vi" | "en";

export default function CasesTheAiValue({ defaultLang = "vi" }: { defaultLang?: Lang }) {
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
      title: "Case study — Hỗ trợ khách hàng bằng Chatbot TheAiValue",
      subtitle:
        "Trợ lý AI 24/7 đặt trên website và các kênh chat, trả lời dựa vào tài liệu/FAQ của doanh nghiệp, chuyển người thật khi cần và đo được hiệu quả.",
      backHome: "Về trang chủ",
      sections: [
        {
          h: "Bối cảnh & mục tiêu",
          items: [
            "Nhiều câu hỏi lặp lại, nhân sự trả lời tốn thời gian và không đồng đều.",
            "Tài liệu/FAQ rải rác, khách khó tự tìm; thiếu số liệu để biết khách đang cần gì.",
            "Mục tiêu: giảm tải cho CSKH, nâng trải nghiệm, đo được tác động thực tế.",
          ],
        },
        {
          h: "Cách tiếp cận",
          items: [
            "Khởi động nhanh: xác định mục tiêu đo lường (ví dụ: tỉ lệ tự phục vụ, thời gian phản hồi).",
            "Sắp xếp tri thức: gom tài liệu, hướng dẫn, chính sách vào một nơi dễ dùng.",
            "Thử nghiệm nhỏ: chạy pilot trên 1–2 nhóm dịch vụ trước khi nhân rộng.",
          ],
        },
        {
          h: "Giải pháp",
          items: [
            "Chatbot TheAiValue gắn vào website hoặc kênh chat bằng 1 đoạn mã đơn giản.",
            "Trả lời dựa trên tài liệu đáng tin cậy của doanh nghiệp; chỉ trong phạm vi cho phép.",
            "Chuyển người thật khi cần: tạo ticket hoặc gửi email/CRM để xử lý tiếp.",
            "Bảng theo dõi: chủ đề khách quan tâm, mức hài lòng, câu hỏi chưa được phủ.",
          ],
        },
        {
          h: "Tích hợp & vận hành",
          items: [
            "Nguồn nội dung: PDF/DOCX/URL, kho FAQ; có lịch cập nhật định kỳ.",
            "Kết nối hệ thống sẵn có: CRM/Helpdesk, email gateway; phân quyền theo vai trò.",
            "Triển khai linh hoạt: hạ tầng đám mây riêng hoặc theo yêu cầu doanh nghiệp.",
            "Theo dõi chất lượng: xem phản hồi và bổ sung nội dung để ngày càng tốt hơn.",
          ],
        },
      ],
      metricsTitle: "Kết quả (minh hoạ)",
      metricsNote: "*Số liệu minh hoạ cho mục tiêu đo lường.",
      metrics: [
        { k: "Tỉ lệ tự phục vụ", v: "+30–50%" },
        { k: "Thời gian phản hồi", v: "↓ 60%" },
        { k: "Mức hài lòng (CSAT)", v: "+0.3–0.5 điểm" },
      ],
      embedTitle: "Đoạn mã nhúng (ví dụ)",
      embed:
        `<script async src="https://cdn.theaivalue.example/widget.js" data-bot-id="YOUR_BOT_ID"></script>`,
      cta1: "Liên hệ tư vấn",
      cta2: "Xem giải pháp Chatbot",
      footer: "TheAiValue — Biến AI thành giá trị thực sự",
    },
    en: {
      title: "Case study — Customer support with TheAiValue Chatbot",
      subtitle:
        "A 24/7 AI assistant on your website and chat channels, answering from your docs/FAQs, handing over to humans when needed, with measurable outcomes.",
      backHome: "Back to home",
      sections: [
        {
          h: "Context & goals",
          items: [
            "High volume of repetitive questions; agents spend time with uneven responses.",
            "Docs/FAQs are scattered; customers struggle to self-serve; little insight into real needs.",
            "Goals: reduce workload, improve experience, and measure real impact.",
          ],
        },
        {
          h: "Approach",
          items: [
            "Quick start: define metrics (e.g., self‑service rate, time to answer).",
            "Organize knowledge: consolidate guides, FAQs, and policies in one place.",
            "Small pilot: start with 1–2 service groups before scaling out.",
          ],
        },
        {
          h: "Solution",
          items: [
            "TheAiValue chatbot embedded on the website or chat channels with a simple snippet.",
            "Answers are grounded in your trusted company content and kept within allowed scope.",
            "Human handover when needed: create tickets or route to email/CRM.",
            "Dashboard: trending topics, satisfaction, and unanswered questions.",
          ],
        },
        {
          h: "Integration & operations",
          items: [
            "Content sources: PDF/DOCX/URLs, FAQ knowledge base; scheduled refresh.",
            "Connect existing systems: CRM/Helpdesk, email gateway; role‑based access.",
            "Flexible deployment: private cloud or as your IT requires.",
            "Quality tracking: review responses and enrich content over time.",
          ],
        },
      ],
      metricsTitle: "Outcomes (illustrative)",
      metricsNote: "*Illustrative numbers for measurement goals.",
      metrics: [
        { k: "Self‑service rate", v: "+30–50%" },
        { k: "Time to answer", v: "↓ 60%" },
        { k: "CSAT / satisfaction", v: "+0.3–0.5 pt" },
      ],
      embedTitle: "Embed snippet (example)",
      embed:
        `<script async src="https://cdn.theaivalue.example/widget.js" data-bot-id="YOUR_BOT_ID"></script>`,
      cta1: "Talk to us",
      cta2: "See Chatbot solution",
      footer: "TheAiValue — Turning AI into Real Value",
    },
  } as const;

  const t = copy[lang];

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      {/* Accent background */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-indigo-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />

      {/* BACK HOME */}
      <div className="absolute left-4 top-4 z-20">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs sm:text-sm text-white/80 ring-1 ring-white/5 hover:border-white/20 hover:text-white hover:ring-white/10 transition"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>{t.backHome}</span>
        </Link>
      </div>

      {/* LANG TOGGLE */}
      <div className="absolute right-4 top-4 z-20">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 shadow-sm ring-1 ring-white/10 backdrop-blur">
          <button
            onClick={() => changeLang("vi")}
            className={`rounded-full px-4 py-1.5 text-[13px] transition ${
              lang === "vi" ? "bg-white text-slate-900" : "text-white/80 hover:text-white"
            }`}
            aria-pressed={lang === "vi"}
          >
            VI
          </button>
          <button
            onClick={() => changeLang("en")}
            className={`rounded-full px-4 py-1.5 text-[13px] transition ${
              lang === "en" ? "bg-white text-slate-900" : "text-white/80 hover:text-white"
            }`}
            aria-pressed={lang === "en"}
          >
            EN
          </button>
        </div>
      </div>

      {/* WORDMARK */}
      <div className="absolute inset-x-0 top-6 z-10 flex justify-center">
        <Image
          src="/brand/theaivalue_logo_horizontal_dark.svg"
          alt="TheAiValue"
          width={320}
          height={86}
          priority
          className="h-auto w-[220px] sm:w-[260px] lg:w-[320px]"
        />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl drop-shadow-[0_1px_0_rgba(0,0,0,0.25)]">
            {t.title}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-white/80">{t.subtitle}</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-900 ring-1 ring-white/5 shadow/50 shadow-md hover:-translate-y-0.5 hover:shadow-lg hover:ring-white/10 transition"
            >
              {t.cta1}
            </Link>
            <Link
              href="/solutions"
              className="rounded-2xl px-5 py-3 text-sm font-medium text-white/90 ring-1 ring-white/20 hover:text-white hover:ring-white/40 transition"
            >
              {t.cta2}
            </Link>
          </div>
        </div>

        {/* Sections */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {t.sections.slice(0, 2).map((b, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/5 shadow-xl shadow-indigo-950/10 hover:border-white/20 transition"
            >
              <div className="mb-4 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300" />
              <h2 className="text-lg font-medium">{b.h}</h2>
              <ul className="mt-4 space-y-2 text-white/80">
                {b.items.map((it, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {t.sections.slice(2).map((b, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/5 shadow-xl shadow-indigo-950/10 hover:border-white/20 transition"
            >
              <div className="mb-4 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300" />
              <h2 className="text-lg font-medium">{b.h}</h2>
              <ul className="mt-4 space-y-2 text-white/80">
                {b.items.map((it, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/5">
          <div className="mb-4 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300" />
          <h2 className="text-lg font-medium">{t.metricsTitle}</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {t.metrics.map((m, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-black/20 p-4 text-center ring-1 ring-white/5 hover:border-white/20 transition"
              >
                <div className="text-2xl font-semibold bg-gradient-to-r from-indigo-300 to-cyan-200 bg-clip-text text-transparent">
                  {m.v}
                </div>
                <div className="mt-1 text-sm text-white/80">{m.k}</div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-white/50">{t.metricsNote}</p>
        </div>

        {/* Footer */}
        <p className="mt-10 text-center text-sm text-white/50">{t.footer}</p>

      </div>
    </section>
  );
}
