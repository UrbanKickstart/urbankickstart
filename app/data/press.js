// "In the media" mentions.
//
// LOGOS: drop each logo in  public/media/  and set "logo" to its path.
//   A transparent PNG (or SVG) on a light background looks best.
//   If a logo is missing, the card automatically shows the outlet name instead.
//
// "quote" is optional — add a short pull-quote if you have one.
// Set "url" to "#" to hide an item until you have its link.

const press = [
  {
    outlet: "Het Parool",
    format: "Podcast",
    logo: "/media/parool.png",
    url: "https://open.spotify.com/episode/635ZDe3iSa2C18DabhswPI?si=899Ss12uRBCLwpDXxR5qDg&t=1142",
    linkText: "Listen on Spotify",
    // quote: "Add a short quote here if you'd like.",
  },
  {
    outlet: "Bram Radio",
    format: "Radio",
    logo: "/media/bram-radio.png",
    url: "https://open.spotify.com/show/2QBdbJyd9FxIjE7qh9Awum?si=5TPx5E8sRla1Gcg2xri8bw",
    linkText: "Listen on Spotify",
  },
  {
    outlet: "IamExpat Fair",
    format: "Event",
    logo: "/media/iamexpat-fair.png",
    url: "https://amsterdam.iamexpatfair.nl/#/exhibitors?lang=en",
    linkText: "See the fair",
  },
];

export default press;
