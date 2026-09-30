import React from 'react';
import img from '../img/web_Bianca-27-Edit.jpg'

const Lessons = ({ }) => {
  return (
    <>
      <section
        className="module module-header bg-dark bg-dark-50"
        id="lessons"
        style={{
          backgroundPosition: '90% 15%;'
        }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <h1 className="module-title font-alt align-center">Lessons</h1>
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
              <h2 className="module-title font-alt">About Lessons</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <p>
                Voice lessons support student musicians in learning to use their voices in a safe way so that they may develop a full and even range. One of the most important benefits of engaging a voice teacher is to have a professional ear assess the technique and vocal health of a singer. While our instrument, the voice, is very accessible, our physical structure makes it challenging for a singer to hear how they are really singing. (For example, consider hearing your voice in a message or video, and thinking: "Is that what I sound like?!") A vocal instructor helps musicians navigate singing through sensation--acting as true ears, ready to redirect, and support growing voices at any age and experience level.
</p>
              <p>
                Whether students choose to study voice or piano, Ms. Dominguez incorporates elements of music literacy into every lesson, including building sight reading and ear training skills through various exercises. Vocal students solfege in their exercises regularly to build their familiarity of the syllables and intervals. Piano students preparing for CA Certificate of Merit evaluations will dedicate larger portions of their lesson time to completing theory studies, but will be expected to continue their work at home.
</p>
              <p>
                Practice notes, focus points and assignments are listed during the lessons to help reinforce weekly goals, for students (and parents) to refer to at home. Occasionally further supports, either videos or recordings, are captured and shared with students to review during practice. The studio is equipped with Abelton Live software, so that in some lessons, students record pieces to share successful musical performances. Students may also learn how to prepare resumes and headshots as well as audition practice.
</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <h3>Voice Lessons are divided into time for</h3>
              <ul className="lists">
                <li>exercises and warm-ups</li>
                <li>building basic musicianship skills</li>
                <li>learning and performing repertoire</li>
              </ul>
              <h3>Piano Lessons are divided into time for</h3>
              <ul className="lists">
                <li>scales and finger strength building exercises</li>
                <li>musicianship skills</li>
                <li>learning and performing repertoire</li>
                <li>music theory instruction</li>
              </ul>
              <p>Combination lessons are encouraged, and are perfect for the beginning musician. Students have the chance to safely sing their favorite songs while learning important foundations of music theory and piano skills, which will greatly aid their musicianship skills as a singer.</p>
            </div>
          </div>
        </div>
      </section >
    </>
  );
};

export default Lessons;
