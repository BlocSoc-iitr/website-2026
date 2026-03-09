import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { team, genesis, alums, type Member } from '@/constants/team';



const MemberCard = ({ member }: { member: Member }) => (
  <div className="border-2 border-foreground overflow-hidden hover:bg-foreground hover:text-background transition-colors group">
    <img
      src={member.image}
      alt={member.name}
      className="w-full h-48 object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300"
    />
    <div className="p-3">
      <h3 className="font-display font-bold text-sm">{member.name}</h3>
      <p className="font-mono text-xs text-muted-foreground group-hover:text-background/70 mt-0.5">
        {member.role}
      </p>
      {member.detail && (
        <p className="font-mono text-xs text-muted-foreground group-hover:text-background/60 mt-0.5">
          {member.detail}
        </p>
      )}
    </div>
  </div>
);

const TeamSection = ({ title, members }: { title: string; members: Member[] }) => (
  <div className="mb-12">
    <h2 className="font-display font-bold text-lg text-foreground border-b-2 border-foreground pb-1 mb-6 inline-block">
      {title}
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
      {members.map((m, i) => (
        <MemberCard key={i} member={m} />
      ))}
    </div>
  </div>
);

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-14 max-w-5xl mx-auto px-6 py-16">
        <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-12">
          Team
        </h1>
        <TeamSection title="Current Team" members={team} />
        <TeamSection title="Genesis" members={genesis} />
        <TeamSection title="Alums" members={alums} />
      </main>
      <Footer />
    </div>
  );
};

export default Team;
