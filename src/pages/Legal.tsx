import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Legal = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Legal Information
          </h1>
          <p className="text-gray-300 text-lg">
            Terms of Use & Privacy Policy
          </p>
        </div>
      </section>

      {/* Combined Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg max-w-none">
            
            {/* Terms of Use Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-2">Terms of Use</h2>
              <p className="text-sm text-gray-500">Last Revised: October 18, 2022</p>
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p>
                  The website located at www.dxfactor.com (the "Site") is a copyrighted work belonging to DXFACTOR LLC ("Company", "us", "our", and "we"). Certain features of the Site may be subject to additional guidelines, terms, or rules, which will be posted on the Site in connection with such features. All such additional terms, guidelines, and rules are incorporated by reference into these Terms.
                </p>

                <p>
                  These Terms of Use (these "Terms") set forth the legally binding terms and conditions that govern your use of the Site. By accessing or using the Site, you are accepting these Terms (on behalf of yourself or the entity that you represent), and you represent and warrant that you have the right, authority, and capacity to enter into these Terms (on behalf of yourself or the entity that you represent). You may not access or use the Site or accept the Terms if you are not at least 18 years old. If you do not agree with all of the provisions of these Terms, do not access and/or use the Site.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                  <p className="text-yellow-800 font-medium">
                    PLEASE BE AWARE THAT SECTION 9.2 OF THESE TERMS CONTAINS PROVISIONS GOVERNING HOW DISPUTES THAT YOU AND WE HAVE AGAINST EACH OTHER ARE RESOLVED, INCLUDING, WITHOUT LIMITATION, ANY DISPUTES THAT AROSE OR WERE ASSERTED PRIOR TO THE EFFECTIVE DATE OF YOUR ACCEPTANCE OF THESE TERMS. IN PARTICULAR, IT CONTAINS AN ARBITRATION AGREEMENT WHICH WILL, WITH LIMITED EXCEPTIONS, REQUIRE DISPUTES BETWEEN US TO BE SUBMITTED TO BINDING AND FINAL ARBITRATION. UNLESS YOU OPT OUT OF THE ARBITRATION AGREEMENT: (1) YOU WILL ONLY BE PERMITTED TO PURSUE DISPUTES OR CLAIMS AND SEEK RELIEF AGAINST US ON AN INDIVIDUAL BASIS, NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS OR REPRESENTATIVE ACTION OR PROCEEDING; AND (2) YOU ARE WAIVING YOUR RIGHT TO PURSUE DISPUTES OR CLAIMS AND SEEK RELIEF IN A COURT OF LAW AND TO HAVE A JURY TRIAL.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Accounts</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1.1 Account Creation</h3>
                <p>
                  In order to use certain features of the Site, you may register for an account ("Account") and provide certain information about yourself as prompted by the account registration form. You represent and warrant that: (a) all required registration information you submit is truthful and accurate; (b) you will maintain the accuracy of such information. You may delete your Account at any time, for any reason, by following the instructions on the Site. Company may suspend or terminate your Account in accordance with Section 8.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1.2 Account Responsibilities</h3>
                <p>
                  You are responsible for maintaining the confidentiality of your Account login information and are fully responsible for all activities that occur under your Account. You agree to immediately notify Company of any unauthorized use, or suspected unauthorized use of your Account or any other breach of security. Company cannot and will not be liable for any loss or damage arising from your failure to comply with the above requirements.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Access to the Site</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.1 License</h3>
                <p>
                  Subject to these Terms, Company grants you a non-transferable, non-exclusive, revocable, limited license to use and access the Site solely for your own personal, noncommercial use.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.2 Certain Restrictions</h3>
                <p>
                  The rights granted to you in these Terms are subject to the following restrictions: (a) you shall not license, sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit the Site, whether in whole or in part, or any content displayed on the Site; (b) you shall not modify, make derivative works of, disassemble, reverse compile or reverse engineer any part of the Site; (c) you shall not access the Site in order to build a similar or competitive website, product, or service; and (d) except as expressly stated herein, no part of the Site may be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any form or by any means. Unless otherwise indicated, any future release, update, or other addition to functionality of the Site shall be subject to these Terms. All copyright and other proprietary notices on the Site (or on any content displayed on the Site) must be retained on all copies thereof.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.3 Modification</h3>
                <p>
                  Company reserves the right, at any time, to modify, suspend, or discontinue the Site (in whole or in part) with or without notice to you. You agree that Company will not be liable to you or to any third party for any modification, suspension, or discontinuation of the Site or any part thereof.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.4 No Support or Maintenance</h3>
                <p>
                  You acknowledge and agree that Company will have no obligation to provide you with any support or maintenance in connection with the Site.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.5 Ownership</h3>
                <p>
                  Excluding any User Content that you may provide (defined below), you acknowledge that all the intellectual property rights, including copyrights, patents, trade marks, and trade secrets, in the Site and its content are owned by Company or Company's suppliers. Neither these Terms (nor your access to the Site) transfers to you or any third party any rights, title or interest in or to such intellectual property rights, except for the limited access rights expressly set forth in Section 2.1. Company and its suppliers reserve all rights not granted in these Terms. There are no implied licenses granted under these Terms.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.6 Feedback</h3>
                <p>
                  If you provide Company with any feedback or suggestions regarding the Site ("Feedback"), you hereby assign to Company all rights in such Feedback and agree that Company shall have the right to use and fully exploit such Feedback and related information in any manner it deems appropriate. Company will treat any Feedback you provide to Company as non-confidential and non-proprietary. You agree that you will not submit to Company any information or ideas that you consider to be confidential or proprietary.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. User Content</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.1 User Content</h3>
                <p>
                  "User Content" means any and all information and content that a user submits to, or uses with, the Site (e.g., content in the inquiry forms, user's profile or postings). You are solely responsible for your User Content. You assume all risks associated with use of your User Content, including any reliance on its accuracy, completeness or usefulness by others, or any disclosure of your User Content that personally identifies you or any third party. You hereby represent and warrant that your User Content does not violate our Acceptable Use Policy (defined in Section 3). You may not represent or imply to others that your User Content is in any way provided, sponsored or endorsed by Company. Since you alone are responsible for your User Content, you may expose yourself to liability if, for example, your User Content violates the Acceptable Use Policy. Company is not obligated to backup any User Content, and your User Content may be deleted at any time without prior notice. You are solely responsible for creating and maintaining your own backup copies of your User Content if you desire.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.2 License</h3>
                <p>
                  You hereby grant (and you represent and warrant that you have the right to grant) to Company an irrevocable, nonexclusive, royalty-free and fully paid, worldwide license to reproduce, distribute, publicly display and perform, prepare derivative works of, incorporate into other works, and otherwise use and exploit your User Content, and to grant sublicenses of the foregoing rights, solely for the purposes of including your User Content in the Site. You hereby irrevocably waive (and agree to cause to be waived) any claims and assertions of moral rights or attribution with respect to your User Content.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.3 Acceptable Use Policy</h3>
                <p>The following terms constitute our "Acceptable Use Policy":</p>
                
                <p>
                  (a) You agree not to use the Site to collect, upload, transmit, display, or distribute any User Content (i) that violates any third-party right, including any copyright, trademark, patent, trade secret, moral right, privacy right, right of publicity, or any other intellectual property or proprietary right, (ii) that is unlawful, harassing, abusive, tortious, threatening, harmful, invasive of another's privacy, vulgar, defamatory, false, intentionally misleading, trade libelous, pornographic, obscene, patently offensive, promotes racism, bigotry, hatred, or physical harm of any kind against any group or individual or is otherwise objectionable, (iii) that is harmful to minors in any way, or (iv) that is in violation of any law, regulation, or obligations or restrictions imposed by any third party.
                </p>

                <p>
                  (b) In addition, you agree not to: (i) upload, transmit, or distribute to or through the Site any computer viruses, worms, or any software intended to damage or alter a computer system or data; (ii) send through the Site unsolicited or unauthorized advertising, promotional materials, junk mail, spam, chain letters, pyramid schemes, or any other form of duplicative or unsolicited messages, whether commercial or otherwise; (iii) use the Site to harvest, collect, gather or assemble information or data regarding other users, including e-mail addresses, without their consent; (iv) interfere with, disrupt, or create an undue burden on servers or networks connected to the Site, or violate the regulations, policies or procedures of such networks; (v) attempt to gain unauthorized access to the Site (or to other computer systems or networks connected to or used together with the Site), whether through password mining or any other means; (vi) harass or interfere with any other user's use and enjoyment of the Site; or (vi) use software or automated agents or scripts to produce multiple accounts on the Site, or to generate automated searches, requests, or queries to (or to strip, scrape, or mine data from) the Site.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.4 Enforcement</h3>
                <p>
                  We reserve the right (but have no obligation) to review, refuse and/or remove any User Content in our sole discretion, and to investigate and/or take appropriate action against you in our sole discretion if you violate the Acceptable Use Policy or any other provision of these Terms or otherwise create liability for us or any other person. Such action may include removing or modifying your User Content, terminating your Account in accordance with Section 8, and/or reporting you to law enforcement authorities.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Indemnification</h2>
                <p>
                  You agree to indemnify and hold Company (and its officers, employees, and agents) harmless, including costs and attorneys' fees, from any claim or demand made by any third party due to or arising out of (a) your use of the Site, (b) your violation of these Terms, (c) your violation of applicable laws or regulations or (d) your User Content. Company reserves the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate with our defense of these claims. You agree not to settle any matter without the prior written consent of Company. Company will use reasonable efforts to notify you of any such claim, action or proceeding upon becoming aware of it.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Third-Party Links & Ads; Other Users</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.1 Third-Party Links & Ads</h3>
                <p>
                  The Site may contain links to third-party websites and services, and/or display advertisements for third parties (collectively, "Third-Party Links & Ads"). Such Third-Party Links & Ads are not under the control of Company, and Company is not responsible for any Third-Party Links & Ads. Company provides access to these Third-Party Links & Ads only as a convenience to you, and does not review, approve, monitor, endorse, warrant, or make any representations with respect to Third-Party Links & Ads. You use all Third-Party Links & Ads at your own risk, and should apply a suitable level of caution and discretion in doing so. When you click on any of the Third-Party Links & Ads, the applicable third party's terms and policies apply, including the third party's privacy and data gathering practices. You should make whatever investigation you feel necessary or appropriate before proceeding with any transaction in connection with such Third-Party Links & Ads.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.2 Other Users</h3>
                <p>
                  Each Site user is solely responsible for any and all of its own User Content. Since we do not control User Content, you acknowledge and agree that we are not responsible for any User Content, whether provided by you or by others. We make no guarantees regarding the accuracy, currency, suitability, appropriateness, or quality of any User Content. Your interactions with other Site users are solely between you and such users. You agree that Company will not be responsible for any loss or damage incurred as the result of any such interactions. If there is a dispute between you and any Site user, we are under no obligation to become involved.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.3 Release</h3>
                <p>
                  You hereby release and forever discharge the Company (and our officers, employees, agents, successors, and assigns) from, and hereby waive and relinquish, each and every past, present and future dispute, claim, controversy, demand, right, obligation, liability, action and cause of action of every kind and nature (including personal injuries, death, and property damage), that has arisen or arises directly or indirectly out of, or that relates directly or indirectly to, the Site (including any interactions with, or act or omission of, other Site users or any Third-Party Links & Ads). IF YOU ARE A CALIFORNIA RESIDENT, YOU HEREBY WAIVE CALIFORNIA CIVIL CODE SECTION 1542 IN CONNECTION WITH THE FOREGOING.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Disclaimers</h2>
                <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                  <p className="font-medium text-gray-900">
                    THE SITE IS PROVIDED ON AN "AS-IS" AND "AS AVAILABLE" BASIS, AND COMPANY (AND OUR SUPPLIERS) EXPRESSLY DISCLAIM ANY AND ALL WARRANTIES AND CONDITIONS OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING ALL WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT, ACCURACY, OR NON-INFRINGEMENT. WE (AND OUR SUPPLIERS) MAKE NO WARRANTY THAT THE SITE WILL MEET YOUR REQUIREMENTS, WILL BE AVAILABLE ON AN UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE BASIS, OR WILL BE ACCURATE, RELIABLE, FREE OF VIRUSES OR OTHER HARMFUL CODE, COMPLETE, LEGAL, OR SAFE.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Limitation on Liability</h2>
                <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                  <p className="font-medium text-gray-900">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL COMPANY (OR OUR SUPPLIERS) BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY LOST PROFITS, LOST DATA, COSTS OF PROCUREMENT OF SUBSTITUTE PRODUCTS, OR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES ARISING FROM OR RELATING TO THESE TERMS OR YOUR USE OF, OR INABILITY TO USE, THE SITE.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Term and Termination</h2>
                <p>
                  Subject to this Section, these Terms will remain in full force and effect while you use the Site. We may suspend or terminate your rights to use the Site (including your Account) at any time for any reason at our sole discretion, including for any use of the Site in violation of these Terms. Upon termination of your rights under these Terms, your Account and right to access and use the Site will terminate immediately.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. General</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">9.1 Changes</h3>
                <p>
                  These Terms are subject to occasional revision, and if we make any substantial changes, we may notify you by sending you an e-mail to the last e-mail address you provided to us (if any), and/or by prominently posting notice of the changes on our Site.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">9.2 Dispute Resolution</h3>
                <div className="bg-red-50 border-l-4 border-red-400 p-4 my-4">
                  <p className="text-red-800 font-medium">
                    Please read this Section 9.2 carefully. It contains procedures for MANDATORY BINDING ARBITRATION AND A CLASS ACTION WAIVER.
                  </p>
                </div>
                <p>
                  All claims and disputes (excluding claims for injunctive or other equitable relief) in connection with these Terms or the use of any product or service provided by the Company that cannot be resolved informally or in small claims court shall be resolved by binding arbitration on an individual basis under the terms of this Arbitration Agreement.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">9.8 Contact Information</h3>
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">DXFACTOR LLC</p>
                  <p className="text-gray-700">
                    Address: 4205 Ridge Top Road, Fairfax, Virginia 22030<br />
                    Telephone: +1(703) 622-2535<br />
                    Email: inquiry@dxfactor.com
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-8">
                  <p className="text-sm text-gray-500">
                    Copyright © 2022 DXFACTOR LLC. All rights reserved. All trademarks, logos and service marks displayed on the Site are our property or the property of other third parties.
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy Policy Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-2">Privacy Policy</h2>
              <p className="text-sm text-gray-500">Last Updated: October 18, 2022</p>
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p>
                  This Privacy Policy describes how DXFACTOR LLC ("DXFACTOR", "we", "our", or "us") collects, uses, and shares your information when you ("you", or "yours") use, access our website, and any services provided on our website (collectively, our "Services"). When you visit our Services or use our Services, you agree to this Privacy Policy.
                </p>

                <p>This Privacy Policy applies to information we collect:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>On our Services;</li>
                  <li>Through our Services; and</li>
                  <li>In email, text, and other electronic messages between you and us.</li>
                </ul>

                <p>It does not apply to information collected by:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Us offline or through any other means, including on any other websites operated by any third-party (including our affiliates and subsidiaries); or</li>
                  <li>Any third party (including our affiliates and subsidiaries), including through any application or content that may link to or be accessible from the Services.</li>
                </ul>

                <p>
                  Please visit our <a href="/terms" className="text-green-600 hover:text-green-700 underline">Terms of Use</a>, which governs the use, liability, and limitations of our Services.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
                
                <p>
                  The information we collect on our Services generally falls into the following two categories "non-personal information" i.e. refers to the information that does not by itself identify a specific individual and "Personal Data" refers to information that lets us know the specific of who you are and includes:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Profile or contact data (e.g.: First and last name, Email, Phone number, address, unique identifiers such as passwords);</li>
                  <li>About your internet connection, the equipment you use to access our Services, including your IP address, operating system, browser type, and usage details;</li>
                  <li>Your health information which you may disclose to us through the use of our Services*; and</li>
                  <li>Any other personally identifiable information that we may require from time to time to comply with applicable laws</li>
                </ul>

                <p>
                  In addition, we will collect any personally identifiable information that you voluntarily provide when you contact us regarding our Services or by filling out forms on our Services. This information includes personally identifiable information such as your name and email address as well as the comments contained in your messages to us or provided to us at the time of registering to use our Services, subscribing to our Services.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                  <p className="text-blue-800 font-medium">
                    *Please note that DXFactor is not a "Covered Entity" as defined under the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and we do not collect any Protected Health Information.*
                  </p>
                </div>

                <p>
                  If you use a location-enabled browser, we may receive information about your location and device. If you access certain applications and software, we make available, we may receive and collect information transmitted from your device for the purpose of providing you the relevant Services, such as information when you are logged on and available to receive updates or alert notices.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Cookies and Other Technologies</h2>
                
                <p>
                  "Cookies" are small files placed on a device when it visits a website to facilitate the use of that website or access online content. When you visit our Services, we may place "cookies" on your computer. We use Cookies for many purposes, including, without limitation, remembering preferences, and tracking visits to our pages for purposes of facilitating and maintaining your current user session. We may associate Personal Data with cookies if you have registered for DXFACTOR's Services or if you have provided Personal Data to us.
                </p>

                <p>
                  We may use session and persistent cookies. Session cookies exist only during one session and disappear from your computer when you close your browser software or turn off your computer. Persistent cookies remain on your computer after you close your browser or turn off your computer. Session cookies make it easier to navigate our Services and persistent cookies are used to remember users' information so they do not have to enter it more than once and to improve our Services. Most Web browsers allow you to disable most types of cookies. Please note that if you disable cookies, you may not be able to access some of the functionality offered on our Services.
                </p>

                <p>
                  Every device connected to the internet is assigned a number known as an Internet protocol (IP) address. These numbers are usually assigned in geographic blocks. An IP address can often be used to identify the location from which a device is connecting to the Internet. We use the above technologies (individually and together) to collect and store information when you interact with our Services.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
                
                <p>We use your Personal Data for providing, customizing, and improving the Services by:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Creating and managing your account or other user profiles.</li>
                  <li>Providing you with the products, services, or information you request, including support and assistance for the Services.</li>
                  <li>Improving Services, including testing, research, internal analytics, and product development.</li>
                  <li>Personalizing the Services, website, and communications based on your preferences.</li>
                  <li>Performing fraud protection, security, and debugging.</li>
                  <li>Marketing and selling the Services.</li>
                  <li>Carrying out other business purposes stated when collecting your Personal Data or as otherwise set forth in applicable data privacy laws, such as the California Consumer Privacy Act (the "CCPA").</li>
                </ul>

                <p>We may also use your Personal Data to correspond with you by:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Responding to correspondence that we receive from you, contacting you when necessary, or request, and send you information about DXFACTOR or the Services.</li>
                  <li>Sending emails and other communications according to your preferences or that display content we think will interest you.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Meeting Legal Requirements and Enforcing Legal Terms</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fulfilling our legal obligations, such as preventing, detecting, and investigating security incidents and potentially illegal or prohibited activities.</li>
                  <li>Protecting your, DXFACTOR's or another party's rights, property, or safety.</li>
                  <li>Enforcing agreements with you and resolving disputes.</li>
                  <li>Responding to claims that any posting or content violates third-party rights.</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Disclosure of Your Information</h2>
                
                <p>We disclose your Personal Data to our affiliates and service providers who help us provide the Services or perform business functions:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Hosting, technology, and communication providers;</li>
                  <li>Security and fraud prevention consultants and providers;</li>
                  <li>Analytics providers;</li>
                  <li>Business partners who partner with us in offering various Services:</li>
                  <li>Business that you have a relationship with.</li>
                  <li>Companies that we partner with to offer joint promotional offers or opportunities.</li>
                  <li>Any third parties you authorize.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Business Transfers</h3>
                <p>
                  All your Personal Data that we collect may be transferred to a third party if we undergo a merger, acquisition, or other transaction in which that third party assumes control of our business (in whole or part). Alternatively, we may seek to acquire other businesses or merge with them. If a change happens to our business, then the new owners may use your Personal Data in the same way as set out in this privacy notice.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Data that is not Personal Data</h3>
                <p>
                  We may create aggregated, de-identified, or anonymized data from the Personal Data we collect, including by removing information that makes the data personally identifiable to a particular user. We may use such aggregated, de-identified, or anonymized data and share it with third parties for our lawful business purposes, including to analyze, build and improve the Services and promote our business, provided that we will not share such data in a manner that could identify you.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Retain Information</h2>
                <p>
                  We retain Personal Data about you for so long as necessary to provide you with our Services. In some cases, we retain Personal Data for longer, if doing so is necessary to comply with our legal obligations, resolve disputes or collect fees owed, or is otherwise permitted or required by applicable law, rule, or regulation. We may further retain information in an anonymous or aggregated form where that information would not identify you personally.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Protect Your Information</h2>
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <p>
                    We believe that the security of your information is a serious issue and we are committed to protecting the Information we receive from you. We maintain commercially reasonable security measures to protect the security of your information against unauthorized access and disclosure both online and offline. These measures include the implementation of reasonable technical, physical, and administrative data security safeguards that are consistent with our business operations and industry standards. Access to Personal Data is restricted so that only certain of our employees are granted access to information as appropriate to perform specific jobs and tasks.
                  </p>
                </div>

                <p>
                  While we take reasonable precautions against possible security breaches of our systems, no application, website, or internet transmission is completely secure, and we cannot guarantee that unauthorized access, hacking, data loss, or other breaches will never occur. We urge you to take steps to keep your Personal Data safe (including your username and password), and to log out of your account after each use.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Third-Party Links</h2>
                <p>
                  Our Services may include links to third-party website that have independent privacy policies. We have no responsibility for the actions or policies of third parties or the content of their website, their products, or their services.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Children</h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                  <p className="text-yellow-800 font-medium">
                    Our Services are not intended for or directed to children. Children under 13 are not eligible to use our Services. By using the Services, you represent that you are at least 13 years old and understand that you must be at least 13 years old in order to create an account and purchase the Services advertised through our Services and applications. We do not knowingly collect or maintain Personal Data from children under the age of 13. If we learn that we have inadvertently gathered Personal Data from children younger than the age of 13, we will take reasonable measures to delete or destroy such information from our records.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Updates to Our Policy</h2>
                <p>
                  We keep our privacy policy under regular review and we will place any updates on this webpage. We may update this Privacy Policy from time to time and any changes will become effective upon posting. We encourage you to periodically review this Privacy Policy for the latest information on our privacy practices. We will notify you about material changes in the way we treat your Personal Data either by email, if you have provided your email address to us, or by prominently posting the revised policy on our Services. Your continued use of this Services after we make changes is deemed to be acceptance of those changes, so please check the policy periodically for updates.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">DXFACTOR LLC</p>
                  <p className="text-gray-700">
                    Attn: Legal Team<br />
                    P.O. Box: 418, Fairfax, VA 22038<br />
                    Email: legal@DXFactor.com
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-8">
                  <p className="text-sm text-gray-500">
                    If you have questions or comments regarding our privacy policy and practice, please email us at legal@DXFactor.com or by using the contact details above.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Legal; 