import React from 'react'

function Projects() {
  return (
    <section className="education" id="projects">
    <h2 className="heading">Projects</h2>
    <div className="timeline-items">
        <div className="timeline-item">
            <div className="timeline-dot"></div>
                <div className="timeline-date">Kryptopulse: Your Go-To Crypto Companion</div>
            <div className="timeline-content">
                <h3>KryptoPulse</h3>
                <p>Discover Kryptopulse - a sleek, React-powered application designed to keep you informed about the ever-evolving world of cryptocurrency.
</p>
            </div>
            
        </div>

        <div className="timeline-item">
            <div className="timeline-dot"></div>
                <div className="timeline-date">NewsPulse: Real-Time News, Tailored for You.</div>
            <div className="timeline-content">
                <h3>NewsPulse</h3>
                <p>A modern, responsive web application built with React that delivers the latest news in real-time. The app features an intuitive interface with seamless navigation, allowing users to explore top headlines, trending stories, and in-depth articles across various categories like Technology, Business, Entertainment, and Sports.</p>
            </div>
            
        </div>

        <div className="timeline-item">
            <div className="timeline-dot"></div>
                <div className="timeline-date">RealDocs: Your Team’s Document Hub – Anytime, Anywhere.</div>
            <div className="timeline-content">
                <h3>RealDocs</h3>
                <p>
                RealDocs is a state-of-the-art document collaboration platform built with Next.js, providing a robust and seamless experience for teams and individuals who demand efficient, real-time collaboration. Designed as a powerful alternative to traditional tools like Google Docs, RealDocs offers an array of features that streamline document creation and teamwork.</p>
            </div>
            
        </div>

    </div>
</section>
  )
}

export default Projects