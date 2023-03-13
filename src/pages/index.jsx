import { Box } from '@mui/material';
import Head from 'next/head';

import About from '@components/about/about';
import Projects from '@components/projects/projects';
import Skills from '@components/skills/skills';
import MainLayouts from '@layouts/main-layouts';

const Home = () => {
    return (
        <Box>
            <Head>
                <title>Codewian</title>
            </Head>
            <MainLayouts>
                <About />
                <Skills />
                <Projects />
            </MainLayouts>
        </Box>
    );
};

export default Home;
