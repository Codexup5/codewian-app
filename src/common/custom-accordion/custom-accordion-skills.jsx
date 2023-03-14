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
        <Typography
            variant={matches ? 'h5' : 'h6'}
            sx={{
                fontWeight: 500,
                color: '#26FF14',
                fontFamily: 'Unbounded',
            }}
        >
            {level}
        </Typography>
    );

    return (
        <Accordion
            sx={{
                background: '#303030',
                color: '#FFFFFF',
                p: 2,
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

            <AccordionDetails sx={{ display: 'flex', justifyContent: 'center' }}>
                {Level()}
            </AccordionDetails>
        </Accordion>
    );
};

export default CustomAccordionSkills;
