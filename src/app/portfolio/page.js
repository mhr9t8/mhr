import ProjectsGrid from "../_components/ProjectsGrid";
import { WEB_DESIGN_PROJECTS } from "../../../data/WEB_DESIGN_PROJECTS";
import { WEB_APP_PROJECTS } from "../../../data/WEB_APP_PROJECTS";
import { SQA_PROJECTS } from "../../../data/SQA_PROJECTS";

function Section({ title, projects, id }) {
  return (
    <div className="py-14" id={id}>
      <h2 className="text-3xl font-semibold inline-block bg-linear-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
        {title}
      </h2>
      <hr className="mt-5 mb-8" />
      <ProjectsGrid projects={projects} />
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <div>
      <Section
        title="Web Design"
        projects={[...WEB_DESIGN_PROJECTS].reverse()}
        key={"web-design"}
        id="web-design"
      />
      <Section
        title="Web App"
        projects={[...WEB_APP_PROJECTS].reverse()}
        key={"web-app"}
        id="web-app"
      />
      <Section
        title="SQA"
        projects={[...SQA_PROJECTS].reverse()}
        key={"sqa"}
        id="sqa"
      />
    </div>
  );
}
