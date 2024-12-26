/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace EMZ {
  type ProjectImg = {
    label: string;
    image: string;
  };

  type Project = {
    id: number;
    portraid: string;
    title: string;
    desc: string;
    stack: TechID[];
    tech?: Tech[];
    images: ProjectImg[];

    preview: string;
    code: string;
  };

  type TechID =
    | "react"
    | "astro"
    | "next"
    | "sass"
    | "tailwind"
    | "css"
    | "tauri"
    | "bun";

  type Tech = {
    id: TechID;
    icon: string;
    label: string;
    color: string;
  };
}
