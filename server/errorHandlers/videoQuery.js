const videoQuery = (videoQ, req, res) => {
  console.log(videoQ);

  if (!videoQ || videoQ === undefined) {
    res.status(400).json({
      error: {
        code: "400",
        message:
          "provide a valide youtube video URL as query parameter eg: /v?url ",
      },
    });
    // return;
  } else if (videoQ === "" || videoQ === null) {
    res.status(400).json({ error: { code: "400", message: "invalide video" } });
    // return;
  }
};

module.exports = videoQuery;
