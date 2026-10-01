import { FiAward, FiFileText, FiUsers, FiTrendingUp } from 'react-icons/fi';

const CertificationCard = ({ icon: Icon, title, issuer, description }) => (
  <div className="bg-[#1b1e36] border-2 border-[#393053] rounded-xl p-6 hover:border-pink-400 transition-all hover:scale-[1.02]">
    <div className="flex items-start gap-4">
      <div className="text-pink-400 text-3xl mt-1">
        <Icon />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-pink-300 text-sm mb-2">{issuer}</p>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  </div>
);

const Certifications = () => (
  <section id="certifications" className="w-full max-w-6xl mx-auto mt-16 mb-4 px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-pink-400 flex items-center gap-2 justify-center mb-8">
      Certifications & Achievements <span className="text-pink-300">🌸</span>
    </h2>
    <div className="grid md:grid-cols-2 gap-6">
      <CertificationCard
        icon={FiAward}
        title="AWS Certified Cloud Practitioner (CLF-C02)"
        issuer="Amazon Web Services"
        description="Score: 820/1000 - Validated expertise in AWS Cloud fundamentals, services, security, architecture, pricing, and support."
      />
      <CertificationCard
        icon={FiFileText}
        title="Research Publication - TrustScore"
        issuer="ICT4SD 2026 (Springer LNNS)"
        description="Published research paper on 'TrustScore: A Purchase-Verified Review System for Small Businesses' at the International Conference on ICT for Sustainable Development."
      />
      <CertificationCard
        icon={FiFileText}
        title="Design Patent - Brush Stand with Timely Alert System"
        issuer="Government of India"
        description="Patent No: 483852-001 - Innovative design for a smart brush stand with integrated alert functionality."
      />
      <CertificationCard
        icon={FiTrendingUp}
        title="Top 20% - AlgoUniversity Tech Fellowship"
        issuer="AlgoUniversity"
        description="Selected among the top 20% of participants in a competitive technical fellowship program focused on algorithms and problem-solving."
      />
    </div>
  </section>
);

export default Certifications;
