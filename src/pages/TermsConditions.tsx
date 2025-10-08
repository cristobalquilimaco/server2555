import React from 'react';
import { FileText, Mail, MapPin } from 'lucide-react';

interface TermsConditionsPageProps {
  darkMode: boolean;
}

const TermsConditions: React.FC<TermsConditionsPageProps> = ({ darkMode }) => {
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-50 text-gray-700'}`}>
      <div className={`bg-gradient-to-r from-purple-700 to-purple-600 text-white py-16`}>
        <div className="container mx-auto px-4 text-center">
          <FileText className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
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
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-700'} mb-6`}>DonHoster Terms of Service</h2>

          <p className="mb-8">
            This document expresses the terms of service which all customers who purchase a product from our company DonHoster fully accept, and under which the service is provided. Therefore, all present and future products or services are regulated under this policy, which may be modified at any time with or without prior notice, and the user accepts such changes.
          </p>

          <div className="space-y-8">
            <section>
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-700'} mb-6`}>COMPANY RESPONSIBILITIES</h3>

              <div className="space-y-6">
                <div>
                  <h4 className={`text-xl font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-700'} mb-4`}>1. Notifications</h4>
                  <p>
                    The company commits to send notifications, promotions, payment reminders and/or promotions through tickets or email. It should be noted that in the case of payment reminders, although the company commits to notify them, it is the customer's duty to be aware of their expiration and/or service renewal dates. For this reason, it is extremely important that the customer commits to provide current and updated contact information so that they can effectively receive our notices, and notify us if they change for any reason, releasing the company from responsibility if an email does not reach its destination for the reasons mentioned above.
                  </p>
                </div>

                <div>
                  <h4 className={`text-xl font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-700'} mb-4`}>2. Technical Support</h4>
                  <p>
                    The company commits to provide technical support exclusively via ticket or email, only for issues related to hardware and server connectivity, but not software-related support, understanding that the customer is the sole administrator of their product, its security, operation, and backup presence. We do not provide technical support by phone or through SOCIAL MEDIA.
                  </p>
                </div>

                <div>
                  <h4 className={`text-xl font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-700'} mb-4`}>3. Warranty</h4>
                  <p>
                    We cannot provide a guarantee that the offered service may not be interrupted or error-free, nor that the information available for our products is virus-free, understanding that the customer is aware beforehand of all risks inherent to the use of technologies and their vulnerabilities. The customer accepts and is aware that any information placed on our servers could be available to any internet user, and that we have no responsibility, that is, we are not liable for the loss of their information.
                  </p>
                </div>

                <div>
                  <h4 className={`text-xl font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-700'} mb-4`}>4. Pricing</h4>
                  <p>
                    The company is completely free to modify the price of its products at any time it wishes, whether for purchasing a new service or for renewal; with or without prior notice to its customers.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-700'} mb-6`}>CUSTOMER RESPONSIBILITIES</h3>

              <div className="space-y-6">
                <div>
                  <h4 className={`text-xl font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-700'} mb-4`}>1. Use of Our Products</h4>
                  <p>
                    The customer agrees to use our products only for legal purposes; any illegal conduct or conduct the company considers improper, according to international regulations, is strictly prohibited, and the company reserves the right to analyze and take decisions or sanctions depending on the situation, even leading to temporary or total termination of the service contract. The customer accepts full responsibility and exempts our company from any content in the purchased products, its use, and possible international legal sanctions that may arise.
                  </p>
                </div>

                <div>
                  <h4 className={`text-xl font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-700'} mb-4`}>2. Infractions</h4>
                  <p>
                    The customer agrees to behave respectfully towards our company and its employees; considering that any action aimed at damaging our image, mistreating, threatening, or offending, will be sufficient cause for immediate termination of all services provided by our company. Additionally, the customer agrees not to perform any voluntary or involuntary action that harms any of our servers, affecting their proper functioning for other customers.
                  </p>
                </div>

                <div>
                  <h4 className={`text-xl font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-700'} mb-4`}>3. Product Suspension</h4>
                  <p>
                    The customer understands that failure to pay for the product before the due date is sufficient cause for its suspension, granting our company a period of 72 hours for the customer to contact us before all their product information is deleted. If the customer wishes to cancel their product or not renew it, they must notify us through a cancellation request with the corresponding justification.
                  </p>
                </div>

                <div>
                  <h4 className={`text-xl font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-700'} mb-4`}>4. Domain Acquisition</h4>
                  <p>
                    The customer understands that domain name availability is not controlled by our company, so it is their responsibility to wait until registration confirmation is made. Also, it cannot be modified until the contract is complete, so any transcription errors or change of opinion by the customer are their responsibility; if they want to change the domain name, they must register and acquire a new available domain.
                  </p>
                </div>

                <div>
                  <h4 className={`text-xl font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-700'} mb-4`}>5. Renewals</h4>
                  <p>
                    The customer acknowledges that expired domains renewed late will have a limit of up to 10 days, which will take between 24 and 48 hours to reactivate due to required propagation, and may not be available, understanding that this period is not controlled by us.
                  </p>
                </div>

                <div>
                  <h4 className={`text-xl font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-700'} mb-4`}>6. Domain Service Limitations</h4>
                  <p>
                    The customer is aware that domain registration and usage can be canceled, suspended, limited, or transferred if our company, the domain provider, ICANN, the government, or any other relevant entity so decides, whether for dispute resolution, security protection, intellectual property infringement claims, among others.
                  </p>
                </div>

                <div>
                  <h4 className={`text-xl font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-700'} mb-4`}>7. User Identification</h4>
                  <p>
                    The customer ensures they are legally responsible, over 18 years old, or authorized by a legal representative, who will be legally responsible for the use of the product and data uploaded. Furthermore, they guarantee that the information provided, including email, name, phone number, or other required data, is true and will be kept updated. Finally, through this document, the customer also accepts the data processing policies and the publication of information in the WHOIS database and its use by the company, service providers, or government entities that require it, according to Privacy Policies.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className={`mt-12 p-6 rounded-lg ${darkMode ? 'bg-purple-900/20 text-purple-300' : 'bg-purple-50 text-purple-700'}`}>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="mb-4">
              If you have any questions about these terms and conditions, please do not hesitate to contact us.
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

export default TermsConditions;
