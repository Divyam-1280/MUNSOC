import Image from "next/image";

export default function Page() {
  const founders = [
    {
      name: "Prof. Dr. Gyanabati Khuraijam",
      role: "Faculty Advisor"
    },
    {
      name: "Chaitanya Raj",
      role: "Founding Member"
    },
    {
      name: "Divyam Raj Singh",
      role: "Founding Member"
    },
    {
      name: "Varun Srivastava",
      role: "Founding Member"
    }
  ];

  const members = [
    { name: "Mouni Sanapala", img: "" },
    { name: "Harish Saharan", img: "" },
    { name: "Tushit Dev Tripathi", img: "" },
    { name: "Siddhant Raj", img: "" },
    { name: "Anshuman Das", img: "" },
    { name: "Rudransh Srivastava", img: "" },
    { name: "Shivam Shekhar Soy", img: "" },
    { name: "Neha Das", img: "" },
    { name: "Varun Kumawat", img: "" }
  ];

  const events = [
    {
      title: "KACE",
      subtitle: "Knowledge and Collaboration Exchange",
      bg: "https://placehold.co/600x400/png"
    },
    {
      title: "NITAMUN",
      subtitle: "NIT Agartala Model United Nations",
      bg: "https://placehold.co/600x400/png"
    }
  ]

  return (
    <main className="p-3 xl:max-w-7xl xl:min-w-2xl mx-auto">
      <header className="text-center mx-auto w-fit">
        <h1 className="text-3xl xl:text-6xl py-8 font-bold tracking-tighter text-pretty">
          MUNSOC is bringing diplomacy to student life
        </h1>
      </header>
      <Image
        alt="munsoc pic"
        src="https://placehold.co/1280x720/png"
        height={1280}
        width={720}
        className="mx-auto w-full object-cover rounded-lg my-2"
      />
      <h2 className="text-2xl tracking-tighter font-bold py-6">
        Building a Legacy of Diplomacy and Deliberation at NIT Agartala
      </h2>
      <article className="space-y-6 dark:text-[#D0D6E0]">
        <p>
          MUNSOC NIT Agartala was founded in 2023 with the vision of introducing students to the world of diplomacy, deliberation, and negotiation. Committed to addressing critical global challenges, the society aims to cultivate professionalism, critical thinking, and leadership among delegates.
        </p>
        <p>
          Born out of a collective passion for global affairs and meaningful discourse, MUNSOC seeks to create a vibrant platform where students can engage with pressing international issues, explore diverse perspectives, and develop a deeper understanding of the global order.
        </p>
        <p>
          Through Model United Nations conferences, structured debates, and regular policy-focused sessions, MUNSOC empowers its members to become informed, articulate, and responsible global citizens.
        </p>
      </article>
      <h2 className="text-2xl tracking-tighter font-bold py-6">
        The Students and Mentors Who Sparked the MUNSOC Legacy
      </h2>
      <article className="space-y-6 dark:text-[#D0D6E0]">
        <p>
          MUNSOC NIT Agartala was founded in 2023 by a group of passionate individuals who shared a vision of bringing diplomacy, debate, and global awareness to campus life. Their dedication laid the groundwork for a society built on critical thinking, collaboration, and leadership. These are the founding members who turned that vision into reality.
        </p>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {founders.map((founder) => (
              <div key={founder.name} className="p-1 space-y-3">
                <Image
                  alt="munsoc pic"
                  src="https://placehold.co/720x720/png"
                  height={720}
                  width={720}
                  className="mx-auto aspect-square object-cover rounded-lg xl:size-72"
                />
                <div>
                  <span className="font-semibold">
                    {founder.name}
                  </span><br />
                  <span className="text-sm">
                    {founder.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p>
          A group of committed initial members supported the founding team in shaping MUNSOC's early journey. Their enthusiasm and efforts helped turn ideas into action and set the foundation for the club’s growth.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {members.map((member) => (
            <div key={member.name} className="p-1 space-y-3">
              <Image
                alt="munsoc pic"
                src="https://placehold.co/720x720/png"
                height={720}
                width={720}
                className="mx-auto aspect-square object-cover rounded-lg xl:size-72"
              />
              <div>
                <span className="font-semibold">
                  {member.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </article>
      <h2 className="text-2xl tracking-tighter font-bold py-6">
        The Students and Mentors Who Sparked the MUNSOC Legacy
      </h2>
      <article className="space-y-6 dark:text-[#D0D6E0]">
        <p>
          MUNSOC proudly hosts events that bring together students passionate about diplomacy, debate, and international affairs. Our flagship conferences — KACE and NITAMUN — serve as platforms for meaningful dialogue, strategic thinking, and real-world problem-solving. Through these events, we aim to cultivate a culture of global awareness, sharpen public speaking and negotiation skills, and empower students to become confident and informed leaders.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div key={event.title} className="border border-border rounded-lg p-3 space-y-2">
              <Image
                alt="munsoc pic"
                src="https://placehold.co/1280x720/png"
                height={720}
                width={1280}
                className="aspect-video object-cover rounded-lg"
              />
              <div>
                <span className="text-xl font-semibold">{event.title}</span><br />
                <span className="text-sm text-muted-foreground">{event.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </article>
    </main>
  )
}
