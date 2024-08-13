import React from 'react'

function Services() {
  return (
    <section className="services" id="services">
        <h2 className="heading">Services</h2>

        <div className="services-container">
            <div className="service-box">
               <div className="service-info">
                <h4>Web Development</h4>
                <p>Specializing in building robust and scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js). From designing responsive user interfaces to implementing complex backend logic, I deliver complete end-to-end solutions.</p>
               </div>
            </div>

            <div className="service-box">
                <div className="service-info">
                 <h4>Backend Development</h4>
                 <p>Expert in creating efficient and secure backend systems using Java and Spring Boot. Whether it's developing RESTful APIs, managing databases, or integrating third-party services, I ensure the backbone of your application is solid and reliable.</p>
                </div>
             </div>

             <div className="service-box">
                <div className="service-info">
                 <h4>Frontend Development</h4>
                 <p>Crafting engaging and intuitive user interfaces with Next.js. I focus on creating seamless user experiences with fast, SEO-friendly, and accessible web applications that stand out in the digital landscape.</p>
                </div>
             </div>

             <div className="service-box">
                <div className="service-info">
                 <h4>C++ Development</h4>
                 <p>Proficient in C++ for system-level programming, performance-critical applications, and software development. I bring expertise in developing efficient algorithms, optimizing code, and creating reliable software solutions for various domains.</p>
                </div>
             </div>
        </div>

    </section>
  )
}

export default Services
