import myphoto from '../assets/contact_photo.png';
import linkedinphoto from '../assets/contact_linkedin.png';

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="title">
          <div className="heading">
            <p>Contact</p>
          </div>
        </div>
        <div className="block">
          <div className="block__text">
            <p>
              Looking for a dedicated<br></br> and skilled professional to join your team?<br></br>{' '}
              Contact me!
            </p>
          </div>
          <div className="block__photo">
            <img src={myphoto} alt="My photo" />
          </div>
        </div>
        <div className="links">
          <div className="links__linkedIn">
            <img src={linkedinphoto} alt="My photo" />
          </div>
          <div className="links__gmail">
            <p>levtsun.yevheniia@gmail.com</p>
          </div>
          <div className="links__number">
            <p>+1 (438)-778-0977</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
