import Link from "next/link";
import GearAvatar from "../_components/GearAvatar";

export const metadata = {
  title: "Services",
};

export default function Page() {
  return (
    <div className="min-h-screen py-36 z-0">
      <div className="flex justify-center pt-5 pb-5">
        <h1 className="text-center text-3xl font-bold bg-linear-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
          A full tailored service for you !
        </h1>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10">
        <div className="">
          <GearAvatar name="Web Design" />
          <div
            className="relative overflow-hidden rounded-2xl bg-foreground p-6
         shadow-[0_0_10px_theme(colors.blue.400),0_0_20px_theme(colors.blue.400),0_0_40px_theme(colors.blue.400)]
         hover:shadow-[0_0_20px_theme(colors.blue.400),0_0_40px_theme(colors.blue.400),0_0_80px_theme(colors.blue.400)]
         transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent"></div>

            <div className="relative z-10">
              <div className="mb-4 text-cyan-400 text-5xl">
                <i className="fa-solid fa-gears text-background"></i>
              </div>

              <ul className="space-y-3 text-slate-300">
                <li>👤 Portfolio Site</li>
                <li>🏢 Business Site</li>
                <li>🛒 E-Commerce Site</li>
                <li>And Many More...</li>
              </ul>
            </div>
          </div>
          <br />
          <Link
            href="/portfolio/#web-design"
            className="flex justify-center items-center text-center sm:tracking-[2] text-2xl border pt-2 pb-2 pl-5 pr-5 rounded-3xl hover:cursor-pointer hover:text-black hover:border-none hover:bg-linear-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-linear"
          >
            View Projects &rarr;
          </Link>
        </div>

        <div>
          <GearAvatar name="Web Apps" />
          <div
            className="relative overflow-hidden rounded-2xl bg-foreground p-6
         shadow-[0_0_10px_#001e3A,0_0_20px_#001e3A,0_0_40px_#001e3A]
         hover:shadow-[0_0_20px_#001e3A,0_0_40px_#001e3A,0_0_80px_#001e3A]
         transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent"></div>

            <div className="relative z-10">
              <div className="mb-4 text-cyan-400 text-5xl">
                <i className="fa-solid fa-gears text-background"></i>
              </div>

              <ul className="space-y-3 text-slate-300">
                <li>⚙️ Management System</li>
                <li>📅 Booking System</li>
                <li>📊 Dashboard App</li>
                <li>And Many More...</li>
              </ul>
            </div>
          </div>
          <br />
          <Link
            href="/portfolio/#web-app"
            className="flex justify-center items-center text-center sm:tracking-[2] text-2xl border pt-2 pb-2 pl-5 pr-5 rounded-3xl hover:cursor-pointer hover:text-black hover:border-none hover:bg-linear-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-linear"
          >
            View Projects &rarr;
          </Link>
        </div>

        <div className="">
          <GearAvatar name="SQA" />
          <div
            className="relative overflow-hidden rounded-2xl bg-foreground p-6
         shadow-[0_0_10px_theme(colors.pink.200),0_0_20px_theme(colors.pink.200),0_0_40px_theme(colors.pink.200)]
         hover:shadow-[0_0_20px_theme(colors.pink.300),0_0_40px_theme(colors.pink.200),0_0_80px_theme(colors.pink.200)]
         transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent"></div>

            <div className="relative z-10">
              <div className="mb-4 text-cyan-400 text-5xl">
                <i className="fa-solid fa-gears text-background"></i>
              </div>

              <ul className="space-y-3 text-slate-300">
                <li>🔍 Manual Testing</li>
                <li>🤖 Automation Testing</li>
                <li>🔌 API Testing</li>
                <li>And Many More...</li>
              </ul>
            </div>
          </div>
          <br />
          <Link
            href="/portfolio/#sqa"
            className="flex justify-center items-center text-center sm:tracking-[2] text-2xl border pt-2 pb-2 pl-5 pr-5 rounded-3xl hover:cursor-pointer hover:text-black hover:border-none hover:bg-linear-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-linear"
          >
            View Projects &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
