import React from 'react';
import HeaderTop from "@/app/home/component/HeaderTop";
import Footer from "@/app/home/component/footer";
import Container from "@/app/home/component/container";
import { HiOutlineGlobeAlt } from "react-icons/hi";

const TermsAndConditionsPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-900 text-white">
            <HeaderTop />
            <Container>
                <div className="flex justify-between items-center mt-8">
                    <h1 className="text-3xl font-bold text-center flex-grow text-white">
                        TERMS AND CONDITIONS
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
                        Welcome to [COMPANY_NAME]! These terms and conditions outline the
                        rules and regulations for the use of [WEBSITE_NAME].
                    </p>

                    <h2 className="text-xl font-semibold mt-4">1. Acceptance of Terms</h2>
                    <p>
                        By accessing this website, we assume you accept these terms and
                        conditions in full. Do not continue to use [COMPANY_NAME]'s website
                        if you do not accept all of the terms and conditions stated on this page.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">2. Use of the Website</h2>
                    <p>
                        You agree to use this site only for lawful purposes and in accordance
                        with these terms. You may not use the website in any way that may
                        cause damage to the site or impair others' access.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">3. User Accounts</h2>
                    <p>
                        If you create an account on our website, you are responsible for
                        maintaining the confidentiality of your account and password and for
                        all activities that occur under your account.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">4. Product Information</h2>
                    <p>
                        We strive to ensure accuracy in product descriptions and pricing. 
                        However, we do not guarantee that all product descriptions are complete,
                        accurate, or error-free.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">5. Intellectual Property</h2>
                    <p>
                        All content on this website, including text, images, graphics, and
                        logos, is the property of [COMPANY_NAME] or its content suppliers and
                        is protected by applicable intellectual property laws.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">6. Limitation of Liability</h2>
                    <p>
                        We shall not be held liable for any indirect, incidental, special,
                        or consequential damages resulting from the use or inability to use
                        our services.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">7. Termination</h2>
                    <p>
                        We reserve the right to terminate or suspend access to our services
                        immediately, without prior notice, for conduct that we believe violates
                        these terms or is harmful to other users or us.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">8. Governing Law</h2>
                    <p>
                        These Terms shall be governed and construed in accordance with the laws
                        of India, without regard to its conflict of law provisions.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">9. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please contact us at:
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

export default TermsAndConditionsPage;
