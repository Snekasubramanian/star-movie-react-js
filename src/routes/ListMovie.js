import React from "react";
import { Image, Col } from "react-bootstrap";
import { Ship, Man, Action, Star } from "../assets/img";
import { Link } from "react-router-dom";

import { BsPlayCircle } from "react-icons/bs";

const ListMovie = () => {
  return (
    <div className="entertain-pages">
      <div className="ban-action">
        <Image src={Action} />

        <h3>Comedies</h3>
      </div>
      <div className="poular-movie my-4 w-95">
        <div className=" d-flex-wrap my-2">
          <Col className="px-3 my-2" md={3} xs={12} sm={6}>
            <Link to="/entertainment/moviedetails">
              <div className="pop-enter">
                <Image src={Ship} />
                <div className="hover-cont">
                  <div className="play-design">
                    <BsPlayCircle />
                  </div>

                  <h3>Ship of full moon</h3>
                  <div className="d-flex-al-jb">
                    <p>1hr 54min</p>
                    <p className="d-flex-al">
                      <Image src={Star} className="img-width" /> 5.6
                    </p>
                  </div>
                  <h6>Drama - 12 Feb 23</h6>
                </div>
              </div>
            </Link>
          </Col>
          <Col className="px-3 my-2" md={3} xs={12} sm={6}>
            <Link to="/entertainment/moviedetails">
              <div className="pop-enter">
                <Image src={Man} />
                <div className="hover-cont">
                  <div className="play-design">
                    <BsPlayCircle />
                  </div>

                  <h3>Ship of full moon</h3>
                  <div className="d-flex-al-jb">
                    <p>1hr 54min</p>
                    <p className="d-flex-al">
                      <Image src={Star} className="img-width" /> 5.6
                    </p>
                  </div>
                  <h6>Drama - 12 Feb 23</h6>
                </div>
              </div>
            </Link>
          </Col>
          <Col className="px-3 my-2" md={3} xs={12} sm={6}>
            <Link to="/entertainment/moviedetails">
              <div className="pop-enter">
                <Image src={Ship} />
                <div className="hover-cont">
                  <div className="play-design">
                    <BsPlayCircle />
                  </div>

                  <h3>Ship of full moon</h3>
                  <div className="d-flex-al-jb">
                    <p>1hr 54min</p>
                    <p className="d-flex-al">
                      <Image src={Star} className="img-width" /> 5.6
                    </p>
                  </div>
                  <h6>Drama - 12 Feb 23</h6>
                </div>
              </div>
            </Link>
          </Col>
          <Col className="px-3 my-2" md={3} xs={12} sm={6}>
            <Link to="/entertainment/moviedetails">
              <div className="pop-enter">
                <Image src={Man} />
                <div className="hover-cont">
                  <div className="play-design">
                    <BsPlayCircle />
                  </div>

                  <h3>Ship of full moon</h3>
                  <div className="d-flex-al-jb">
                    <p>1hr 54min</p>
                    <p className="d-flex-al">
                      <Image src={Star} className="img-width" /> 5.6
                    </p>
                  </div>
                  <h6>Drama - 12 Feb 23</h6>
                </div>
              </div>
            </Link>
          </Col>
        </div>
      </div>
    </div>
  );
};
export default ListMovie;
