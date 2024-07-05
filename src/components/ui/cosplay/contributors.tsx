import ContributorsMarque from "./contributor";

export default function ContributorsPage() {
  return (
    <section className=" flex flex-col gap-5 mt-10 ">
      <div className=" flex flex-col gap-3 items-center text-center">
        <h2 className="font-bold text-4xl ">
          Our
          <span className="ml-2 bg-gradient-to-tr from-sky-500 to-cyan-300 bg-clip-text text-transparent">
            Contributors
          </span>
        </h2>
        <p>
          This project was made possible by the following contributors. <br /> We would like to
          thank them for their contributions to this project.
        </p>
      </div>
      <ContributorsMarque />
    </section>
  );
}
