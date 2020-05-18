type Skill = {
  title: string;
  skills: string[];
};

export type Column = {
  title: string;
  subtitle: string;
  skills: Skill;
  tools: Skill;
};

export type ColumnArray = {
  columns: Column[];
};

export const content: ColumnArray = {
  columns: [
    {
      title: "Designer",
      subtitle: "I love to design clean and thoughtful user interfaces.",
      skills: {
        title: "Things I like to design:",
        skills: ["UI, Web, Mobile, Apps, Logos"]
      },
      tools: {
        title: "Design tools:",
        skills: ["Sketch", "Invision", "Zeplin"]
      }
    },
    {
      title: "Front-end Developer",
      subtitle:
        "I enjoy coding things from scratch and bringing ideas to life in mobile and web apps.",
      skills: {
        title: "Languages and frameworks I use:",
        skills: ["React, React Native, Redux", "Javascript, Typescript, VBA"]
      },
      tools: {
        title: "Dev tools:",
        skills: [
          "VSCode",
          "Github",
          "Gitlab",
          "Terminal",
          "Z shell",
          "Fastlane"
        ]
      }
    }
  ]
};
