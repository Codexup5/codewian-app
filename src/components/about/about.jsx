import { Box, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';

import Oleg from '@assets/images/avatar.svg';

import ContainerBox from '@common/container-box/container-box';
import GridChild from '@common/grid/grid-child';
import GridContainer from '@common/grid/grid-container';
import Typewriter from '@common/typewriter/typewriter';

const About = () => {
    const matches = useMediaQuery('(min-width:992px)');

    const Avatar = () => (
        <Image
            style={{
                marginTop: matches ? 0 : 10,
                borderRadius: '100%',
                border: '5px solid #9b30ff',
                width: '350px',
                height: '350px',
            }}
            src={Oleg}
            alt="avatar"
        />
    );

    const Bio = () => (
        <Typography align={matches ? 'justify' : 'left'} variant="h5" sx={{ mt: matches ? 4 : 0 }}>
            Позитивный, дружелюбный молодой человек. <br />
            Командный игрок,хорошо работаю в команде. С творечским складом ума и большими амбициями.
            Хочу развиваться и стать опытным разработчиком!
        </Typography>
    );

    return (
        <section id="about">
            <ContainerBox title="Обо Мне">
                <GridContainer
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <GridChild md={8}>
                        <Typography variant="h5" sx={{ fontWeight: 900, mt: matches ? 0 : 2 }}>
                            Приветствую! <br />
                            <Typewriter />
                        </Typography>

                        {matches ? Bio() : Avatar()}
                    </GridChild>
                    <GridChild md={4}>{matches ? Avatar() : Bio()}</GridChild>
                </GridContainer>
            </ContainerBox>
        </section>
    );
};

export default About;
