import { OpenAICompletion } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Image src={"/ElinaSteamPunk.jpg"} fill alt="Wizard" />
      <div className="z-10 mt-5 flex flex-col gap-5 text-center text-white">
        <h1>Sorceress Inkeri</h1>
        <OpenAICompletion />
      </div>
    </main>
  );
}
