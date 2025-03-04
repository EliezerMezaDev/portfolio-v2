const projects: EMZ.Project[] = [
  {
    id: 0,
    portraid: "images/projects/theCocktailMenu.webp",
    title: "The Cocktail menu",
    desc: "Prueba de uso de comunicacion API REST, SASS y un efecto de texto que vi en Pinterest.",
    stack: ["react", "sass"],
    images: [],
    preview: "",
    code: "https://github.com/EliezerMezaDev/TheCocktailMenu",
  },
];

export const techs: EMZ.Tech[] = [
  {
    id: "react",
    label: "React",
    color: "#00d8ff",
    icon: "icons/techs/react.svg",
  },
  {
    id: "astro",
    label: "Astro",
    color: "#ff5d01",
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
    color: "#b65a88",
    icon: "icons/techs/sass.svg",
  },
  {
    id: "tailwind",
    label: "Tailwind",
    color: "#1ea3bb",
    icon: "icons/techs/tailwind.svg",
  },
  {
    id: "css",
    label: "CSS",
    color: "#442265",
    icon: "icons/techs/css.svg",
  },
  {
    id: "tauri",
    label: "Tauri",
    color: "#ccaf26",
    icon: "icons/techs/tauri.svg",
  },
  {
    id: "bun",
    label: "Bun",
    color: "#948976",
    icon: "icons/techs/bun.svg",
  },
];

const getTechByNames = (_techs: EMZ.TechID[]) => {
  return techs.filter((t) => _techs.includes(t.id));
};

export const getProjectSourceByID = (_ids: number[]) => {
  return projects
    .filter((p) => checkFilterMatch(_ids, [p.id]))
    .map((p) => {
      return { ...p, tech: getTechByNames(p.stack) };
    });
};

export const getProjectSourceByTech = (_techs: EMZ.TechID[]) => {
  return projects
    .filter((p) => checkFilterMatch(p.stack, _techs) || _techs.length === 0)
    .map((p) => {
      return { ...p, tech: getTechByNames(p.stack) };
    });
};

const checkFilterMatch = (_source: any[], _search: any[]) => {
  const matches = _search.filter((s) => _source.includes(s));

  return matches.length === _search.length;
};
