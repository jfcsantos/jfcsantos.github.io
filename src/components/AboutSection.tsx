export const AboutSection = () => {
  return (
    <section id="about" className="section-space">
      <div className="grid-minimal">
        <h2 className="section-title">About</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="content-space">
            <p className="body">
              I'm a software engineer who transformed web development from a hobby into a career. 
              I've worked on projects for both individuals and large corporations.
            </p>
            
            <p className="body">
              My approach combines technical expertise with business understanding. 
              Great software isn't just about clean code—it's about solving real problems.
            </p>

            <p className="body">
              When I'm not coding, I'm exploring new technologies, contributing to 
              open source, or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-medium text-text-primary mb-4">Services</h3>
              <ul className="space-y-2">
                <li className="body">Full-stack web development</li>
                <li className="body">React & Vue.js applications</li>
                <li className="body">API design & development</li>
                <li className="body">Database architecture</li>
                <li className="body">Technical consulting</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-text-primary mb-4">Stack</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="caption">Frontend:</span>
                  <span className="mono text-xs">JavaScript, TypeScript, React, Vue.js</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="caption">Backend:</span>
                  <span className="mono text-xs">Node.js, Python, PostgreSQL, MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};