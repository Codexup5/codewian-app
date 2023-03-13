import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const NavBar = ({ children, title = '', button = null }) => {
    return (
        <AppBar position="sticky" sx={{ background: '#303030', borderRadius: 2, mt: 2 }}>
            <Toolbar
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    p: 1,
                }}
            >
                <Typography sx={{ fontWeight: 700, fontFamily: 'Ubuntu' }} variant="h3">
                    <Link href="/">{title}</Link>
                </Typography>
                {button && <Box>{button}</Box>}
            </Toolbar>
            {children}
        </AppBar>
    );
};

export default NavBar;
