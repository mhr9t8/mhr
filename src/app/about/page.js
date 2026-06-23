import Image from "next/image";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 mt-30">
      {/* Row 1 — image left, text right */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        <div className="flex-shrink-0 w-[300px] h-[340px]">
          <Image
            src="/img/mhr-2.jpg"
            width={400}
            height={400}
            alt="About"
            className="w-full h-full rounded-2xl  object-cover shadow-2xl shadow-[0_10px_30px_5px_rgba(0,0,0,0.7)]"
          />
        </div>
        <div className="flex-1">
          <section>
            <h2 className="text-2xl">
              💡{" "}
              <span className="bg-linear-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                Forever Learning
              </span>
            </h2>
            <p className="pb-5 text-xl">
              I’m a web developer obsessed with clean code and creative design.
              Learning is my superpower—be it new coding languages, weird
              skills, or fascinating facts about anything and everything.
            </p>
          </section>
          <section>
            <h2 className="text-2xl">
              ✈️{" "}
              <span className="bg-linear-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                The Traveling Dev
              </span>
            </h2>
            <p className="pb-5 text-xl">
              Exploring new cultures and places is my therapy. I’m always
              hunting for inspiration in foreign streets, local dishes, and
              strange signs I can’t read but try anyway.
            </p>
          </section>
          <section>
            <h2 className="text-2xl">
              📚{" "}
              <span className="bg-linear-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                Bookworm & Movie Buff
              </span>
            </h2>
            <p className="pb-5 text-xl">
              From fantasy novels to code documentation, I read it all. Add a
              good film and you’ve got my ideal weekend. Recommendations
              welcome!
            </p>
          </section>
          <section>
            <h2 className="text-2xl">
              ❟❛❟{" "}
              <span className="bg-linear-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                Anime Freak: 17 Hours Streak
              </span>
            </h2>
            <p className="pb-5 text-xl">
              "Certified anime addict with a watchlist longer than the Great
              Wall. From Shonen showdowns to Studio Ghibli tears, I breathe
              subtitles and dream in Japanese. Powered by ramen, fueled by
              genjutsu — if it's animated, I’m watching it!"
            </p>
          </section>
        </div>
      </div>

      {/* Row 2 — text left, image right */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-12">
        <div className="flex-shrink-0 w-[300px] h-[340px]">
          <Image
            src="/img/mhr.jpg"
            width={400}
            height={400}
            alt="What I do"
            className="w-full h-full rounded-2xl  object-cover shadow-2xl shadow-[0_10px_30px_5px_rgba(0,0,0,0.7)]"
          />
        </div>
        <div className="flex-1">
          <section>
            <h2 className="text-2xl">
              🎧{" "}
              <span className="bg-linear-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                Music Is My Oxygen
              </span>
            </h2>
            <p className="pb-5 text-xl">
              No line of code gets written without a soundtrack. Whether it's
              rock, hip-hop, or lo-fi, I'm that person who always has earbuds
              in.
            </p>
          </section>
          <section>
            <h2 className="text-2xl">
              😆{" "}
              <span className="bg-linear-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                Life of the Zoom Call
              </span>
            </h2>
            <p className="pb-5 text-xl">
              I might be a developer, but I moonlight as the team comedian. I
              love to chat, laugh, and keep things light (even during stressful
              sprints).
            </p>
          </section>
          <section>
            <h2 className="text-2xl">
              🧑‍💻{" "}
              <span className="bg-linear-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                Let's Build Something
              </span>
            </h2>
            <p className="pb-5 text-xl">
              I code, I learn, I travel—and I’m always open to new projects,
              partnerships, or just sharing a laugh over some code bugs. Let’s
              connect!
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
