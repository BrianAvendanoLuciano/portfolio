import { LeftContainer } from "../ui/LeftContainer"
import { ProjectCard } from "../ui/ProjectCard"
import { ProjectCardTwo } from "../ui/ProjectCardTwo"

export function Project() {
    return (
        <LeftContainer
            title="Here's some of my works" 
            subtitle="These are the projects that I am involved with. I lead some of them, some of them I am a big part of"
            bgColor="bg-gray-800" 
            fontColor="text-white"
        >
            <div className="grid grid-cols-2 gap-4 mt-20" >
                <ProjectCardTwo title="TikTok Channel"/>
                <ProjectCardTwo title="Google Channel"/>
                <ProjectCardTwo title="Youtube Channel"/>
                <ProjectCardTwo title="Compel"/>
            </div>
            <div className="grid grid-rows-4 grid-flow-col gap-4 mt-20">
                <ProjectCard
                    // bgColor="bg-gray-950"
                    title="TikTok Channel"
                    subtitle="Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today."
                />
                <ProjectCard
                    // bgColor="bg-blue-600"
                    title="Google Channel"
                    subtitle="Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today."
                />
                <ProjectCard
                    // bgColor="bg-red-600"
                    title="Youtube Channel"
                    subtitle="Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today."
                />
                <ProjectCard
                    // bgColor="bg-emerald-600"
                    title="Compel"
                    subtitle="Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today."
                />
            </div>
        </LeftContainer>
    )
}