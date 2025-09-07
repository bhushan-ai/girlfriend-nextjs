"use client";
import { Mic } from "lucide-react";
import Heart from "./components/Heart";
import axios from "axios";
import { RealtimeSession } from "@openai/agents-realtime";
import { gurlfriend } from "./Gurlfriend/Gf";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

export default function Home() {
  // async function handleGF() {
  //   console.log("write code");

  //   const response = await axios.get("/api/girlfriend");
  //   const tempKey = response.data;
  //   const session = new RealtimeSession(gurlfriend, {
  //     model: "gpt-realtime",
  //   });
  //   await session.connect({ apiKey: tempKey });
  // }
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen bg-black relative overflow-hidden">
      <h2 className="bg-transparent text-2xl  md:text-4xl font-bold text-center p-2 mb-40 bg-gradient-to-r from-white via-red-400 to-red-600 bg-clip-text text-transparent">
        Hey I am Love of Bhushann 💕
      </h2>
      <Heart />
      <div>
        <div className="flex flex-col items-center justify-center gap-5 z-10 ">
          <div className="bg-white p-6 rounded-full shadow-xl hover:scale-110 transition-transform cursor-pointer">
            <button
              onClick={() =>
                toast("first u need to take the permission of my love", {
                  description: "",
                  action: {
                    label: "Okey",
                  },
                  position: "top-center",
                })
              }
            >
              <Mic size={64} className="text-red-500" />
            </button>
          </div>
          <span className="text-white text-xl font-semibold">
            Wann talk with me?
          </span>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
