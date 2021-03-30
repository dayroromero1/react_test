import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

import { images } from "./CarouselData";
import "./Carousel.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100vw",
    height: 650,
    flexGrow: 1,
  },
  img: {
    height: "100%",
    overflow: "hidden",
    display: "block",
    width: "100%",
  },
}));

export default function TextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="pageCarousel">
      <div className={classes.root}>
        <div className="test">
          <div className="carouselContent">
            <h1 className="title">{images[activeStep].title}</h1>
            <p className="subtitle">{images[activeStep].subtitle}</p>
          </div>
          <div className="testdown">
            <Button
              className="whiteButton"
              variant="outlined"
              color="secondary"
            >
              Conoce producto
            </Button>
            <Button variant="contained" color="primary">
              ¡Cotizar ahora!
            </Button>
          </div>
        </div>

        <img
          className={classes.img}
          src={window.location.href + images[activeStep].img}
          alt={images[activeStep].title}
        />

        <MobileStepper
          classes={{ root: { bottom: 50 } }}
          steps={maxSteps}
          position="static"
          variant="dots"
          activeStep={activeStep}
          nextButton={
            <Button
              className="carouselButton"
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              className="carouselButton"
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
        />
      </div>
    </div>
  );
}
