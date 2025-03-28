export const filterTrailer = (data:any) => {
  if (data.videos.results) {
    const trailer = data.videos.results.filter((video:any) =>
      video.name === "Official Trailer"
        ? video
        : video.name === "Teaser Trailer"
    );

    return trailer;
  }
};
