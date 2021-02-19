import React from "react";

import { Row, Container } from "reactstrap";

function Footer() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://faroukbengarssallah.wordpress.com"
                  target="_blank"
				  title="Personal Wordpress link"
                >
                  Wordpress
                </a>
              </li>
              <li>
                <a
                  href="https://faroukbengarssallah.blogspot.com/"
                  target="_blank" 
				  title="Personal Blog link"
                >
                  Blogger
                </a>
              </li>
			  <li>
                <a
                  href="mailto:farouk.bengarssallah@gmail.com"
                  target="_blank" 
				  title="Gmail account"
                >
                  Gmail
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()} 
              <i className="fa fa-code-fork" /> <span  style={{ fontSize: "13px" }}>'Farouk' 'BEN GHARSSALLAH'</span>
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
