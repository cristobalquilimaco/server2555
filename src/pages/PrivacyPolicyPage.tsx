import React from 'react';
import { Shield, Mail, MapPin } from 'lucide-react';

interface PrivacyPolicyPageProps {
  darkMode: boolean;
}

const PrivacyPolicy: React.FC<PrivacyPolicyPageProps> = ({ darkMode }) => {
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-50 text-gray-700'}`}>
      <div className="bg-gradient-to-r from-purple-700 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl">Our values arise from our focus on customer well-being</p>
          <div className="flex justify-center space-x-8 mt-6 text-sm">
            <span>Ethics</span>
            <span>Responsibility</span>
            <span>Respect</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className={`max-w-4xl mx-auto rounded-lg shadow-lg p-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-700'} mb-6`}>PRIVACY AND DATA PROCESSING POLICIES</h2>

          <p className="mb-6">
            The Privacy Policy describes DonHoster's policies and procedures for handling Customer information and visits to our site. This Privacy Policy has been created with the understanding that Internet technologies are still evolving and Internet business methods continue to change to meet the needs and opportunities of changing technologies. As a result, this Privacy Policy is subject to change as we deem appropriate or necessary.
          </p>

          <p className="mb-8">
            DonHoster understands the importance and responsibility involved in protecting personal data. We are committed to complying with all data protection laws applicable to the company, including the European Union’s General Data Protection Regulation (GDPR).
          </p>

          <div className="space-y-8">
            <section>
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-700'} mb-4`}>1. CUSTOMER INFORMATION</h3>
              <p className="mb-4">
                DonHoster, in the course of serving our Customers, may acquire, store, and transmit communications and information that Customers may consider private or confidential. Some of this information, such as Customer name, address, credit card information, etc., is provided to us by Customers to obtain Services. Other information, such as Customer account status, Service choices, Customer records, etc., is created and maintained by us in the normal course of business.
              </p>
              <p>
                DonHoster may also use cookies, which are small pieces of information that a website can store in a designated file on a user's computer for various reasons. Also, we may store Customer email and other electronic communications as necessary for the transmission and delivery of such communications.
              </p>
            </section>

            <section>
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-700'} mb-4`}>2. DATA SECURITY</h3>
              <p>
                DonHoster has the responsibility to protect the confidentiality of Customer information, account information, and personal communications to the greatest extent possible according to the law and the legitimate interests of DonHoster, its employees, and other Customers using our Services and/or the Company's Network. To protect against loss, misuse, and alteration of collected information, we have established appropriate physical, electronic, and administrative procedures.
              </p>
            </section>

            <section>
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-700'} mb-4`}>3. HOW CUSTOMER INFORMATION IS USED</h3>
              <p className="mb-4">
                DonHoster may use Customer information to provide our Customers with system information or information about new or updated products. We may also share Customer information with selected partners. For example, to provide Customers with information about products that may interest them or to enable them to take advantage of special partner programs.
              </p>
              <p>
                Additionally, DonHoster may share our website usage information about visitors to DonHoster's website with third-party advertising companies for the purpose of targeting our banner ads on DonHoster's website through the use of pixel tags. The information collected by our selected partners through the use of these pixel tags is not personally identifiable.
              </p>
            </section>

            <section>
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-700'} mb-4`}>4. OPT-OUT</h3>
              <p>
                DonHoster customers may opt out of receiving notifications of new or updated products from us or our selected partners by sending an email to <a href="mailto:admin@donhoster.com" className="underline">admin@donhoster.com</a>. However, Customers cannot opt out of receiving information from us that is essential for maintaining or updating Customer accounts or system information.
              </p>
            </section>

            <section>
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-700'} mb-4`}>5. CHANGES</h3>
              <p>
                DonHoster customers may access and modify their personal information by contacting our administration department via email at <a href="mailto:admin@donhoster.com" className="underline">admin@donhoster.com</a>.
              </p>
            </section>

            <section>
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-700'} mb-4`}>6. DISCLOSURE OF CUSTOMER INFORMATION</h3>
              <p>
                DonHoster will not disclose Customers' personal and account information unless we have reason to believe that such disclosure is necessary to identify, contact, or take legal action against someone who may be causing harm or interfering with the rights or property of DonHoster, its Customers, or others. We will disclose such personal and account information if we believe in good faith that the disclosure is required by law.
              </p>
            </section>

            <section>
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-700'} mb-4`}>7. DISCLOSURE OF COMMUNICATIONS</h3>
              <p className="mb-4">
                DonHoster will not disclose to third parties (excluding DonHoster affiliates or our officers and employees) the content of any email or other electronic communication we store or transmit for our Customers, except where necessary or required to:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Provide service to a customer</li>
                <li>Protect the legitimate interests of DonHoster and its Customers</li>
                <li>Cooperate with interception orders, warrants, or other legal processes which we determine, at our sole discretion, to be valid and enforceable</li>
                <li>Provide to a law enforcement agency where content is inadvertently obtained by us and appears to involve the commission of a crime</li>
              </ul>
              <p>
                We disclaim any intention to censor, edit, or engage in continuous review or surveillance of communications stored or transmitted over the Company's Network by Customers and others. However, we will review, remove, or block access to communications that may harm DonHoster, its Customers, or third parties based on any Acceptable Use Policy applicable to the Customer.
              </p>
            </section>

            <section>
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-700'} mb-4`}>8. CONTACTING DONHOSTER</h3>
              <p>
                Any questions regarding this Privacy Policy should be submitted through our website or by contacting our administration department via email at <a href="mailto:admin@donhoster.com" className="underline">admin@donhoster.com</a>.
              </p>
            </section>

            <section>
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-700'} mb-4`}>9. MODIFICATIONS OR CHANGES</h3>
              <p>
                DonHoster reserves the right to modify this Privacy Policy at any time. The effective date of this Privacy Policy is as indicated at the end of this document.
              </p>
            </section>
          </div>

          <div className={`mt-12 p-6 rounded-lg ${darkMode ? 'bg-purple-900/20 text-purple-300' : 'bg-purple-50 text-purple-700'}`}>
            <h3 className="text-lg font-semibold mb-4">Have questions about our Privacy Policy?</h3>
            <p className="mb-4">
              If you have any questions or concerns about our Privacy Policy, please do not hesitate to contact us.
            </p>
            <div className="flex items-center space-x-4">
              <Mail className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
              <span className="font-medium">admin@donhoster.com</span>
            </div>
            <div className="flex items-center space-x-4 mt-2">
              <MapPin className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
              <span className="font-medium">Miami, USA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
