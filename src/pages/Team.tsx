import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Member {
  name: string;
  role: string;
  detail?: string;
  image: string;
}

const team: Member[] = [
  { name: 'Mihir Chandwani', role: 'President', detail: 'SDE at Avon', image: 'https://blocsoc.eth.limo/team_images/mihir.jpg' },
  { name: 'Vasu Khanna', role: 'Vice President', detail: 'SDE at Anthias', image: 'https://blocsoc.eth.limo/team_images/vasu.jpg' },
  { name: 'Nilav Prajapati', role: 'Vice President', detail: 'Upcoming Dev at Oracle', image: 'https://blocsoc.eth.limo/team_images/nilav.jpg' },
  { name: 'Shourya Goel', role: 'Head of Research', detail: 'Research Intern at UIUC', image: 'https://blocsoc.eth.limo/team_images/shourya_g.jpeg' },
  { name: 'Preeti Karnwal', role: 'Head of Security', detail: 'Previous Intern at Adobe', image: 'https://blocsoc.eth.limo/team_images/preeti.jpeg' },
  { name: 'Himanshu Raheja', role: 'Core Member', detail: 'Previous Intern at Quadeye', image: 'https://blocsoc.eth.limo/team_images/himanshu.jpg' },
  { name: 'Mradul Singhal', role: 'Core Member', detail: 'Previous Intern at Samsung', image: 'https://blocsoc.eth.limo/team_images/mradul.jpg' },
  { name: 'Hardik Kansal', role: 'Core Member', detail: 'Previous Intern at Samsung', image: 'https://blocsoc.eth.limo/team_images/hardik.jpg' },
  { name: 'Abhijeet Dixit', role: 'Designer', image: 'https://blocsoc.eth.limo/team_images/abhijeet.jpg' },
  { name: 'Kishan Singh', role: 'Designer', detail: 'Intern at Flomoney', image: 'https://blocsoc.eth.limo/team_images/kishan.jpg' },
  { name: 'Gyanshu Pathak', role: 'Designer', detail: 'Intern at Genloop', image: 'https://blocsoc.eth.limo/team_images/gyanshu.jpeg' },
  { name: 'Veer Chaurasia', role: 'Core Member', image: 'https://blocsoc.eth.limo/team_images/veer.jpg' },
  { name: 'Abdullah Azeem', role: 'Core Member', detail: "Summer of Bitcoin '25", image: 'https://blocsoc.eth.limo/team_images/abdullah.jpg' },
  { name: 'Shourya Chaudhry', role: 'Core Member', detail: 'Intern at Fluid', image: 'https://blocsoc.eth.limo/team_images/shourya_c.jpg' },
  { name: 'Sambhav Jain', role: 'Core Member', detail: 'Intern at Anthiasxyz', image: 'https://blocsoc.eth.limo/team_images/sambhav.png' },
  { name: 'Utsav Sharma', role: 'Core Member', detail: 'Ethereum Protocol Fellow', image: 'https://blocsoc.eth.limo/team_images/utsav.jpg' },
  { name: 'Harrish Bansal', role: 'Core Member', detail: 'PLDG Contributor', image: 'https://blocsoc.eth.limo/team_images/harrish.jpg' },
  { name: 'Ajay Odedra', role: 'Designer', detail: 'Intern at Capx', image: 'https://blocsoc.eth.limo/team_images/ajay.jpg' },
  { name: 'Bipasha', role: 'Core Member', detail: 'GSoC 2025 @OSGeo', image: 'https://blocsoc.eth.limo/team_images/bipasha.jpeg' },
  { name: 'Ayush Chandekar', role: 'Core Member', detail: 'GSoC 2025 @Git', image: 'https://blocsoc.eth.limo/team_images/ayush.jpeg' },
  { name: 'Namay Rohatgi', role: 'Core Member', detail: 'GSoC 2025 @ProjectHoneyNet', image: 'https://blocsoc.eth.limo/team_images/namay.jpeg' },
  { name: 'Akshat', role: 'Core Member', detail: 'Intern at Anthiasxyz', image: 'https://blocsoc.eth.limo/team_images/akshat.jpg' },
  { name: 'Pushkar Singh', role: 'Core Member', image: 'https://blocsoc.eth.limo/team_images/pushkar.jpeg' },
  { name: 'Aniruddh Yadav', role: 'Core Member', detail: 'Dev at Anthiasxyz', image: 'https://blocsoc.eth.limo/team_images/aniruddh_.jpg' },
  { name: 'Rishik Pulhani', role: 'Core Member', image: 'https://blocsoc.eth.limo/team_images/rishik.jpg' },
  { name: 'Soham Vijay', role: 'Core Member', image: 'https://blocsoc.eth.limo/team_images/soham.jpeg' },
  { name: 'Yash Agrawal', role: 'Core Member', image: 'https://blocsoc.eth.limo/team_images/yash_a.jpeg' },
  { name: 'Mohit Grover', role: 'Core Member', image: 'https://blocsoc.eth.limo/team_images/mohit.JPG' },
  { name: 'Abhivansh Saini', role: 'Core Member', image: 'https://blocsoc.eth.limo/team_images/abhivansh.jpeg' },
  { name: 'Yogita Goyal', role: 'Core Member', image: 'https://blocsoc.eth.limo/team_images/yogita.jpg' },
  { name: 'Urja Chopra', role: 'Designer', image: 'https://blocsoc.eth.limo/team_images/urja.jpg' },
  { name: 'Rishi Talreja', role: 'Core Member', image: 'https://blocsoc.eth.limo/team_images/rishi.jpg' },
  { name: 'Devanshi Khandelwal', role: 'Designer', image: 'https://blocsoc.eth.limo/team_images/devanshi.jpeg' },
  { name: 'Aryan Baranwal', role: 'Core Member', image: 'https://blocsoc.eth.limo/team_images/aryan.jpeg' },
  { name: 'Yash', role: 'Core Member', image: 'https://blocsoc.eth.limo/team_images/yash_b.jpeg' },
  { name: 'Anand Bansal', role: 'Core Member', image: 'https://blocsoc.eth.limo/team_images/anand.png' },
  { name: 'Mohit Kataria', role: 'Product Manager', image: 'https://blocsoc.eth.limo/team_images/mohit_k.jpg' },
  { name: 'Krishna Verma', role: 'Designer', image: 'https://blocsoc.eth.limo/team_images/krishna-verma.jpeg' },
];

