import { Box, Typography } from '@mui/material';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const Typewriter = () => {
    const [text, count] = useTypewriter({
        words: [
            'Меня зовут Олег, я Frontend разработчик',
            'Меня зовут Codewian, я музыкант',
            'Меня зовут Олег и я люблю персонажей: Doomguy,Spawn',
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <Box sx={{ mt: 2 }}>
            {text}
            <Cursor cursorColor="#26FF14" />
        </Box>
    );
};

export default Typewriter;
