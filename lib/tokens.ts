import tokensData from '@/achs-tokens-v2.json';

export interface ColorToken {
  name: string;
  value: string;
  path: string;
}

export interface TypographyToken {
  name: string;
  fontFamily: string;
  fontSize: string;
  lineHeight: string;
  fontWeight: string;
}

export interface SpacingToken {
  name: string;
  value: string;
}

function resolveReference(value: string, tokens: any): string {
  if (typeof value === 'string' && value.startsWith('{') && value.endsWith('}')) {
    const path = value.slice(1, -1).split('.');
    let resolved = tokens;
    for (const key of path) {
      resolved = resolved?.[key];
    }
    return resolved?.$value || value;
  }
  return value;
}

export function getBrandColors(): ColorToken[] {
  const colors: ColorToken[] = [];
  const brandColors = tokensData.global.color.brand;

  Object.entries(brandColors).forEach(([brandName, brandGroup]: [string, any]) => {
    Object.entries(brandGroup).forEach(([colorName, colorData]: [string, any]) => {
      if (colorData.$type === 'color') {
        colors.push({
          name: `${brandName}.${colorName}`,
          value: colorData.$value,
          path: `brand.${brandName}.${colorName}`,
        });
      }
    });
  });

  return colors;
}

export function getTextColors(): ColorToken[] {
  const colors: ColorToken[] = [];
  const textColors = tokensData.global.color.text;

  Object.entries(textColors).forEach(([colorName, colorData]: [string, any]) => {
    if (colorData.$type === 'color') {
      colors.push({
        name: colorName,
        value: colorData.$value,
        path: `text.${colorName}`,
      });
    }
  });

  return colors;
}

export function getSurfaceColors(): ColorToken[] {
  const colors: ColorToken[] = [];
  const surfaceColors = tokensData.global.color.surface;

  Object.entries(surfaceColors).forEach(([groupName, group]: [string, any]) => {
    Object.entries(group).forEach(([colorName, colorData]: [string, any]) => {
      if (colorData.$type === 'color') {
        colors.push({
          name: `${groupName}.${colorName}`,
          value: colorData.$value,
          path: `surface.${groupName}.${colorName}`,
        });
      }
    });
  });

  return colors;
}

export function getSemanticColors(): ColorToken[] {
  const colors: ColorToken[] = [];
  const semanticColors = tokensData.global.color.semantic;

  Object.entries(semanticColors).forEach(([semanticName, semanticGroup]: [string, any]) => {
    Object.entries(semanticGroup).forEach(([colorName, colorData]: [string, any]) => {
      if (colorData.$type === 'color') {
        colors.push({
          name: `${semanticName}.${colorName}`,
          value: colorData.$value,
          path: `semantic.${semanticName}.${colorName}`,
        });
      }
    });
  });

  return colors;
}

export function getTypographyScale(type: 'mobile' | 'desktop'): TypographyToken[] {
  const typography: TypographyToken[] = [];
  const typoData = type === 'mobile' ? tokensData.mobile.typography : tokensData.desktop.typography;

  Object.entries(typoData).forEach(([name, data]: [string, any]) => {
    if (data.$type === 'typography' && data.$value) {
      const value = data.$value;
      typography.push({
        name,
        fontFamily: resolveReference(value.fontFamily, tokensData),
        fontSize: value.fontSize,
        lineHeight: value.lineHeight,
        fontWeight: value.fontWeight,
      });
    }
  });

  return typography;
}

export function getSpacingScale(): SpacingToken[] {
  const spacing: SpacingToken[] = [];
  const scaleData = tokensData.global.size.scale;

  Object.entries(scaleData).forEach(([name, data]: [string, any]) => {
    if (data.$type === 'dimension') {
      spacing.push({
        name,
        value: data.$value,
      });
    }
  });

  return spacing;
}

