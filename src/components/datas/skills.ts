import HTMLImg from "../../assets/images/HTMLlogo.png";
import CSSImg from "../../assets/images/CSSlogo.png";
import BootstrapImg from "../../assets/images/bootstraplogo.png";
import TailwindImg from "../../assets/images/tailwindlogo.png";
import JavascriptImg from "../../assets/images/jslogo.png";
import ReactImg from "../../assets/images/reactlogo.png";
import TypescriptImg from "../../assets/images/ts.png";
import PythonImg from "../../assets/images/pythonlogo.png";
import DjangoImg from "../../assets/images/djangologo.png";
import DjangorestImg from "../../assets/images/apilogo.png";
import MYSQLImg from "../../assets/images/mysqllogo.png";
import VSCodeImg from "../../assets/images/vscodelogo.png";
import CopilotImg from "../../assets/images/copilotlogo.png";
import GitImg from "../../assets/images/gitlogo.png";
import AntigravityImg from "../../assets/images/antigravitylogo.png";

export type Skill = {
    name: string;
    icon: string;
    color: string;
    level: number;
};

export const FRONTEND_SKILLS: Skill[] = [
    { name: "HTML", icon: HTMLImg, color: "#E34F26", level: 95 },
    { name: "CSS", icon: CSSImg, color: "#1572B6", level: 90 },
    { name: "Bootstrap", icon: BootstrapImg, color: "#7952B3", level: 80 },
    { name: "TailwindCSS", icon: TailwindImg, color: "#06B6D4", level: 85 },
    { name: "JavaScript", icon: JavascriptImg, color: "#F7DF1E", level: 80 },
    { name: "React", icon: ReactImg, color: "#61DAFB", level: 85 },
    { name: "TypeScript", icon: TypescriptImg, color: "#3178C6", level: 75 },
];

export const BACKEND_SKILLS: Skill[] = [
    { name: "Python", icon: PythonImg, color: "#3776AB", level: 70 },
    { name: "Django", icon: DjangoImg, color: "#0C4B36", level: 75 },
    { name: "Django REST", icon: DjangorestImg, color: "#0C4B36", level: 70 },
    { name: "MySQL", icon: MYSQLImg, color: "#4479A1", level: 60 },
];

export const TOOLS_SKILLS: Skill[] = [
    { name: "VS Code", icon: VSCodeImg, color: "#007ACC", level: 90 },
    { name: "Git & GitHub", icon: GitImg, color: "#F05032", level: 80 },
    { name: "GitHub Copilot", icon: CopilotImg, color: "#6CC644", level: 80 },
    { name: "Antigravity", icon: AntigravityImg, color: "#A855F7", level: 65 },
];
