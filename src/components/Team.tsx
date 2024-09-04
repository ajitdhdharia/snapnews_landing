import React from "react";
import Image from "next/image";

// {
//   id: 2,
//   name: "Sabya Sachi Das",
//   designation: "Data Strategy",
//   image: "/images/sabya.jpeg",
// },
// {
//   id: 4,
//   name: "Ajit Dhdharia",
//   designation: "Lead Developer",
//   image: "/images/ajit.jpeg",
// },
// {
//   id: 5,
//   name: "Anchit Gujral",
//   designation: "Content Sourcing",
//   image: "/images/anchit.jpeg",
// },

const Team = () => {
  const people = [
    {
      id: 1,
      name: "Nitin Sharma",
      designation: "CEO",
      image: "/images/nitin.png",
    },

    {
      id: 3,
      name: "Ambaram Srivastava",
      designation: "CTO",
      image: "/images/ambaram.png",
    },
  ];

  return (
    <>
      <section
        id="team"
        className="flex flex-col items-center pt-2 pb-16 lg:py-8 lg:pb-48"
      >
        <div className="flex justify-center items-center pb-2 lg:pb-4">
          <span className="text-slate-800 font-rubik text-3xl md:text-4xl lg:text-5xl font-medium pr-2 lg:pr-4">
            Meet our
          </span>
          <span className="text-snapNewsColor-blue font-rubik text-3xl md:text-4xl lg:text-5xl font-medium">
            Team
          </span>
        </div>
        <p className="max-w-4xl text-lg lg:text-2xl text-center font-light text-slate-800 px-4 lg:pt-2">
          {" "}
          Snapnews.ai is privately held by its founder members, ensuring a
          unified vision and strategic direction. The Snapnews team is entirely
          based out of Toronto, Canada.
        </p>
        {/* md:grid-cols-3 lg:grid-cols-5 */}
        <div className="grid grid-cols-2 items-center justify-center mt-8">
          {people.map((person) => (
            <>
              <div className="flex flex-col justify-center items-center mx-8 pt-16 lg:pt-0">
                <div className="w-full lg:w-48 text-center pb-2 lg:pb-6">
                  {person.id % 2 === 0 ? (
                    <h1 className="text-slate-800 text-sm lg:text-xl font-rubik font-medium md:font-normal uppercase lg:mt-64 whitespace-nowrap">
                      {person.name}
                    </h1>
                  ) : (
                    <h1 className="text-slate-800 text-sm lg:text-xl font-rubik font-medium md:font-normal  uppercase whitespace-nowrap">
                      {person.name}
                    </h1>
                  )}
                  <span className="text-snapNewsColor-blue lg:text-xl text-center font-rubik">
                    {person.designation}
                  </span>
                </div>
                <div className="rounded-3xl bg-gradient-to-br from-sky-500 to-sky-200">
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={175}
                    height={175}
                    className="rounded-3xl p-1"
                    loading="lazy"
                  />
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default Team;
