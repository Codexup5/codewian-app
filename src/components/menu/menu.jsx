import { Box, Button, Divider, Link, SwipeableDrawer, Typography } from '@mui/material';
import { handleToggleDrawer } from '@utils/handleToggleDrawer';
import Image from 'next/image';
import React from 'react';

import { MENU_ITEM } from 'src/mocks/menu';
import { SOCIAL } from 'src/mocks/social';

const Menu = ({ open, setOpen }) => {
    const renderMenuItem = () => {
        return MENU_ITEM.map((item, index) => (
            <Link key={index} href={item.link}>
                <Button
                    fullWidth
                    variant="text"
                    sx={{ p: 4, color: '#00ff4a' }}
                    onClick={handleToggleDrawer(false, setOpen)}
                >
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        {item.title}
                    </Typography>
                </Button>
            </Link>
        ));
    };

    const renderSocialItem = () => {
        return SOCIAL.map((item, index) => (
            <Button
                key={index}
                fullWidth
                sx={{
                    justifyContent: 'space-between',
                    p: 4,
                }}
                variant="text"
                LinkComponent={'a'}
                href={item.href}
                target="_blank"
                rel="noreferrer"
            >
                <Typography variant="h5" sx={{ mr: 2, fontWeight: 700 }}>
                    {item.title}
                </Typography>
                <Image src={item.icons} alt={item.title} width={item.width} height={item.height} />
            </Button>
        ));
    };

    return (
        <React.Fragment>
            <SwipeableDrawer
                anchor={'right'}
                open={open}
                onOpen={handleToggleDrawer(true, setOpen)}
                onClose={handleToggleDrawer(false, setOpen)}
            >
                <Box sx={{ width: 250, background: '#303030', height: '100%' }}>
                    {renderMenuItem(MENU_ITEM)}
                    <Divider variant="middle" sx={{ borderColor: '#00ff4a' }} />
                    {renderSocialItem(SOCIAL)}
                </Box>
            </SwipeableDrawer>
        </React.Fragment>
    );
};

export default Menu;
