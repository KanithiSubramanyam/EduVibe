import React from 'react';
import "./App.css";

let data=[
    {
        imgurl:"https://www.takshila-vlsi.com/wp-content/uploads/2019/11/icon_1.png",
        title:"Course delivered by Experts",
        text:"Experts in the industry teach our various courses to students. At Takshila, our experts share their experience and help build the career of our students in the VLSI industry. You have the opportunity of carrying out practical applications and examples."
    },
    {
        imgurl:"https://www.takshila-vlsi.com/wp-content/uploads/2019/11/icon_2.png",
        title:"100% placement support",
        text:" Our main goal is to help engineers build a successful career in the VLSI industry. Not only we do train you, but we also coach you in order to become a best Chip Designer. Our training process allows students to learn even complex technologies within a short time space and transforming them into professionals in no time."
    },
    {
        imgurl:"https://www.takshila-vlsi.com/wp-content/uploads/2019/11/icon_3.png",
        title:"Superior Training infrastructure and Methodology",
        text:"Industry experts carefully designed the training program based on the career growth and job opportunities available in the VLSI industry. We use an unique training methodology for our students with 70% of the course time allocated to the labs, mini-projects, and the final projects. However, the other 30% is allocated to imparting the technologies to our student"
    },
    {
        imgurl:"https://www.takshila-vlsi.com/wp-content/uploads/2019/11/icon_3.png",
        title:"Value for Money",
        text:"We teach you all advanced courses at a reasonable cost. We offer you more for less."
    },
]

const Feature=(props)=>{
    return(
        
        <section className='each-feature'>
            <img src={props.imgurl} alt='Feature'/>
            <h6>{props.title}</h6>
            <p>{props.text}</p>
        </section>
    
    )
}

const Features = () => {
  return (
    <div className='feature-head'>
            <h1>Unique Features of Takshila VLSI
</h1>
    <article className='Feature-grid'>
        {
            data.map((eachObj)=>{
                const {imgurl,text,title}=eachObj;
                return <Feature imgurl={imgurl} text={text} title={title}/>
            })
        }
    </article>
    </div>
  )
}

export default Features;