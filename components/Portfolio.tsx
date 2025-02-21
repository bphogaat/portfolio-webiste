"use client";

import { useState } from "react";
import {
  Mail,
  Linkedin,
  BookOpen,
  GraduationCap,
  Menu,
  X,
  Download,
} from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-lg font-bold text-gray-900">Bhavna Phogaat</h1>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {["About", "Research", "Teaching", "Awards & Honors"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section.toLowerCase())}
                  className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                >
                  {section}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="container mx-auto px-4 py-2">
              <div className="flex flex-col space-y-2">
                {["About", "Research", "Teaching", "Awards & Honors"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section.toLowerCase())}
                    className="text-left py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      <div className="container mx-auto pt-20">
        <div className="flex flex-col md:flex-row gap-8 p-8">
          {/* Left Sidebar */}
          <aside className="md:w-1/3 lg:w-1/4">
            <div className="sticky top-24">
              {/* Profile Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Profile Image */}
                <div className="aspect-square w-full overflow-hidden bg-gray-50">
                  <Image
                    src="/profile.jpeg"
                    alt="Profile photo of Bhavna Phogaat"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>

                {/* Profile Info */}
                <div className="p-6 space-y-6">
                  {/* Name and Title */}
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                      Bhavna Phogaat
                    </h1>
                    <div className="mt-2 space-y-1">
                      <p className="text-gray-600">Ph.D. Candidate</p>
                      <p className="text-gray-600">Department of Marketing</p>
                      <p className="text-gray-600">
                        Darla Moore School of Business
                      </p>
                      <p className="text-gray-600">
                        University of South Carolina
                      </p>
                    </div>
                  </div>

                  {/* Contact/Social Links */}
                  <div className="space-y-3 pt-4 border-t">
                    <a
                      href="https://www.dropbox.com/scl/fi/k5xmjvjux38exawsn2ovh/BhavnaPhogaat_CV.pdf?rlkey=fvuk2gixcswq1emplpa9bd72j&e=1&st=pgctxl08&dl=0"
                      className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-lg hover:bg-gray-50"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download size={18} />
                      <span>Download CV</span>
                    </a>
                    <a
                      href="mailto:bhavna.phogaat@grad.moore.sc.edu"
                      className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-lg hover:bg-gray-50"
                    >
                      <Mail size={18} />
                      <span>Email</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/bhavna-phogaat-0104b3138/"
                      className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-lg hover:bg-gray-50"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={18} />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="https://scholar.google.com/citations?user=BiGwgkUAAAAJ&hl=en"
                      className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-lg hover:bg-gray-50"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BookOpen size={18} />
                      <span>Google Scholar</span>
                    </a>
                  </div>

                  {/* Research Interests */}
                  <div className="pt-4 border-t">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">
                      Research Interests
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          Substantive
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          Marketing, Public Policy, Social Media Analytics
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          Methodological
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          Applied Econometrics, Causal Inference, Quasi
                          Experiments
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content (Note the added inline style for justification) */}
          <main
            className="md:w-2/3 lg:w-3/4 space-y-16"
            style={{ textAlign: "justify" }}
          >
            {/* About Me */}
            <section id="about" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About Me
              </h2>
              <div className="prose prose-gray max-w-none space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  I am a Ph.D. candidate in Marketing at the Darla Moore School
                  of Business, University of South Carolina (USC). My research
                  interests lie in marketing, public policy, and social media
                  analytics. I use applied econometrics, causal inference, and
                  quasi-experimental methods to examine consumer behavior and
                  the impact of policy interventions.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  My research titled “Spring Forward = Fall Back? The Effect of
                  Daylight Saving Time Change on Consumers' Unhealthy Behavior”
                  has been published in the <em>Journal of Marketing</em> and
                  cited by nearly 40 media outlets within a year of its
                  publication. My overall research performance in the doctoral
                  program has been recognized through several honors and awards,
                  including the Doctoral Fellows Award for Outstanding Academic
                  Performance (2024) and selection to represent USC as the
                  Haring Symposium Presenter (2025), AMA-Sheth Foundation
                  Doctoral Fellow (2023) and the Marketing Strategy Doctoral
                  Consortium Fellow (2022).
                </p>
                <p className="text-gray-600 leading-relaxed">
                  I have a quantitative and marketing background. Prior to
                  joining the doctoral program in Spring 2021, I worked in the
                  Customer Insights – Data Analysis domain at an analytical
                  firm. My industry projects focused on customer segmentation,
                  churn prediction, and modeling customer retention and
                  acquisition rates. I hold a master’s degree in Applied
                  Operational Research and a bachelor’s degree in Mathematics,
                  both from the University of Delhi, India.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  In addition to research, I am passionate about teaching. I
                  have taught undergraduate course in Principles of Marketing
                  Research, earning strong student evaluations. I have also
                  served as a teaching assistant for several MBA, Professional
                  MBA and undergraduate courses, including, Marketing Analytics,
                  Digital Marketing &amp; Social Media Analytics, CRM &amp; Data
                  Mining, and Global Marketing Management.
                </p>
              </div>
            </section>

            {/* Research */}
            <section id="research" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Research
              </h2>
              <div className="space-y-8">
                {/* Publication */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Publication
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    <a>
                      Janakiraman, Ramkumar, Harsha Kamatham, Sven Feurer,
                      Rishika Rishika, Bhavna Phogaat, and Marina Girju (2024),
                      "
                    </a>
                    <a
                      href="https://journals.sagepub.com/doi/10.1177/00222429241256570"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-gray-900"
                    >
                      Spring Forward= Fall Back? The Effect of Daylight Saving
                      Time Change on Consumers' Unhealthy Behavior,
                    </a>
                    <a>" Journal of Marketing, 88 (6).</a>
                  </p>
                  <p className="text-blue-600 mt-2 underline hover:text-blue-800">
                    <a
                      href="https://sage.altmetric.com/details/163333168/news"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      * Media mentions
                    </a>
                  </p>
                </div>

                {/* Research in Progress */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Research in Progress
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Unintended Consequences of Ban on Vaping Products.</li>
                    <li>Regulatory Changes and Customer Response.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Teaching */}
            <section id="teaching" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Teaching
              </h2>
              <div className="space-y-8">
                {/* Instructor */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Instructor
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <p className="font-medium text-gray-900">
                        Principles of Marketing Research (Undergraduate)
                      </p>
                      <p className="text-gray-600 mt-1">Term: Spring 2025</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        Principles of Marketing Research (Undergraduate)
                      </p>
                      <p className="text-gray-600 mt-1">Term: Fall 2023</p>
                      <p className="text-gray-600 mt-1">
                        Instructor Ratings: 4.33/5
                      </p>
                    </div>
                  </div>
                </div>

                {/* Student Feedback */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Student’s Feedback
                  </h3>
                  <div className="space-y-4 text-gray-600">
                    <blockquote className="italic">
                      “Being thorough of what is to be expected from us, having
                      a positive attitude and knowing the content she is
                      teaching very well. I thought you were a great teacher and
                      honestly one of my favorites I have had at USC.”
                    </blockquote>
                    <blockquote className="italic">
                      “I believe that she truly is here to help us. Any
                      questions we had she would make sure to try to answer to
                      her best ability and make sure you understand her answer
                      before moving on.”
                    </blockquote>
                    <blockquote className="italic">
                      “She is very nice and is interactive. She cares about her
                      students and will respond if you email her asking a
                      question or asking to meet up for help. She wants everyone
                      to do well and she tries to make class fun. She is also
                      funny. For her first time as well, she taught it very
                      well.”
                    </blockquote>
                    <blockquote className="italic">
                      “She is very knowledgeable and willing to help everyone
                      understand the material. She teaches exactly what we need
                      to know and emphasizes the subjects that are of the most
                      importance.”
                    </blockquote>
                    <blockquote className="italic">
                      “Very organized, only assigns homework when she thinks
                      it’s helpful for students, gives lots of helpful review
                      opportunities.”
                    </blockquote>
                  </div>
                </div>

                {/* Teaching Assistant */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Teaching Assistant
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <GraduationCap className="mt-1 flex-shrink-0" size={16} />
                      <span>Marketing Analytics (PMBA)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <GraduationCap className="mt-1 flex-shrink-0" size={16} />
                      <span>
                        Digital Marketing &amp; Social Media Analytics (1 MBA
                        &amp; 2 Undergraduate Sections)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <GraduationCap className="mt-1 flex-shrink-0" size={16} />
                      <span>
                        CRM &amp; Data Mining (MBA &amp; PMBA Sections)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <GraduationCap className="mt-1 flex-shrink-0" size={16} />
                      <span>Marketing Management (MBA)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <GraduationCap className="mt-1 flex-shrink-0" size={16} />
                      <span>Global Marketing Management (2 MBA Sections)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <GraduationCap className="mt-1 flex-shrink-0" size={16} />
                      <span>
                        Principles of Marketing Research (3 Undergraduate
                        Sections)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Awards & Honors */}
            <section id="awards & honors" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Awards & Honors
              </h2>
              <div className="bg-gray-50 p-6 rounded-xl">
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <GraduationCap className="mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600">
                      Haring Symposium Fellow, Presenter (upcoming), Indiana
                      University (April 2025)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <GraduationCap className="mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600">
                      Doctoral Fellows Award for Outstanding Academic
                      Performance &amp; Career Potential, University of South
                      Carolina (May 2024)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <GraduationCap className="mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600">
                      AMA-Sheth Foundation Doctoral Consortium Fellow, BI
                      Norwegian Business School (June 2023)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <GraduationCap className="mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600">
                      Marketing Strategy Doctoral Consortium Fellow, Texas
                      A&amp;M University (June 2022)
                    </span>
                  </li>
                </ul>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
