import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";


const Announcement = () => {
  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        },
      },
      {
        breakpoint: 592,
        settings: {
          slidesToShow: 1
        },
      },
    ],
  };

  return (
    <>
      <article className="announcement-section py-5">
        <p className="section-title pb-2 px-3">
          <span>
            <img className="icon" src="/assets/images/announcement_icon.svg" alt="" />
          </span>
          Announcement
        </p>
        <Slider {...settings}>
          <div className="video-slide-wrapper">
            <Link to="/">
              <div className="video-slide">
                <img
                  src="assets/images/thumbnail.png"
                  alt="thumbnail"
                  className="video-thumbnail"
                />
                <div className="video-body">
                  <img
                    src="assets/images/youtube_icon.svg"
                    alt="video play icon"
                    className="video-play-icon"
                  />
                  <p className="video-desc">
                    The EMP team hosts AMA’s on YouTube at 10:45pm UTC 🎤Check
                    out our latest AMA featuring our main host AJ
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="video-slide-wrapper">
            <Link to="/">
              <div className="video-slide">
                <img
                  src="assets/images/thumbnail.png"
                  alt="thumbnail"
                  className="video-thumbnail"
                />
                <div className="video-body">
                  <img
                    src="assets/images/youtube_icon.svg"
                    alt="video play icon"
                    className="video-play-icon"
                  />
                  <p className="video-desc">
                    The EMP team hosts AMA’s on YouTube at 10:45pm UTC 🎤Check
                    out our latest AMA featuring our main host AJ
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="video-slide-wrapper">
            <Link to="/">
              <div className="video-slide">
                <img
                  src="assets/images/thumbnail.png"
                  alt="thumbnail"
                  className="video-thumbnail"
                />
                <div className="video-body">
                  <img
                    src="assets/images/youtube_icon.svg"
                    alt="video play icon"
                    className="video-play-icon"
                  />
                  <p className="video-desc">
                    The EMP team hosts AMA’s on YouTube at 10:45pm UTC 🎤Check
                    out our latest AMA featuring our main host AJ
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="video-slide-wrapper">
            <Link to="/">
              <div className="video-slide">
                <img
                  src="assets/images/thumbnail.png"
                  alt="thumbnail"
                  className="video-thumbnail"
                />
                <div className="video-body">
                  <img
                    src="assets/images/youtube_icon.svg"
                    alt="video play icon"
                    className="video-play-icon"
                  />
                  <p className="video-desc">
                    The EMP team hosts AMA’s on YouTube at 10:45pm UTC 🎤Check
                    out our latest AMA featuring our main host AJ
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="video-slide-wrapper">
            <Link to="/">
              <div className="video-slide">
                <img
                  src="assets/images/thumbnail.png"
                  alt="thumbnail"
                  className="video-thumbnail"
                />
                <div className="video-body">
                  <img
                    src="assets/images/youtube_icon.svg"
                    alt="video play icon"
                    className="video-play-icon"
                  />
                  <p className="video-desc">
                    The EMP team hosts AMA’s on YouTube at 10:45pm UTC 🎤Check
                    out our latest AMA featuring our main host AJ
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="video-slide-wrapper">
            <Link to="/">
              <div className="video-slide">
                <img
                  src="assets/images/thumbnail.png"
                  alt="thumbnail"
                  className="video-thumbnail"
                />
                <div className="video-body">
                  <img
                    src="assets/images/youtube_icon.svg"
                    alt="video play icon"
                    className="video-play-icon"
                  />
                  <p className="video-desc">
                    The EMP team hosts AMA’s on YouTube at 10:45pm UTC 🎤Check
                    out our latest AMA featuring our main host AJ
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </Slider>
      </article>
    </>
  );
};

export default Announcement;
