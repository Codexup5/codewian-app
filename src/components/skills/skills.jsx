import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';

import ContainerBox from '@common/container-box/container-box';
import ContainerCard from '@common/container-card/container-card';
import GridContainer from '@common/grid/grid-container';
import { SKILLS_ITEM } from '@mocks/skills';

const Skills = () => {
    const matches = useMediaQuery('(min-width:992px)');

    const renderSkillsItem = () => (
        <GridContainer>
            {SKILLS_ITEM.map((item, index) => (
                <Grid
                    item
                    key={index}
                    xs={matches ? 3 : 6}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mt: 4,
                        width: '100%',
                    }}
                >
                    <ContainerCard>
                        <Typography variant="h5" sx={{ fontWeight: 600, fontFamily: 'Unbounded' }}>
                            {item.title}
                        </Typography>
                        <motion.div
                            whileHover={{ scale: 3, rotate: 25 }}
                            whileTap={{ scale: 2, rotate: 90 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        >
                            <Button sx={{ color: '#26FF14' }} variant="text">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={item.width}
                                    height={item.height}
                                />
                            </Button>
                        </motion.div>
                    </ContainerCard>
                </Grid>
            ))}
        </GridContainer>
    );
    return (
        <section id="skills">
            <Box>
                <ContainerBox title="Скиллы">
                    <Typography variant="h5" sx={{ fontWeight: 300, mt: 4, fontFamily: 'Ubuntu' }}>
                        Вы можете поиграть с иконками!
                    </Typography>
                    <Grid container>{renderSkillsItem(SKILLS_ITEM)}</Grid>
                </ContainerBox>
            </Box>
        </section>
    );
};

export default Skills;
