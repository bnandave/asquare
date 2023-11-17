import React, { useRef } from 'react';
import Contact_Us from '../Components/Contact_Us/Contact_Us';
import Location from '../Components/Location/Location';
import FAQ from '../Components/FAQ/FAQ';
import Form from '../Components/Form/Form';

function Contact_pg() {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Contact_Us onEnquiryClick={scrollToForm} />
      <Location />
      <FAQ />
      <Form ref={formRef} />
    </div>
  );
}

export default Contact_pg;
