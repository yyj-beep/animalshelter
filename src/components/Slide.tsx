/*===== main slide layout ====*/

import React from 'react';
import '../styles/_searchSlide.scss';

interface SlideProps {
  title: string;
  animalImages: string[];
  onRegisterClick?: () => void;
  onMoreClick?: () => void;
  onImageClick?: (index: number) => void;
}

const Slide: React.FC<SlideProps> = ({
  title,
  animalImages,
  onRegisterClick,
  onMoreClick,
  onImageClick,
}) => {
  return (
    <section className="animal-gallery">
      <div className="gallery-row gallery-row--1">
        <div className="search-text-box">
          <h1>
            {title} <img src="/img/main/paw.png" className="ps-3" alt="paw" />
          </h1>
          <div>
            <button className="btn-custom primary" onClick={onRegisterClick}>
              공고 등록하기
            </button>
            <button className="btn-custom primary ms-3" onClick={onMoreClick}>
              더보기 &gt;
            </button>
          </div>
        </div>

        {animalImages.slice(0, 2).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`animal-${index}`}
            className="img-style"
            onClick={() => onImageClick?.(index)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>

      <div className="gallery-row gallery-row--2">
        {animalImages.slice(2, 6).map((img, index) => (
          <img
            key={index + 2}
            src={img}
            alt={`animal-${index + 2}`}
            className="img-style"
            onClick={() => onImageClick?.(index + 2)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
    </section>
  );
};

export default Slide;
