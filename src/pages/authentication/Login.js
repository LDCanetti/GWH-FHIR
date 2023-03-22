import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import AuthLogin from './auth-forms/AuthLogin';
import AuthWrapper from './AuthWrapper';

// ================================|| LOGIN ||================================ //

const Login = () => (
    <AuthWrapper>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                    <Typography variant="h3">Login</Typography>
                    <Typography component={Link} to="/register" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                        Don&apos;t have an account?
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <AuthLogin />
            </Grid>
            <Helmet>
                <script src="./node_module/fhirclient/build/fhir-client.js"></script>
                <script type="text/javascript">
                    {`FHIR.oauth2.authorize({"client_id" : "NTAzYTI1YTctMDM2Yi00YTEyLTliZmEtMjMxOGY1ZDkzYWRk", "scope" : "patient/*.read"});`}
                </script>
            </Helmet>
        </Grid>
    </AuthWrapper>
);

export default Login;
