// "In the media" mentions — shown as 3 image-filled squares.
//
// IMAGE: fills the whole square. Drop a photo in  public/media/  and point
//   "image" to it (e.g. /media/parool.jpg). If it's missing, the square shows
//   a coloured tile with the outlet name instead — so it always looks fine.
// "description" — a short line about your presence there.
// "linkText" — the button label. "url" — where the square links to.

const press = [
  {
    outlet: "Het Parool",
    format: "Podcast",
    image: "/media/parool.jpg",
    logo: "/media/parool.png",
    url: "https://open.spotify.com/episode/635ZDe3iSa2C18DabhswPI?si=899Ss12uRBCLwpDXxR5qDg&t=1142",
    linkText: "Listen on Spotify",
    description:
      "On the Parool podcast about connecting with Amsterdam beyond the tourist trail.",
  },
  {
    outlet: "Bram Radio",
    format: "Radio",
    image: "/media/bram-radio.jpg",
    logo: "/media/bram-radio.png",
    url: "https://open.spotify.com/show/2QBdbJyd9FxIjE7qh9Awum?si=5TPx5E8sRla1Gcg2xri8bw",
    linkText: "Listen on Spotify",
    description:
      "On Bram Radio about settling into the city and making it your own.",
  },
  {
    outlet: "IamExpat Fair",
    format: "Event",
    image: "/media/iamexpat-fair.jpg",
    logo: "/media/iamexpat-fair.png",
    url: "https://amsterdam.iamexpatfair.nl/#/exhibitors?lang=en",
    linkText: "See the fair",
    description:
      "Meeting newcomers face to face at the IamExpat Fair Amsterdam.",
  },
];

export default press;
