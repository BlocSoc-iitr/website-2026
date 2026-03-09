export interface Member {
  name: string;
  role: string;
  detail?: string;
  image: string;
  github?: string;
  twitter?: string;
  linkedin?: string;
}

export const team: Member[] = [
  { name: 'Mihir Chandwani', role: 'President', detail: 'SDE at Avon', image: '/team_images/mihir.jpg', github: 'https://github.com/Mihir1101/', twitter: 'https://x.com/mihir_1101/', linkedin: 'https://www.linkedin.com/in/mihir-chandwani-a52876257/' },
  { name: 'Vasu Khanna', role: 'Vice President', detail: 'Engineering Lead at Anthias', image: '/team_images/vasu.jpg', github: 'https://github.com/star-gazer111/', twitter: 'https://x.com/_stargazer12/', linkedin: 'https://www.linkedin.com/in/vasu-k-4411a3252/' },
  { name: 'Nilav Prajapati', role: 'Vice President', detail: 'Upcoming Dev at Oracle', image: '/team_images/nilav.jpg', github: 'https://github.com/gerceboss/', twitter: 'https://twitter.com/gerceboss_21/', linkedin: 'https://www.linkedin.com/in/nilav-prajapati-386a99251/' },
  { name: 'Shourya Goel', role: 'Head of Research', detail: 'Research Intern at University of Illinois Urbana-Champaign', image: '/team_images/shourya_g.jpeg', github: 'https://github.com/Sh0g0-1758/', twitter: 'https://x.com/ShogLoFi/', linkedin: 'https://www.linkedin.com/in/shourya-goel-03b18724b/' },
  { name: 'Preeti Karnwal', role: 'Head of Security', detail: 'Previous Intern at Adobe', image: '/team_images/preeti.jpeg', github: 'https://github.com/blueh4mster/', twitter: 'https://x.com/cherryboss0604/', linkedin: 'https://www.linkedin.com/in/preeti-karnwal-715772261/' },
  { name: 'Himanshu Raheja', role: 'Core Member', detail: 'Previous Intern at Quadeye', image: '/team_images/himanshu.jpg', github: 'https://github.com/harry2855/', twitter: 'https://x.com/ImHraheja/', linkedin: 'https://www.linkedin.com/in/himanshu-raheja-611381270/' },
  { name: 'Mradul Singhal', role: 'Core Member', detail: 'Previous Intern at Samsung', image: '/team_images/mradul.jpg', github: 'https://github.com/cy4n1d3-p1x3l/', twitter: 'https://x.com/0xcyanide/', linkedin: 'https://www.linkedin.com/in/mradul-singhal-752741255/' },
  { name: 'Hardik Kansal', role: 'Core Member', detail: 'Previous Intern at Samsung', image: '/team_images/hardik.jpg', github: 'https://github.com/hardik-kansal/', twitter: 'https://x.com/Slappy_TD/', linkedin: 'https://www.linkedin.com/in/hardik-kansal-23859a271/' },
  { name: 'Abhijeet Dixit', role: 'Designer', image: '/team_images/abhijeet.jpg', twitter: 'https://x.com/Abhijeet200309/', linkedin: 'https://www.linkedin.com/in/abhijeet-dixit-a2291a24a/' },
  { name: 'Kishan Singh', role: 'Designer', detail: 'Intern at Flomoney', image: '/team_images/kishan.jpg', github: 'https://github.com/Alex_iitr/', twitter: 'https://x.com/kishan_iitr/', linkedin: 'https://www.linkedin.com/in/kishansingh-92307b260/' },
  { name: 'Gyanshu Pathak', role: 'Designer', detail: 'Intern at Genloop', image: '/team_images/gyanshu.jpeg', github: 'https://github.com/gyanshupathak/', twitter: 'https://x.com/gyanshu_pathak/', linkedin: 'https://www.linkedin.com/in/gyanshu-pathak/' },
  { name: 'Veer Chaurasia', role: 'Core Member', image: '/team_images/veer.jpg', github: 'https://github.com/VeerChaurasia/', twitter: 'https://x.com/0xpsuedo/', linkedin: 'https://www.linkedin.com/in/veerchaurasia2005/' },
  { name: 'Abdullah Azeem', role: 'Core Member', detail: "Summer of Bitcoin '25", image: '/team_images/abdullah.jpg', github: 'https://github.com/ABD-AZE/', twitter: 'https://x.com/ABD__AZE/', linkedin: 'https://www.linkedin.com/in/abdullah-azeem-20a7b9285/' },
  { name: 'Shourya Chaudhry', role: 'Core Member', detail: 'Intern at Fluid', image: '/team_images/shourya_c.jpg', github: 'https://github.com/18aaddy', twitter: 'https://x.com/xprvAaddy/', linkedin: 'https://www.linkedin.com/in/shourya-chaudhry-1a2696288/' },
  { name: 'Sambhav Jain', role: 'Core Member', detail: 'Intern at Anthiasxyz', image: '/team_images/sambhav.png', github: 'https://github.com/DarkLord017/', twitter: 'https://x.com/0x_Wyrm/', linkedin: 'https://www.linkedin.com/in/sambhav-jain-7552a0287/' },
  { name: 'Utsav Sharma', role: 'Core Member', detail: 'Ethereum Protocol Fellow', image: '/team_images/utsav.jpg', github: 'https://github.com/x-senpai-x/', twitter: 'https://x.com/0x_senpai_x', linkedin: 'https://www.linkedin.com/in/utsav-sharma-84a6631b9/' },
  { name: 'Harrish Bansal', role: 'Core Member', detail: 'PLDG Contributor', image: '/team_images/harrish.jpg', github: 'https://github.com/Haxry/', twitter: 'https://x.com/makaaaaveli/', linkedin: 'https://www.linkedin.com/in/harrish-bansal-5b9578256/' },
  { name: 'Ajay Odedra', role: 'Designer', detail: 'Intern at Capx', image: '/team_images/ajay.jpg', github: 'https://github.com/Spyder111A/', twitter: 'https://x.com/AjayOdedra84029/', linkedin: 'https://www.linkedin.com/in/ajay-odedra-b26923283/' },
  { name: 'Bipasha', role: 'Core Member', detail: 'GSoC 2025 @OSGeo', image: '/team_images/bipasha.jpeg', github: 'https://github.com/bipashabg', twitter: 'https://x.com/sunaslore', linkedin: 'https://www.linkedin.com/in/bipashagayary/' },
  { name: 'Ayush Chandekar', role: 'Core Member', detail: 'GSoC 2025 @Git', image: '/team_images/ayush.jpeg', github: 'https://github.com/ayu-ch', twitter: 'https://x.com/0xbl4ze', linkedin: 'https://www.linkedin.com/in/ayushchandekar/' },
  { name: 'Namay Rohatgi', role: 'Core Member', detail: 'GSoC 2025 @ProjectHoneyNet', image: '/team_images/namay.jpeg', github: 'https://github.com/namay26', twitter: 'https://x.com/NamayRohatgi', linkedin: 'https://www.linkedin.com/in/namayrohatgi/' },
  { name: 'Akshat', role: 'Core Member', detail: 'Intern at Anthiasxyz', image: '/team_images/akshat.jpg', github: 'https://github.com/dev-n-dough', twitter: 'https://x.com/0xAech', linkedin: 'https://www.linkedin.com/in/akshat-arora-2493a3292/' },
  { name: 'Pushkar Singh', role: 'Core Member', image: '/team_images/pushkar.jpeg', github: 'https://github.com/iitianpushkar', twitter: 'https://x.com/0xPushkar', linkedin: 'https://in.linkedin.com/in/pushkar-kumar-17a763292' },
  { name: 'Aniruddh Yadav', role: 'Core Member', detail: 'Dev at Anthiasxyz', image: '/team_images/aniruddh_.jpg', github: 'https://github.com/0xcirxle/', twitter: 'https://x.com/0xCirxle/', linkedin: 'https://www.linkedin.com/in/aniruddh-yadav-259490299/' },
  { name: 'Rishik Pulhani', role: 'Core Member', image: '/team_images/rishik.jpg', github: 'https://github.com/Rishikpulhani/', twitter: 'https://x.com/rishikpulhani/', linkedin: 'https://www.linkedin.com/in/rishik-pulhani-9b0147290/' },
  { name: 'Soham Vijay', role: 'Core Member', image: '/team_images/soham.jpeg', github: 'https://github.com/0xr10t/', twitter: 'https://x.com/0xr10t/', linkedin: 'https://www.linkedin.com/in/soham-vijay-58a270311' },
  { name: 'Yash Agrawal', role: 'Core Member', image: '/team_images/yash_a.jpeg', github: 'https://github.com/agrawalx/', twitter: 'https://x.com/_KxrMa_G/', linkedin: 'https://www.linkedin.com/in/yash-agrawal-774ab3267/' },
  { name: 'Mohit Grover', role: 'Core Member', image: '/team_images/mohit.JPG', github: 'https://github.com/groverInnovate/', twitter: 'https://x.com/GroverInnovate/', linkedin: 'https://www.linkedin.com/in/mohit-grover-38bb68311' },
  { name: 'Abhivansh Saini', role: 'Core Member', image: '/team_images/abhivansh.jpeg', github: 'https://github.com/akronim26/', twitter: 'https://x.com/astaxxoo', linkedin: 'www.linkedin.com/in/abhivanshsaini' },
  { name: 'Yogita Goyal', role: 'Core Member', image: '/team_images/yogita.jpg', github: 'https://github.com/yogitagoel', twitter: 'https://x.com/yo_gita_g', linkedin: 'https://www.linkedin.com/in/yogita-goyal-697255333/' },
  { name: 'Urja Chopra', role: 'Designer', image: '/team_images/urja.jpg', github: 'https://github.com/meuu09', twitter: 'https://x.com/mazikeen2005', linkedin: 'www.linkedin.com/in/urja-chopra-9669ab334/' },
  { name: 'Rishi Talreja', role: 'Core Member', image: '/team_images/rishi.jpg', github: 'https://github.com/rishi-tal-12/', twitter: 'https://x.com/lucifer_x08/', linkedin: 'https://www.linkedin.com/in/rishi-talreja-900127349' },
  { name: 'Devanshi Khandelwal', role: 'Designer', image: '/team_images/devanshi.jpeg', github: 'https://github.com/dxkx03', twitter: 'https://x.com/velvet3Whispers', linkedin: 'https://www.linkedin.com/in/devanshi-khandelwal-58b60831b' },
  { name: 'Aryan Baranwal', role: 'Core Member', image: '/team_images/aryan.jpeg', github: 'https://github.com/aryanbaranwal001/', twitter: 'https://x.com/0x_Mahoraga', linkedin: 'https://www.linkedin.com/in/aryan-baranwal-64256b322/' },
  { name: 'Yash', role: 'Core Member', image: '/team_images/yash_b.jpeg', github: 'https://github.com/YASH-ai-bit/', twitter: 'https://x.com/offee_co', linkedin: 'https://www.linkedin.com/in/yash-bainsla-a0b58132a/' },
  { name: 'Anand Bansal', role: 'Core Member', image: '/team_images/anand.png', github: 'https://github.com/AnInsaneJimJam/', twitter: 'https://x.com/AnIdiotJimJam/', linkedin: 'https://www.linkedin.com/in/anand-bansal-2a10a4337/' },
  { name: 'Mohit Kataria', role: 'Product Manager', image: '/team_images/mohit_k.jpg', github: 'https://github.com/Unfunknown/', twitter: 'https://x.com/ZeroXFlash/', linkedin: 'https://www.linkedin.com/in/mohit-kataria-57b35a321/' },
  { name: 'Krishna Verma', role: 'Designer', image: '/team_images/krishna-verma.jpeg', github: 'https://github.com/Krishnav48', twitter: 'https://x.com/KrxDesgin', linkedin: 'https://www.linkedin.com/in/krishna-verma-b354a4346/' },
];

