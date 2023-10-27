import { LeftContainer } from "../ui/LeftContainer"
import { Timeline } from "../ui/timeline/Timeline"
import { TimelineItem } from "../ui/timeline/TimelineItem"

export function WorkExp() {
    return (
        <div id="workexp">
            <LeftContainer title="Work Experience">
                <Timeline>
                    <TimelineItem
                        date="October 2023 - Current"
                        title="Backend Developer at Collabera Digital"
                        description="Technical Analysis, Development Plan, Code Review, Lead a Team, Writing Code, Rest API"
                    />
                    <TimelineItem
                        date="August 2021 - March 15 2023"
                        title="L2 Lead at Cafe24"
                        description="Technical Analysis, Development Plan, Code Review, Lead a Team, Writing Code, Rest API"
                    />
                    <TimelineItem
                        date="June 2019 - july 2021"
                        title="L1 Full-stack web developer at Cafe24"
                        description="Technical Analysis, Development Plan, Code Review, Lead a Team, Writing Code, Rest API"
                    />
                </Timeline>
            </LeftContainer>
        </div>
    )
}