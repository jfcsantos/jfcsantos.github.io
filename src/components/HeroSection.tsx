export const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center">
      <div className="max-w-2xl">
        <div className="content-space">
          <h1 className="title">João Santos</h1>
          <p className="mono text-text-muted">Freelance Developer</p>
          
          <div className="content-space">
            <p className="body">
              I build web applications at the intersection of technology, 
              user experience, and business solutions.
            </p>

            <p className="body">
              Currently available for freelance work.
            </p>

            <div className="flex space-x-8 pt-4">
              <a href="#experience" className="simple-link">Experience</a>
              <a href="#work" className="simple-link">Work</a>
              <a href="#about" className="simple-link">About</a>
              <a href="#contact" className="simple-link">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};