export function generateCSSVariables(): string {
  let css = '/* Generated from tokens/achs-tokens-v2.json — ACHS Design System */\n\n';
  css += ':root {\n';

  const brandColors = getBrandColors();
  brandColors.forEach((color) => {
    const varName = `--color-brand-${color.path.replace(/\./g, '-')}`;
    css += `  ${varName}: ${color.value};\n`;
  });

  const textColors = getTextColors();
  textColors.forEach((color) => {
    const varName = `--color-text-${color.name}`;
    css += `  ${varName}: ${color.value};\n`;
  });

  const surfaceColors = getSurfaceColors();
  surfaceColors.forEach((color) => {
    const varName = `--color-surface-${color.path.replace(/\./g, '-')}`;
    css += `  ${varName}: ${color.value};\n`;
  });

  const semanticColors = getSemanticColors();
  semanticColors.forEach((color) => {
    const varName = `--color-semantic-${color.path.replace(/\./g, '-')}`;
    css += `  ${varName}: ${color.value};\n`;
  });

  css += `  --font-heading: ${tokensData.global.fontFamily.heading.$value};\n`;
  css += `  --font-body: ${tokensData.global.fontFamily.body.$value};\n`;

  const spacing = getSpacingScale();
  spacing.forEach((space) => {
    css += `  --spacing-${space.name}: ${space.value};\n`;
  });

  css += '}\n\n';

  css += `/* Base Button Styles */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border: none;
  border-radius: 12px;
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn--primary {
  background-color: var(--color-brand-brand-seguro-primary);
  color: white;
}

.btn--primary:hover {
  background-color: var(--color-brand-brand-seguro-secondary);
}

.btn--primary:disabled {
  background-color: var(--color-brand-brand-seguro-disable);
  cursor: not-allowed;
}

.btn--secondary {
  background-color: var(--color-brand-brand-salud-primary);
  color: white;
}

.btn--secondary:hover {
  background-color: var(--color-brand-brand-salud-secondary);
}

.btn--ghost {
  background-color: transparent;
  border: 2px solid var(--color-brand-brand-seguro-primary);
  color: var(--color-brand-brand-seguro-primary);
}

.btn--ghost:hover {
  background-color: var(--color-brand-brand-seguro-light);
}

.btn--sm {
  padding: 8px 16px;
  font-size: 14px;
}

.btn--lg {
  padding: 16px 32px;
  font-size: 18px;
}

/* Card Styles */
.card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.2s ease;
}

.card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.card__header {
  margin-bottom: 16px;
  font-family: var(--font-heading);
  font-size: 20px;
  font-weight: 500;
  color: var(--color-text-titleDark);
}

.card__body {
  color: var(--color-text-paragraph);
  line-height: 1.6;
}

/* Table Styles */
.table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 12px;
  overflow: hidden;
}

.table th {
  background-color: var(--color-surface-surface-background-seguro);
  padding: 12px 16px;
  text-align: left;
  font-family: var(--font-heading);
  font-weight: 500;
  color: var(--color-text-titleDark);
}

.table td {
  padding: 12px 16px;
  border-bottom: 1px solid #e5e7eb;
  color: var(--color-text-paragraph);
}

.table tr:hover td {
  background-color: #f9fafb;
}

/* Tabs Styles */
.tabs {
  display: flex;
  gap: 8px;
  border-bottom: 2px solid #e5e7eb;
}

.tabs__item {
  padding: 12px 24px;
  background: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 500;
  color: var(--color-text-paragraphLight);
  cursor: pointer;
  transition: all 0.2s ease;
}

.tabs__item--active {
  color: var(--color-brand-brand-seguro-primary);
  border-bottom-color: var(--color-brand-brand-seguro-primary);
}

.tabs__item:hover {
  color: var(--color-brand-brand-seguro-primary);
}

/* Form Styles */
.form-field {
  margin-bottom: 20px;
}

.form-field__label {
  display: block;
  margin-bottom: 8px;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text-titleDark);
}

.form-field__input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-family: var(--font-body);
  font-size: 16px;
  color: var(--color-text-base);
  transition: border-color 0.2s ease;
}

.form-field__input:focus {
  outline: none;
  border-color: var(--color-brand-brand-seguro-primary);
}

.form-field__input--error {
  border-color: var(--color-semantic-semantic-negative-dark);
}

.form-field__helper {
  margin-top: 6px;
  font-size: 12px;
  color: var(--color-text-paragraphLight);
}

.form-field__error {
  margin-top: 6px;
  font-size: 12px;
  color: var(--color-semantic-semantic-negative-dark);
}

/* Badge Styles */
.badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 600;
}

.badge--success {
  background-color: var(--color-semantic-semantic-positive-light);
  color: var(--color-semantic-semantic-positive-dark);
}

.badge--warning {
  background-color: var(--color-semantic-semantic-warning-light);
  color: var(--color-semantic-semantic-warning-dark);
}

.badge--error {
  background-color: var(--color-semantic-semantic-negative-light);
  color: var(--color-semantic-semantic-negative-dark);
}
`;

  return css;
}
