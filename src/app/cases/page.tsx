// src/app/cases/page.tsx
import CasesTheAiValue from "@/components/CasesTheAiValue";

export const metadata = {
  title: "Case study | TheAiValue — Turning AI into Real Value",
  description:
    "A 24/7 AI assistant on your website and chat channels, answering from your docs/FAQs with handover and measurable outcomes.",
};

export default function CasesPage() {
  return <CasesTheAiValue defaultLang="vi" />;
}
