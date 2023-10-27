import { Home } from "./pages/Home";
import { Project } from "./pages/Project";
import { WorkExp } from "./pages/WorkExp";
import { AboutMe } from "./pages/AboutMe";

export function SinglePage() {
    return (
        <div>
            <Home />
            <Project />
            <WorkExp />
            <AboutMe />
        </div>
    )
}