export const genesis: Member[] = [
  { name: 'Pradyuman Verma', role: 'COO and Co-Founder at Blockflow', image: '/team_images/pradyuman.jpg', github: 'https://github.com/pradyuman-verma/', twitter: 'https://x.com/prady_v/', linkedin: 'https://www.linkedin.com/in/pradyuman-verma/' },
  { name: 'Vaibhav Khanna', role: 'CEO and Co-Founder at Blockflow', image: '/team_images/vaibhav.jpg', github: 'https://github.com/Vaibhav20201', twitter: 'https://x.com/k_vaibhav_/', linkedin: 'https://www.linkedin.com/in/vaibhav-khanna-387724194/' },
  { name: 'Aditya Gite', role: 'Research & Product at Fluid, Instadapp', image: '/team_images/aditya_gite.jpg', github: 'https://github.com/xma8lu/', twitter: 'https://x.com/ad_git/', linkedin: 'https://www.linkedin.com/in/adityagite/' },
  { name: 'Samarpan Dutta', role: 'Co-Founder at Lucidly Finance', image: '/team_images/samarpan.jpg', github: 'https://github.com/0xethsign/', twitter: 'https://x.com/eth_sign/', linkedin: 'https://www.linkedin.com/in/smrpn/' },
];

export const alums: Member[] = [
  { name: 'Yash Saraswat', role: 'Senior Protocol Engineer at Aleph Finance', image: '/team_images/panic.png', github: 'https://github.com/0xpanicError/', twitter: 'https://twitter.com/0xpanicError/', linkedin: 'https://www.linkedin.com/in/yash2399/' },
  { name: 'Aditya Gupta', role: 'Ethereum Protocol Fellow', image: '/team_images/aditya.jpg', github: 'https://github.com/1010adigupta/', twitter: 'https://x.com/darex_1010/', linkedin: 'https://www.linkedin.com/in/aditya-gupta-905a61239/' },
  { name: 'Samaredra Gouda', role: 'Engineer at Instadapp', image: '/team_images/samarendra_.jpg', github: 'https://github.com/SamarendraGouda/', twitter: 'https://x.com/0xSamarendra/', linkedin: 'https://www.linkedin.com/in/samarendra-gouda/' },
  { name: 'Prabhat Verma', role: 'Rust Engineer at Galoy', image: '/team_images/prabhat.jpg', github: 'https://github.com/Prabhat1308/', twitter: 'https://x.com/pr0b0t1sc00l/', linkedin: 'https://www.linkedin.com/in/prabhat-verma-7ab615206/' },
  { name: 'Varun Sharma', role: 'Watson at Sherlock', image: '/team_images/varun.jpg', linkedin: 'https://www.linkedin.com/in/vsharma4394/' },
  { name: 'Naman Harwani', role: 'Engineer at NSE', image: '/team_images/naman.jpg', github: 'https://github.com/burgerdrummer/', twitter: 'https://twitter.com/BurgerDrummer/', linkedin: 'https://www.linkedin.com/in/namaha/' },
  { name: 'Barun Sethi', role: 'Product Designer at Yulu', image: '/team_images/barun.jpg', linkedin: 'https://www.linkedin.com/in/barun-design/' },
  { name: 'Vaishnavi Singh', role: 'Core Member', image: '/team_images/vaishnavi.jpg', github: 'https://github.com/07Vaishnavi_Singh/', twitter: 'https://x.com/Vaiz_07/', linkedin: 'https://www.linkedin.com/in/vaishnavi-singh-3a104b204/' },
  { name: 'Sumit Kumar', role: 'Dev at Neobase', image: '/team_images/sumit.jpg', github: 'https://github.com/startup-dreamer/', twitter: 'https://x.com/Startup_dmr/', linkedin: 'https://www.linkedin.com/in/startup1dreamer/' },
  { name: 'Shivam Verma', role: 'Core Member', image: '/team_images/shivam.jpg', github: 'https://github.com/ShivamPoW/', twitter: 'https://x.com/Shevxer/', linkedin: 'https://www.linkedin.com/in/shivampow/' },
  { name: 'Omkar Darde', role: 'Designer', image: '/team_images/omkar.jpg', github: 'https://github.com/0xClint/', twitter: 'https://x.com/0x_Clint/', linkedin: 'https://www.linkedin.com/in/omkardarde/' },
  { name: 'Alok Kumar', role: 'Researcher at Secbit', image: '/team_images/alok.jpg', github: 'https://github.com/surfer05/', twitter: 'https://x.com/surfer__05/', linkedin: 'https://www.linkedin.com/in/alok-kumar-089967220/' },
  { name: 'Priyanshu Mehra', role: 'Head of Design', image: '/team_images/priyanshu.jpg', github: 'https://github.com/Priyanshu95663/', twitter: 'https://x.com/Priynshu_M03/', linkedin: 'https://www.linkedin.com/in/priyanshum4design/' },
  { name: 'Archit Gangwal', role: 'Core Member', image: '/team_images/archit.jpeg', github: 'https://github.com/arcwood/', linkedin: 'https://www.linkedin.com/in/archit-gangwal-16b035228/' },
  { name: 'Shashank Trivedi', role: 'Founder Privote', image: '/team_images/shashank.jpg', github: 'https://github.com/lordshashank/', twitter: 'https://x.com/0xlord_forever/', linkedin: 'https://www.linkedin.com/in/shashanktrivedi7/' },
  { name: 'Puspendra', role: 'Building Privote', image: '/team_images/puspendra.jpg', github: 'https://github.com/silent-cipher/', twitter: 'https://x.com/silent_c1pher/', linkedin: 'https://www.linkedin.com/in/puspendra-mahariya-112059238/' },
  { name: 'Richa', role: 'Software Developer, JP Morgan & Chase', image: '/team_images/richa.jpg', github: 'https://github.com/Richa-iitr/', twitter: 'https://x.com/richa3112/', linkedin: 'https://www.linkedin.com/in/richa-3087a120a/' },
  { name: 'Chirag Baghasingh', role: 'Ethereum Protocol Fellow', image: '/team_images/chirag.jpg', github: 'https://github.com/chirag-bgh/', twitter: 'https://x.com/0xstrider_/', linkedin: 'https://www.linkedin.com/in/chirag-baghasingh-753b711b9/' },
  { name: 'Movish Verma', role: 'Software Developer, SAP Labs', image: '/team_images/movish.jpg', twitter: 'https://x.com/movish_v/', linkedin: 'https://www.linkedin.com/in/movishverma/' },
  { name: 'Neerav Chittora', role: 'Software Developer, Google', image: '/team_images/neerav.jpeg', github: 'https://github.com/neerav1234/', twitter: 'https://x.com/NeeravChittora/', linkedin: 'https://www.linkedin.com/in/neerav-chittora-a470071ba/' },
  { name: 'Pooja Patel', role: 'Software Developer, Microsoft', image: '/team_images/pooja.jpg', twitter: 'https://x.com/0xpooja6/', linkedin: 'https://www.linkedin.com/in/pooja-patel-512b29227/' },
  { name: 'Parthsarthi Mishra', role: 'Software Engineer, Qualcomm', image: '/team_images/parthsarthi.jpg', linkedin: 'https://www.linkedin.com/in/parthsarthi-mishra-86a30814b/' },
  { name: 'Kamal Sharma', role: '', image: '/team_images/kamal.jpg', github: 'https://github.com/kamal3951/', twitter: 'https://x.com/0xmaxlad/', linkedin: 'https://www.linkedin.com/in/kamalsharma01/' },
  { name: 'Yash Bhanushali', role: '', image: '/team_images/yash.jpg', twitter: 'https://x.com/Y_ash19/', linkedin: 'https://www.linkedin.com/in/yash-bhanushali-a34a2a22a/' },
  { name: 'Jatin Agarwal', role: '', image: '/team_images/jatin.jpg', twitter: 'https://x.com/_jatinagarwal/', linkedin: 'https://www.linkedin.com/in/jatinagarwal69/' },
];
