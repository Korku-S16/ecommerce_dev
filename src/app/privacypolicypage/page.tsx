import React from 'react';
import HeaderTop from "@/app/home/component/HeaderTop";
import Footer from "@/app/home/component/footer";
import Container from "@/app/home/component/container";
import { HiOutlineGlobeAlt } from "react-icons/hi";

const PrivacyPolicyPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-700 text-white">
            <HeaderTop />
            <Container>
                <div className="flex justify-between items-center mt-8">
                    <h1 className="text-3xl font-bold text-center flex-grow text-white">
                        PRIVACY POLICY
                    </h1>
                    <div className="flex items-center space-x-2">
                        <HiOutlineGlobeAlt className="h-6 w-6 text-white" />
                        {/* <select
                            className="bg-gray-800 text-white border border-gray-700 rounded px-2 py-1"
                            defaultValue="English"
                        >
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                            <option value="French">French</option>
                        </select> */}
                    </div>
                </div>
                <div className="mt-6 overflow-y-auto max-h-[70vh] space-y-4 text-base leading-relaxed">
                    <p>
                        Disclaimer: In case of any discrepancy or difference, the English
                        version will take precedence over the translation.
                    </p>

                    <p>
                        At [COMPANY_NAME], we are committed to protecting your personal
                        information and your right to privacy. This Privacy Policy explains
                        how we collect, use, disclose, and safeguard your information when
                        you visit our website [WEBSITE_NAME] or use our services.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">1. Information We Collect</h2>
                    <p>
                        We collect personal information that you voluntarily provide to us
                        when you register on the website, place an order, or interact with
                        us. This may include:
                        <ul className="list-disc ml-6">
                            <li>Name and Contact Data (email address, phone number, etc.)</li>
                            <li>Billing and Shipping Information</li>
                            <li>Login Credentials</li>
                            <li>Payment Information</li>
                        </ul>
                    </p>

                    <h2 className="text-xl font-semibold mt-4">2. How We Use Your Information</h2>
                    <p>
                        We use your information to:
                        <ul className="list-disc ml-6">
                            <li>Process your transactions</li>
                            <li>Send confirmations, updates, and support messages</li>
                            <li>Improve our services and user experience</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </p>

                    <h2 className="text-xl font-semibold mt-4">3. Sharing Your Information</h2>
                    <p>
                        We do not sell your personal information. We may share information with:
                        <ul className="list-disc ml-6">
                            <li>Trusted third-party service providers</li>
                            <li>Legal authorities, if required by law</li>
                        </ul>
                    </p>

                    <h2 className="text-xl font-semibold mt-4">4. Cookies and Tracking Technologies</h2>
                    <p>
                        We use cookies and similar tracking technologies to improve your
                        experience on our site. You can control cookie preferences in your
                        browser settings.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">5. Data Retention</h2>
                    <p>
                        We retain your information for as long as necessary to fulfill the
                        purposes outlined in this Privacy Policy unless a longer retention
                        period is required by law.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">6. Your Privacy Rights</h2>
                    <p>
                        You may review, update, or delete your personal information at any
                        time by contacting us at [COMPANY_EMAIL].
                    </p>

                    <h2 className="text-xl font-semibold mt-4">7. Children's Privacy</h2>
                    <p>
                        Our website is not intended for children under 13. We do not knowingly
                        collect personal data from children.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">8. Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. The updated
                        version will be indicated by an updated “Last Updated” date.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">9. Contact Us</h2>
                    <p>
                        If you have any questions or concerns about this Privacy Policy, you
                        may contact us at:
                        <br />
                        <strong>Email:</strong> [COMPANY_EMAIL] <br />
                        <strong>Address:</strong> [COMPANY_ADDRESS]
                    </p>

                    <p className="text-sm text-gray-400 mt-4">Last Updated: [LAST_UPDATED_DATE]</p>
                </div>
            </Container>
            <Footer />
        </div>
    );
};

export default PrivacyPolicyPage;
