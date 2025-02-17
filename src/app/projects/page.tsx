import Link from 'next/link';

const projects = [
  {
    name: 'Microtek Partner',
    shortDesc: 'A dealer management system for order tracking, sales monitoring, and scheme implementation.',
    fullDesc: `Associated with Basiq360, this Dealer Management System is a comprehensive mobile and web-based 
    solution designed to streamline order management, sales tracking, and scheme implementation for a company’s 
    dealer network. The app serves as a centralized platform for managing dealer orders, monitoring sales activity, 
    and optimizing user performance.

    🚀 Platform Reach: Successfully launched on Google Play Store and App Store with over 1 lakh downloads.

    🛠 Technology Stack: Developed using IONIC 1 for the mobile app and AngularJS for the web-based admin panel.

    🔹 Key Features:
    - Efficient order management for dealers and distributors.
    - Real-time sales tracking and reporting.
    - Seamless implementation and monitoring of company schemes.
    - User activity management for improved performance insights.

    This project demonstrates expertise in hybrid app development and scalable web solutions, ensuring effective 
    dealer network operations and enhanced user experience.`,
  },
  {
    name: 'Okaya',
    shortDesc: 'A business automation solution for dealers and distributors in the power backup industry.',
    fullDesc: `Okaya is an advanced business automation solution designed to manage distributor operations efficiently. 
    It enables seamless inventory management, customer engagement, and sales tracking for a growing dealer network.

    🚀 Platform Reach: Available on Play Store with thousands of active users.

    🛠 Technology Stack: Built with IONIC Framework for mobile applications and AngularJS for web services.

    🔹 Key Features:
    - Real-time order and inventory management.
    - Automated scheme tracking and dealer performance analytics.
    - Multi-tier user roles with secure access.
    - Enhanced customer support features and notifications.

    This project highlights strong expertise in enterprise-level mobile solutions and B2B sales automation.`,
  },
  {
    name: 'Harrison Locks',
    shortDesc: 'A DMS app for managing dealer network operations, orders, and ledger.',
    fullDesc: `Associated with Basiq360, Harrison Locks is a **Dealer Management System (DMS)** built for the company’s extensive dealer network. 
    The app allows seamless management of orders, billing, ledger tracking, and new promotional schemes.

    🚀 Platform Reach: Currently live and actively used by dealers across various regions.

    🛠 Technology Stack: Developed using **React Native** for mobile, **AngularJS** for web-based admin, and other supporting technologies.

    🔹 Key Features:
    - **Dealer Order Management:** Place, track, and manage orders in real time.
    - **Billing & Ledger Tracking:** View past invoices, payments, and outstanding balances.
    - **Scheme Implementation:** Monitor and apply company promotional schemes.
    - **User Authentication & Role Management:** Secure access for dealers, admins, and executives.
    
    This project highlights **advanced mobile and web app development** with seamless **real-time data synchronization** for an efficient dealer ecosystem.`,
  },
  {
    name: 'Highflow',
    shortDesc: 'A service and complaint management app for better customer support.',
    fullDesc: `Highflow is a **Service and Complaint Management App** designed to streamline and enhance customer service operations. 
    The app helps track and manage service requests and complaints for efficient resolution.

    🚀 Platform Reach: Available on Google Play.

    🛠 Technology Stack: Built with **Ionic Framework**, **AngularJS**, and **JavaScript**.

    🔹 Key Features:
    - **Service Request Management:** Efficiently track and manage service requests and complaints.
    - **User Interaction:** Seamless interaction for customer support staff.
    - **Real-time Updates:** Immediate notification for complaints and service request status.
    - **Reporting & Analytics:** Monitor and report customer satisfaction metrics.

    This project demonstrates expertise in **service management solutions** and leveraging **cross-platform mobile development** for optimal customer service.`,

  },
  {
    name: 'Citybond Gearup',
    shortDesc: 'A Sales Force Automation (SFA) app to track salesperson activities.',
    fullDesc: `Citybond GearUp is a **Sales Force Automation (SFA)** project designed to help companies track their salesperson's daily activities. 
    This app allows managers to track performance, sales visits, and daily updates.

    🚀 Platform Reach: Publicly available on the **Google Play Store** and **App Store**.

    🛠 Technology Stack: Built with **TypeScript**, **Angular**, **Ionic Framework**, **REST APIs**, and more.

    🔹 Key Features:
    - **Daily Sales Activity Tracking:** Track sales activities, meetings, and targets.
    - **User Interface Design:** Optimized UI for quick updates and data entry.
    - **Integration with REST APIs:** Seamless integration with external systems.
    - **Real-time Data Sync:** Updates are reflected instantly for managers and executives.

    This project showcases the use of **SFA solutions** to optimize team management and track performance for better decision-making.`,

  },
  {
    name: 'Microtek LMS',
    shortDesc: 'An app to manage leads for sales teams in the company.',
    fullDesc: `Microtek LMS is an **app designed for lead management**. It helps salespersons within the company manage their leads and track progress.

    🚀 Platform Reach: Publicly available on **Google Play Store** and **App Store**.

    🛠 Technology Stack: Created using **IONIC 1** for the mobile app and **AngularJS** for the web admin panel.

    🔹 Key Features:
    - **Lead Management:** Efficiently track and manage leads and sales prospects.
    - **User Interaction:** Simple, easy-to-use interface for sales teams.
    - **Real-time Sync:** Data synchronized in real-time between salespersons and admins.
    - **Reporting and Analytics:** Provides performance insights and key metrics.

    This project reflects a powerful solution for managing leads and improving sales team productivity using **hybrid mobile development** technologies.`,
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Back to Home Link */}
        <div className="absolute top-6 right-6">
          <Link href="/" className="text-white text-lg font-semibold underline hover:text-gray-300 transition-all">
            Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold tracking-wide mb-8 text-center sm:text-left">My Projects</h1>

        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mb-6 transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-2 text-teal-400">{project.name}</h2>
            <p className="text-lg text-gray-300 mb-4">{project.shortDesc}</p>
            
            {/* Expandable Full Description */}
            <details className="mt-2 group">
              <summary className="cursor-pointer text-teal-400 font-semibold underline transition-all group-hover:text-teal-300">
                Read More
              </summary>
              <p className="text-gray-300 mt-3 whitespace-pre-line leading-relaxed">{project.fullDesc}</p>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
