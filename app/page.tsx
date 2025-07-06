import Image from "next/image";
import CompanionCard from "@/components/companion-card";
import CompanionList from "@/components/companion-list";
import Cta from "@/components/cta";
import {recentSessions} from "@/lib/constants";

export default function Home() {
  return (
      <main className="px-14 py-2 ">
        <h1 className="text-2xl font-semibold">Popular Companions</h1>

        <section className="py-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-4">
            {recentSessions.map(session => (
                <CompanionCard key={session.id} style={{ backgroundColor: session.color }}>
                    <div className="flex justify-between">
                        <CompanionCard.Subject>{session.subject}</CompanionCard.Subject>

                        <CompanionCard.BookmarkButton bookmarked={true} />
                    </div>

                    <CompanionCard.Title>
                        {session.name}
                    </CompanionCard.Title>

                    <CompanionCard.Duration>
                        <div className="flex items-center gap-2">
                            <CompanionCard.DurationIcon />
                            <p className="text-sm">{session.duration} minutes</p>
                        </div>
                    </CompanionCard.Duration>

                    <CompanionCard.CTA>
                        Launch
                    </CompanionCard.CTA>
                </CompanionCard>
            ))}


        </section>

          <section className="flex justify-between">
              <CompanionList />
              <Cta />
          </section>
      </main>
  );
}
