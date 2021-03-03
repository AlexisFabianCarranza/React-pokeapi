import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import NoImage from "../assets/no_image_96x96.png";
import { useMediaQuery, useTheme } from "@material-ui/core";

const imageSizeMobile = "200px";
const imageSizeDesktop = "250px";

export default ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const [imageWidth, setImageWidth] = useState("200px");
  const [imageHeight, setImageHeight] = useState("200px");

  useEffect(() => {
    if (isDesktop) {
      setImageHeight(imageSizeDesktop);
      setImageWidth(imageSizeDesktop);
    } else {
      setImageHeight(imageSizeMobile);
      setImageWidth(imageSizeMobile);
    }
  }, [isDesktop]);

  const nextImage = () => {
    setCurrentImage((oldCurrentImage) => oldCurrentImage + 1);
  };

  const prevImage = () => {
    setCurrentImage((oldCurrentImage) => oldCurrentImage - 1);
  };

  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Grid item xs={2}>
        {currentImage !== 0 && (
          <IconButton size="medium" onClick={prevImage}>
            <ArrowLeftIcon fontSize="inherit" />
          </IconButton>
        )}
      </Grid>
      <Grid
        item
        xs={8}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {images.length !== 0 ? (
          <img
            src={images[currentImage]}
            alt={images[currentImage]}
            style={{ width: imageWidth, height: imageHeight }}
          />
        ) : (
          <img src={NoImage} alt={"No image"} />
        )}
      </Grid>
      <Grid item xs={2}>
        {currentImage !== images.length - 1 && (
          <IconButton size="medium" onClick={nextImage}>
            <ArrowRightIcon fontSize="inherit" />
          </IconButton>
        )}
      </Grid>
    </Grid>
  );
};
