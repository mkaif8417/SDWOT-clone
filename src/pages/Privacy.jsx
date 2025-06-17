import React from 'react'
import Navbar from '../components/Navbar'
import './Privacy.css'
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <div>
      <Navbar/>
      <div className="p-container">
       <div className="child-container">
        <h1>Data Privacy Policy</h1>
       </div>
    
      </div>
      <div className="middle-section">
        <h2>Introduction</h2>
        <p>SD WoT is committed to protecting the privacy and security of our beneficiaries. This Data Privacy Policy outlines how we collect, use, disclose, and safeguard the personal information of our beneficiaries.</p>

<h2>Data Collection</h2>
<p>
  We collect personal information necessary to administer benefits, process claims, and provide services. This information may include:</p>
  <ul>
    <li>Name</li>
    <li>Date of birth</li>
    <li>Social security number or equivalent</li>
    <li>Contact information (address, phone number, email)</li>
    <li>Bank account details</li>
    <li>Beneficiary-related information (relationship to the primary account holder)</li>
    <li>Health information (only if necessary for benefit determination)</li>
  </ul>

<h2>Data Usage</h2>
<p>We use beneficiary information for the following purposes:</p>
<ul>
  <li>Processing and administering benefits</li>
  <li>Communicating with beneficiaries (e.g., sending benefit statements, notifications)</li>
  <li>Verifying eligibility and preventing fraud</li>
  <li>Complying with legal and regulatory requirements</li>
  <li>Improving our services and benefits</li>
</ul>
<h2>Data Sharing</h2>
<p>We may share beneficiary information with:</p>
<ul>
  <li>Authorized employees and contractors</li>
  <li>Government agencies (as required by law)</li>
  <li>Third-party service providers (e.g., claims processors, benefit administrators)</li>
</ul>
<p>We require these parties to maintain strict confidentiality and security measures.</p>
<h2>Data Security</h2>
<p>We implement robust security measures to protect beneficiary information from unauthorized access, disclosure, alteration, or destruction. These measures include:</p>
<ul>
  <li>Encryption of sensitive data</li>
  <li>Access controls and authentication</li>
  <li>Regular security audits and vulnerability assessments</li>
  <li>Employee training on data privacy and security</li>
</ul>
<h2>Data Retention</h2>
<p>We retain beneficiary information for as long as necessary to fulfil the purposes outlined above or as required by law.</p>
<h2>Beneficiary Rights</h2>
<p>Beneficiaries have the right to:</p>
<ul>
  <li>Access their personal information</li>
  <li>Correct inaccuracies in their personal information</li>
  <li>Request the deletion of their personal information (subject to legal obligations)</li>
  <li>Opt out of certain communications</li>
</ul>
<h2>Contact Us</h2>
<p>If you have any questions or concerns about this Data Privacy Policy or our handling of your personal information, please contact:</p>
<h3>Contact Name: Balu Vanam</h3>
<h3>Email: privacy@in.sdwot.ai</h3>
<h2>Changes to This Policy</h2>
<p>We may update this Data Privacy Policy from time to time. We will notify beneficiaries of any significant changes.</p>
      </div>
      <Footer/>

    </div>
    
  )
}

export default Privacy
