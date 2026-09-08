import Button from "@/components/shared/Button";

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-stone-900">
      <div className="relative h-[520px] w-full">
        <div className="absolute left-[-13px] top-[52px] h-[468px] w-[1928px]">
          <div className="absolute left-[89px] top-[154px]">
            <Button href="#download">Download Now</Button>
          </div>

          <div className="absolute left-[80px] top-[0px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/footer/logo.png" alt="FamilySent logo" className="h-[111px] w-[431px] object-cover" />
          </div>

          <div className="absolute left-[708px] top-[0px] inline-flex h-[280px] w-[1135px] items-start gap-[150px]">
            <div className="inline-flex w-40 flex-col items-start gap-6">
              <div className="whitespace-nowrap justify-start text-white text-3xl font-medium font-['Poppins'] leading-10">Quick Links</div>
              <div className="flex flex-col items-start gap-5">
                <div className="whitespace-nowrap text-zinc-400 text-xl font-normal font-['Poppins'] leading-7">How it Works</div>
                <div className="whitespace-nowrap text-zinc-400 text-xl font-normal font-['Poppins'] leading-7">About Us</div>
                <div className="whitespace-nowrap text-zinc-400 text-xl font-normal font-['Poppins'] leading-7">Pay Later</div>
                <div className="whitespace-nowrap text-zinc-400 text-xl font-normal font-['Poppins'] leading-7">Pricing</div>
                <div className="whitespace-nowrap text-zinc-400 text-xl font-normal font-['Poppins'] leading-7">FAQ</div>
              </div>
            </div>
            <div className="inline-flex w-40 flex-col items-start gap-6">
              <div className="whitespace-nowrap justify-start text-white text-3xl font-medium font-['Poppins'] leading-10">Resources</div>
              <div className="flex flex-col items-start gap-5">
                <div className="whitespace-nowrap text-zinc-400 text-xl font-normal font-['Poppins'] leading-7">New &amp; Blog</div>
                <div className="whitespace-nowrap text-zinc-400 text-xl font-normal font-['Poppins'] leading-7">Privacy Policy</div>
                <div className="whitespace-nowrap text-zinc-400 text-xl font-normal font-['Poppins'] leading-7">Terms of Conditions</div>
              </div>
            </div>
            <div className="inline-flex w-[523px] flex-col items-start gap-16">
              <div className="whitespace-nowrap justify-start text-white text-3xl font-medium font-['Poppins'] leading-10">Download From</div>
              <div className="inline-flex items-center gap-6 self-stretch">
                <div className="relative h-20 w-64 rounded-[54.05px] bg-zinc-800 outline outline-1 outline-offset-[-0.89px] outline-gray-200">
                  <div className="absolute left-[6.20px] top-[6.20px] size-16 rounded-full bg-neutral-50" />
                  <div className="absolute left-[86.84px] top-[8.86px] inline-flex w-32 flex-col items-start gap-2">
                    <div className="self-stretch justify-start text-gray-200 text-sm font-normal font-['Poppins'] leading-5">Download on the</div>
                    <div className="self-stretch justify-start text-neutral-50 text-xl font-medium font-['Poppins'] leading-7">App Store</div>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/footer/apple-logo.svg" alt="App Store" className="absolute left-[19.49px] top-[19.50px] size-9" />
                </div>
                <div className="relative h-20 w-64 rounded-[54.05px] bg-zinc-800 outline outline-1 outline-offset-[-0.89px] outline-gray-200">
                  <div className="absolute left-[6.20px] top-[6.20px] size-16 rounded-full bg-neutral-50" />
                  <div className="absolute left-[86.84px] top-[8.86px] inline-flex w-32 flex-col items-start gap-2">
                    <div className="self-stretch justify-start text-gray-200 text-sm font-normal font-['Poppins'] leading-5">Download on the</div>
                    <div className="self-stretch justify-start text-neutral-50 text-xl font-medium font-['Poppins'] leading-7">Google Play</div>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/footer/playstore.svg" alt="Google Play" className="absolute left-[19.49px] top-[19.50px] size-9" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-0 top-[423px] w-full border-t-4 border-dashed border-yellow-400" />

        <div className="absolute left-[72px] top-[440px] inline-flex h-12 w-[1758px] items-center justify-between">
          <div className="justify-start text-neutral-400 text-xl font-normal font-['Helvetica_Neue'] leading-7">© 2026 Familysent All rights reserved.</div>
          <div className="flex items-center gap-6">
            <div className="flex size-12 items-center justify-center">
              <svg className="size-6 fill-zinc-400" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </div>
            <div className="flex size-12 items-center justify-center">
              <svg className="size-6 fill-zinc-400" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </div>
            <div className="flex size-12 items-center justify-center">
              <svg className="size-6 fill-zinc-400" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            </div>
            <div className="flex size-12 items-center justify-center">
              <svg className="size-6 fill-zinc-400" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
