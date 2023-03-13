import { Box } from '@mui/material';

import { PROJECT_LIST } from '@mocks/project';

import ContainerBox from '@common/container-box/container-box';
import CustomAccordions from '@common/custom-accordion/custom-accordion';

const Projects = () => {
    const renderProjects = () => (
        <Box>
            {PROJECT_LIST.map((item, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                    <CustomAccordions
                        id={item.id}
                        name={item.name}
                        src={item.image}
                        alt={item.name}
                        ariaControls={item.panelContent}
                        stack={item.title}
                        description={item.description}
                        titleCode={item.titleCode}
                        linkCode={item.linkCode}
                        titleProject={item.titleProject}
                        linkProject={item.linkProject}
                    />
                </Box>
            ))}
        </Box>
    );

    return (
        <section id="project">
            <Box>
                <ContainerBox title="Проекты">{renderProjects(PROJECT_LIST)}</ContainerBox>
            </Box>
        </section>
    );
};

export default Projects;
