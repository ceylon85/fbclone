import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
  {
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Ryan Dahl",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Ryan_Dahl.jpg/800px-Ryan_Dahl.jpg",
    profile:
      "https://www.mappingthejourney.com/wp-content/uploads/2017/08/image.jpg",
  },
];
function Stories() {
  return (
    <div className="flex justify-center mx-auto space-x-3">
      {stories.map((story) => (
        <StoryCard
          key={story.key}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
