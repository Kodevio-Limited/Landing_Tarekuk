export default function OurStory() {
  return (
    <section className="w-full overflow-hidden py-24 sm:py-28">
      <div className="flex w-full justify-center">
        <div className="w-[1764px] max-w-full inline-flex flex-col justify-start items-center gap-10">
          <div className="size- px-5 py-3.5 rounded-[75px] outline outline-8 outline-offset-[-7px] outline-yellow-400 inline-flex justify-center items-center gap-2.5">
            <div className="text-center justify-start text-black text-lg font-medium font-['Poppins'] leading-7">Our Story</div>
          </div>
          <div className="self-stretch px-52 py-20 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-yellow-400 inline-flex justify-center items-center gap-32">
            <div className="w-[875px] inline-flex flex-col justify-start items-start gap-10">
              <div className="w-[486px] flex flex-col justify-center items-start gap-5">
                <div className="self-stretch justify-start"><span className="text-black text-5xl font-light font-['Poppins'] leading-[63px]">Why </span><span className="text-yellow-400 text-5xl font-medium font-['Poppins'] leading-[63px]">FamilySent</span><span className="text-black text-5xl font-light font-['Poppins'] leading-[63px]"> was created</span></div>
              </div>
              <div className="self-stretch inline-flex justify-start items-center gap-6">
                <div className="w-0 h-40 outline outline-[3px] outline-offset-[-1.50px] outline-yellow-400" />
                <div className="w-[850px] justify-start text-neutral-400 text-3xl font-normal font-['Poppins'] leading-10">As a member of the global diaspora, I understand the reality of needing to support family urgently — even before payday. SendLater was created to make sending money home faster, simpler and more flexible.</div>
              </div>
            </div>
            <div className="w-80 inline-flex flex-col justify-start items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-72 h-52 rounded-2xl" src="/images/about/founder.png" alt="" />
              <div className="w-72 flex flex-col justify-start items-center gap-2.5">
                <div className="self-stretch text-center justify-start text-black text-2xl font-medium font-['Poppins'] leading-9">Tarek</div>
                <div className="self-stretch text-center justify-start text-neutral-400 text-xl font-normal font-['Poppins'] leading-7">Founder &amp; CEO, Familysent</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
