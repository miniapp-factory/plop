import { description, title, url } from "../lib/metadata";
import RainbowStars from "../components/rainbow-stars";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return {
    other: {
      "fc:miniapp": JSON.stringify({
        title,
        description,
        url,
      }),
    },
  };
}

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <RainbowStars />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-6xl font-bold text-white mb-4">{title}</h1>
        <p className="text-xl text-white">{description}</p>
      </div>
    </main>
  );
}
