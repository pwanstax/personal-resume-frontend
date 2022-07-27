import React, {useState} from "react";
import {
  Box,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import RatingEmoji from "./RatingEmoji";

const ReviewBox = ({showReview, setShowReview, setAlert}) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleClose = () => {
    setShowReview(false);
  };
  const handleSubmit = () => {
    setRating(0);
    setComment("");
    setShowReview(false);
    setAlert(true);
  };
  const handleChangeRating = (newRating) => {
    if (rating === newRating) {
      setRating(0);
    } else {
      setRating(newRating);
    }
    console.log(newRating);
  };
  const handleChangeComment = (newComment) => {
    setComment(newComment);
    console.log(newComment);
  };
  return (
    <Box>
      <Dialog open={showReview} onClose={handleClose}>
        <DialogTitle>
          Please leave me some reviews or your experience on my website !?
        </DialogTitle>
        <DialogContent>
          <RatingEmoji onChange={handleChangeRating} rating={rating} />
          <TextField
            multiline
            minRows={5}
            value={comment}
            placeholder="Leave some comments. (optional)"
            style={{width: "100%", marginTop: 15}}
            onInput={(e) => handleChangeComment(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSubmit} disabled={!rating}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ReviewBox;
