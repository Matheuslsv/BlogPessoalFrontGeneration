import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './Footer.css'

function Footer() {
    return (
        <>
            <Grid container direction="row" className='center'>
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#1289A7", height: "120px" }}>
                        <Box paddingTop={1} display="flex" className='center'>
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Me siga nas redes sociais nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" className='center'>
                            <a href="https://github.com/Matheuslsv" target="_blank">
                                <GitHubIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/matheuslsv/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#1289A7", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2022 Copyright:</Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">matheuslsv</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;