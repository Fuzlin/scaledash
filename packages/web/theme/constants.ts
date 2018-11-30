import { ThemeInterface } from "./theme";

export const colors = {
  white: "#fff",
  black: "#000",
  grey50: "#F5F9F9",
  grey100: "#e9f0f1",
  grey300: "#C3D3DE",
  grey500: "#9EB2C4",
  grey700: "#647A8F",
  grey900: "#424B57",
  primary100: "#CEEBFF",
  primary300: "#8DD2FA",
  primary500: "#40A9F0",
  primary700: "#066FB6",
  primary900: "#00497B",
  secondary100: "#476888",
  secondary300: "#18324F",
  secondary500: "#071D33",
  secondary700: "#031021",
  secondary900: "#010915",
  success100: "#d5f7d5",
  success300: "#a5eea8",
  success500: "#6fc973",
  success700: "#56a151",
  success900: "#377433",
  danger100: "#f7dfe4",
  danger300: "#ffa4a4",
  danger500: "#ff6565",
  danger700: "#ca4545",
  danger900: "#993232",
  warning100: "#faefd3",
  warning300: "#ffe7ab",
  warning500: "#ffd56c",
  warning700: "#c8a95b",
  warning900: "#967e41",
  info100: "#d9dfff",
  info300: "#b6c1ff",
  info500: "#8ea0ff",
  info700: "#6a7cda",
  info900: "#4758b4",
};

export const buttons: ThemeInterface["buttons"] = {
  white: {
    default: {
      background: colors.white,
      color: colors.grey900,
    },
    hover: {
      background: colors.grey100,
      color: colors.white,
    },
    active: {
      background: colors.grey300,
      color: colors.white,
    },
  },
  black: {
    default: {
      background: colors.black,
      color: colors.white,
    },
    hover: {
      background: colors.grey900,
      color: colors.white,
    },
    active: {
      background: colors.grey700,
      color: colors.white,
    },
  },
  grey: {
    default: {
      background: colors.grey500,
      color: colors.white,
    },
    hover: {
      background: colors.grey700,
      color: colors.white,
    },
    active: {
      background: colors.grey900,
      color: colors.white,
    },
  },
  primary: {
    default: {
      background: colors.primary500,
      color: colors.white,
    },
    hover: {
      background: colors.primary700,
      color: colors.white,
    },
    active: {
      background: colors.primary900,
      color: colors.white,
    },
  },
  secondary: {
    default: {
      background: colors.secondary500,
      color: colors.white,
    },
    hover: {
      background: colors.secondary700,
      color: colors.white,
    },
    active: {
      background: colors.secondary900,
      color: colors.white,
    },
  },
  success: {
    default: {
      background: colors.success500,
      color: colors.white,
    },
    hover: {
      background: colors.success700,
      color: colors.white,
    },
    active: {
      background: colors.success900,
      color: colors.white,
    },
  },
  danger: {
    default: {
      background: colors.danger500,
      color: colors.white,
    },
    hover: {
      background: colors.danger700,
      color: colors.white,
    },
    active: {
      background: colors.danger900,
      color: colors.white,
    },
  },
  warning: {
    default: {
      background: colors.warning500,
      color: colors.white,
    },
    hover: {
      background: colors.warning700,
      color: colors.white,
    },
    active: {
      background: colors.warning900,
      color: colors.white,
    },
  },
  info: {
    default: {
      background: colors.info500,
      color: colors.white,
    },
    hover: {
      background: colors.info700,
      color: colors.white,
    },
    active: {
      background: colors.info900,
      color: colors.white,
    },
  },
};
