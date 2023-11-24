import { info } from "../myInfo";

export default function Template() {
  const to = {
    name: "Dain Nova",
    company: "SCP",
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
            <div className="pt-6 text-sm font-medium">
              {info.firstName} {info.lastName}
            </div>
            <div className="pt-2 text-sm text-slate-500">
              Front End Developer
            </div>
          </div>
          <div className="basis-3/4 text-sm leading-6">
            <p>
              As an accomplished and seasoned professional, I was compelled to
              contact you with my interest in the test opportunity with Test. I
              bring an extensive background of success in this field, along with
              the qualifications which are required to make a positive impact in
              this role.
            </p>
            <p className="pt-8">
              I offer a combination of unique skills and competencies which I
              have developed through a lengthy and rewarding career. I have
              honed quality assurance and project coordination skills while
              being proficient in communication. In previous roles, I have
              contributed to organizational improvements, collaborative team
              efforts and attainment of key business targets.
            </p>
            <p className="pt-8">
              Thank you for read.
              <br />
              {info.firstName} {info.lastName}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
