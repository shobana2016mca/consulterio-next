import Card from "./Card";
/// create this data i 'll call you are you here?
const cardData = [
  {
    id: "01",
    title: "Client Consultation and Needs Analysis",
    desctiption:
      "Understand client’s hiring needs, culture, and tech requirements Analyze position responsibilities, qualifications, and skills.",
  },
  {
    id: "02",
    title: "Job Description Development:",
    desctiption:
      "Craft compelling descriptions attracting top talent.Highlight key responsibilities and growth opportunities.",
  },
  {
    id: "03",
    title: "Candidate Sourcing",
    desctiption:
      "Utilize diverse channels for sourcing.Employ advanced search techniques for passive candidates.",
  },
  {
    id: "04",
    icon: "/logo.png",
    title: "Screening and Evaluation",
    desctiption:
      "Review resumes and shortlist candidates.Conduct screenings and technical assessments.",
  },
  {
    id: "05",
    title: "Interview Coordination",
    desctiption:
      "Schedule interviews and support parties.Collect feedback to inform decisions.",
  },
  {
    id: "06",
    title: "Offer Negotiation and Closure",
    desctiption:
      "Facilitate communication and negotiate offers.Ensure smooth transition and onboarding",
  },
  {
    id: "07",
    title: "Follow-Up and Feedback!",
    desctiption:
      "Maintain communication for satisfaction.Gather feedback to enhance practices..",
  },
  {
    id: "08",
    title: "Continuous Improvement",
    desctiption:
      "Refine processes based on trends and feedback.Stay updated on industry best practices.",
  },
];

export default function Services() {
  return (
    <section className="flex justify-center items-center self-stretch px-16 py-20 w-full bg-stone-50 max-md:px-5 max-md:max-w-full">
      <article className="flex flex-col items-center mt-20 mb-12 w-full max-w-[1438px] max-md:my-10 max-md:max-w-full">
        <h3 className="text-3xl font-extrabold tracking-widest text-black uppercase">
          Process I Plan
        </h3>
        <h4 className="mt-8 text-5xl text-center capitalize text-sky-950 max-md:max-w-full max-md:text-4xl">
          Assist you to find a job that matches with your goal
        </h4>
        <section className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-cols-4 gap-4">
            {cardData.map((card, idx) => (
              <Card
                key={idx}
                id={card.id}
                title={card?.title}
                description={card.desctiption}
              />
            ))}
          </div>
        </section>
      </article>
    </section>
  );
}
