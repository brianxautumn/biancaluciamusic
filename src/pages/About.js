import React from 'react'
import teaching2 from '../img/teaching2.jpg';

const About = () => (
  <>
    <section
      className="module module-header bg-dark bg-dark-50"
      id="about"
      style={{
        backgroundPosition: '90% 15%;'
      }}>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h1 className="module-title font-alt align-center">About</h1>
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
            <h2 className="module-title font-alt">About Bianca</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <p>Soprano Bianca Dominguez is a graduate of SFSU, earning a BM in Vocal Performance and a Minor in Business Administration. She has recently returned to SFSU to receive her teaching credential in Music Education, which she completed in Spring 2014. During her time at SFSU, Ms. Dominguez has been a member of Women’s Chorus, University Chorus and Chamber Singers. She also has enjoyed the Opera Workshops, performing in scenes including Don Pasquale, The Medium, La Bohème, and Le Nozze di Figaro, accompanied by the SFSU Orchestra. She has enjoyed being apart of a recent production of Lamplighter’s Iolanthe.</p>
            <p>Bianca is a music instructor at her home studio, and a resident artist with Spindrift School of the Performing Arts, teaching private voice and piano lessons. She was the vocal coach for Terra Nova High School’s production of Grease in Spring 2013. Bianca is a music director for SSPA summer camp, Broadway Bound. Bianca has also assistant directed youth choirs, including the Hip Kids of San Francisco’s Inspire Music, where she also is an instructor.  Bianca completed her student teaching with the fine musicians of Hillsdale High School, in San Mateo; working with the choir and orchestra classNamees. Currently Ms. Dominguez is enjoying her first year teaching Elementary Music full-time in the Mount Diablo Unified School District. Her students range from 1st through 5th grade, and she finds her work of sharing music and creativity extremely rewarding.</p>
            <p>Bianca is thrilled to have such an amazing studio of students, and to be apart of such great teaching opportunities, that continue to inspire her passion for music.
              </p>
          </div>
          <div className="col-sm-6">
            <img src={teaching2} alt="" />
          </div>
        </div>
      </div>
    </section >
  </>
);

export default About;