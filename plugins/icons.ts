import type { IconPath } from "drocket";

export const iconFactory: Record<string, IconPath> = {
  arrowLeft: {
    d: "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",
  },
  arrowRight: {
    d: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",
  },
  arrowDown: {
    d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",
  },
  clear: {
    d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",
  },
  menu: {
    d: "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",
  },
  account: {
    d: "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z",
  },
  pencil: {
    d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",
  },
  music: {
    d: "M21,3V15.5A3.5,3.5 0 0,1 17.5,19A3.5,3.5 0 0,1 14,15.5A3.5,3.5 0 0,1 17.5,12C18.04,12 18.55,12.12 19,12.34V6.47L9,8.6V17.5A3.5,3.5 0 0,1 5.5,21A3.5,3.5 0 0,1 2,17.5A3.5,3.5 0 0,1 5.5,14C6.04,14 6.55,14.12 7,14.34V6L21,3Z",
  },
  delete: {
    d: "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",
  },
  send: {
    d: "M2,21L23,12L2,3V10L17,12L2,14V21Z",
  },
  alert: {
    d: "M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z",
  },
  alertBox: {
    d: "M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M13,13V7H11V13H13M13,17V15H11V17H13Z",
  },
  cog: {
    d: "M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z",
  },
  wifi: {
    d: "M12,21L15.6,16.2C14.6,15.45 13.35,15 12,15C10.65,15 9.4,15.45 8.4,16.2L12,21M12,3C7.95,3 4.21,4.34 1.2,6.6L3,9C5.5,7.12 8.62,6 12,6C15.38,6 18.5,7.12 21,9L22.8,6.6C19.79,4.34 16.05,3 12,3M12,9C9.3,9 6.81,9.89 4.8,11.4L6.6,13.8C8.1,12.67 9.97,12 12,12C14.03,12 15.9,12.67 17.4,13.8L19.2,11.4C17.19,9.89 14.7,9 12,9Z",
  },
  calendar: {
    d: "M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z",
  },
  email: {
    d: "M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z",
  },
  menuLeft: {
    d: "M14,7L9,12L14,17V7Z",
  },
  menuRight: {
    d: "M10,17L15,12L10,7V17Z",
  },
  menuRightOutlined: {
    d: "M9,6H10.5L16.5,12L10.5,18H9V6M13.67,12L11,9.33V14.67L13.67,12Z",
  },
  menuLeftOutlined: {
    d: "M15,18H13.5L7.5,12L13.5,6H15V18M10.33,12L13,14.67V9.33L10.33,12Z",
  },
  arrowLeftThin: {
    d: "M10.05 16.94V12.94H18.97L19 10.93H10.05V6.94L5.05 11.94Z",
  },
  arrowRightThin: {
    d: "M14 16.94V12.94H5.08L5.05 10.93H14V6.94L19 11.94Z",
  },
  menuDown: {
    d: "M7,10L12,15L17,10H7Z",
  },
  gitHub: {
    d: "M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z",
  },
  menuDownOutline: {
    d: "M18,9V10.5L12,16.5L6,10.5V9H18M12,13.67L14.67,11H9.33L12,13.67Z",
  },
  fullScreen: {
    d: "M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z",
  },
  externalLink: {
    d: "M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z",
  },
  logo: {
    d: "M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z",
  },
  accountBox: {
    d: "M6,17C6,15 10,13.9 12,13.9C14,13.9 18,15 18,17V18H6M15,9A3,3 0 0,1 12,12A3,3 0 0,1 9,9A3,3 0 0,1 12,6A3,3 0 0,1 15,9M3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5C3.89,3 3,3.9 3,5Z",
  },
  history: {
    d: "M13.5,8H12V13L16.28,15.54L17,14.33L13.5,12.25V8M13,3A9,9 0 0,0 4,12H1L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3",
  },
  heart: {
    d: "M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z",
  },
  dialpad: {
    d: "M12,19A2,2 0 0,0 10,21A2,2 0 0,0 12,23A2,2 0 0,0 14,21A2,2 0 0,0 12,19M6,1A2,2 0 0,0 4,3A2,2 0 0,0 6,5A2,2 0 0,0 8,3A2,2 0 0,0 6,1M6,7A2,2 0 0,0 4,9A2,2 0 0,0 6,11A2,2 0 0,0 8,9A2,2 0 0,0 6,7M6,13A2,2 0 0,0 4,15A2,2 0 0,0 6,17A2,2 0 0,0 8,15A2,2 0 0,0 6,13M18,5A2,2 0 0,0 20,3A2,2 0 0,0 18,1A2,2 0 0,0 16,3A2,2 0 0,0 18,5M12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17A2,2 0 0,0 14,15A2,2 0 0,0 12,13M18,13A2,2 0 0,0 16,15A2,2 0 0,0 18,17A2,2 0 0,0 20,15A2,2 0 0,0 18,13M18,7A2,2 0 0,0 16,9A2,2 0 0,0 18,11A2,2 0 0,0 20,9A2,2 0 0,0 18,7M12,7A2,2 0 0,0 10,9A2,2 0 0,0 12,11A2,2 0 0,0 14,9A2,2 0 0,0 12,7M12,1A2,2 0 0,0 10,3A2,2 0 0,0 12,5A2,2 0 0,0 14,3A2,2 0 0,0 12,1Z",
  },
  form: {
    d: "M17,7H22V17H17V19A1,1 0 0,0 18,20H20V22H17.5C16.95,22 16,21.55 16,21C16,21.55 15.05,22 14.5,22H12V20H14A1,1 0 0,0 15,19V5A1,1 0 0,0 14,4H12V2H14.5C15.05,2 16,2.45 16,3C16,2.45 16.95,2 17.5,2H20V4H18A1,1 0 0,0 17,5V7M2,7H13V9H4V15H13V17H2V7M20,15V9H17V15H20Z",
  },
  trash: {
    d: "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",
  },
  home: {
    d: "M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z",
  },
};

export default defineNuxtPlugin(() => {
  return {
    provide: {
      icon: iconFactory,
    },
  };
});
