import React from 'react';
import img from '../img/web_Bianca-118-Edit.jpg';

const Contact = ({ }) => {
  return (
    <>
      <section
        className="module module-header bg-dark bg-dark-50"
        id="contact"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <h1 className="module-title font-alt align-center">Contact</h1>
              <div className="module-subtitle font-inc align-center">
              </div>
            </div>
          </div>
        </div>
      </section >
      <section className="module">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfbyowd-YpmxdJlAeJ-dWjQkUy7QEFENyrI7yrJOidmOyQ-Qg/viewform?embedded=true"
                width="100%"
                height="900"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0">
                Loading…
                </iframe>
            </div>
          </div>
        </div>
      </section >
    </>
  );
};

export default Contact;
