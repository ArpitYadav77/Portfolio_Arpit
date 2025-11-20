import React from 'react';
import { AppData } from '../types';

interface Props {
  data: AppData;
}

const JSONLD: React.FC<Props> = ({ data }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": data.personal.name,
    "jobTitle": data.personal.title,
    "url": window.location.href,
    "sameAs": [
      data.personal.linkedin,
      data.personal.github
    ],
    "email": data.personal.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": data.personal.location
    },
    "worksFor": {
      "@type": "Organization",
      "name": data.experience[0]?.company
    },
    "knowsAbout": data.skills
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default JSONLD;