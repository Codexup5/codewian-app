import { Button, Tooltip, Typography, useMediaQuery } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import NavBar from '@common/navbar/navbar';

const Header = ({ open, setOpen }) => {
    const matches = useMediaQuery('(min-width:992px)');

    const renderHeader = () => (
        <Tooltip title="Открыть меню">
            <Button
                size="large"
                sx={{ color: '#00ff4a' }}
                aria-label="menu"
                LinkComponent="a"
                onClick={() => setOpen(true)}
            >
                {matches ? (
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        Меню
                    </Typography>
                ) : (
                    <MenuIcon sx={{ fontSize: 40 }} />
                )}
            </Button>
        </Tooltip>
    );
    return <NavBar title="Codewian" button={renderHeader()} />;
};

export default Header;
