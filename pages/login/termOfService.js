import React from "react";
import { Text, View, Image, Alert, ScrollView, Dimensions } from "react-native";
import HTML from "react-native-render-html";

const htmlContent = `<div class="modal-body">
<h2 style="text-align:center;">SATRESKOBA SURABAYA TERMS OF SERVICE & PRIVACY POLICY</h2>
<span style="font-size:11pt"><span><span><span style=""><strong><u><span style="font-size:12.0pt"><span style=""><span style="color:#242424">ACCEPTANCE OF TERMS</span></span></span></u></strong><br>
<span style="font-size:12.0pt"><span style=""><span style="color:#242424">By accessing and using SATRESKOBA SURABAYA Services, you accept and agree to be bound by the terms and provision of the Terms of Service.</span></span></span></span></span></span></span>
<br/>
<br/>
<span style="font-size:11pt"><span><span><span style=""><strong><u><span style="font-size:12.0pt"><span style=""><span style="color:#242424">DESCRIPTION OF SERVICES</span></span></span></u></strong><br>
<span style="font-size:12.0pt"><span style=""><span style="color:#242424">SATRESKOBA SURABAYA provides users with access to a rich collection of resources, including without limitation various communications tools, forums, shopping services, search services, personalized content and branded programming through its network of properties which may be accessed through any various medium or device now known or hereafter developed (the " SATRESKOBA SURABAYA Services"). You also understand and agree that the services may include advertisements and that these advertisements are necessary for SATRESKOBA SURABAYA to provide the SATRESKOBA SURABAYA Services. You also understand and agree that the services may include certain communications from SATRESKOBA SURABAYA such as service announcements, administrative messages and newsletters, and that these communications are considered part of membership and you will not be able to opt out of receiving them. Unless explicitly stated otherwise, any new features that augments or enhances the current services, including the release of new properties, shall be subject to the TOS. You understand and agree that the SATRESKOBA SURABAYA Services is provided "AS-IS" and that SATRESKOBA SURABAYA assumes no responsibility for the timeliness, deletion, mis-delivery or failure to store any user communications or personalization settings. You are responsible for obtaining access to the SATRESKOBA SURABAYA Services, and that access may involve third-party fees (such as Internet service provider or airtime charges). You are responsible for those fees, including those fees associated with the display or delivery of advertisements. In addition, you must provide and are responsible for all equipment necessary to access services. You understand that the technical processing and transmission of the SATRESKOBA SURABAYA Services, including your Content, may involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices.
</span></span></span></span></span></span></span>
<br/>
<br/>
<span style="font-size:11pt"><span><span><span style=""><strong><u><span style="font-size:12.0pt"><span style=""><span style="color:#242424">YOUR REGISTRATION OBLIGATIONS</span></span></span></u></strong><br>
<span style="font-size:12.0pt"><span style=""><span style="color:#242424">In consideration of your use of the SATRESKOBA SURABAYA Services, you represent that you are of legal age to form a binding contract and are not a person barred from receiving the SATRESKOBA SURABAYA Services under the laws of the United States or other applicable jurisdiction. You also agree to: (a) provide true, accurate, current and complete information about yourself as prompted by the registration form (the "Registration Data") and (b) maintain and promptly update the Registration Data to keep it true, accurate, current and complete. If you provide any information that is untrue, inaccurate, not current or incomplete, or&nbsp;SATRESKOBA SURABAYA as reasonable grounds to suspect that such information is untrue, inaccurate, not current or incomplete,&nbsp;has SATRESKOBA SURABAYA the right to suspend or terminate your account and refuse any and all current or future use of the services (or any portion thereof). You must be aged 18 or over to use the Services</span></span></span></span></span></span></span>

<br/>
<br/>
<span style="font-size:11pt"><span><span><span style=""><strong><u><span style="font-size:12.0pt"><span style=""><span style="color:#242424">SATRESKOBA SURABAYA<span> PRIVACY POLICY</span></span></span></span></u></strong><br>
<span style="font-size:12.0pt"><span style=""><span style="color:#242424">Registration Data and certain other information about you are subject to our applicable privacy policy. You understand that through your use of the services you consent to the collection and use (as set forth in the applicable privacy policy) of this information, including the transfer of this information to the United States and/or other countries for storage, processing and use by SATRESKOBA SURABAYA and its affiliates.</span></span></span></span></span></span></span>
<br/>
<br/>
<span style="font-size:11pt"><span><span><span style=""><strong><u><span style="font-size:12.0pt"><span style=""><span style="color:#242424">MEMBER ACCOUNT, PASSWORD AND SECURITY</span></span></span></u></strong><br>
<span style="font-size:12.0pt"><span style=""><span style="color:#242424">You will receive a password and account designation upon completing the service's registration process. You are responsible for maintaining the confidentiality of the password and account and are fully responsible for all activities that occur under your password or account. You agree to (a) immediately notify of any SATRESKOBA SURABAYA unauthorized use of your password or account or any other breach of security, and (b) ensure that you exit from your account at the end of each session. SATRESKOBA SURABAYA cannot and will not be liable for any loss or damage arising from your failure to comply with this section.
</span></span></span></span></span></span></span>
<br/>
<br/>
<span style="font-size:11pt"><span><span><span style=""><strong><u><span style="font-size:12.0pt"><span style=""><span style="color:#242424">MEMBER CONDUCT</span></span></span></u></strong><br>
<span style="font-size:12.0pt"><span style=""><span style="color:#242424">You understand that all information, data, text, software, music, sound, photographs, graphics, video, messages, tags, or other materials ("Content"), whether publicly posted or privately transmitted, are the sole responsibility of the person from whom such Content originated. This means that you, and not SATRESKOBA SURABAYA, are entirely responsible for all Content that you upload, post, email, transmit or otherwise make available via the SATRESKOBA SURABAYA Services. SATRESKOBA SURABAYA does not control the Content posted via the SATRESKOBA SURABAYA Services and, as such, does not guarantee the accuracy, integrity or quality of such Content. You understand that by using the services, you may be exposed to Content that is offensive, indecent or objectionable. Under no circumstances will SATRESKOBA SURABAYA be liable in any way for any Content, including, but not limited to, any errors or omissions in any Content, or any loss or damage of any kind incurred as a result of the use of any Content posted, emailed, transmitted or otherwise made available via the SATRESKOBA SURABAYA Services. You agree to not use the SATRESKOBA SURABAYA Services to:</span></span></span></span></span></span></span>
<br/>
<br/>
<ol>
<li><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">Upload, post, email, transmit, or otherwise make available any Content that is unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically, or otherwise objectionable;
</span></span></span></span></span></span></span></li>

<li><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">Harm minors in any way;
</span></span></span></span></span></span></span></li>

<li><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">Impersonate any person or entity, including, but not limited to, a SATRESKOBA SURABAYA official, forum leader, guide or host, or falsely state or otherwise misrepresent your affiliation with a person or entity;
</span></span></span></span></span></span></span></li>

<li><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">Forge headers or otherwise manipulate identifiers in order to disguise the origin of any Content transmitted through the services;
</span></span></span></span></span></span></span></li>

<li><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">Upload, post, email, transmit, or otherwise make available any Content that you do not have a right to make available under any law or under contractual or fiduciary relationships (such as inside information, proprietary and confidential information learned or disclosed as part of employment relationships or under nondisclosure agreements);</span></span></span></span></span></span></span></li>

<li><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">Upload, post, email, transmit or otherwise make available any Content that infringes any patent, trademark, trade secret, copyright or other proprietary rights ("Rights") of any party;
</span></span></span></span></span></span></span></li>

<li><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">Upload, post, email, transmit, or otherwise make available any unsolicited or unauthorized advertising, promotional materials, "junk mail," "spam," "chain letters," "pyramid schemes," or any other form of solicitation, except in those areas (such as shopping) that are designated for such purpose.</span></span></span></span></span></span></span></li>

<li><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">Upload, post, email, transmit, or otherwise make available any material that contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer software or hardware or telecommunications equipment; disrupt the normal flow of dialogue, cause a screen to "scroll" faster than other users of the services are able to type, or otherwise act in a manner that negatively affects other users' ability to engage in real time exchanges;
</span></span></span></span></span></span></span></li>

<li><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">Interfere with or disrupt the SATRESKOBA SURABAYA Services or servers or networks connected to the SATRESKOBA SURABAYA Services, or disobey any requirements, procedures, policies or regulations of networks connected to the SATRESKOBA SURABAYA Services, including using any device, software or routine to bypass our robot exclusion headers;</span></span></span></span></span></span></span></li>

<li><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">Intentionally or unintentionally violate any applicable local, state, national or international law, including, but not limited to, regulations promulgated by the U.S. Securities and Exchange Commission, any rules of any national or other securities exchange, including, without limitation, the New York Stock Exchange, the American Stock Exchange, or the NASDAQ, and any regulations having the force of law;</span></span></span></span></span></span></span></li>

<li><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">Provide material support or resources (or to conceal or disguise the nature, location, source, or ownership of material support or resources) to any organization(s) designated by the United States government as a foreign terrorist organization pursuant to section 219 of the Immigration and Nationality Act;</span></span></span></span></span></span></span></li>

<li><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">"Stalk" or otherwise harass another; and/or
</span></span></span></span></span></span></span></li>

<li><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">Collect or store personal data about other users in connection with the prohibited conduct and activities set forth in paragraphs 6.1 through 6.13 above</span></span></span></span></span></span></span></li>
</ol>

<p><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">You acknowledge that SATRESKOBA SURABAYA may or may not pre-screen Content, but that SATRESKOBA SURABAYA and its designees shall have the right (but not the obligation) in their sole discretion to pre-screen, refuse, or remove any Content that is available via the SATRESKOBA SURABAYA Services. Without limiting the foregoing, and SATRESKOBA SURABAYA its designees shall have the right to remove any Content that violates the TOS or is otherwise objectionable. You agree that you must evaluate, and bear all risks associated with, the use of any Content, including any reliance on the accuracy, completeness, or usefulness of such Content. In this regard, you acknowledge that you may not rely on any Content created by SATRESKOBA SURABAYA or submitted to, SATRESKOBA SURABAYA including without limitation information in Yahoo Message Boards and in all other parts of the SATRESKOBA SURABAYA Services.
</span></span></span></span></span></span></span></p>

<p><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">You acknowledge, consent and agree that SATRESKOBA SURABAYA may access, preserve and disclose your account information and Content if required to do so by law or in a good faith belief that such access preservation or disclosure is reasonably necessary to: (i) comply with legal process; (ii) enforce the TOS; (iii) respond to claims that any Content violates the rights of third parties; (iv) respond to your requests for customer service; or (v) protect the rights, property or personal safety of, SATRESKOBA SURABAYA its users and the public.</span></span></span></span></span></span></span></p>

<p><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">You understand that the SATRESKOBA SURABAYA Services and software embodied within the SATRESKOBA SURABAYA Services may include security components that permit digital materials to be protected, and that use of these materials is subject to usage rules set by SATRESKOBA SURABAYA and/or content providers who provide content to the SATRESKOBA SURABAYA Services. You may not attempt to override or circumvent any of the usage rules embedded into the SATRESKOBA SURABAYA Services. Any unauthorized reproduction, publication, further distribution or public exhibition of the materials provided on the SATRESKOBA SURABAYA Services, in whole or in part, is strictly prohibited.
</span></span></span></span></span></span></span></p>

<p><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">INTERSTATE NATURE OF COMMUNICATIONS ON </span></span></span><span style="font-size:12.0pt"><span style=""><span style="color:#242424">SATRESKOBA SURABAYA<span> NETWORK</span><br>
When you register with, SATRESKOBA SURABAYA you acknowledge that in using the SATRESKOBA SURABAYA Services to send electronic communications (including but not limited to email, search queries, sending messages to SATRESKOBA SURABAYA Chat or SATRESKOBA SURABAYA Groups, uploading photos and files to, SATRESKOBA SURABAYA and other Internet activities), you will be causing communications to be sent through SATRESKOBA SURABAYA computer networks. Accordingly, by agreeing to this TOS, you acknowledge that use of the service results in interstate data transmissions.</span></span></span></span></span></span></span></p>

<p><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">SPECIAL ADMONITIONS FOR INTERNATIONAL USE AND EXPORT AND IMPORT COMPLIANCE</span></span></span><br>
<span style="font-size:12.0pt"><span style=""><span style="color:#242424">Recognizing the global nature of the Internet, you agree to comply with all local rules regarding online conduct and acceptable Content. Use of the SATRESKOBA SURABAYA Services and transfer, posting and uploading of software, technology, and other technical data via the SATRESKOBA SURABAYA Services may be subject to the export and import laws of the United States and other countries. You agree to comply with all applicable export and import laws and regulations, including without limitation the Export Administration Regulations and sanctions control programs of the United States. </span></span></span></span></span></span></span></p>

<p><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">In particular, you represent and warrant that you: (a) are not a prohibited party identified on any government export exclusion lists or a member of a government of any other export-prohibited countries as identified in applicable export and import laws and regulations; (b) will not transfer software, technology, and other technical data via the SATRESKOBA SURABAYA Services to export-prohibited parties or countries; (c) will not use the SATRESKOBA SURABAYA Services for military, nuclear, missile, chemical or biological weaponry end uses in violation of U.S. export laws; and (d) will not transfer, upload, or post via the SATRESKOBA SURABAYA Services any software, technology or other technical data in violation of U.S. or other applicable export or import laws.
</span></span></span></span></span></span></span>
<br/>
<br/>
<span style="font-size:11pt"><span><span><span style=""><strong><u><span style="font-size:12.0pt"><span style=""><span style="color:#242424">CONTENT SUBMITTED OR MADE AVAILABLE FOR INCLUSION ON THE </span></span></span></u></strong><strong><u><span style="font-size:12.0pt"><span style=""><span style="color:#242424">SATRESKOBA SURABAYA<span> SERVICES</span></span></span></span></u></strong>

<span style="font-size:12.0pt"><span style=""><span style="color:#242424">SATRESKOBA SURABAYA does not claim ownership of Content you submit or make available for inclusion on the SATRESKOBA SURABAYA Services. However, with respect to Content you submit or make available for inclusion on publicly accessible areas of the SATRESKOBA SURABAYA Services, you grant SATRESKOBA SURABAYA the following worldwide, royalty-free and non-exclusive license(s), as applicable:</span></span></span></span></span></span></span></p>

<ol>
<li><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">With respect to Content you submit or make available for inclusion on publicly accessible areas of SATRESKOBA SURABAYA Groups, the license to use, distribute, reproduce, modify, adapt, publicly perform and publicly display such Content on the SATRESKOBA SURABAYA Services solely for the purposes of providing and promoting the specific SATRESKOBA SURABAYA Group to which such Content was submitted or made available. This license exists only for as long as you elect to continue to include such Content on the SATRESKOBA SURABAYA Services and will terminate at the time you remove or SATRESKOBA SURABAYA removes such Content from the SATRESKOBA SURABAYA Services.</span></span></span></span></span></span></span></li>
<li><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">With respect to photos, graphics, audio or video you submit or make available for inclusion on publicly accessible areas of the SATRESKOBA SURABAYA e Services other than SATRESKOBA SURABAYA Groups, the license to use, distribute, reproduce, modify, adapt, publicly perform and publicly display such Content on the SATRESKOBA SURABAYA Services solely for the purpose for which such Content was submitted or made available. This license exists only for as long as you elect to continue to include such Content on the SATRESKOBA SURABAYA Services and will terminate at the time you remove or SATRESKOBA SURABAYA removes such Content from the SATRESKOBA SURABAYA Services.
</span></span></span></span></span></span></span></li>
<li><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">With respect to Content other than photos, graphics, audio or video you submit or make available for inclusion on publicly accessible areas of the SATRESKOBA SURABAYA Services other than SATRESKOBA SURABAYA Groups, the perpetual, irrevocable and fully sub-licensable license to use, distribute, reproduce, modify, adapt, publish, translate, publicly perform and publicly display such Content (in whole or in part) and to incorporate such Content into other works in any format or medium now known or later developed.
</span></span></span></span></span></span></span></li>
</ol>

<p>&nbsp;</p>

<p><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">"Publicly accessible" areas of the SATRESKOBA SURABAYA Services are those areas of the SATRESKOBA SURABAYA network of properties that are intended by SATRESKOBA SURABAYA to be available to the general public. By way of example, publicly accessible areas of the SATRESKOBA SURABAYA Services would include SATRESKOBA SURABAYA Message Boards and portions of SATRESKOBA SURABAYA Groups that are open to both members and visitors. However, publicly accessible areas of the SATRESKOBA SURABAYA Services would not include portions of SATRESKOBA SURABAYA Groups that are limited to members, SATRESKOBA SURABAYA services intended for private communication such as SATRESKOBA SURABAYA Mail or Messenger, or areas off of the SATRESKOBA SURABAYA network of properties such as portions of World Wide Web sites that are accessible via hypertext or other links but are not hosted or served by. SATRESKOBA SURABAYA
</span></span></span></span></span></span></span></p>

<p><span style="font-size:11pt"><span><span><span style=""><strong><u><span style="font-size:12.0pt"><span style=""><span style="color:#242424">CONTRIBUTIONS TO</span></span></span></u></strong><strong><u><span style="font-size:12.0pt"><span style=""><span style="color:#242424">&nbsp;SATRESKOBA SURABAYA</span></span></span></u></strong><br>
<span style="font-size:12.0pt"><span style=""><span style="color:#242424">By submitting ideas, suggestions, documents, and/or proposals ("Contributions") to SATRESKOBA SURABAYA through its suggestion or feedback webpages, you acknowledge and agree that: (a) your Contributions do not contain confidential or proprietary information; (b) SATRESKOBA SURABAYA is not under any obligation of confidentiality, express or implied, with respect to the Contributions; (c) SATRESKOBA SURABAYA shall be entitled to use or disclose (or choose not to use or disclose) such Contributions for any purpose, in any way, in any media worldwide; (d) SATRESKOBA SURABAYA may have something similar to the Contributions already under consideration or in development; (e) your Contributions automatically become the property of SATRESKOBA SURABAYA without any obligation of SATRESKOBA SURABAYA to you; and (f) you are not entitled to any compensation or reimbursement of any kind from SATRESKOBA SURABAYA under any circumstances.</span></span></span></span></span></span></span></p>

<p>&nbsp;</p>

<p><span style="font-size:11pt"><span><span><span style=""><strong><u><span style="font-size:12.0pt"><span style=""><span style="color:#242424">INDEMNITY</span></span></span></u></strong><br>
<span style="font-size:12.0pt"><span style=""><span style="color:#242424">You agree to indemnify and hold SATRESKOBA SURABAYA and its subsidiaries, affiliates, officers, agents, employees, partners and licensors harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of Content you submit, post, transmit, modify or otherwise make available through the SATRESKOBA SURABAYA Services, your use of the SATRESKOBA SURABAYA Services, your connection to the SATRESKOBA SURABAYA Services, your violation of the TOS, or your violation of any rights of another.</span></span></span></span></span></span></span></p>

<p><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">NO COMMERCIAL REUSE OF </span></span></span><span style="font-size:12.0pt"><span style=""><span style="color:#242424">SATRESKOBA SURABAYA<span> SERVICES</span>&nbsp;<br>
You agree not to reproduce, duplicate, copy, sell, trade, resell or exploit for any commercial purposes, any portion or use of, or access to, the SATRESKOBA SURABAYA Services (including Content, advertisements, Software and your SATRESKOBA SURABAYA ID).
</span></span></span></span></span></span></span></p>

<p>&nbsp;</p>

<p><span style="font-size:11pt"><span><span><span style=""><strong><u><span style="font-size:12.0pt"><span style=""><span style="color:#242424">GENERAL PRACTICES REGARDING USE AND STORAGE</span></span></span></u></strong><br>
<span style="font-size:12.0pt"><span style=""><span style="color:#242424">You acknowledge that SATRESKOBA SURABAYA may establish general practices and limits concerning use of the SATRESKOBA SURABAYA Services, including without limitation the maximum number of days that email messages, message board postings or other uploaded Content will be retained by the SATRESKOBA SURABAYA Services, the maximum number of messages that may be sent from or received by an account on the SATRESKOBA SURABAYA Services, the maximum size of any email message that may be sent from or received by an account on the SATRESKOBA SURABAYA Services, the maximum disk space that will be allotted on SATRESKOBA SURABAYA servers on your behalf, and the maximum number of times (and the maximum duration for which) you may access the SATRESKOBA SURABAYA Services in a given period of time. You agree that SATRESKOBA SURABAYA has no responsibility or liability for the deletion or failure to store any messages and other communications or other Content maintained or transmitted by the SATRESKOBA SURABAYA Services. You acknowledge that SATRESKOBA SURABAYA reserves the right to log off accounts that are inactive for an extended period of time. You further acknowledge that SATRESKOBA SURABAYA reserves the right to modify these general practices and limits from time to time. SATRESKOBA SURABAYA Messenger, including any web-based versions, will allow you and the people with whom you communicate to save your conversations in your SATRESKOBA SURABAYA accounts located on SATRESKOBA SURABAYA servers. This means you can access and search your message history from any computer with access to the internet. Whether or not you use this feature, other users may choose to use it to save conversations with you in their account on SATRESKOBA SURABAYA too. Your agreement to this TOS constitutes your consent to allow SATRESKOBA SURABAYA to store these communications on its servers.</span></span></span></span></span></span></span></p>

<p>&nbsp;</p>

<p><span style="font-size:11pt"><span><span><span style=""><strong><u><span style="font-size:12.0pt"><span style=""><span style="color:#242424">MODIFICATIONS TO </span></span></span></u></strong><strong><u><span style="font-size:12.0pt"><span style=""><span style="color:#242424">SATRESKOBA SURABAYA<span> SERVICES</span></span></span></span></u></strong><br>
<span style="font-size:12.0pt"><span style=""><span style="color:#242424">SATRESKOBA SURABAYA reserves the right at any time and from time to time to modify or discontinue, temporarily or permanently, the SATRESKOBA SURABAYA Services (or any part thereof) with or without notice. You agree that \ SATRESKOBA SURABAYA shall not be liable to you or to any third party for any modification, suspension or discontinuance of the SATRESKOBA SURABAYA Services (or any part thereof).</span></span></span></span></span></span></span></p>

<p>&nbsp;</p>

<p><span style="font-size:11pt"><span><span><span style=""><strong><u><span style="font-size:12.0pt"><span style=""><span style="color:#242424">TERMINATION</span></span></span></u></strong><br>
<span style="font-size:12.0pt"><span style=""><span style="color:#242424">You may terminate your SATRESKOBA SURABAYA account, and access to the SATRESKOBA SURABAYA Services by submitting such termination request to SATRESKOBA SURABAYA. You agree that SATRESKOBA SURABAYA may,&nbsp;without prior notice, immediately terminate, limit your access to or suspend your SATRESKOBA SURABAYA account, any associated address, and access to the SATRESKOBA SURABAYA Services. Cause for such termination, limitation of access or suspension shall include, but not be limited to, (a) breaches or violations of the TOS or other incorporated agreements or guidelines, (b)requests by law enforcement or other government agencies, (c) discontinuance or material modification to the SATRESKOBA SURABAYA Services (or any part thereof), (d) unexpected technical or security issues or problems, (e) extended periods of inactivity, (f) engagement by you in fraudulent or illegal activities, and/or (g) nonpayment of any fees owed by you in connection with the SATRESKOBA SURABAYA Services. Further, you agree that all terminations, limitations of access and suspensions for cause shall be made in SATRESKOBA SURABAYA sole discretion and that SATRESKOBA SURABAYA shall not be liable to you or any third party for any termination of your account, any associated email address, or access to the SATRESKOBA SURABAYA Services. Termination of your SATRESKOBA SURABAYA account includes any or all of the following: (a) removal of access to all or part of the offerings within the SATRESKOBA SURABAYA Services, (b) deletion of your password and all related information, files and content associated with or inside your account (or any part thereof), and (c) barring of further use of all or part of the SATRESKOBA SURABAYA Services.</span></span></span></span></span></span></span></p>

<p>&nbsp;</p>

<p><span style="font-size:11pt"><span><span><span style=""><strong><u><span style="font-size:12.0pt"><span style=""><span style="color:#242424">DEALINGS WITH ADVERTISERS</span></span></span></u></strong><br>
<span style="font-size:12.0pt"><span style=""><span style="color:#242424">Your correspondence or business dealings with, or participation in promotions of, advertisers found on or through the SATRESKOBA SURABAYA Services, including payment and delivery of related goods or services, and any other terms, conditions, warranties or representations associated with such dealings, are solely between you and such advertiser. You agree that SATRESKOBA SURABAYA shall not be responsible or liable for any loss or damage of any sort incurred as the result of any such dealings or as the result of the presence of such advertisers on the SATRESKOBA SURABAYA Services.</span></span></span></span></span></span></span></p>

<p>&nbsp;</p>

<p><span style="font-size:11pt"><span><span><span style=""><strong><u><span style="font-size:12.0pt"><span style=""><span style="color:#242424">LINKS</span></span></span></u></strong><br>
<span style="font-size:12.0pt"><span style=""><span style="color:#242424">The SATRESKOBA SURABAYA Services may provide, or third parties may provide, links to other World Wide Web sites or resources. You acknowledge and agree that SATRESKOBA SURABAYA is not responsible for the availability of such external sites or resources and does not endorse and is not responsible or liable for any Content, advertising, products or other materials on or available from such sites or resources. You further acknowledge and agree that SATRESKOBA SURABAYA shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such Content, goods or services available on or through any such site or resource.</span></span></span></span></span></span></span></p>

<p>&nbsp;</p>

<p><span style="font-size:11pt"><span><span><span style=""><strong><u><span style="font-size:12.0pt"><span style=""><span style="color:#242424">PROPRIETARY RIGHTS</span></span></span></u></strong><br>
<span style="font-size:12.0pt"><span style=""><span style="color:#242424">You acknowledge and agree that the SATRESKOBA SURABAYA Services and any necessary software used in connection with the SATRESKOBA SURABAYA Services ("Software") contain proprietary and confidential information that is protected by applicable intellectual property and other laws. You further acknowledge and agree that Content contained in advertisements or information presented to you through the SATRESKOBA SURABAYA Services or by advertisers is protected by copyrights, trademarks, service marks, patents or other proprietary rights and laws. Except as expressly permitted by applicable law or as authorized by SATRESKOBA SURABAYA or the applicable licensor (such as an advertiser), you agree not to modify, rent, lease, loan, sell, distribute, transmit, broadcast, publicly perform or create derivative works based on the SATRESKOBA SURABAYA Services, such Content or the Software, in whole or in part. SATRESKOBA SURABAYA grants you a personal, non-transferable and non-exclusive right and license to use the object code of its Software on a single computer; provided that you do not (and do not allow any third party to) copy, modify, create a derivative work from, reverse engineer, reverse assemble or otherwise attempt to discover any source code, sell, assign, sublicense, grant a security interest in or otherwise transfer any right in the Software. You agree neither to modify the Software in any manner or form, nor to use modified versions of the Software, including (without limitation) for the purpose of obtaining unauthorized access to the SATRESKOBA SURABAYA Services. You agree not to access the SATRESKOBA SURABAYA Services by any means other than through the interface that is provided by SATRESKOBA SURABAYA for use in accessing the SATRESKOBA SURABAYA Services.
</span></span></span></span></span></span></span></p>

<p>&nbsp;</p>

<p><span style="font-size:11pt"><span><span><span style=""><strong><u><span style="font-size:12.0pt"><span style=""><span style="color:#242424">DISCLAIMER OF WARRANTIES</span></span></span></u></strong><br>
<span style="font-size:12.0pt"><span style=""><span style="color:#242424">YOU EXPRESSLY UNDERSTAND AND AGREE THAT:</span></span></span></span></span></span></span></p>

<ol>
<li><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">YOUR USE OF THE SATRESKOBA SURABAYA SERVICES AND SOFTWARE ARE AT YOUR SOLE RISK. THE SATRESKOBA SURABAYA SERVICES AND SOFTWARE ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. SATRESKOBA SURABAYA AND ITS SUBSIDIARIES, AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, PARTNERS AND LICENSORS EXPRESSLY DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT.
</span></span></span></span></span></span></span></li>

<li><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">SATRESKOBA SURABAYA AND ITS SUBSIDIARIES, AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, PARTNERS AND LICENSORS MAKE NO WARRANTY THAT (i) THE SATRESKOBA SURABAYA SERVICES OR SOFTWARE WILL MEET YOUR REQUIREMENTS; (ii) THE SATRESKOBA SURABAYA SERVICES OR SOFTWARE WILL BE UNINTERRUPTED, TIMELY, SECURE OR ERROR-FREE; (iii) THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SATRESKOBA SURABAYA SERVICES OR SOFTWARE WILL BE ACCURATE OR RELIABLE; (iv) THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION OR OTHER MATERIAL PURCHASED OR OBTAINED BY YOU THROUGH THE SATRESKOBA SURABAYA SERVICES OR SOFTWARE WILL MEET YOUR EXPECTATIONS; AND (v) ANY ERRORS IN THE SOFTWARE WILL BE CORRECTED.
</span></span></span></span></span></span></span></li>

<li><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">ANY MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE SATRESKOBA SURABAYA SERVICES OR SOFTWARE IS ACCESSED AT YOUR OWN DISCRETION AND RISK, AND YOU WILL BE SOLELY RESPONSIBLE FOR AND HEREBY WAIVE ANY AND ALL CLAIMS AND CAUSES OF ACTION WITH RESPECT TO ANY DAMAGE TO YOUR COMPUTER SYSTEM, INTERNET ACCESS, DOWNLOAD OR DISPLAY DEVICE, OR LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF ANY SUCH MATERIAL.
</span></span></span></span></span></span></span></li>

<li><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM SATRESKOBA SURABAYA OR THROUGH OR FROM THE SATRESKOBA SURABAYA SERVICES OR SOFTWARE SHALL CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THE TOS.
</span></span></span></span></span></span></span></li>

<li><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">A SMALL PERCENTAGE OF USERS MAY EXPERIENCE EPILEPTIC SEIZURES WHEN EXPOSED TO CERTAIN LIGHT PATTERNS OR BACKGROUNDS ON A COMPUTER SCREEN OR WHILE USING THE SATRESKOBA SURABAYA SERVICE. CERTAIN CONDITIONS MAY INDUCE PREVIOUSLY UNDETECTED EPILEPTIC SYMPTOMS EVEN IN USERS WHO HAVE NO HISTORY OF PRIOR SEIZURES OR EPILEPSY. IF YOU, OR ANYONE IN YOUR FAMILY, HAVE AN EPILEPTIC CONDITION, CONSULT YOUR PHYSICIAN PRIOR TO USING THE SATRESKOBA SURABAYA SERVICE. IMMEDIATELY DISCONTINUE USE OF THE SATRESKOBA SURABAYA SERVICES AND CONSULT YOUR PHYSICIAN IF YOU EXPERIENCE ANY OF THE FOLLOWING SYMPTOMS WHILE USING THE SATRESKOBA SURABAYA SERVICE: DIZZINESS, ALTERED VISION, EYE OR MUSCLE TWITCHES, LOSS OF AWARENESS, DISORIENTATION, ANY INVOLUNTARY MOVEMENT, OR CONVULSIONS.</span></span></span></span></span></span></span></li>
</ol>

<p>&nbsp;</p>

<p><span style="font-size:11pt"><span><span><span style=""><strong><u><span style="font-size:12.0pt"><span style=""><span style="color:#242424">LIMITATION OF LIABILITY</span></span></span></u></strong><br>
<span style="font-size:12.0pt"><span style=""><span style="color:#242424">YOU EXPRESSLY UNDERSTAND AND AGREE THAT SATRESKOBA SURABAYA AND ITS SUBSIDIARIES, AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, PARTNERS AND LICENSORS SHALL NOT BE LIABLE TO YOU FOR ANY PUNITIVE, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES (EVEN IF SATRESKOBA SURABAYA HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), RESULTING FROM: (a) THE USE OR THE INABILITY TO USE THE SATRESKOBA SURABAYA SERVICE; (b) THE COST OF PROCUREMENT OF SUBSTITUTE GOODS AND SERVICES; (c) UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA; (d) STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON THE SATRESKOBA SURABAYA SERVICE; OR (e) ANY OTHER MATTER RELATING TO THE SATRESKOBA SURABAYA SERVICE.</span></span></span></span></span></span></span></p>

<p>&nbsp;</p>

<p><span style="font-size:11pt"><span><span><span style=""><strong><u><span style="font-size:12.0pt"><span style=""><span style="color:#242424">EXCLUSIONS AND LIMITATIONS</span></span></span></u></strong><br>
<span style="font-size:12.0pt"><span style=""><span style="color:#242424">SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, SOME OF THE ABOVE LIMITATIONS OF SECTIONS 19 AND 20 MAY NOT APPLY TO YOU.</span></span></span></span></span></span></span></p>

<p>&nbsp;</p>

<p><span style="font-size:11pt"><span><span><span style=""><strong><u><span style="font-size:12.0pt"><span style=""><span style="color:#242424">NO THIRD-PARTY BENEFICIARIES</span></span></span></u></strong><br>
<span style="font-size:12.0pt"><span style=""><span style="color:#242424">You agree that, except as otherwise expressly provided in this TOS, there shall be no third-party beneficiaries to this agreement.</span></span></span></span></span></span></span></p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p><span style="font-size:11pt"><span><span><span style=""><strong><u><span style="font-size:12.0pt"><span style=""><span style="color:#242424">NOTICE</span></span></span></u></strong><span style="font-size:12.0pt"><span style=""><span style="color:#242424">&nbsp;<br>
SATRESKOBA SURABAYA may provide you with notices, including those regarding changes to the TOS, including by but not limited to email, regular mail, SMS, MMS, text message, postings on the SATRESKOBA SURABAYA Services, or other reasonable means now known or hereafter developed. Such notices may not be received if you violate this TOS by accessing the SATRESKOBA SURABAYA Services in an unauthorized manner. Your agreement to this TOS constitutes your agreement that you are deemed to have received any and all notices that would have been delivered had you accessed the SATRESKOBA SURABAYA Services in an authorized manner.
</span></span></span></span></span></span></span></p>

<p>&nbsp;</p>

<p><span style="font-size:11pt"><span><span><span style=""><strong><u><span style="font-size:12.0pt"><span style=""><span style="color:#242424">TRADEMARK INFORMATION</span></span></span></u></strong><span style="font-size:12.0pt"><span style=""><span style="color:#242424">&nbsp;<br>
You agree that all of SATRESKOBA SURABAYA trademarks, trade names, service marks and other SATRESKOBA SURABAYA logos and brand features, and product and service names are trademarks and the property of SATRESKOBA SURABAYA. (the " SATRESKOBA SURABAYA Marks"). Without SATRESKOBA SURABAYA prior permission, you agree not to display or use in any manner the SATRESKOBA SURABAYA Marks.</span></span></span></span></span></span></span></p>

<p>&nbsp;</p>

<p><span style="font-size:11pt"><span><span><span style=""><strong><u><span style="font-size:12.0pt"><span style=""><span style="color:#242424">NOTICE AND PROCEDURE FOR MAKING CLAIMS OF COPYRIGHT OR INTELLECTUAL PROPERTY INFRINGEMENT</span></span></span></u></strong><br>
<span style="font-size:12.0pt"><span style=""><span style="color:#242424">SATRESKOBA SURABAYA respects the intellectual property of others, and we ask our users to do the same. SATRESKOBA SURABAYA may, in appropriate circumstances and at its discretion, disable and/or terminate the accounts of users who may be repeat infringers. If you believe that your work has been copied in a way that constitutes copyright infringement, or your intellectual property rights have been otherwise violated, please provide SATRESKOBA SURABAYA Copyright Agent the following information:</span></span></span></span></span></span></span></p>

<p><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright or other intellectual property interest;
</span></span></span></span></span></span></span></p>

<p><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">A description of the copyrighted work or other intellectual property that you claim has been infringed;
</span></span></span></span></span></span></span></p>

<p><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">A description of where the material that you claim is infringing is located on the site;
</span></span></span></span></span></span></span></p>

<p><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">Your address, telephone number, and email address;
</span></span></span></span></span></span></span></p>

<p><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;</span></span></span></span></span></span></span></p>

<p><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">A statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright or intellectual property owner or authorized to act on the copyright or intellectual property owner's behalf.
</span></span></span></span></span></span></span></p>

<p><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">SATRESKOBA SURABAYA Agent for Notice of claims of copyright or other intellectual property infringement can be reached as follows:
</span></span></span></span></span></span></span></p>

<p><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">By email: inq@SATRESKOBA SURABAYA.com<br>
By phone: 1-800-869-1209
</span></span></span></span></span></span></span></p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p><span style="font-size:11pt"><span><span><span style=""><strong><u><span style="font-size:12.0pt"><span style=""><span style="color:#242424">GENERAL INFORMATION: ENTIRE AGREEMENT</span></span></span></u></strong></span></span></span></span></p>

<p><span style="font-size:11pt"><span><span><span style=""><span style="font-size:12.0pt"><span style=""><span style="color:#242424">The TOS constitutes the entire agreement between you and SATRESKOBA SURABAYA and governs your use of the SATRESKOBA SURABAYA Services, superseding any prior version of this TOS between you and SATRESKOBA SURABAYA with respect to the SATRESKOBA SURABAYA Services. You also may be subject to additional terms and conditions that may apply when you use or purchase certain other SATRESKOBA SURABAYA services, affiliate services, third-party content or third-party software. Choice of Law and Forum. You and SATRESKOBA SURABAYA each agree that the TOS and the relationship between the parties shall be governed by the laws of the State of Delaware.&nbsp; If any provision of the TOS is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to give effect to the parties' intentions as reflected in the provision, and the other provisions of the TOS remain in full force and effect. No Right of Survivorship and Non-Transferability. You agree that your SATRESKOBA SURABAYA account is non-transferable and any rights to your SATRESKOBA SURABAYA ID or contents within your account terminate upon your death. Upon receipt of a copy of a death certificate, your account may be terminated, and all contents therein permanently deleted. Statute of Limitations. You agree that regardless of any statute or law to the contrary, any claim or cause of action arising out of or related to use of the SATRESKOBA SURABAYA Services or the TOS must be filed within one (1) year after such claim or cause of action arose or be forever barred. The section titles in the TOS are for convenience only and have no legal or contractual effect. SATRESKOBA SURABAYA may freely assign the TOS and all of the policies and other documents incorporated or referenced in it (including all rights, licenses, and obligations under it or them), in whole or in part and without notice.
</span></span></span></span></span></span></span></p>

<h1 style="text-align:center"><strong><span style="font-size:12.0pt"><span><span style=""><span>SATRESKOBA SURABAYA: UPDATED MARCH,31<sup>ST</sup> 2018</span></span></span></span></strong><br>
&nbsp;</h1>
</div>`;

export default class TermOfServiceScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ScrollView
        style={{ paddingHorizontal: 18, flex: 1, backgroundColor: "white" }}
      >
        <HTML
          html={htmlContent}
          imagesMaxWidth={Dimensions.get("window").width}
        />
      </ScrollView>
    );
  }
}
