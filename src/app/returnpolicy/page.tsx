import React from 'react';
import HeaderTop from "@/app/home/component/HeaderTop";
import Footer from "@/app/home/component/footer";
import Container from "@/app/home/component/container";
import { HiOutlineGlobeAlt } from "react-icons/hi";

const PrivacyPolicyPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <HeaderTop />
        <div className="flex-grow overflow-y-auto">
      <Container>
        <div className="flex justify-between items-center mt-8">
          <h1 className="text-3xl font-bold text-center flex-grow text-black">
            Order Cancellation and Return Policy
          </h1>
          <div className="flex items-center space-x-2">
            <HiOutlineGlobeAlt className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="mt-6 overflow-y-auto space-y-4 text-base leading-relaxed">
          <h2 className="text-xl font-semibold mt-4">Order Cancellation Policy</h2>
          <p>
            We understand that you may need to cancel an order. Please review our cancellation policy below:
          </p>

          <h3 className="text-lg font-semibold mt-4">General Cancellation Policy</h3>
          <p>
            - Orders can be canceled at any time before dispatch. Once the order has been dispatched, it cannot be canceled. However, you may choose to reject the order at the doorstep.
          </p>
          <p>
            - The cancellation window varies depending on the product category. Once the specified time has passed, the order cannot be canceled.
          </p>
          <p>
            - If you cancel after the specified time window, a cancellation fee may apply.
          </p>
          <p>
            - In case of a cancellation by the seller due to unforeseen circumstances, a full refund will be issued for prepaid orders.
          </p>

          <h3 className="text-lg font-semibold mt-4">Cancellation Policy for Hyperlocal Orders</h3>
          <p>
            - Orders placed under the "MINUTES" delivery option cannot be canceled or refunded via self-serve. However, cancellations or refunds can be requested through Customer Support in the following cases:
          </p>
          <ul className="list-disc ml-6">
            <li>The order was not delivered within the estimated time displayed during order placement;</li>
            <li>The order has not been picked by the delivery partner;</li>
            <li>The seller has canceled the order due to reasons not attributable to you.</li>
            <li>Any other reason that may be updated from time to time by the platform.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-4">Return and Refund Policy</h2>
          <p>
            Returns are accepted by the seller under the following conditions:
          </p>

          <h3 className="text-lg font-semibold mt-4">Returns Policy</h3>
          <p>
            - Products can be returned for exchange, replacement, or refund depending on the seller's return policy. 
          </p>
          <p>
            - The return policy for a specific product is mentioned on the product page. This policy will override the general return policy.
          </p>
          <p>
            - Returns must be initiated within the specified time frame mentioned on the product page or order confirmation.
          </p>
          
          <h3 className="text-lg font-semibold mt-4">How to Initiate a Return?</h3>
          <p>
            - To initiate a return, please contact customer support or use the return request feature on the website.
          </p>
          <p>
            - The product must be returned in its original condition with all tags, packaging, and invoices.
          </p>
          <p>
            - In some cases, the customer may be required to pay for the return shipping charges unless the product is defective or incorrect.
          </p>

          <h3 className="text-lg font-semibold mt-4">Refund Policy</h3>
          <p>
            The following table outlines the refund process based on the order status:
          </p>

          <div className="overflow-x-auto mt-4">
            <table className="table-auto w-full text-left text-black">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-2">Order Status</th>
                  <th className="px-4 py-2">Refund Timeframe</th>
                  <th className="px-4 py-2">Refund Method</th>
                  <th className="px-4 py-2">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2">Order Canceled by Customer</td>
                  <td className="px-4 py-2">3-7 Business Days</td>
                  <td className="px-4 py-2">Original Payment Method</td>
                  <td className="px-4 py-2">Refunds will be issued once the cancellation is confirmed.</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">Order Canceled by Seller</td>
                  <td className="px-4 py-2">3-7 Business Days</td>
                  <td className="px-4 py-2">Original Payment Method</td>
                  <td className="px-4 py-2">Full refund will be processed for prepaid orders.</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">Return Requested</td>
                  <td className="px-4 py-2">7-10 Business Days</td>
                  <td className="px-4 py-2">Original Payment Method / Store Credit</td>
                  <td className="px-4 py-2">Refund will be processed after the returned product is received and inspected.</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">Failed Delivery</td>
                  <td className="px-4 py-2">3-7 Business Days</td>
                  <td className="px-4 py-2">Original Payment Method</td>
                  <td className="px-4 py-2">Refund will be issued if the order is undeliverable within the expected time frame.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            - In case of a rejected return, the product will be sent back to the customer, and no refund will be issued.
          </p>

          <p className="text-sm text-gray-400 mt-4">Last Updated: [LAST_UPDATED_DATE]</p>
        </div>
      </Container>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
