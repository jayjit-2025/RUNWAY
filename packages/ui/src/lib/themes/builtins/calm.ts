import type { ThemeScheme } from "../contracts.js";
import { bundledThemeFont } from "../bundled-fonts.js";
import { colors, scheme, theme, type TypographyOverrides } from "./shared.js";

const accentHue = 45;
const neutralHue = 80;

const displayFont = bundledThemeFont("fraunces");
const bodyFont = bundledThemeFont("outfit");

const runawayTypography: TypographyOverrides = {
  display: {
    family: displayFont.family,
    fallbacks: displayFont.fallbacks,
    weight: 600,
    tracking: "-0.02em",
  },
  title: {
    family: displayFont.family,
    fallbacks: displayFont.fallbacks,
    weight: 600,
    tracking: "-0.015em",
  },
  body: {
    family: bodyFont.family,
    fallbacks: bodyFont.fallbacks,
    weight: 400,
    size: "0.9375rem",
    lineHeight: "1.55",
  },
  label: {
    family: bodyFont.family,
    fallbacks: bodyFont.fallbacks,
    weight: 600,
    tracking: "0.01em",
  },
  metadata: {
    family: bodyFont.family,
    fallbacks: bodyFont.fallbacks,
    weight: 500,
  },
};

function calmScheme(appearance: ThemeScheme) {
  const dark = appearance === "dark";
  const ink = dark ? `oklch(0.95 0.004 ${neutralHue})` : "#171512";
  const mutedInk = dark ? `oklch(0.75 0.007 ${neutralHue})` : "#6b675e";
  const canvas = dark ? `oklch(0.175 0.005 ${neutralHue})` : "#f6f3ec";
  const surface = dark ? `oklch(0.205 0.005 ${neutralHue})` : "#fbfaf6";
  const raised = dark ? `oklch(0.235 0.006 ${neutralHue})` : "#fbfaf6";
  const sunken = dark ? `oklch(0.15 0.005 ${neutralHue})` : "#efeade";
  const border = dark ? `oklch(0.3 0.006 ${neutralHue})` : "#e4dfd3";
  const fieldBorder = dark ? `oklch(0.42 0.007 ${neutralHue})` : "#e4dfd3";
  const accent = dark ? `oklch(0.76 0.115 ${accentHue})` : "#ddf26a";
  const accentInk = dark ? `oklch(0.13 0.015 ${accentHue})` : "#171512";
  const accentHover = dark ? `oklch(0.82 0.1 ${accentHue})` : "#c9e452";
  const accentActive = dark ? `oklch(0.87 0.08 ${accentHue})` : "#b8d243";
  const selection = dark ? `oklch(0.29 0.03 ${accentHue})` : "#ddf26a";
  const navigationActive = dark
    ? `oklch(0.26 0.006 ${neutralHue})`
    : "#ddf26a";
  const navigationHover = dark ? navigationActive : "#eae3d4";
  const dangerFill = dark ? "oklch(0.35 0.1 25)" : "oklch(0.53 0.19 25)";

  return scheme(
    {
      colors: colors({
        canvas,
        ink,
        surface,
        surfaceRaised: raised,
        surfaceSunken: sunken,
        mutedInk,
        border,
        input: fieldBorder,
        fieldBorder,
        focus: dark ? `oklch(0.8 0.11 ${accentHue})` : "#171512",
        caret: dark ? accent : "#171512",
        link: dark ? `oklch(0.8 0.1 ${accentHue})` : "#3f4a12",
        selection,
        selectionInk: ink,
        actionFocal: accent,
        actionFocalInk: accentInk,
        actionFocalHover: accentHover,
        actionFocalActive: accentActive,
        actionPrimary: dark ? accent : "#171512",
        actionPrimaryInk: dark ? accentInk : "#f6f3ec",
        actionPrimaryHover: dark ? accentHover : "#3a362f",
        actionPrimaryActive: dark ? accentActive : "#000000",
        actionOrdinary: dark ? surface : "#efeade",
        actionOrdinaryInk: ink,
        actionOrdinaryBorder: fieldBorder,
        actionOrdinaryHover: dark ? sunken : "#eae3d4",
        actionOrdinaryActive: dark ? navigationActive : "#e3dcc9",
        danger: dark ? "oklch(0.66 0.19 25)" : "oklch(0.53 0.19 25)",
        dangerInk: dark ? "oklch(0.12 0.01 50)" : "oklch(0.99 0 0)",
        actionDestructive: `color-mix(in oklch, ${dangerFill} 12%, transparent)`,
        actionDestructiveHover: `color-mix(in oklch, ${dangerFill} 20%, transparent)`,
        actionDestructiveActive: `color-mix(in oklch, ${dangerFill} 28%, transparent)`,
        actionDestructiveInk: dark ? "oklch(0.83 0.12 25)" : "oklch(0.43 0.18 25)",
        success: dark ? "oklch(0.27 0.05 155)" : "oklch(0.95 0.03 155)",
        successInk: dark ? "oklch(0.82 0.11 155)" : "oklch(0.37 0.09 155)",
        warning: dark ? "oklch(0.28 0.05 85)" : "oklch(0.96 0.04 85)",
        warningInk: dark ? "oklch(0.86 0.11 85)" : "oklch(0.42 0.09 75)",
        info: dark ? "oklch(0.27 0.05 255)" : "oklch(0.95 0.025 255)",
        infoInk: dark ? "oklch(0.83 0.1 255)" : "oklch(0.42 0.13 255)",
        sidebar: sunken,
        sidebarInk: ink,
        sidebarActive: navigationActive,
        sidebarActiveInk: ink,
        navigationHover,
        navigationActive,
        navigationActiveInk: ink,
        chart1: dark ? "oklch(0.74 0.14 45)" : "oklch(0.61 0.2 255)",
        chart2: dark ? "oklch(0.76 0.12 165)" : "oklch(0.6 0.21 295)",
        chart3: dark ? "oklch(0.75 0.13 250)" : "oklch(0.62 0.22 350)",
        chart4: dark ? "oklch(0.78 0.12 310)" : "oklch(0.6 0.13 175)",
        chart5: dark ? "oklch(0.82 0.12 85)" : "oklch(0.65 0.16 75)",
      }),
      typography: runawayTypography,
      spacing: { sectionGap: "1.75rem", componentGap: "0.875rem" },
      shape: {
        radius: "1rem",
        radiusSm: "0.625rem",
        radiusMd: "0.75rem",
        radiusLg: "1.125rem",
        radiusMedia: "1.125rem",
      },
      elevation: { card: "none", focalAction: "none" },
      shell: { contentMaxWidth: "68rem", sidebarWidth: "15rem" },
      components: {
        button: "dither",
        card: "outlined",
        navigation: "quiet",
        tabs: "underline",
        input: "outlined",
        select: "outlined",
        badge: "tonal",
        toolbar: "flat",
        decoration: "dither",
      },
    },
    appearance,
  );
}

export const calmTheme = theme(
  "calm",
  "Calm",
  "Near-white paper, soft dividers, and one warm accent for what matters.",
  "lucide",
  { light: calmScheme("light"), dark: calmScheme("dark") },
);
