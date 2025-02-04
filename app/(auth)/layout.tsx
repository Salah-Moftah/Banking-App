import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div className="rounded-lg">
          <Image 
            src='/icons/home-page.png'
            alt="Auth image"
            width={500}
            height={500}
            className="w-[550px] h-[550px] rounded-s-xl border-y-[5px] border-l-[5px] border-slate-950"
          />
        </div>
      </div>
    </main>
  );
}
