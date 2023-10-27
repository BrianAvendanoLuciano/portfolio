import { LeftContainer } from "../ui/LeftContainer"
import { Timeline } from "../ui/timeline/Timeline"
import { TimelineItem } from "../ui/timeline/TimelineItem"

export function WorkExp() {
    return (
        <div id="workexp">
            <LeftContainer title="Work Experience" bgColor="bg-gray-800" fontColor="text-white">
                <Timeline>
                    <TimelineItem
                        date="October 2023 - Current"
                        title="Backend Developer at Collabera Digital"
                        description="Worked on several AWS lambda serverless APIs"
                    />
                    <TimelineItem
                        date="August 2021 - March 15 2023"
                        title="L2 Lead at Cafe24"
                        description="Develop many important projects for the company which comes with collaboration with other big companies like YouTube and TikTok. 
                        We created an app that lets Cafe24 merchants link their Cafe24 malls and display all their products on TikTok and YouTube shopping"

                        description1="I have extensive experience in creating detailed technical analyses. In technical analysis, we meticulously design 
                        and map out the intricate web of interconnected technologies and microservices that will constitute the backbone of the application 
                        we are about to embark on developing. By visualizing this intricate network of technologies, we gain valuable insights into the optimal 
                        ways in which various components can interact with each other, ensuring a robust and efficient system architecture that meets the 
                        requirements of our project. This comprehensive approach to technical analysis enables us to identify potential bottlenecks, anticipate
                        challenges, and devise strategies to overcome them, ultimately leading to the successful execution of our development endeavors."

                        description2="I created a detailed development plan that outlines our strategies and approaches for developing the app. 
                        This plan includes an analysis of the steps and processes involved, as well as estimated completion times for each stage. 
                        By planning and strategizing, we aim to ensure a smooth development process, minimizing obstacles and delays. 
                        We have also considered factors like technical challenges and resource allocation. 
                        Our development plan provides a roadmap for the successful creation and timely completion of the app."

                        description3="Performs code review to make sure that all of our devs are following the company’s code convention"
                    />
                    <TimelineItem
                        date="June 2019 - july 2021"
                        title="L1 Full-stack web developer at Cafe24"
                        description="I developed a centralized API for three of the most commonly used visualization APIs (charts) in cafe24. 
                        This API comes with standard settings to provide convenience to other developers. Additionally, I created a variety 
                        of custom graphic charts in the company's in-house Grafana dashboard. Moreover, I contributed to the development of several
                        internal applications for the company. These applications were built using Python, Golang, NuxtJS, PostgreSQL, and MongoDB."
                    />
                </Timeline>
            </LeftContainer>
        </div>
    )
}