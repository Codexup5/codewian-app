import ContainerBox from '@common/container-box/container-box';
import ContainerCard from '@common/container-card/container-card';
import GridContainer from '@common/grid/grid-container';
import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React, { useCallback } from 'react';
import { SOCIAL } from 'src/mocks/social';

const Footer = () => {
    const matches = useMediaQuery('(min-width:992px)');

    const renderFooterItems = useCallback(
        () => (
            <GridContainer>
                {SOCIAL.map((item, index) => (
                    <Grid
                        item
                        key={index}
                        xs={matches ? 3 : 3}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Button
                            fullWidth
                            size="large"
                            variant="text"
                            LinkComponent={'a'}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {matches ? (
                                <Typography
                                    variant="h5"
                                    sx={{ mr: 4, fontWeight: 700, fontFamily: 'Ubuntu' }}
                                >
                                    {item.title.toUpperCase()}
                                </Typography>
                            ) : null}
                            <Image
                                src={item.icons}
                                alt={item.title}
                                width={item.width}
                                height={item.height}
                            />
                        </Button>
                    </Grid>
                ))}
            </GridContainer>
        ),
        [matches]
    );

    return (
        <footer style={{ marginTop: 150 }}>
            <Box>
                <ContainerCard>{renderFooterItems(SOCIAL)}</ContainerCard>
            </Box>
        </footer>
    );
};

export default Footer;
