import { styled, useMediaQuery } from "@mui/material";
import { Children, ReactNode, useEffect, useState } from "react";

const CarouselContainer = styled("div")({
  overflow: "hidden",
});

const CarouselTrack = styled("div")(({ theme }) => ({
  display: "flex",
  transition: "transform 0.5s ease-in-out",
  paddingLeft: useMediaQuery(theme.breakpoints.down("xs")) ? "20%" : "29%",
}));

const SlideContainer = styled("div")({
  flex: "0 0 0",
  scale: "1",
  boxShadow: "0 0 0 black",
  transition: "scale 0.5s ease-in-out 0.5s, box-shadow 0.5s ease-in-out 0.5s",
  margin: "50px 5px",
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
        style={{ transform: `translate3d(-${currentSlide * 17}rem, 0, 0)` }}
      >
        {slides.map((slide, index) => (
          <SlideContainer
            key={index}
            style={
              index === currentSlide
                ? { scale: "1.25", zIndex: 3, boxShadow: "0 0 10px black" }
                : {}
            }
          >
            {slide}
          </SlideContainer>
        ))}
      </CarouselTrack>
    </CarouselContainer>
  );
};

export default Carousel;
