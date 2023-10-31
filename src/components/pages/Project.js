import { LeftContainer } from "../ui/LeftContainer"
import { ProjectCardTwo } from "../ui/ProjectCardTwo"

export function Project() {
    return (
        <div id="project">
            <LeftContainer
            title="Here's some of my works" 
            subtitle="These are the projects that I am involved with. I lead some of them, and some of them I am a big part of."
            >
                <div className="grid grid-cols-2 gap-4 mt-20" >
                    <ProjectCardTwo 
                        title="TikTok Channel" 
                        image="https://appservice-img.s3.amazonaws.com/apps/v8gh8E7QDp9jGyTsDNt2wB/ko/list/image?1660690898" 
                        link="https://store.cafe24.com/kr/apps/16076" 
                        description="Link users to their tiktok shopping"
                        rating="0"
                        star="no"
                        gstar="1,2,3,4,5"
                    />
                    <ProjectCardTwo 
                        title="Google Channel" 
                        image="https://appservice-img.s3.amazonaws.com/apps/o0NmjY3rBNanYOidvGwodB/ko/list/image?1634007212" 
                        link="https://store.cafe24.com/kr/apps/10001" 
                        description="Link users to their google merchant"
                        rating="0"
                        star="no"
                        gstar="1,2,3,4,5"
                    />
                    <ProjectCardTwo 
                        title="Youtube Channel" 
                        image="https://appservice-img.s3.amazonaws.com/apps/vT1ei8jMAKNK3LyPyAm0AE/ko/list/image?1682469055" 
                        link="https://store.cafe24.com/kr/apps/19652" 
                        description="Link users to their youtube shopping"
                        rating="5"
                        star="1,2,3,4,5"
                    />
                    <ProjectCardTwo 
                        title="CompEl" 
                        image="https://img.freepik.com/free-photo/abundant-collection-antique-books-wooden-shelves-generated-by-ai_188544-29660.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698278400&semt=ais"
                        isButtonHidden="Y"
                        description="Under construction. will provide link when available"
                    />
                </div>
            </LeftContainer>
        </div>
    )
}