import Flippy, { FrontSide, BackSide } from 'react-flippy';
import NavbarComp from '../Navbar/NavbarComp';

const About = () => {
    return (
        <div>
            <NavbarComp />
            <Flippy
                flipOnHover={false} // default false
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical
                // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                style={{ position: 'fixed', width: '60%', height: '70%', left: '20%', top: '20%' }} /// these are optional style, it is not necessary
            >
                <FrontSide
                    style={{
                        backgroundColor: 'rgb(0,0,0,0.37)',
                        color: 'white',
                        fontSize: '3vh'
                    }}
                >
                    <img style={{ objectFit: 'contain', border: "3px solid rgb(219, 110, 110)", margin: "auto 0px" }} src="https://blog.playo.co/wp-content/uploads/2017/08/cricket-football.jpg" width="100%"></img>
                    <h5 style={{ textAlign: 'center', backgroundColor: 'rgb(0,0,0,0.8)', padding: '4px' }}>Click me to know </h5>
                </FrontSide>
                <BackSide
                    style={{ backgroundColor: '#175852', color: 'white', textAlign: 'center', fontSize: '1.9vh' }}>
                    Sportify is an initiative to bring together the fans of football and cricket across the world so that fans can interact
                    with each during the cricket/football match. Sportify contains the live scores or the recent match details of the
                    matches. Soon we will add more features to the applicaiton like 'Betting' and chat individually with any person
                    and add video too.
                    Please support us via donations and we will thrive to provide best services to you.
                </BackSide>
            </Flippy>
        </div>
    )
}

export default About;










































// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';


// const useStyles = makeStyles({
//     root: {
//         maxWidth: 500,
//     },
//     media: {
//         height: 200,
//     },
// });

// export default () => {
//     const classes = useStyles();

//     return (
//         <div>
//             <NavbarComp />
//             <div style={{ position: 'absolute', width: '80', left: '39%', top: '20%', boxShadow: "6px 10px 12px black" }} className={classes.root}>
//                 <Card >
//                     <CardActionArea>
//                         <CardMedia
//                             className={classes.media}
//                             image="data:image/jpeg;base64,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"
//                             title="Contemplative Reptile"
//                         />
//                         <CardContent>
//                             <Typography gutterBottom variant="h5" component="h2">
//                                 Sportify
//                         </Typography>
//                             <Typography variant="body2" color="textSecondary" component="p">

//                         </Typography>
//                         </CardContent>
//                     </CardActionArea>
//                     <CardActions>
//                         <Button size="small" color="primary">

//                         </Button>

//                     </CardActions>
//                 </Card>
//             </div >
//         </div >
//     );
// }
