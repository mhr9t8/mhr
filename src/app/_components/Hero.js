// import { TypeAnimation } from "react-type-animation";
// import Button from "./Button";
// import Link from "next/link";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

// export default function Hero() {
//   return (
//     <div className="h-screen">
//       <div className="h-screen pt-72 bg-[url('/img/hero-polygon-bg.svg')] bg-center bg-cover bg-no-repeat">
//         <h1 className="pl-10 text-6xl font-bold text-[#89a5c0]">
//           Hello, I&apos;m{" "}
//           <TypeAnimation
//             className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
//             sequence={[
//               "MH Rahat",
//               1000,
//               "a Designer",
//               1000,
//               "a Developer",
//               1000,
//               "a Tester",
//               1000,
//             ]}
//             wrapper="span"
//             speed={50}
//             repeat={Infinity}
//             cursor={false}
//           />
//           <span className="custom-cursor bg-linear-to-r from-blue-500 to-purple-500">
//             |
//           </span>
//         </h1>

//         <br />
//         <br />

//         <h2 className="pl-10 text-5xl font-medium bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
//           Your Imagination, Our Creation !
//         </h2>

//         <p className="pl-10 w-4xl text-2xl pt-5 text-blue-500">
//           Full-stack web developer specializing in building responsive,
//           scalable, and user-focused web applications using modern front-end and
//           back-end technologies.
//         </p>

//         <div className="pt-35 flex gap-10 pl-20">
//           <Link
//             href=""
//             className="flex justify-center items-center text-center sm:tracking-[2] text-2xl pt-2 pb-2 pl-5 pr-5 rounded-3xl hover:cursor-pointer hover:text-black hover:border-none bg-linear-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-linear"
//           >
//             Download Resume
//           </Link>
//           <Link
//             href="/service"
//             className="flex justify-center items-center text-center sm:tracking-[2] text-2xl border pt-2 pb-2 pl-5 pr-5 rounded-3xl hover:cursor-pointer hover:text-black hover:border-none hover:bg-linear-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-linear"
//           >
//             Explore &rarr;
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Hero() {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen pt-32 md:pt-72 bg-[url('/img/hero-polygon-bg.svg')] bg-center bg-cover bg-no-repeat">
        <h1 className="pl-6 md:pl-10 text-3xl md:text-6xl font-bold text-background">
          <span className="text-foreground md:text-background">
            Hello, I&apos;m{" "}
          </span>
          <TypeAnimation
            className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
            sequence={[
              "MH Rahat",
              1000,
              "a Designer",
              1000,
              "a Developer",
              1000,
              "a Tester",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={false}
          />
          <span className="custom-cursor bg-linear-to-r from-blue-500 to-purple-500">
            |
          </span>
        </h1>

        <br />

        <h2 className="pl-6 md:pl-10 text-2xl md:text-5xl font-medium bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Your Imagination, Our Creation!
        </h2>

        <p className="pl-6 md:pl-10 max-w-2xl text-base md:text-2xl pt-5 text-blue-500">
          Full-stack web developer specializing in building responsive,
          scalable, and user-focused web applications.
        </p>

        <div className="pt-16 md:pt-35 flex flex-wrap gap-4 md:gap-10 pl-6 md:pl-20">
          <a
            href="{`https://docs.google.com/viewer?url=https://rahat99.vercel.app/CV-Mehedi_Hasan_Rahat.pdf`}"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center text-center text-base md:text-2xl px-5 py-2 rounded-3xl bg-linear-to-r from-blue-500 to-purple-500 hover:border-1 hover:cursor-pointer transition-all duration-300 ease-linear"
          >
            Download Resume
          </a>
          <Link
            href="/service"
            className="flex justify-center items-center text-center text-base md:text-2xl border px-5 py-2 rounded-3xl hover:cursor-pointer hover:bg-linear-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-linear"
          >
            Explore &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
