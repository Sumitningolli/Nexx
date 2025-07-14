import MileStone from "./MileStone";

const roadmap = [
  {
    id: 1,
    name: "Project Kickoff",
    description: "Kick-off meeting and requirement gathering",
  },
  {
    id: 2,
    name: "Design",
    description: "Design and prototyping",
  },
  {
    id: 3,
    name: "Development",
    description: "Development and testing",
  },
  {
    id: 4,
    name: "Deployment",
    description: "Deployment and final testing",
  },
  {
    id: 5,
    name: "Maintenance",
    description: "Maintenance and support",
  },
];

const RoadMapSection = () => {
  return (
    <section className="max-w-80 mx-auto">
      <h1 className="font-bold text-3xl text-center mb-8 mt-15">Roadmap</h1>
      {
      roadmap.map((roadmapItem, index) => (
        <MileStone
          key={index}
          title={roadmapItem.name}
          description={roadmapItem.description}
          lastItem={index === roadmap.length - 1}
        />
      ))}
    </section>
  );
};

export default RoadMapSection;
