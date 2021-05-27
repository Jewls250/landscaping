import React from 'react';
import { Link } from 'react-router-dom';

function Footer (){
    return (
      <div>
        <footer>
          <div className="socialMedias">
            <row className="row">
              <artical className="col-sm-4 py-3"></artical>

              <artical className="col-sm-4 py-3">
                <Link
                  href="https://www.facebook.com/giuliano.serawop.5"
                  target="_blank"
                >
                  <i id="socialMedia" className="fab fa-2x fa-facebook"></i>
                </Link>
                <Link href="https://www.instagram.com/jewls_9/" target="_blank">
                  <i id="socialMedia" className="fab fa-2x fa-instagram"></i>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/giuliano-serawop-526782194/"
                  target="_blank"
                >
                  <i id="socialMedia" className="fab fa-2x fa-linkedin"></i>
                </Link>
                <Link href="https://github.com/Jewls250" target="_blank">
                  <i id="socialMedia" className="fab fa-2x fa-github-square"></i>
                </Link>
              </artical>
            </row>
          </div>
        </footer>
      </div>
    );
};

export default Footer;