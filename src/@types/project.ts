import { IStack } from "./stack";

export interface IProject {
  title: string,
  img: string,
  linkGitHub: string,
  description: string;
  deploy: string,
  stacks : IStack[]
} 
