export const playTrailerFromAnotherGenre = (genre) => {
  return {
    type: "play_new_trailer",
    genre: genre,
  };
};
