import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';

import ContainerBox from '@common/container-box/container-box';
import CustomAccordionSkills from '@common/custom-accordion/custom-accordion-skills';
import GridContainer from '@common/grid/grid-container';
import { SKILLS_ITEM } from '@mocks/skills';

const Skills = () => {
    const matches = useMediaQuery('(min-width:992px)');

    const renderSkillsItem = () => (
        <GridContainer>
            {SKILLS_ITEM.map((item, index) => (
                <Grid item key={index} xs={matches ? 3 : 6}>
                    <motion.div
                        whileHover={{ scale: 1, rotate: 10 }}
                        whileTap={{ scale: 1, rotate: -10 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                        <CustomAccordionSkills
                            id={item.id}
                            name={item.name}
                            icon={item.icon}
                            level={item.level}
                        />
                    </motion.div>
                </Grid>
            ))}
        </GridContainer>
    );
    return (
        <section id="skills">
            <Box>
                <ContainerBox title="Скиллы">
                    <Typography variant="h5" sx={{ fontWeight: 400, mt: 4, fontFamily: 'Ubuntu' }}>
                        Вы можете поиграть с иконками!
                    </Typography>
                    <Grid sx={{ mt: 2 }}>{renderSkillsItem(SKILLS_ITEM)}</Grid>
                </ContainerBox>
            </Box>
        </section>
    );
};

export default Skills;
