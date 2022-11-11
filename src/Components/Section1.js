import logo from '../assets/Section1/Group 82.svg'
import './Section1.css'
const Section1 = () => {
    return (
        <>
            <div className="FirstContaner">
                <div className="NavBar">
                    <div className="Logo">
                        <h1><span className="DESIGN">DESIGN</span> <span className="Agency">AGENCY</span></h1>
                    </div>
                    <div className="llist">
                        <a href="/#">Specialize in</a>
                        <a href="/#">Case Study</a>
                        <a href="/#">Process</a>
                        <a href="/#">Industries</a>
                    </div>

                    <div className="Buttons">
                        <button className="button1">Schedule A Call</button>
                        <button className="button2">We are Hiring</button>
                    </div>
                </div>
                <div className="Section">
                    <img className="LogoImage" src={logo} alt="logo" />
                    <div className="logoTag">
                        <h5>INNOVATION DIGITAL TECHNOLOGY</h5>
                    </div>
                    <div className="logosmallTag">
                        <h5>everything we do is the consumer, imagination and you.</h5>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Section1;