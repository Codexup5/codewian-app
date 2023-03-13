import '@assets/styles/app.scss';
import { ThemeProvider } from '@mui/material';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
