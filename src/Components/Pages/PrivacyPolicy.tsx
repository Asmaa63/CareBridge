import React from "react";
import {
  FaUserShield,
  FaInfoCircle,
  FaLock,
  FaCookieBite,
  FaRegEdit,
  FaLink,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-10">
          Privacy Policy
        </h1>
        <p className="text-gray-700 mb-6 text-lg text-center leading-relaxed">
          CareBridge Rehab is committed to protecting your privacy. This Privacy
          Policy outlines how we collect, use, and safeguard your information
          when you visit our website or use our services. By accessing our
          website, you agree to the terms of this policy.
        </p>

        <section className="space-y-8">
          {/* Section 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-bold text-blue-600 flex items-center mb-4">
              <FaInfoCircle className="mr-2 text-blue-500 shrink-0" />
              Information We Collect
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>
                <strong>Personal Information:</strong> Name, contact details
                (email address, phone number), and other information provided
                voluntarily through contact forms.
              </li>
              <li>
                <strong>Professional Information:</strong> Licenses,
                certifications, and work history if you apply for a position
                with us.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact
                with our website (e.g., IP address, browser type, pages
                visited).
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-bold text-blue-600 flex items-center mb-4">
              <FaUserShield className="mr-2 text-blue-500 shrink-0" />
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Provide staffing services to home health agencies.</li>
              <li>Communicate with clinicians, agencies, and clients.</li>
              <li>Improve our website and services.</li>
              <li>Comply with legal and regulatory requirements.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-bold text-blue-600 flex items-center mb-4">
              <FaLock className="mr-2 text-blue-500 shrink-0" />
              Data Security
            </h2>
            <p className="text-gray-600">
              We take reasonable measures to protect your information from
              unauthorized access, use, or disclosure. However, no method of
              transmission over the Internet or electronic storage is completely
              secure.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-bold text-blue-600 flex items-center mb-4">
              <FaCookieBite className="mr-2 text-blue-500 shrink-0" />
              Cookies and Tracking
            </h2>
            <p className="text-gray-600">
              Our website may use cookies to enhance your browsing experience.
              You can disable cookies through your browser settings, but this
              may affect website functionality.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-bold text-blue-600 flex items-center mb-4">
              <FaLink className="mr-2 text-blue-500 shrink-0" />
              Third-Party Links
            </h2>
            <p className="text-gray-600">
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices of these external sites.
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-600 flex items-center mb-4">
          <FaEnvelope className="mr-2 text-blue-500 text-xl sm:text-2xl" /> Contact Us
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          If you have questions about this Privacy Policy or our practices, please contact us at:
        </p>
        <div className="mt-4 space-y-2">
          <p className="flex items-center text-sm sm:text-base">
            <FaPhoneAlt className="mr-2 text-blue-500 text-lg sm:text-xl" />
            <a href="tel:+17086789145" className="text-blue-600 hover:underline">
              +1 (708) 6789145
            </a>
          </p>
          <p className="flex items-center text-sm sm:text-base">
            <FaEnvelope className="mr-2 text-blue-500 text-lg sm:text-xl" />
            <a
              href="mailto:admin@carebridgerehab.com"
              className="text-blue-600 hover:underline"
            >
              admin@carebridgerehab.com
            </a>
          </p>
        </div>
        </div>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
