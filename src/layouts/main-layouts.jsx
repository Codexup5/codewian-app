import { Box, Container, ThemeProvider } from '@mui/material';
import { useState } from 'react';

import Footer from '@components/footer/footer';
import Header from '@components/header/header';
import Menu from '@components/menu/menu';

const MainLayouts = ({ children }) => {
    const [open, setOpen] = useState(false);

    return (
        <Box>
            <Container fixed maxWidth="lg">
                <Header setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
                <section role="main">{children}</section>
                <Footer />
            </Container>
        </Box>
    );
};

export default MainLayouts;
