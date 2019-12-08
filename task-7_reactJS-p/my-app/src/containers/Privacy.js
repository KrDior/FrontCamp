import withRoot from '../theme/withRoot';
// --- Post bootstrap -----
import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '../components/Typography';

function Privacy() {
    return (
        <React.Fragment>
            <Container>
                <Box mt={7} mb={12}>
                    <Typography variant="h3" gutterBottom marked="center" align="center">
            Privacy
                    </Typography>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default withRoot(Privacy);
