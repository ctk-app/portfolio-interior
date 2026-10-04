import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "리브 인테리어 | 공간을 새롭게, 일상을 다르게",
  description: "주거·상업 공간 인테리어 전문. 시공 사례, 무료 상담, 합리적 견적까지.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>{children}</body>
    </html>
  );
}
