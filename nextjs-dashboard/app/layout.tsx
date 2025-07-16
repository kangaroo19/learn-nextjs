import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acme Dashboard",
  description: "The official Next.js Course Dashboard, built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};
// 빌드 시 글꼴 파일을 다운로드하여
// 다른 정적 애셋과 함께 호스팅합니다.
//  즉, 사용자가 애플리케이션을 방문할 때 성능에 영향을 줄 수 있는
//  글꼴에 대한 추가 네트워크 요청이 발생하지 않습니다.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
