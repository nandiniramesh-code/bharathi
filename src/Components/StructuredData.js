export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Bharathi Academy",
    "description": "Leading healthcare and medical technology education institution offering UGC-approved courses",
    "url": "https://your-domain.com", // Replace with your actual domain
    "logo": "https://your-domain.com/BHARATHI.PNG", // Replace with your actual domain
    "sameAs": [
      // Add your social media profiles here
    ],
    "address": {
      "@type": "PostalAddress",
      // Add your address details here
    },
    "offers": {
      "@type": "Offer",
      "category": "Educational Programs",
      "educationalProgramMode": "full-time",
      "programType": [
        "Degree Programs",
        "Diploma Courses",
        "Certification Programs"
      ]
    },
    "accreditation": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "UGC Approved"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
