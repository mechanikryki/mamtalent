import React from 'react';
import { VoteButton } from "@/components/custom/colorbtn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <VoteButton letter="A" color="red" subtext="XXX">Głowny</VoteButton>

      <button>
        <div className="flex justify-center items-center w-[50px] h-[50px] border-tl-[10px] border bl-[10px] text-white">
          <span>B</span>
        </div>
        <div className="box-border w-[250px] flex-1 flex justify-start items-center h-[50px] p-0 pl-[15px] rounded-tr-[10px] rounded-br-[10px] text-white text-[16px] font-bold">
          <span>Dwa</span>
        </div>
      </button>

    </main>
  );
}
