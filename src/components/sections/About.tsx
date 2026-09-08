import Reveal from "@/components/shared/Reveal";

export default function About() {
  return (
    <section className="w-full overflow-hidden py-24 sm:py-28">
      <div className="flex w-full justify-center">
        <Reveal>
          <div className="w-[1768px] max-w-full self-stretch px-40 py-4 bg-zinc-800 rounded-2xl inline-flex flex-col justify-start items-center gap-2.5">
            <div className="self-stretch inline-flex justify-start items-center gap-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-[799px] h-[532px] rounded-[38px] border-4 border-yellow-400 image-depth"
                src="/images/about/family-sent.png"
                alt=""
              />
              <div className="w-[605px] inline-flex flex-col justify-start items-end gap-14">
                <div className="w-[486px] flex flex-col justify-center items-end gap-5">
                  <div className="size- px-5 py-3.5 rounded-[75px] outline outline-8 outline-offset-[-7px] outline-yellow-400 inline-flex justify-center items-center gap-2.5">
                    <div className="text-center justify-start text-white text-lg font-medium font-['Poppins'] leading-7">About Family Sent</div>
                  </div>
                  <div className="self-stretch text-right justify-start"><span className="text-white text-5xl font-light font-['Poppins'] leading-[63px]">Built for families.{"\u2028"}        </span><span className="text-yellow-400 text-5xl font-medium font-['Poppins'] leading-[63px]">Designed for real life.</span></div>
                </div>
                <div className="self-stretch text-right justify-start"><span className="text-zinc-800 text-3xl font-medium font-['Poppins'] leading-10">FamilySent</span><span className="text-neutral-400 text-3xl font-normal font-['Poppins'] leading-10"> helps you send money home when it matters most — with the flexibility to repay in a way that works for you.</span></div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
