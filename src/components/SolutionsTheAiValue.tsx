"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Lang = "vi" | "en";

type FeatureBase = { title: string; desc: string };
type FeatureWithPoints = FeatureBase & { points: string[] };
type Feature = FeatureBase | FeatureWithPoints;

const hasPoints = (x: Feature): x is FeatureWithPoints =>
  Array.isArray((x as Partial<FeatureWithPoints>).points);

export default function SolutionsTheAiValue({ defaultLang = "vi" }: { defaultLang?: Lang }) {
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
      title: "Giải pháp Chatbot AI của TheAiValue",
      subtitle:
        "Trợ lý AI đa kênh, hiểu ngôn ngữ tự nhiên, kết nối tri thức doanh nghiệp và sẵn sàng hỗ trợ khách hàng 24/7.",
      features: [
        {
          title: "Tích hợp đa kênh",
          desc: "Kết nối chatbot đến mọi nơi khách hàng tương tác với bạn.",
          points: [
            "Website: Đặt chatbot ngay trên trang web, sẵn sàng trò chuyện khi khách truy cập.",
            "Zalo OA: Kết nối Zalo Official Account để hỏi–đáp trong Zalo.",
            "Facebook Messenger: Hoạt động trực tiếp trong Messenger của fanpage.",
            "Kênh khác: Email, ứng dụng nội bộ, cổng thông tin doanh nghiệp.",
          ],
        },
        {
          title: "Hiểu ngôn ngữ tự nhiên",
          desc: "Trò chuyện thân thiện như với nhân viên thật, không cần đúng từ khóa.",
          points: [
            "Nhận diện ý định linh hoạt, hiểu câu hỏi dài/ngắn, chính tả chưa chuẩn.",
            "Hỗ trợ đa ngôn ngữ (Việt, Anh…), phản hồi mạch lạc, dễ hiểu.",
          ],
        },
        {
          title: "Trả lời theo tri thức doanh nghiệp",
          desc: "Luôn trả lời dựa trên nguồn đáng tin cậy của bạn.",
          points: [
            "Kết nối tài liệu/FAQ/hướng dẫn (PDF, DOCX, URL…).",
            "Cập nhật định kỳ; tránh trả lời lỗi thời hoặc sai lệch.",
            "Có thể đính kèm nguồn tham chiếu để tăng độ tin cậy.",
          ],
        },
        {
          title: "Chuyển tiếp cho nhân viên (Handover)",
          desc: "Không để khách hàng bị bỏ rơi khi câu hỏi phức tạp.",
          points: [
            "Tạo ticket về CRM/Helpdesk hoặc gửi email nội bộ.",
            "Chuyển cuộc trò chuyện sang người thật trên kênh phù hợp.",
            "Ghi log hội thoại đầy đủ để xử lý và huấn luyện lại.",
          ],
        },
        {
          title: "Báo cáo & đo lường",
          desc: "Theo dõi hiệu quả rõ ràng để tối ưu liên tục.",
          points: [
            "Số lượng phiên chat, tỉ lệ tự phục vụ, mức hài lòng (CSAT).",
            "Danh sách câu hỏi chưa phủ để bổ sung tri thức.",
            "Báo cáo theo thời gian/kênh/nhóm dịch vụ.",
          ],
        },
        {
          title: "Bảo mật & triển khai linh hoạt",
          desc: "An toàn dữ liệu và linh hoạt về hạ tầng.",
          points: [
            "Lọc PII/thông tin nhạy cảm trước khi phản hồi.",
            "Mã hóa khi truyền và lưu; nhật ký truy cập, phân quyền theo vai trò.",
            "Triển khai trên cloud riêng hoặc hạ tầng của doanh nghiệp.",
          ],
        },
      ],
      cta1: "Liên hệ tư vấn",
      cta2: "Xem Case Study",
    },

    en: {
      backHome: "Back to home",
      title: "TheAiValue AI Chatbot Solution",
      subtitle:
        "An omnichannel AI assistant, fluent in natural language, grounded in your business knowledge, and available 24/7.",
      features: [
        {
          title: "Omnichannel integration",
          desc: "Connect your chatbot to every place customers talk to you.",
          points: [
            "Website: Place the chatbot on your site to greet visitors instantly.",
            "Zalo OA: Integrate with Zalo Official Account for in‑Zalo Q&A.",
            "Facebook Messenger: Works directly in your page’s Messenger.",
            "Other channels: Email, internal apps, company portals.",
          ],
        },
        {
          title: "Understands natural language",
          desc: "Talks like a real staff member — no exact keywords required.",
          points: [
            "Flexible intent recognition; handles long/short queries and typos.",
            "Multilingual (Vietnamese, English…); clear and concise replies.",
          ],
        },
        {
          title: "Answers from your knowledge",
          desc: "Always grounded in your trusted sources.",
          points: [
            "Connect documents/FAQs/guides (PDF, DOCX, URLs…).",
            "Scheduled updates to avoid outdated or incorrect answers.",
            "Optional citations to boost trust and transparency.",
          ],
        },
        {
          title: "Human handover",
          desc: "Never leave customers hanging on hard questions.",
          points: [
            "Create tickets in CRM/Helpdesk or send internal emails.",
            "Escalate the conversation to a human on the right channel.",
            "Full chat logs for follow‑up and retraining.",
          ],
        },
        {
          title: "Reports & analytics",
          desc: "Track outcomes to keep improving.",
          points: [
            "Sessions, self‑service rate, satisfaction (CSAT).",
            "Unanswered questions to enrich your knowledge base.",
            "Breakdowns by time/channel/service group.",
          ],
        },
        {
          title: "Security & flexible deployment",
          desc: "Data safety with infrastructure options.",
          points: [
            "PII/sensitive‑data filtering before responding.",
            "Encryption in transit & at rest; access logging and RBAC.",
            "Deploy on private cloud or your own infrastructure.",
          ],
        },
      ],
      cta1: "Talk to us",
      cta2: "See Case Study",
    },
  } as const;

  const t = copy[lang];

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      {/* Accent */}
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
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 shadow-sm ring-1 ring-white/10 backdrop-blur">
          <button
            onClick={() => changeLang("vi")}
            className={`rounded-full px-4 py-1.5 text-[13px] transition ${lang === "vi" ? "bg-white text-slate-900" : "text-white/80 hover:text-white"}`}
          >
            VI
          </button>
          <button
            onClick={() => changeLang("en")}
            className={`rounded-full px-4 py-1.5 text-[13px] transition ${lang === "en" ? "bg-white text-slate-900" : "text-white/80 hover:text-white"}`}
          >
            EN
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36">
        {/* Logo */}
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

        {/* Heading */}
        <div className="mt-8 text-center">
          <h1 className="text-3xl font-semibold sm:text-4xl">{t.title}</h1>
          <p className="mt-3 max-w-3xl mx-auto text-white/80">{t.subtitle}</p>
        </div>

        {/* Features with bullets */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/5 hover:border-white/20 transition"
            >
              <div className="mb-3 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300" />
              <h2 className="text-lg font-medium">{f.title}</h2>
              <p className="mt-2 text-sm text-white/80">{f.desc}</p>

              {hasPoints(f) && (
                <ul className="mt-3 space-y-2 text-white/70 text-sm">
                  {f.points.map((pt, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-900 ring-1 ring-white/5 shadow-md hover:-translate-y-0.5 hover:shadow-lg hover:ring-white/10 transition"
          >
            {t.cta1}
          </Link>
          <Link
            href="/cases"
            className="rounded-2xl px-5 py-3 text-sm font-medium text-white/90 ring-1 ring-white/20 hover:text-white hover:ring-white/40 transition"
          >
            {t.cta2}
          </Link>
        </div>
      </div>
    </section>
  );
}
