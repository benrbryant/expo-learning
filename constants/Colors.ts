const tintColorLight = "purple";
const tintColorDark = "#eee";
const darkTheme = {
  "dark-primary": "#1d2d50",
  "dark-secondary": "#133b5c",
  "dark-info": "#1e5f74",
  "dark-warning": "#fcdab7",
};

export default {
  light: {
    text: "#222",
    background: "#eee",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#eee",
    background: darkTheme["dark-primary"],
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
};
