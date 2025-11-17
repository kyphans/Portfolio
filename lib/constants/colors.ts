/**
 * Theme Color Constants
 * Centralized color definitions for Tailwind CSS, Sanity CMS, and components
 */

// ============================================================================
// PRIMARY THEME COLORS (Pink/Red Theme)
// ============================================================================

export const THEME_COLORS = {
  pink: {
    // Primary colors
    primary: '#fa002e',           // Bright Red/Pink (HSL: 349 100% 49%)
    primaryDark: '#d1003f',        // Dark Red (HSL: 349 100% 27%)
    primary2: '#ff6b81',           // Light Pink (HSL: 349 100% 70%)

    // Canvas/Animation accent
    accent: {
      rgb: 'rgba(236, 72, 153, 0.8)',
      rgbTransparent: 'rgba(236, 72, 153, 0)',
    },
  },

  green: {
    // Primary colors
    primary: '#00ff00',            // Pure Neon Green (HSL: 120 100% 50%)
    primaryDark: '#008000',        // Dark Green (HSL: 120 100% 25%)
    primary2: '#66ff66',           // Light Green (HSL: 120 100% 70%)

    // Canvas/Animation accent
    accent: {
      rgb: 'rgba(0, 255, 0, 0.8)',
      rgbTransparent: 'rgba(0, 255, 0, 0)',
    },
  },
} as const;

// ============================================================================
// NEUTRAL COLORS (Shared across all themes)
// ============================================================================

export const NEUTRAL_COLORS = {
  // Background colors
  background: '#0a0a0a',          // Near Black (HSL: 0 0% 4%)
  backgroundCard: '#191919',      // Dark Gray for cards/scrollbar

  // Text colors
  foreground: '#FFFFFF',          // White (HSL: 0 0% 100%)
  muted: '#c6c9d8',               // Light Gray (HSL: 222 17% 85%)
} as const;

// ============================================================================
// HSL VALUES (for CSS Custom Properties)
// ============================================================================

export const HSL_VALUES = {
  pink: {
    primary: '349 100% 49%',
    primaryDark: '349 100% 27%',
    primary2: '349 100% 70%',
  },

  green: {
    primary: '120 100% 50%',
    primaryDark: '120 100% 25%',
    primary2: '120 100% 70%',
  },

  neutral: {
    background: '0 0% 4%',
    muted: '222 17% 85%',
    foreground: '0 0% 100%',
  },
} as const;

// ============================================================================
// SANITY CMS COLORS
// ============================================================================

export const SANITY_THEME_COLORS = {
  primary: 'fa002e',              // Primary brand color (without #)
  transparent: '101112',          // Darkest shade
  positive: '101112',             // Darkest shade
  caution: '101112',              // Darkest shade
  critical: '101112',             // Darkest shade
  darkest: '0a0a0a',              // Darkest background
} as const;

// Sanity theme URL - must be a constant string for import statement
export const SANITY_THEME_URL = `https://themer.sanity.build/api/hues?primary=${SANITY_THEME_COLORS.primary}&transparent=darkest:${SANITY_THEME_COLORS.transparent}&positive=darkest:${SANITY_THEME_COLORS.positive}&caution=darkest:${SANITY_THEME_COLORS.caution}&critical=darkest:${SANITY_THEME_COLORS.critical}&darkest=${SANITY_THEME_COLORS.darkest}` as const;

// Helper function to generate Sanity theme URL (alternative to constant)
export const getSanityThemeUrl = () => {
  const { primary, transparent, positive, caution, critical, darkest } = SANITY_THEME_COLORS;
  return `https://themer.sanity.build/api/hues?primary=${primary}&transparent=darkest:${transparent}&positive=darkest:${positive}&caution=darkest:${caution}&critical=darkest:${critical}&darkest=${darkest}`;
};

// ============================================================================
// ACCENT COLORS (Sentry/Example Pages)
// ============================================================================

export const ACCENT_COLORS = {
  purple: '#6341F0',
  purpleDark: '#553DB8',
  purpleLight: '#7553FF',
  greenBright: '#00F261',
  redDeep: '#E50045',
  purpleVeryDark: '#181423',
} as const;

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export type ThemeName = 'pink' | 'green';
export type ThemeColors = typeof THEME_COLORS;
export type NeutralColors = typeof NEUTRAL_COLORS;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get theme colors by theme name
 */
export const getThemeColors = (theme: ThemeName) => {
  return THEME_COLORS[theme];
};

/**
 * Get HSL values by theme name
 */
export const getHSLValues = (theme: ThemeName) => {
  return HSL_VALUES[theme];
};
