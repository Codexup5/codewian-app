import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';

import Mask from '@assets/images/mask.svg';
import TELEGRAM from '@assets/icons/social/telegram.svg';

import ContainerBox from '@common/container-box/container-box';
import ContainerCard from '@common/container-card/container-card';
import GridContainer from '@common/grid/grid-container';
import { SONGS } from '@mocks/songs';
import GridChild from '@common/grid/grid-child';

const Hobby = () => {
    const matches = useMediaQuery('(min-width:992px)');

    const renderSongs = () => (
        <GridContainer>
            {SONGS.map((item, index) => (
                <Grid item key={index} xs={matches ? 6 : 12}>
                    <iframe
                        style={{
                            borderRadius: 12,
                            width: '100%',
                            height: matches ? 200 : 355,
                            border: 0,
                        }}
                        src={item.url}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    />
                </Grid>
            ))}
        </GridContainer>
    );

    return (
        <section id="hobby">
            <Box>
                <ContainerBox title="Хобби">
                    <Typography
                        variant="h5"
                        sx={{ fontWeight: 400, mt: 4, mb: 2, fontFamily: 'Ubuntu' }}
                    >
                        Немного о моем Хобби!
                    </Typography>
                    <ContainerCard>
                        <GridContainer
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <GridChild md={4}>
                                <Image
                                    style={{
                                        marginTop: matches ? 0 : 10,
                                        borderRadius: 20,
                                        width: 350,
                                        height: 200,
                                    }}
                                    src={Mask}
                                    alt="mask"
                                />
                            </GridChild>
                            <GridChild md={8}>
                                <Typography
                                    variant="h5"
                                    sx={{ fontWeight: 500, fontFamily: 'Ubuntu' }}
                                >
                                    Я занимаюсь музыкой на протяжии 4-x лет. Работаю в сиквенсоре FL
                                    Studio. Пишу в различных жанрах: начиная от рока заканчивая
                                    электронникой.
                                </Typography>

                                <Button
                                    sx={{ mt: 2 }}
                                    fullWidth
                                    size="large"
                                    variant="text"
                                    LinkComponent={'a'}
                                    href="https://t.me/codewiantg"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{ mr: 4, fontWeight: 700, fontFamily: 'Ubuntu' }}
                                    >
                                        Telegram
                                    </Typography>

                                    <Image src={TELEGRAM} alt="telegram" width={40} height={40} />
                                </Button>
                            </GridChild>
                        </GridContainer>
                    </ContainerCard>
                    <Grid container sx={{ mt: 4 }}>
                        {renderSongs(SONGS)}
                    </Grid>
                </ContainerBox>
            </Box>
        </section>
    );
};

export default Hobby;
