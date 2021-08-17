import React from 'react'
import { Container, Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { FaUpload } from 'react-icons/fa'
import useStyle from './FormStyle'
const theme = createMuiTheme({
    palette:{
        primary:{
            main:"#1faf05",
        }
    }
})
export const Form = () => {
    const classes = useStyle();
    return (
        <div >
            <ThemeProvider theme={theme}>
            <Container className={classes.backgroundColor}>
                <div className={classes.root}>
                    <div className={classes.div1}>
                    <div className={classes.div2}>
                        <label for ="firstImage" className={classes.imgLabel}><FaUpload/></label>
                        <input id="firstImage" type="file" className={classes.uploadIcon}/>
                    </div>
                    </div>
                    <Typography className={classes.marginBottom}>
                        Upload Image
                    </Typography>
                <form className={classes.form}>
                    <Grid container spacing={3}>
                    <Grid item xs={12} md={6} >
                        <input className={classes.input} type = "text" placeholder="Full Name*"/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <input className={classes.input} type = "text" placeholder="Email Address"/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <select className={classes.input} type = "text" placeholder="Full Name*">
                            <option>Where Did you Here About Us</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Google">Google</option>
                            <option value="LinkedIn">LinkedIn</option>
                            <option value="Other">Other</option>
                        </select>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <input className={classes.input} type = "text" placeholder="Phone Number*"/>
                    </Grid> 
                    <Grid item xs={12} md={6}>
                        <input className={classes.input} type = "options" placeholder="Education*"/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <select className={classes.input} type = "text" placeholder="Full Name*">
                            <option>Your Experience</option>
                            <option value="Fresh<">Fresh</option>
                            <option value="Less Then One Year">Less Then One Year</option>
                            <option value="1 year">1 year</option>
                            <option value="2 Year">2 Year</option>
                            <option value="3 Year">3 Year</option>
                            <option value="4 Year">4 Year</option>
                            <option value="5 Year">5 Year</option>
                            <option value="6 Year">6 Year</option>
                            <option value="7 Year">7 Year</option>
                            <option value="8 Year">8 Year</option>
                            <option value="9 Year">9 Year</option>
                            <option value="10 Year">10 Year</option>
                            <option value="11 Year">11 Year</option>
                            <option value="12 Year">12 Year</option>
                            <option value="13 Year">13 Year</option>
                            <option value="14 Year">14 Year</option>
                            <option value="15 Year">15 Year</option>
                            <option value="16 Year">16 Year</option>
                            <option value="17 Year">17 Year</option>
                            <option value="18 Year">18 Year</option>
                            <option value="19 Year">19 Year</option>
                            <option value="20 Year">20 Year</option>
                            <option value="More then 20 years">More then 20 years</option>
                        </select>
                    </Grid>
                    <Grid item xs={12} className={classes.btnGrid}><Button type="submit" className={classes.btnStyle} color="primary" variant="contained">Submit Form</Button></Grid>
                    </Grid>
                </form>
                </div>
            </Container>
            </ThemeProvider>
        </div>
    )
}