const genesis: Member[] = [
  { name: 'Pradyuman Verma', role: 'COO and Co-Founder at Blockflow', image: 'https://blocsoc.eth.limo/team_images/pradyuman.jpg' },
  { name: 'Vaibhav Khanna', role: 'CEO and Co-Founder at Blockflow', image: 'https://blocsoc.eth.limo/team_images/vaibhav.jpg' },
  { name: 'Aditya Gite', role: 'Research & Product at Fluid, Instadapp', image: 'https://blocsoc.eth.limo/team_images/aditya_gite.jpg' },
  { name: 'Samarpan Dutta', role: 'Co-Founder at Lucidly Finance', image: 'https://blocsoc.eth.limo/team_images/samarpan.jpg' },
];

const alums: Member[] = [
  { name: 'Yash Saraswat', role: 'Senior Protocol Engineer at Aleph Finance', image: 'https://blocsoc.eth.limo/team_images/panic.png' },
  { name: 'Aditya Gupta', role: 'Ethereum Protocol Fellow', image: 'https://blocsoc.eth.limo/team_images/aditya.jpg' },
  { name: 'Samaredra Gouda', role: 'Engineer at Instadapp', image: 'https://blocsoc.eth.limo/team_images/samarendra_.jpg' },
  { name: 'Prabhat Verma', role: 'Rust Engineer at Galoy', image: 'https://blocsoc.eth.limo/team_images/prabhat.jpg' },
  { name: 'Varun Sharma', role: 'Watson at Sherlock', image: 'https://blocsoc.eth.limo/team_images/varun.jpg' },
  { name: 'Naman Harwani', role: 'Engineer at NSE', image: 'https://blocsoc.eth.limo/team_images/naman.jpg' },
  { name: 'Barun Sethi', role: 'Product Designer at Yulu', image: 'https://blocsoc.eth.limo/team_images/barun.jpg' },
  { name: 'Vaishnavi Singh', role: 'Core Member', image: 'https://blocsoc.eth.limo/team_images/vaishnavi.jpg' },
  { name: 'Sumit Kumar', role: 'Dev at Neobase', image: 'https://blocsoc.eth.limo/team_images/sumit.jpg' },
  { name: 'Shivam Verma', role: 'Core Member', image: 'https://blocsoc.eth.limo/team_images/shivam.jpg' },
  { name: 'Omkar Darde', role: 'Designer', image: 'https://blocsoc.eth.limo/team_images/omkar.jpg' },
  { name: 'Alok Kumar', role: 'Researcher at Secbit', image: 'https://blocsoc.eth.limo/team_images/alok.jpg' },
  { name: 'Priyanshu Mehra', role: 'Head of Design', image: 'https://blocsoc.eth.limo/team_images/priyanshu.jpg' },
  { name: 'Archit Gangwal', role: 'Core Member', image: 'https://blocsoc.eth.limo/team_images/archit.jpeg' },
  { name: 'Shashank Trivedi', role: 'Founder Privote', image: 'https://blocsoc.eth.limo/team_images/shashank.jpg' },
  { name: 'Puspendra', role: 'Building Privote', image: 'https://blocsoc.eth.limo/team_images/puspendra.jpg' },
  { name: 'Richa', role: 'Software Developer, JP Morgan & Chase', image: 'https://blocsoc.eth.limo/team_images/richa.jpg' },
  { name: 'Chirag Baghasingh', role: 'Ethereum Protocol Fellow', image: 'https://blocsoc.eth.limo/team_images/chirag.jpg' },
  { name: 'Movish Verma', role: 'Software Developer, SAP Labs', image: 'https://blocsoc.eth.limo/team_images/movish.jpg' },
  { name: 'Neerav Chittora', role: 'Software Developer, Google', image: 'https://blocsoc.eth.limo/team_images/neerav.jpeg' },
  { name: 'Pooja Patel', role: 'Software Developer, Microsoft', image: 'https://blocsoc.eth.limo/team_images/pooja.jpg' },
  { name: 'Parthsarthi Mishra', role: 'Software Engineer, Qualcomm', image: 'https://blocsoc.eth.limo/team_images/parthsarthi.jpg' },
  { name: 'Kamal Sharma', role: '', image: 'https://blocsoc.eth.limo/team_images/kamal.jpg' },
  { name: 'Yash Bhanushali', role: '', image: 'https://blocsoc.eth.limo/team_images/yash.jpg' },
  { name: 'Jatin Agarwal', role: '', image: 'https://blocsoc.eth.limo/team_images/jatin.jpg' },
];

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
