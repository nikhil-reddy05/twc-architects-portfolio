export const architecturePageTheme = {
  background: {
    color: "#f7f5ef",
    dotColor: "#b9b5ad",
    dotOpacity: 0.62,
    dotSize: "1px",
    dotSpacing: "22px",
  },
  hero: {
    titleSize: "text-3xl sm:text-5xl lg:text-6xl xl:text-7xl",
    subtitleSize: "text-xs sm:text-base",
    titleColor: "#c9c4bc",
    subtitleColor: "rgba(201, 196, 188, 0.82)",
    overlayIntensity: 0.34,
    height: "min-h-[520px] sm:min-h-[620px] lg:min-h-[700px]",
    textAlign: "center",
  },
  gallery: {
    maxWidth: "max-w-[96rem]",
    columns: {
      desktop: 3,
      tablet: 2,
      mobile: 1,
    },
    gap: "2.5rem",
    imageRadius: "0px",
    projectNameColor: "#34312c",
    projectNameHoverColor: "#111111",
    projectNameSize: "text-xs",
    projectNameLetterSpacing: "0.18em",
  },
};

export const interiorsPageTheme = {
  ...architecturePageTheme,
  gallery: {
    ...architecturePageTheme.gallery,
  },
};

export const projectDetailTheme = {
  background: {
    ...architecturePageTheme.background,
  },
  layout: {
    maxWidth: "max-w-[74rem]",
    wideMaxWidth: "max-w-[88rem]",
    sectionSpacing: "py-12 sm:py-16 lg:py-20",
  },
  typography: {
    textColor: "#25231f",
    mutedTextColor: "#625d55",
    labelColor: "#6f6a62",
    titleSize: "text-4xl sm:text-5xl lg:text-6xl",
    mobileTitleSize: "text-[2.35rem]",
  },
  card: {
    radius: "0px",
    shadow: "0 24px 70px rgba(24, 27, 31, 0.1)",
  },
  gallery: {
    columns: {
      desktop: 3,
      tablet: 2,
      mobile: 1,
    },
    gap: "1.5rem",
    imageRadius: "0px",
  },
};

export const aboutPageTheme = {
  background: {
    ...architecturePageTheme.background,
  },
  content: {
    maxWidth: "max-w-[52rem]",
    textColor: "#2f2d29",
    mutedTextColor: "#5f5a52",
    headingColor: "#25231f",
  },
  teamCard: {
    backgroundColor: "#e9e9e7",
    radius: "rounded-[1.75rem] sm:rounded-[2.25rem]",
    shadow: "shadow-[0_24px_70px_rgba(24,27,31,0.12)]",
    backgroundTextOpacity: "opacity-[0.09]",
    cardHeight: "min-h-[40rem] sm:min-h-[42rem] lg:min-h-[40rem]",
    imageClassName:
      "h-[34rem] w-[104%] sm:h-[37rem] sm:w-[78%] lg:h-[35rem] lg:w-[58%]",
  },
};
