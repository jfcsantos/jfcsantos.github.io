export const ContactSection = () => {
  return (
    <section id="contact" className="section-space">
      <div className="grid-minimal">
        <h2 className="section-title">Contact</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="content-space">
            <p className="body">
              Available for freelance work. Whether you're a startup with a bold vision 
              or an established business looking to expand online—let's talk.
            </p>
            
            <div className="space-y-3">
              <div>
                <a 
                  href="mailto:hello@joaofsantos.com" 
                  className="simple-link mono"
                >
                  hello@joaofsantos.com
                </a>
              </div>
              
              <div className="flex space-x-6">
                <a 
                  href="https://linkedin.com/in/freelancedeveloper" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="simple-link"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/joaofsantos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="simple-link"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <p className="caption">
              Based in Portugal<br />
              Working globally
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};