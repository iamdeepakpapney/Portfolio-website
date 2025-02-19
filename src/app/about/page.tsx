import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 text-white px-6 py-16">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Back to Home Link */}
        <div className="absolute top-6 right-6">
          <Link href="/" className="text-white text-lg font-semibold underline hover:text-gray-300 transition-all">
            Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold tracking-wide mb-6">About Me</h1>

        <p className="text-lg sm:text-xl">
          Hello! I’m <strong>Deepak Papney</strong>, a <strong>Front-End Developer</strong> with over <strong>3 years of experience</strong> in building high-performance mobile and web applications.  
          My expertise lies in <strong>Ionic Framework, Angular, AngularJS, React Native, PHP, and MySQL</strong>.
        </p>

        <p className="text-lg sm:text-xl">
          I have successfully developed and launched <strong>50+ live applications</strong>, many of which are available on the Play Store & App Store. 
        </p>

        {/* Experience Section */}
        <h2 className="text-3xl font-bold mt-8">Experience</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold">Senior Frontend Developer</h3>
            <p className="text-lg text-gray-300">Basiq360 | <span className="italic">Jan 2022 - Present</span></p>
            <p className="text-lg">
              Developed multiple <strong>enterprise-level applications</strong> using <strong>Ionic, Angular, AngularJS, and React Native</strong>.  
              Specialized in:
            </p>
            <ul className="list-disc pl-6 text-lg">
              <li>Dealer management systems</li>
              <li>Sales tracking and sales force automation</li>
              <li>Complaint and service management systems</li>
              <li>Real-time API integration</li>
              <li>And other customized projects</li>
            </ul>
          </div>
        </div>

        {/* Awards & Recognition Section */}
        <h2 className="text-3xl font-bold mt-8">Awards & Recognition</h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-semibold">Best Developer Award 2023</h3>
            <p className="text-lg text-gray-300">Awarded by Basiq360 for outstanding performance in the development of enterprise-level applications.</p>
            <p className="text-lg text-gray-300">Date: <strong>December 2023</strong></p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Shining Star of the Year 2022</h3>
            <p className="text-lg text-gray-300">Recognized as the Shining Star of the Year for exceptional contributions and achievements in the field of app development.</p>
            <p className="text-lg text-gray-300">Date: <strong>December 2022</strong></p>
          </div>
        </div>

        {/* Projects Section */}
        <h2 className="text-3xl font-bold mt-8">Notable Projects</h2>

        <ul className="list-disc pl-6 text-lg sm:text-xl mb-6">
          <li><strong>Microtek Partner</strong> - A dealer management system optimizing order tracking and sales insights.</li>
          <li><strong>Okaya</strong> - A robust platform for managing power backup product catalogs and services.</li>
          <li><strong>Citybond GearUp</strong> - A Sales Force Automation (SFA) app designed to track salesperson activities, performance, and daily updates.</li>
        </ul>

        {/* Link to Projects Page */}
        <div className="mt-6">
          <Link href="/projects" className="text-white underline text-lg hover:text-gray-300 transition-all">
            View All Projects
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
