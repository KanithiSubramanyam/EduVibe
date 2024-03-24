import React from 'react';

const Contact = () => {
    return (
        <>
            <div className='Contact'>
                <div className='ContactHeading'>
                    <h1>Contact Us:</h1>
                    <div className='Line'></div>
                    <p className='ContactDetails'>Welcome to Takshila Institute of VLSI Technologies where we equip you for the VLSI Industry. We do like to hear from you.
                     Contact us to discuss about your career and how our VLSI courses will help you champion a new path in the VLSI Industry.</p>
                </div>
                <div className='ContactMap'>
                    <p> Location on Map :</p>
                    <p>Map</p>
                </div>
                <div className='ContactInfo'>
                    <div className='Address'>
                        <p>Address:</p>
                        <p><b>Takshila Institute of VLSI Technologies</b></p>
                        <p>Ram Arcade, 90/1B, CKB Layout,</p>
                        <p>Chandra Layout, Marathahalli,</p>
                        <p>Opp Innovative Multiplex,</p>
                        <p>Bengaluru, Karnataka 560037, INDIA</p>
                    </div>
                    <div className='Phone'>
                        <p>Phone: </p>
                        <p>+91 xxxxxx7375</p>
                    </div>
                    <div className='Email'>
                        <div>
                            <p>Email</p>
                            <p>info@engvibe.com</p>
                        </div>
                        <div>
                            <p>Web</p>
                            <p>www.engvibe.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;