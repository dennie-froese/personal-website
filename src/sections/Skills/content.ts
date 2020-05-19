type Skill = {
  title: string;
  skills: string[];
};

export type ColumnContent = {
  title: string;
  subtitle: string;
  skills: Skill;
  tools: Skill;
};

export type ColumnArray = {
  columns: ColumnContent[];
};

export const content: ColumnArray = {
  columns: [
    {
      title: "Designer",
      subtitle:
        "I love to design clean and thoughtful user interfaces, with contents structured in a simple and user-friendly way.",
      skills: {
        title: "Things I like to design:",
        skills: ["UI, Web, Mobile, Apps, Logos", ""]
      },
      tools: {
        title: "Design tools:",
        skills: ["Sketch", "Invision", "Zeplin"]
      }
    },
    {
      title: "Front-end Developer",
      subtitle:
        "I enjoy developing things from scratch and bringing ideas to life in mobile and web apps.",
      skills: {
        title: "Languages and frameworks I use:",
        skills: [
          "Javascript, Typescript, VBA",
          "React, React Native, Redux, Jest testing"
        ]
      },
      tools: {
        title: "Dev tools:",
        skills: ["VSCode", "Github", "Terminal / Z shell"]
      }
    }
  ]
};
