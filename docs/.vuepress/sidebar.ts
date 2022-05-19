// import { sidebar } from "vuepress-theme-hope";
import navbar from "./navbar";

const sidebar = {};

navbar.forEach((item: any) => {
  if (typeof item === "string") return;
  sidebar[item.prefix] = [item];
});

export default sidebar;
