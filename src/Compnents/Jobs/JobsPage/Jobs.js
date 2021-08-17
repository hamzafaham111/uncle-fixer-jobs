// import React from 'react';
// import { SingleCard } from './singleCard';
// import './App.css'
// import { createMuiTheme } from '@material-ui/core';
// import { ThemeProvider } from '@material-ui/styles';
// import { Typography } from '@material-ui/core';
// import useStyle from './JobsStyle';
// import Data from './JobApi';
// const theme=createMuiTheme({
//     palette:{
//         primary:{
//             main:"#1faf05",
//         }
//     },
    
// })
// const Jobs = () =>{
//     const classes = useStyle();
//     return(
//         <>
//         <ThemeProvider theme={theme}>
//             <div className={classes.background}>
//                 <Typography align="center" className={classes.jobSPageHeading}>
//                     <span>Careers @ </span><span className={classes.themeColor}>Uncle Fixer</span>
//                     <div className={classes.headingBottomLine}></div>
//                 </Typography>
//                 {
//                 Data.map((values)=>{
//                     return(
//                         <SingleCard 
//                         titleHeading={values.heading} 
//                         jobDiscription = {values.Description} 
//                         numberVacancies = {values.Number}
//                         Date = {values.Date}/>
//                         )
//                 })
//                 }
//             </div>
//         </ThemeProvider>
//         </>
//     )
// }
// export default Jobs;


import React from 'react';
import { SingleCard } from './singleCard';
import './App.css'
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import useStyle from './JobsStyle';
import ReactPaginate from 'react-paginate';
import Data from './JobApi';
const theme=createMuiTheme({
    palette:{
        primary:{
            main:"#1faf05",
        }
    },
}) 

const Jobs = () =>{
    const classes = useStyle();
    const [users, setUsers] = React.useState(Data.slice(0, 50));
    const [pageNumber, setPageNumber] = React.useState(0);
    const usersPerPage = 2;
    const pagesVisited = pageNumber * usersPerPage;

    const displayUsers = Data.slice(pagesVisited, pagesVisited + usersPerPage).map((user, index)=>{
        return(
            <>
            <SingleCard 
                titleHeading={user.heading} 
                jobDiscription = {user.Description} 
                numberVacancies = {user.Number}
                Date = {user.Date}/>
                </>                        
        );
    })

    const pageCount = Math.ceil(users.length / usersPerPage);
    const changePage = ({selected}) =>{
        setPageNumber(selected);
    }
    return(<>
    <ThemeProvider theme={theme}>
    <div className={classes.background}>
            <Typography align="center" className={classes.jobSPageHeading}>
                <span>Careers @ </span><span className={classes.themeColor}>Uncle Fixer</span>
                <div className={classes.headingBottomLine}></div>
            </Typography>
       {displayUsers}
      <ReactPaginate
       previousLabel={"Previous"}
       nextLabel={"Next"}
       pageCount={pageCount}
       onPageChange={changePage}
       containerClassName={"paginationBttns"}
       previousLinkClassName={"previousBttn"}
       nextLinkClassName={"nextBttn"}
       disabledClassName={"paginationDisabled"}
       activeClassName={"paginationActive"}
       />   
       </div>
       </ThemeProvider>
    </>)
}
export default Jobs;