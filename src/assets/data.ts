const projects: EMZ.Project[] = [
  {
    id: 0,
    portraid: "images/projects/project0.webp",
    title: "Projecto de prueba",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat labore odit iure officiis id quas.",
    stack: ["react", "tailwind"],
    images: [],

    preview: "https://asd.com",
    code: "https://asd.com",
  },
];

export const techs: EMZ.Tech[] = [
  {
    id: "react",
    label: "React",
    color: "#1698c8",
    icon: "icons/techs/react.svg",
  },
  {
    id: "astro",
    label: "Astro",
    color: "#e741b1",
    icon: "icons/techs/astro.svg",
  },
  {
    id: "next",
    label: "Nextjs",
    color: "#080808",
    icon: "icons/techs/nextjs.svg",
  },
  {
    id: "sass",
    label: "SASS",
    color: "#ce6b9c",
    icon: "icons/techs/sass.svg",
  },
  {
    id: "tailwind",
    label: "Tailwind",
    color: "#1dc0cd",
    icon: "icons/techs/tailwind.svg",
  },
  {
    id: "css",
    label: "CSS",
    color: "#316af1",
    icon: "icons/techs/css.svg",
  },
  {
    id: "tauri",
    label: "Tauri",
    color: "#ffc337",
    icon: "icons/techs/tauri.svg",
  },
  {
    id: "bun",
    label: "Bun",
    color: "#fbf0e0",
    icon: "icons/techs/bun.svg",
  },
];

const getTechByNames = (_techs: EMZ.TechID[]) => {
  return techs.filter((t) => _techs.includes(t.id));
};

export const getProjectSourceByID = (_id: number) => {
  const p = projects.filter((p) => p.id === _id)[0];

  return { ...p, tech: getTechByNames(p.stack) };
};

export const getProjectSourceByTech = (_techs: EMZ.TechID[]) => {
  return projects
    .filter((p) => checkFilterMatch(p.stack, _techs))
    .map((p) => {
      return { ...p, tech: getTechByNames(p.stack) };
    });
};

const checkFilterMatch = (_source: EMZ.TechID[], _search: EMZ.TechID[]) => {
  const matches = _search.filter((s) => _source.includes(s));

  return matches.length === _search.length;
};
