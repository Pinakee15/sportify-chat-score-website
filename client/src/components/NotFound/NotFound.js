import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <Flippy
                style={{ position: 'fixed', width: '60%', height: '64%', left: '19%', top: '16%' }} /// these are optional style, it is not necessary
            >
                <FrontSide
                    style={{
                        backgroundColor: 'rgb(0,0,0,0.5)', borderBottom: "3px solid rgb(255, 246, 235)",
                        color: 'white',
                        fontSize: '3vh'
                    }}
                >
                    {/* <img style={{ objectFit: 'contain' }} src="https://blog.playo.co/wp-content/uploads/2017/08/cricket-football.jpg" width="100%"></img> */}
                    <h1 style={{ textAlign: 'center' }}>Sportify</h1>
                    <div>
                        <br />
                        <h4 style={{ textAlign: 'center' }}>Oops ! It seems like page is not found. But dont worry you can always go back
                    to the main page</h4>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <h3 style={{ textAlign: 'center' }} >Go Back</h3>
                        </Link>
                    </div>
                </FrontSide>
            </Flippy>
        </div>
    )
}

export default Contact;


