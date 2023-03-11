import { Card, CardContent } from '@mui/material';
import React from 'react';

const ContainerCard = ({ children }) => {
    return (
        <Card
            sx={{
                width: '100%',
                borderRadius: 2,
                background: '#303030',
                color: '#FFFFFF',
            }}
        >
            <CardContent
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    ':last-child': { p: 2 },
                }}
            >
                {children}
            </CardContent>
        </Card>
    );
};

export default ContainerCard;
