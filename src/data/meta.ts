export const MetaData = {
  TITLE: "Service Tracker",
  DESCRIPTION: "A personal tool to help track the count and pace for meters serviced.",
  Author: {
    NAME: "Daniel Blake",
    EMAIL: "daniel@danielblake.dev",
    WEBSITE: "https://danielblake.dev",
  },
};

export const AppData = {
  NAME: MetaData.TITLE,
  SHORT_NAME: MetaData.TITLE,
  DESCRIPTION: MetaData.DESCRIPTION,
  START: "/",
  BKG_COLOR: "#ffffff",
  THEME_COLOR: "#000000",
  AUTHOR: MetaData.Author.NAME,
};

export const Url = {
  BASE: new URL("https://serv-track.netlify.app"),
  AUTHOR: new URL(MetaData.Author.WEBSITE),
} as const;
