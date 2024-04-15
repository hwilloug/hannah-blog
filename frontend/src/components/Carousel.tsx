import { styled } from "@mui/material";
import { Children, ReactNode, useEffect, useState } from "react";

const CarouselContainer = styled("div")({
  overflow: "hidden",
});

const CarouselTrack = styled("div")({
  display: "flex",
  transition: "transform 0.5s ease-in-out",
});

const SlideContainer = styled("div")({
  flex: "0 0 100%",
  scale: "0.75",
  transition: "scale 0.5s ease-in-out 0.5s",
});

interface CarouselProps {
  children: ReactNode;
  autoplay?: boolean;
  duration?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoplay,
  duration = 4000,
}) => {
  const slides = Children.toArray(children);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, duration);

    return () => clearTimeout(timer);
  }, [currentSlide, duration, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1,
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1,
    );
  };

  return (
    <CarouselContainer>
      <CarouselTrack
        style={{ transform: `translate3d(-${currentSlide * 100}%, 0, 0)` }}
      >
        {slides.map((slide, index) => (
          <SlideContainer
            key={index}
            style={index === currentSlide ? { scale: "1" } : {}}
          >
            {slide}
          </SlideContainer>
        ))}
      </CarouselTrack>
    </CarouselContainer>
  );
};

export default Carousel;
