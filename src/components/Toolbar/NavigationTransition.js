import React from "react";
import { useState, useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MoveSelected from './MoveSelected'
import { Link } from '@reach/router'

const useStyles = makeStyles((theme) => ({

    container: {
        display: "flex",
    },
    paper: {
        // margin: theme.spacing(1),
    },
    polygon: {
        fill: theme.palette.common.white,
        stroke: theme.palette.divider,
        strokeWidth: 1,
    },
}));

export default function SimpleGrow() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);
    // const MainPages = ["חוק ומשפט", "משאבים", 'משא"ן', "לוגיסטיקה"];
    const MainPages = [{ name: "לוגיסטיקה", LinkTo: "Logistics" }, { name: "משאבים", LinkTo: "Mashabim" }, { name: 'משא"ן', LinkTo: "Mashan" }, { name: "חוק ומשפט", LinkTo: "Chok_vMispat" }]
    const LogisiticsPages = [{ name: "תקציב ורכש", LinkTo: "" }, { name: "תקינת אמצעים", LinkTo: "" }, { name: "שכר עידוד", LinkTo: "" }, { name: "קטלוג", LinkTo: "" }, { name: "משאבי אימונים", LinkTo: "" }, { name: "מלאי", LinkTo: "" }, { name: "אחזקה", LinkTo: "" }]
    const MashabimPages = [{ name: 'אג"ת', LinkTo: "" }]
    const MashanPages = [{ name: "מיטב", LinkTo: "" }, { name: 'תכנון כ"א', LinkTo: "" }, { name: "תנופה", LinkTo: "" }, { name: "יסודות", LinkTo: "" },]
    const Chok_vMispatPages = [{ name: "בתי דין", LinkTo: "" }, { name: "סנגוריה", LinkTo: "" }, { name: "תביעה", LinkTo: "" }]


    const [pageData, setPageData] = React.useState(MainPages);

    const onLocationChange = () => {
        console.log(window.location.pathname)
    }

    const handleChange = (currPage) => {

    };



    useEffect(() => {
        setInterval(function () {


        }, 1000);

        setInterval(function () {

            switch (window.location.pathname) {
                case "/Logistics":
                    setPageData(LogisiticsPages);
                    setChecked(true)

                    break;
                case "/Mashabim":
                    setPageData(MashabimPages);
                    setChecked(true)

                    break;
                case "/Mashan":
                    setPageData(MashanPages);
                    setChecked(true)

                    break;
                case "/Chok_vMispat":
                    setPageData(Chok_vMispatPages);
                    setChecked(true)

                    break;
                case "/":
                    setPageData(MainPages);
                    setChecked(true)

                    break;

                default:
                    break;
            }
        }, 1000);



    }, [window.location.pathname]);






    return (
        <div className={classes.root}>

            <div className={classes.container}>
                {/* <ul className=" navbar-nav "> */}
                <ul >

                    {pageData.length
                        ? pageData.map(pageData => (

                            <Grow className="page-scroll"

                                in={checked}
                                style={{ transformOrigin: "0 0 0" }}
                                {...(checked ? { timeout: 1250 } : {})}
                                {...(!checked ? { timeout: 1250 } : {})}
                            >
                                <li>
                                    <Link to={pageData.LinkTo} className="page-scroll">
                                        <a
                                            onClick={() => handleChange(pageData)}
                                            className="page-scroll"
                                            style={{ fontSize: 20, paddingRight: 20, paddingLeft: 20 }}
                                        >
                                            {pageData.name}
                                        </a>
                                    </Link>

                                </li>
                            </Grow>
                        ))
                        : null}
















                    {/* <MoveSelected /> */}

                </ul>
            </div>

        </div>
    );
}










// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Switch from "@material-ui/core/Switch";
// import Paper from "@material-ui/core/Paper";
// import Grow from "@material-ui/core/Grow";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Slide from '@material-ui/core/Slide';

// const useStyles = makeStyles((theme) => ({

//     container: {
//         display: "flex",
//     },
//     paper: {
//         // margin: theme.spacing(1),
//     },
//     polygon: {
//         fill: theme.palette.common.white,
//         stroke: theme.palette.divider,
//         strokeWidth: 1,
//     },
// }));

// export default function SimpleGrow() {
//     const classes = useStyles();
//     const [checked, setChecked] = React.useState(true);

//     const handleChange = () => {
//         setChecked((prev) => !prev);
//     };

//     return (
//         <div className={classes.root}>
//             <FormControlLabel
//                 control={<Switch checked={checked} onChange={handleChange} />}
//                 label="Show"
//             />
//             <div className={classes.container}>
//                 <ul className="nav navbar-nav navbar-right">
//                     <Slide direction="right" in={checked} mountOnEnter unmountOnExit style={{ transformOrigin: '0 0 0' }}
//                         {...(checked ? { timeout: 1500 } : {})}>

//                         <li style={{ paddingLeft: 400 }}>
//                             <a href="משאבים" className="page-scroll" style={{ fontSize: 20 }}>
//                                 משאבים
//               </a>
//                         </li>
//                     </Slide>

//                     <Slide direction="right" in={checked} mountOnEnter unmountOnExit style={{ transformOrigin: '0 0 0' }}
//                         {...(checked ? { timeout: 1500 } : {})}>

//                         <li>
//                             <a
//                                 href="חוק ומשפט"
//                                 className="page-scroll"
//                                 style={{ fontSize: 20, paddingRight: 20, paddingLeft: 20 }}
//                             >
//                                 חוק ומשפט
//               </a>
//                         </li>
//                     </Slide>

//                     <Slide direction="right" in={checked} mountOnEnter unmountOnExit style={{ transformOrigin: '0 0 0' }}
//                         {...(checked ? { timeout: 1500 } : {})}>

//                         <li>
//                             <a
//                                 href='משא"ן'
//                                 className="page-scroll"
//                                 style={{ fontSize: 20, paddingRight: 20, paddingLeft: 20 }}
//                             >
//                                 משא"ן
//               </a>
//                         </li>
//                     </Slide>

//                     <Slide direction="right" in={checked} mountOnEnter unmountOnExit style={{ transformOrigin: '0 0 0' }}
//                         {...(checked ? { timeout: 1500 } : {})}>

//                         <li>
//                             <a
//                                 href="לוגיסטיקה"
//                                 className="page-scroll"
//                                 style={{ fontSize: 20, paddingRight: 20, paddingLeft: 20 }}
//                             >
//                                 לוגיסטיקה
//               </a>
//                         </li>
//                     </Slide>
//                 </ul>
//             </div>
//         </div>
//     );
// }
