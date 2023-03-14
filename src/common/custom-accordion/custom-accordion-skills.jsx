import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Typography,
    useMediaQuery,
} from '@mui/material';
import Image from 'next/image';

const CustomAccordionSkills = ({ id, name, icon, level }) => {
    const matches = useMediaQuery('(min-width:992px)');

    const Level = () => (
        <Box sx={{ width: '100%' }}>
            <Typography
                variant={matches ? 'h5' : 'h6'}
                sx={{
                    fontWeight: 500,
                    color: '#26FF14',
                    fontFamily: 'Unbounded',
                    display: 'flex',
                }}
            >
                {level}
            </Typography>
        </Box>
    );

    return (
        <Accordion
            sx={{
                background: '#303030',
                color: '#FFFFFF',
                p: 2,

                width: '100%',
            }}
        >
            <AccordionSummary
                id={id}
                expandIcon={<Image src={icon} alt={name} width={40} height={40} />}
                aria-controls={name}
            >
                <Typography variant="h5" sx={{ fontWeight: 600, fontFamily: 'Unbounded' }}>
                    {name}
                </Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ display: 'flex' }}>{Level()}</AccordionDetails>
        </Accordion>
    );
};

export default CustomAccordionSkills;
