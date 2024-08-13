import React from 'react'
import GradeIcon from '@mui/icons-material/Grade';
function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
    <div className="testimonials-box">
      <h2 className="heading">Testimonials</h2>
      <div className="wrapper">
        <div className="testimonial-item">
          <img src="./3.jfif" alt="Marylin" />
          <h2>Marylin</h2>
          <div className="rating">
            <GradeIcon fontSize='large'/>
            <GradeIcon fontSize='large'/>
            <GradeIcon fontSize='large'/>
            <GradeIcon fontSize='large'/>
            <GradeIcon fontSize='large'/>
          </div>
          <p>
            "An absolute pleasure to work with! Their expertise in the MERN stack was evident from day one. The project was completed on time with all our requirements met. The communication was smooth, and the final product exceeded our expectations."
          </p>
        </div>

        <div className="testimonial-item">
          <img src="./1.jfif" alt="Sarah" />
          <h2>Sarah</h2>
          <div className="rating">
            <GradeIcon fontSize='large'/>
            <GradeIcon fontSize='large'/>
            <GradeIcon fontSize='large'/>
            <GradeIcon fontSize='large'/>
            <GradeIcon fontSize='large'/>
          </div>
          <p>
            "Their proficiency in Java and Spring Boot truly stands out. They developed a highly scalable backend for our application, integrating complex APIs seamlessly. We are thrilled with the performance and reliability of the system."
          </p>
        </div>

        <div className="testimonial-item">
          <img src="./2.jfif" alt="Rania" />
          <h2>Rania</h2>
          <div className="rating">
            <GradeIcon fontSize='large'/>
            <GradeIcon fontSize='large'/>
            <GradeIcon fontSize='large'/>
            <GradeIcon fontSize='large'/>
            <GradeIcon fontSize='large'/>
          </div>
          <p>
            "Their Next.js expertise helped us create a fast, SEO-friendly website that our users love. The attention to detail in the frontend development was exceptional, leading to a highly intuitive user experience."
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Testimonials
