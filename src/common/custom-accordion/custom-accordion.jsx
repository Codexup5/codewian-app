import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Grid,
    Typography,
    useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';

import GridContainer from '@common/grid/grid-container';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CustomAccordions = ({
    id,
    name,
    src,
    alt,
    description,
    stack,
    ariaControls,
    titleCode,
    linkCode,
    titleProject,
    linkProject,
}) => {
    const matches = useMediaQuery('(min-width:992px)');

    const Description = () => (
        <Box>
            <Typography variant="h5" sx={{ mt: 4, fontWeight: 700, color: '#00ff4a' }}>
                Описание проекта
            </Typography>
            <Typography variant="h6" sx={{ mt: 2, fontWeight: 300 }}>
                {description}
            </Typography>
        </Box>
    );

    const Stack = () => (
        <Box>
            <Typography variant="h5" sx={{ mt: 4, fontWeight: 700, color: '#00ff4a' }}>
                Stack
            </Typography>
            <GridContainer>
                {stack?.map((title, index) => (
                    <Grid
                        item
                        key={index}
                        xs={matches ? 2 : 6}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                        }}
                    >
                        <Typography variant="h5" sx={{ mt: 4, fontWeight: 700 }}>
                            {title}
                        </Typography>
                    </Grid>
                ))}
            </GridContainer>
        </Box>
    );

    const ButtonPC = () => (
        <Box sx={{ mt: 4 }}>
            <Button
                variant="text"
                LinkComponent={'a'}
                href={linkCode}
                target="_blank"
                rel="noreferrer"
                sx={{
                    justifyContent: 'space-between',
                    p: 2,
                    mr: 2,
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    {titleCode}
                </Typography>
            </Button>
            <Button
                variant="text"
                LinkComponent={'a'}
                href={linkProject}
                target="_blank"
                rel="noreferrer"
                sx={{
                    justifyContent: 'space-between',
                    p: 2,
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    {titleProject}
                </Typography>
            </Button>
        </Box>
    );

    const ButtonMobile = () => (
        <GridContainer>
            <Grid
                item
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mt: 4,
                    width: '100%',
                }}
            >
                <Button
                    variant="text"
                    LinkComponent={'a'}
                    href={linkCode}
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                        justifyContent: 'space-between',
                        p: 2,
                    }}
                >
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        {titleCode}
                    </Typography>
                </Button>
                <Button
                    variant="text"
                    LinkComponent={'a'}
                    href={linkProject}
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                        justifyContent: 'space-between',
                        p: 2,
                    }}
                >
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        {titleProject}
                    </Typography>
                </Button>
            </Grid>
        </GridContainer>
    );

    return (
        <Accordion sx={{ background: '#303030', color: '#FFFFFF' }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#00ff4a' }} />}
                id={id}
                aria-controls={ariaControls}
            >
                <Typography variant="h4" sx={{ fontWeight: 900, flexShrink: 0 }}>
                    {name}
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Image
                        src={src}
                        alt={alt}
                        style={{ width: '100%', height: '100%', borderRadius: 20 }}
                    />
                </Box>
                {Description()}
                {Stack()}
                {matches ? ButtonPC() : ButtonMobile()}
            </AccordionDetails>
        </Accordion>
    );
};

export default CustomAccordions;
