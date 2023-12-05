import { info } from "../myInfo";

export default function Template() {
  const to = {
    name: "Hiring Manager",
    company: "Binary Stride",
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* font-serif */}
      <div className="w-[210mm] h-[297mm] bg-white px-20 py-16">
        <h1 className="text-6xl font-semibold">
          {info.firstName} {info.lastName}
        </h1>
        <h3 className="text-xl font-medium pt-7">Front End Developer</h3>
        <div className="pt-16 grid grid-cols-2 gap-2 text-xs">
          <div className="flex">
            <div className="font-medium w-[100px]">Location</div>
            <div className="text-slate-500">🏠 {info.address}</div>
          </div>
          <div className="flex">
            <div className="font-medium w-[100px]">Phone</div>
            <div className="text-slate-500">📞 {info.phone}</div>
          </div>
          <div className="flex col-start-2">
            <div className="font-medium w-[100px]">Email</div>
            <div className="text-slate-500">✉️ {info.email}</div>
          </div>
        </div>
        <div className="flex pt-16">
          <div className="basis-1/4">
            <div className="text-xs">TO</div>
            <div className="pt-6 text-sm font-medium">{to.name}</div>
            <div className="pt-2 text-sm text-slate-500">{to.company}</div>
            <div className="pt-20 text-xs">From</div>
            <div className="pt-6 text-sm font-medium">Front End Developer</div>
            <div className="pt-2 text-sm text-slate-500">
              {info.firstName} {info.lastName}
            </div>
          </div>
          <div className="basis-3/4 text-sm leading-6">
            <p>
              I hope this email finds you well. I am writing to express my
              interest in the Front End Developer position at {to.company}, as
              advertised on JobsDB. With a strong background in React.js,
              Next.js, and Typescript, I am confident in my ability to
              contribute effectively to your team.
            </p>
            <p className="pt-8">
              I recently relocated from South Korea to pursue career
              opportunities in Thailand, and I am excited about the prospect of
              joining a forward-thinking company like {to.company}. My academic
              background, coupled with hands-on experience in developing web,
              makes me a suitable candidate for this role.
            </p>
            <p className="pt-8">
              Thank you for considering my application. I would welcome the
              opportunity to further discuss how my skills and experiences align
              with the goals of {to.company}. Please find my resume attached for
              your reference.
            </p>
            <p className="pt-8">
              {info.firstName} {info.lastName}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
