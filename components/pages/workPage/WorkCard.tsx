import React, {useState} from "react";
import {useRouter} from "next/router";

interface GalleryBoxProps {
  images: string[];
  title: string;
  tags: string[];
  duration: string;
  blogLink: string;
  companyLink: string;
  githubLink: string[];
}

const GalleryBox: React.FC<GalleryBoxProps> = ({
  images,
  title,
  tags,
  duration,
  blogLink,
  companyLink,
  githubLink,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageStyleCover, setImageStyle] = useState(true);
  const router = useRouter();

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const navigateToLink = (link: string) => {
    window.open(link, "_blank");
  };
  const navigateToMultiLink = (e: any, links: string[]) => {
    e.preventDefault();
    links.forEach((link) => {
      window.open(link, "_blank");
    });
  };

  return (
    <div className="gallery-box">
      <div className="gallery" onClick={() => setImageStyle(!imageStyleCover)}>
        <img
          style={{objectFit: imageStyleCover ? "cover" : "contain"}}
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />
        <button className="left" onClick={previousImage}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="right" onClick={nextImage}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      <div className="description">
        {githubLink && githubLink.length ? (
          <div
            className="header project"
            onClick={(e) => navigateToMultiLink(e, githubLink)}
          >
            <p>{title}</p>
            <i className="fa-brands fa-github"></i>
          </div>
        ) : (
          <h2 className="header" onClick={() => navigateToLink(companyLink)}>
            <p>{title}</p>
          </h2>
        )}

        <p>{duration}</p>
        <div className="tags">
          {tags.map((tag) => {
            return (
              <div className="chip" key={tag}>
                {tag}
              </div>
            );
          })}
        </div>
        <div className="link" onClick={() => navigateToLink(blogLink)}>
          More Detail <i className="fa-solid fa-up-right-from-square"></i>
        </div>
      </div>
    </div>
  );
};

export default GalleryBox;
