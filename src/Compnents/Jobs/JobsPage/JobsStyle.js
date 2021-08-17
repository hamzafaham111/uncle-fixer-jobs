import { makeStyles } from "@material-ui/core";
const useStyle = makeStyles(theme=>({
    background:{
      
    },
    jobSPageHeading:{
        fontSize : "25px",
        fontWeight:"600",
    },
    link:{
        textDecoration:"none",
        color:"black",
    },
    headingBottomLine:{
        background:"#1faf05",
        width:"150px",
        height: "4px",
        marginTop:"15px",
        marginBottom:"25px",
        margin:"auto", 
       
    },
    card : {
    marginTop:"10px",
    padding : "25px",
    width : "70vw",
    margin : "auto",
    backgroundColor:"white",
    borderRadius:"7px",
    borderLeft:"solid transparent 8px",
    boxShadow: "rgba(0, 0, 0, 0.10) 0px 2px 5px",
    "&:hover":{
        borderLeft:"solid #1faf05 8px",
        transition:"0.4s",
        "& $btnStyle":{
            backgroundColor:"#1faf05",
            color:"white",
            transition:"0.4s",
        }
    }
},
themeColor:{
    color:"#1faf05",
},
jobHeading:{
    fontWeight : "bold",
},
jobDescription:{
    margin:"10px 0 10px 0",
    fontSize : "15px",
},
vacancyNumber:{
   
    width : "100px",
    padding : "5px",
    textAlign:"center",
    margin:"5px 0 10px 0",
    backgroundColor:"#E2F6ED",


},
ReadMoreLink:{
    textDecoration:"none",
    fontSize : "15px",
},
cardContent:{
 
},
cardButton : {
    display:"flex",
    justifyContent : "center",
    alignContent : "center",
    alignItems:"center",
    [theme.breakpoints.down("md")]:{
        marginTop : "20px",
    }
},
btnStyle : {
borderRadius:"10px",
backgroundColor:"white",
boxShadow:"none",
boxShadow:"0 2px 8px rgb(102 103 107 / 15%)",
border:"solid #1faf05 1px",
},
btnLink:{
    textDecoration:"none",
    color:"black",
    "&:hover":{
        color:"white",
    }
},
}))
export default useStyle;
