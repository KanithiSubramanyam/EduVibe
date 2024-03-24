import React from 'react';

const AboutUs = () => {
    return (
        <>
            <div className='Container'>
                <div className='About'>
                    <div>
                        <p>Welcome to Takshila Institute of VLSI</p>
                        {/* <img></img> */}
                    </div>
                    <div>
                        <p>Best VLSI and Physical Design Training Institute</p>
                        <p>Takshila VLSI institute is among the top 10 VLSI training institutes in India. At Takshila, we understand the changing demands in the field of VLSI. Our courses are designed to offer students hands-on experience in industry trends. We focus on the overall growth and development of the student. At Takshila, our courses are job oriented and our trainers have over 12 year’s industry experience.

                            Since our inception, we have strived to remain among the best VLSI training institutes. We do this through intensive training, affiliation with top-tier design industries and effective placement programs. Our primary aim at Takshila is to connect the student’s skill set with industry requirements. We achieve this through teaching job oriented VLSI courses. We also partner with top-tier design industries for student’s placement programs.

                            We place high importance on excellence and student’s development. That is why our trainers are selected with 12+ experience, worked with Tier-1 semiconductor companies such as Qualcomm, Intel, Broadcom, AMD, Analog Devices, IBM, STMicroelectronics, Synopsys, Texas Instruments and Xilinx. We have a very conducive learning environment with modern facilities and learning tools. Our student’s excellent performance in the field has continually ranked us among the top 10 physical design training institutes here in Bangalore.

                            Sign up today to be among our next set of outstanding VLSI professionals. Contact our student representatives or visit our study center for further information.</p>
                    </div>
                </div>
                <div className='Trainers'>
                    <div className='Card'>
                        <div className='Image'>
                            {/* <img></img> */}
                        </div>
                        <div className='CardContent'>
                            <p><b>Mr. Subbu</b></p>
                            <p>ASIC VERIFICATION SPECIALIST</p>
                            <p>
                                Mr. Rajiv comes with a 13+ years of rich experience in Design Verification in IP, Sub-System and SoC levels. Working experience in multiple protocols like PCIe, USB, SATA, DDR, Ethernet etc, and also he has working experience in both ASIC and FPGA design flows.</p>
                            <p>
                                We believe his solid knowledge on Digital and Advaced System Architectures adopted by industry helps the students to shape themselves as good VLSI engineers.</p>
                            <p>Certified by TAKSHILA VLSI</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;