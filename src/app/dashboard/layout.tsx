import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 lg:justify-start"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block">SchoolKat</span>
        </Link>
        <Menu/>
      </div>

      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[86%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
          <Navbar/> 
          {children}
      </div>
    </div>
  );
}
