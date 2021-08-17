import React from 'react'
import { Container } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { Router } from 'react-router'
import { Typography } from '@material-ui/core'
import useStyle from './JobsStyle'
import { Button } from '@material-ui/core'
export const SingleCard = (Props) => {
    const classes = useStyle();
    return (
        <>
            <Container>
                <Link to="/jobDetails" className={classes.link}>
                    <div className={classes.card}>
                        <Grid container >
                            <Grid item xs={12} md={9} className={classes.cardContent}>
                                <Typography variant="h5" className={classes.jobHeading}>
                                    {Props.titleHeading}
                                </Typography>
                                <div>
                                    <Typography className={classes.jobDescription} align="justify">
                                        {Props.jobDiscription}
                                    </Typography>
                                    <Typography>
                                        <a href = "#" className={classes.ReadMoreLink}>Read More</a>          
                                    </Typography>
                                    <Typography className={classes.vacancyNumber}>
                                        Vacancy : {Props.numberVacancies}
                                    </Typography>
                                    <Typography>
                                        Last Date : {Props.Date}
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={3} className={classes.cardButton}>
                            <Link to="/applyForm" className={classes.btnLink}><Button className={classes.btnStyle} variant="contained">Apply Now</Button></Link>
                            </Grid>
                        </Grid>
                    </div>
                </Link>
            </Container>
        </>
    )
}
