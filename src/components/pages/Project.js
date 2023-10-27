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
                <ProjectCardTwo title="TikTok Channel" image="https://appservice-img.s3.amazonaws.com/apps/v8gh8E7QDp9jGyTsDNt2wB/ko/list/image?1660690898" link="https://store.cafe24.com/kr/apps/16076" description="link users to their tiktok shopping"/>
                <ProjectCardTwo title="Google Channel" image="https://appservice-img.s3.amazonaws.com/apps/o0NmjY3rBNanYOidvGwodB/ko/list/image?1634007212" link="https://store.cafe24.com/kr/apps/10001" description="link users to their goolge merchant"/>
                <ProjectCardTwo title="Youtube Channel" image="https://appservice-img.s3.amazonaws.com/apps/vT1ei8jMAKNK3LyPyAm0AE/ko/list/image?1682469055" link="https://store.cafe24.com/kr/apps/19652" description="link users to their youtube shopping"/>
                <ProjectCardTwo title="Compel"/>
            </div>
        </LeftContainer>
    )
}