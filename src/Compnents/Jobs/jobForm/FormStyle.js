import { makeStyles } from "@material-ui/core";
const useStyle = makeStyles(theme=>({
    backgroundColor:{
      
    },
    root:{
        width:"80vw",
        margin:"auto",
        marginTop:"90px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        borderBottom:"solid #1faf05 3px",
        borderRadius:"10px",
        background:"white",
        padding:"15px",
        boxShadow: "rgba(0, 0, 0, 0.20) 0px 5px 10px",
    },
    div1:{
        background:"white",
        width:"150px",
        height:"150px",
        [theme.breakpoints.down("md")]:{
            width:"130px",
            height:"130px",
        },
        margin:"auto",
        marginTop:"-80px",
        borderRadius:"100px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        border:"solid #1faf05 1px",
    
    },
    div2:{
        background:"#1faf05",
        width:"130px",
        height:"130px",
        [theme.breakpoints.down("md")]:{
            width:"110px",
            height:"110px",
        },
        borderRadius:"100px",
        display:"flex",
        alignItems:"center",
    },
    marginBottom:{
        marginBottom:"50px",
    },
    imgLabel:{
        fontSize:"50px", 
        color:"white", 
        margin:"auto"
    },
    uploadIcon:{
        display:"none", visibility:"none"
    },
    form:{
       background:"white",
        },
    btnGrid:{
        display:"flex",
        justifyContent:"center",
        marginTop:"20px",
       
    },
    btnStyle:{
        color:"white",
        marginBottom:"20px",
        padding:"10px 15px 10px 15px",
    },
    input:{
        width:"100%",
        padding:"20px",
        border:"none",
        border:"solid #C1C2B8 1px",
        borderRadius:"2px",
        fontSize:"15px",
        color:"gray"
    }
}))
export default useStyle;