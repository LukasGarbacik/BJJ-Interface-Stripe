import { SignIn, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { Container, AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

export default function SignInPagePage() {
    return (
        <Box sx={{ bgcolor:'grey', minHeight: '100vh' }}>
            <AppBar position="static" sx={{ bgcolor: '#00274C' }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1, color: '#FFCB05' }}>
                        BJJ Club
                    </Typography>
                    <Button color="inherit" sx={{ color: '#FFCB05' }}>
                        <Link href="/sign-in" passHref>
                            Login
                        </Link>
                    </Button>
                    <Button color="inherit" sx={{ color: '#FFCB05' }}>
                        <Link href="/sign-up" passHref>
                            Sign Up
                        </Link>
                    </Button>
                    {/* UserButton handles sign-in and sign-out; it will be visible only if a user is authenticated */}
                    <UserButton />
                </Toolbar>
            </AppBar>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{ mt: 18 }}>
                <SignIn routing="hash"/>
            </Box>
        </Box>
    );
}