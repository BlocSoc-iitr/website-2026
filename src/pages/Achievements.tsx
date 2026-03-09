import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { achievements } from '@/constants/achievements';

const Achievements = () => {
  const years = [...new Set(achievements.map(a => a.year))];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-14 max-w-5xl mx-auto px-6 py-16">
        <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-12">
          Achievements
        </h1>

        {years.map(year => (
          <div key={year} className="mb-10">
            <h2 className="font-display font-bold text-lg text-foreground border-b-2 border-foreground pb-1 mb-4 inline-block">
              {year}
            </h2>
            <div className="space-y-0">
              {achievements
                .filter(a => a.year === year)
                .map((a, i) => (
                  <div
                    key={i}
                    className="border-2 border-foreground p-4 -mt-[2px] first:mt-0 font-mono text-sm hover:bg-foreground hover:text-background transition-colors"
                  >
                    {a.title}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Achievements;
