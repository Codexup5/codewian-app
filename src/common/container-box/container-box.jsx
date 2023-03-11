import { Box, Typography, useMediaQuery } from '@mui/material';
import React from 'react';

const ContainerBox = ({ title, children }) => {
    const matches = useMediaQuery('(min-width:992px)');

    return (
        <Box sx={{ mt: matches ? 35 : 30 }}>
            <Typography variant="h3" sx={{ fontWeight: 900, color: '#00ff4a' }}>
                {title}
            </Typography>
            <Box sx={{ mt: 4 }}>{children}</Box>
        </Box>
    );
};

export default ContainerBox;
