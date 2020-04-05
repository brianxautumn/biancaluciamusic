import React from 'react';
import img from '../img/teaching2.jpg';

const Teaching = ({ }) => {
  return (
    <>
      <section
        className="module module-header bg-dark bg-dark-50"
        id="teaching"
        style={{
          backgroundPosition: '90% 15%;'
        }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <h1 className="module-title font-alt align-center">Teaching</h1>
              <div className="module-subtitle font-inc align-center">
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="module">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <h2 class="module-title font-alt">Classroom Music</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <em><strong>M</strong></em>ake choices that help you and others learn.<br />
              <em><strong>U</strong></em>se instruments and materials with care.<br />
              <em><strong>S</strong></em>ing, speak and play only when asked.<br />
              <em><strong>I</strong></em>nvite friends to be brave!<br />
              <em><strong>C</strong></em>ome ready and willing to be creative!<br /><br /><br />
              <p>Ms. Dominguez is currently working full-time in the Mount Diablo Unified School District, teaching Elementary School Music to students of two schools in Concord and Pleasant Hill. MDUSD provides weekly music classes to students in 1st through 5th grades. Ms. Dominguez's students at all grade levels obtain theory and musicianship instruction as well as vocal and instrumental performance experience. Classes range from introductory level exploring instruments, traditional worksheet study, utilizing games which apply new concepts, to rehearsing vocal and instrumental works. </p>
              <p>No matter the lesson, the classroom value of teamwork, and thinking of the class as an ensemble is always stressed to the fullest extent. Students are rewarded individually for brave positive participation, classmate encouragement and respectful attitudes; exemplary classes are rewarded through school-wide based systems. Each grade level has at least one performance during the year. Both schools have just presented fantastic and well received December 2014 concerts, Songs for Our Winter, featuring the 2nd and 4th Grade students.</p>
              <p>With such a large student population across a wide range of skill levels, Ms. Dominguez collaborates regularly with colleagues in the district, sharing and creating new lessons for all elementary students within the MDUSD. Within each school, Ms. Dominguez is thrilled to work with supportive staff and faculties, in facilitating extracurricular opportunities, like Spring musicals, talent shows and choirs.</p>
            </div>
            <div class="col-sm-6">
              <img src={img} alt="/" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Teaching;
