import React from 'react'
import { Container } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { Button } from '@material-ui/core'
import ApartmentIcon from '@material-ui/icons/Apartment';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FixerImage from './Assets/fixerLogo.jpeg';
import useStyle from './DetailsStyle'
import {FaGooglePlusG} from 'react-icons/fa';
import {RiBehanceFill} from 'react-icons/ri';
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
const theme=createMuiTheme({
    palette:{
        primary:{
            main:"#1faf05",
        }
    },
    
})
export const Detail = () => {
    const classes = useStyle();
    return (
        <ThemeProvider theme={theme}>
        <div>
            <Container>
                <div className={classes.detailWidth}>
                <Grid container>
                    <Grid item xs={12} md={8} >
                        <div className={classes.DetailLeftSide}>
                            <Typography variant="h5">
                            Full Stack Laravel Developer
                            </Typography>
                            <div className={classes.downHeaderDetails}>
                            <Typography className={classes.themeColor}>
                                <ApartmentIcon className={classes.headerIcon}/> 
                                <span>Uncle Fixer</span>
                            </Typography>
                            <Typography className={classes.location}>
                                <LocationOnIcon className={classes.headerIcon}/> Lahore
                            </Typography>
                            </div>
                            <Typography className={classes.detailPageDiscription}>
                            React Router is a collection of navigational components that compose declaratively with your application. 
                            Whether you want to have bookmarkable URLs..
                            </Typography>
                            <Typography className={classes.textBold}>
                                Responsibilities and Duties: 
                            </Typography>
                            <Typography className={classes.detailParagraph} align="justify">
                            Components are the heart of React's powerful, declarative programming model. React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a 
                            composable way to navigate in React Native, React Router works wherever React is rendering--so take your pick!
                            Components are the heart of React's powerful, declarative programming model. React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web 
                            app or a composable way to navigate in React Native, React Router works wherever React is rendering--so take your pick!
                            Components are the heart of React's powerful, declarative programming model. React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a 
                            composable way to navigate in React Native, React Router works wherever React is rendering--so take your pick!
                            </Typography>
                            <div className={classes.skills}>
                                <Typography className={classes.textBold}>Skills</Typography>
                                <div className={classes.skillTypes}>
                                    <span className={classes.unitSkill}>Axios</span>
                                    <span className={classes.unitSkill}>Redux</span>
                                    <span className={classes.unitSkill}>Redux-Persist</span>
                                    <span className={classes.unitSkill}>Redux-Thunk</span>
                                    <span className={classes.unitSkill}>OOP</span>
                                    <span className={classes.unitSkill}>Javascript</span>
                                    <span className={classes.unitSkill}>AsyncStorage</span>
                                    <span className={classes.unitSkill}>Axios</span>
                                    <span className={classes.unitSkill}>Redux</span>
                                    <span className={classes.unitSkill}>Redux-Persist</span>
                                    <span className={classes.unitSkill}>Redux-Thunk</span>
                                    <span className={classes.unitSkill}>OOP</span>
                                    <span className={classes.unitSkill}>Javascript</span>
                                </div>
                            </div>
                            <div className={classes.requirements}>
                                <h2>Requirements:</h2>
                                <table className={classes.tableStyle}>
                               <tr>
                                   <td>Job Shift</td><span> </span>
                                   <td>Morning</td>
                               </tr>
                               <tr>
                                   <td>Job Type</td><span> </span>
                                   <td>Ful Time</td>
                               </tr>
                               <tr>
                                   <td style={{marginRight:"20px"}}>Gender</td> 
                                   <td>Male</td><span> </span>
                               </tr>
                               <tr>
                                   <td>Experience</td>
                                   <span> </span>
                                   <td>2 Years</td>
                               </tr>
                               <tr>
                                   <td>Vacancy</td>
                                   <span> </span>
                                   <td>1</td>
                               </tr>
                               <tr>
                                   <td>Languages</td>
                                   <span> </span>
                                   <td>English, Urdu</td>
                               </tr>
                               <tr>
                                   <td>Apply Before</td>
                                   <span> </span>
                                   <td>17th aug 2021</td>
                               </tr>
                               
                               </table>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs = {12} md={4} >
                        <div className={classes.detailRightSide}>
                          
                            <span className={classes.morning}>Morning</span>
                            <div className={classes.fixerLogo}>
                            <img src = {FixerImage} className={classes.jobDetailImage} alt="Uncle Fixer"/>
                            </div>
                            <Typography variant="h6" className={classes.rightSideHeading} align="center">
                            Full Stack Laravel Developer
                            </Typography>
                            <div className={classes.skills}>
                                <Typography className={classes.textBold}>Skills</Typography>
                                <div className={classes.skillTypes}>
                                    <span className={classes.unitSkill}>Axios</span>
                                    <span className={classes.unitSkill}>Redux</span>
                                    <span className={classes.unitSkill}>Redux-Persist</span>
                                    <span className={classes.unitSkill}>Redux-Thunk</span>
                                    <span className={classes.unitSkill}>OOP</span>
                                    <span className={classes.unitSkill}>Javascript</span>
                                    <span className={classes.unitSkill}>AsyncStorage</span>
                                    <span className={classes.unitSkill}>Axios</span>
                                    <span className={classes.unitSkill}>Redux</span>
                                    <span className={classes.unitSkill}>Redux-Persist</span>
                                    <span className={classes.unitSkill}>Redux-Thunk</span>
                                    <span className={classes.unitSkill}>OOP</span>
                                    <span className={classes.unitSkill}>Javascript</span>
                                </div>
                            </div>
                            <div className={classes.rightSideBtnDiv}>
                               <Link to="/applyForm" className={classes.detailApplyBtn}> <Button color="primary" variant="contained" className={classes.rightSideBtn}>Appy Now</Button></Link>
                            </div>
                        </div>
                        <div className = {classes.detailRightBottom}>
                            <Typography variant="h7" className={classes.textBold}>
                                Share This Job
                            </Typography>
                            <hr className={classes.hr}/>
                            <Grid container>
                            <Grid xs={4} ><div className={classes.mediaBlock + " " + classes.faIcon}><FaFacebookF/></div></Grid>
                            <Grid xs={4} ><div className={classes.mediaBlock + " " + classes.twIcon}><FaTwitter/></div></Grid>
                            <Grid xs={4} ><div className={classes.mediaBlock + " " + classes.gpIcon}><FaGooglePlusG/></div></Grid>
                            <Grid xs={4} ><div className={classes.mediaBlock + " " + classes.inIcon}><FiInstagram /></div></Grid>
                            <Grid xs={4} ><div className={classes.mediaBlock + " " + classes.lnIcon}><FaLinkedinIn/></div></Grid>
                            <Grid xs={4} ><div className={classes.mediaBlock + " " + classes.beIcon}><RiBehanceFill/></div></Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
                </div>
            </Container>
        </div>
        </ThemeProvider>
    )
}
