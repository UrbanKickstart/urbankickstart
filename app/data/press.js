// "In the media" mentions.
//
// LOGOS: drop each logo in  public/media/  (transparent PNG or SVG looks best).
//   If a logo is missing, the item shows the outlet name instead.
//
// "description" — a short line about your presence in that format (edit freely).
// "quote" — optional; add a line you'd like to feature.
// Set "url" to "#" to hide an item until you have its link.

const press = [
  {
    outlet: "Het Parool",
    format: "Podcast",
    logo: "/media/parool.png",
    url: "https://open.spotify.com/episode/635ZDe3iSa2C18DabhswPI?si=899Ss12uRBCLwpDXxR5qDg&t=1142",
    linkText: "Listen on Spotify",
    description:
      "I joined the Parool podcast to talk about how international professionals can genuinely connect with Amsterdam — beyond the tourist trail.",
    // quote: "Add a line from the episode you'd like to feature.",
  },
  {
    outlet: "Bram Radio",
    format: "Radio",
    logo: "/media/bram-radio.png",
    url: "https://open.spotify.com/show/2QBdbJyd9FxIjE7qh9Awum?si=5TPx5E8sRla1Gcg2xri8bw",
    linkText: "Listen on Spotify",
    description:
      "On Bram Radio I shared my perspective on settling into Amsterdam and the small things that make the city feel like your own.",
    // quote: "Add a line from the show you'd like to feature.",
  },
  {
    outlet: "IamExpat Fair",
    format: "Event",
    logo: "/media/iamexpat-fair.png",
    url: "https://amsterdam.iamexpatfair.nl/#/exhibitors?lang=en",
    linkText: "See the fair",
    description:
      "I hosted a stand at the IamExpat Fair Amsterdam, meeting newcomers face to face and sharing local tips and inspiration.",
    // quote: "Add a short quote if you'd like.",
  },
];

export default press;
