import Flippy, { FrontSide, BackSide } from 'react-flippy';
import NavbarComp from '../Navbar/NavbarComp';

const Contact = () => {
    return (
        <div>
            <NavbarComp />
            <Flippy
                style={{ position: 'fixed', width: '92%', height: '70%', left: '4%', top: '18%', boxShadow: "5px 5px 10px black" }} /// these are optional style, it is not necessary
                flipOnHover={false}
                flipOnClick={false}
            >
                <FrontSide
                    style={{
                        backgroundColor: 'rgb(0,0,0,0.5)', borderBottom: "3px solid rgb(255, 246, 235)",
                        color: 'white',
                        fontSize: '3vh'
                    }}
                >
                    {/* <img style={{ objectFit: 'contain' }} src="https://blog.playo.co/wp-content/uploads/2017/08/cricket-football.jpg" width="100%"></img> */}
                    <h2 style={{ textAlign: 'center' }}>Contact Me</h2>
                    <div>
                        <br />
                        <p><span style={{ color: 'orange' }}>LinkedIn</span> : <a style={{ display: "table-cell", textDecoration: 'none', color: 'whitesmoke', display: 'inline' }} href="https://www.linkedin.com/in/pinakee-kaushik-b24158140/" target="_blank">Go to linkedIn</a></p>
                        <br />
                        <p><span style={{ color: 'orange' }}>Gmail</span> : <a style={{ display: "table-cell", textDecoration: 'none', color: 'whitesmoke', display: 'inline' }} href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=iampinakee2098@gmail.com" target="_blank">iampinakee2098@gmail.com</a></p>
                        <br />
                        <p><span style={{ color: 'orange' }}>Github</span> : <a style={{ display: "table-cell", textDecoration: 'none', color: 'whitesmoke', display: 'inline' }} href=" https://github.com/Pinakee15?tab=repositories" target="_blank">Go to Github</a> </p>
                        <br />
                        <p><span style={{ color: 'orange' }}>Phone No</span>: 9599776701</p>
                    </div>
                </FrontSide>
                <BackSide
                    style={{
                        backgroundColor: 'rgb(0,0,0,0.5)', borderBottom: "3px solid rgb(255, 246, 235)",
                        color: 'white',
                        fontSize: '3vh'
                    }}>

                    <h2 style={{ textAlign: 'center' }}>Contact Me</h2>
                    <div>
                        <br />
                        <p><span style={{ color: 'orange' }}>LinkedIn</span> : <a style={{ display: "table-cell", textDecoration: 'none', color: 'whitesmoke', display: 'inline' }} href="https://www.linkedin.com/in/pinakee-kaushik-b24158140/" target="_blank">Go to linkedIn</a></p>
                        <br />
                        <p><span style={{ color: 'orange' }}>Gmail</span> : iampinakee2098@gmail.com</p>
                        <br />
                        <p><span style={{ color: 'orange' }}>Github</span> : <a style={{ display: "table-cell", textDecoration: 'none', color: 'whitesmoke', display: 'inline' }} href=" https://github.com/Pinakee15?tab=repositories" target="_blank">Go to Github</a> </p>
                        <br />
                        <p><span style={{ color: 'orange' }}>Phone No</span>: 9599776701</p>
                    </div>

                </BackSide>
            </Flippy>
        </div>
    )
}

export default Contact;


