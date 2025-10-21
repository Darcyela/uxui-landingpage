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

export function getSeguroColors(): ColorToken[] {
  const colors: ColorToken[] = [];
  const seguroColors = tokensData.global.color.brand.seguro;

  Object.entries(seguroColors).forEach(([colorName, colorData]: [string, any]) => {
    if (colorData.$type === 'color') {
      colors.push({
        name: colorName,
        value: colorData.$value,
        path: `brand.seguro.${colorName}`,
      });
    }
  });

  return colors;
}

export function getSaludColors(): ColorToken[] {
  const colors: ColorToken[] = [];
  const saludColors = tokensData.global.color.brand.salud;

  Object.entries(saludColors).forEach(([colorName, colorData]: [string, any]) => {
    if (colorData.$type === 'color') {
      colors.push({
        name: colorName,
        value: colorData.$value,
        path: `brand.salud.${colorName}`,
      });
    }
  });

  return colors;
}

export function getServiciosColors(): ColorToken[] {
  const colors: ColorToken[] = [];
  const serviciosColors = tokensData.global.color.brand.servicios;

  Object.entries(serviciosColors).forEach(([colorName, colorData]: [string, any]) => {
    if (colorData.$type === 'color') {
      colors.push({
        name: colorName,
        value: colorData.$value,
        path: `brand.servicios.${colorName}`,
      });
    }
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
  css += '#achs-ui {\n';

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
#achs-ui .btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 9999px;
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

#achs-ui .btn--primary {
  background-color: var(--color-brand-brand-seguro-primary);
  color: white;
}

#achs-ui .btn--primary:hover {
  background-color: var(--color-brand-brand-seguro-secondary);
}

#achs-ui .btn--primary:disabled {
  background-color: var(--color-brand-brand-seguro-disable);
  cursor: not-allowed;
}

#achs-ui .btn--secondary {
  background-color: var(--color-brand-brand-salud-primary);
  color: white;
}

#achs-ui .btn--secondary:hover {
  background-color: var(--color-brand-brand-salud-secondary);
}

#achs-ui .btn--ghost {
  background-color: transparent;
  border: 2px solid var(--color-brand-brand-seguro-primary);
  color: var(--color-brand-brand-seguro-primary);
}

#achs-ui .btn--ghost:hover {
  background-color: var(--color-brand-brand-seguro-light);
}

#achs-ui .btn--sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

#achs-ui .btn--lg {
  padding: 1rem 2rem;
  font-size: 1.125rem;
}

/* Card Styles */
#achs-ui .card {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.2s ease;
}

#achs-ui .card:hover {
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.12);
}

#achs-ui .card__header {
  margin-bottom: 1rem;
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--color-text-titleDark);
}

#achs-ui .card__body {
  color: var(--color-text-paragraph);
  line-height: 1.6;
}

/* Table Styles */
#achs-ui .table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 0.75rem;
  overflow: hidden;
}

#achs-ui .table th {
  background-color: #f3f4f6;
  padding: 0.75rem 1rem;
  text-align: left;
  font-family: var(--font-heading);
  font-weight: 500;
  color: var(--color-text-titleDark);
}

#achs-ui .table td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e5e7eb;
  color: var(--color-text-paragraph);
}

#achs-ui .table tr:hover td {
  background-color: #f9fafb;
}

/* Tabs Styles */
#achs-ui .tabs {
  display: flex;
  gap: 0.5rem;
  border-bottom: 2px solid #e5e7eb;
}

#achs-ui .tabs__item {
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text-paragraphLight);
  cursor: pointer;
  transition: all 0.2s ease;
}

#achs-ui .tabs__item--active {
  color: var(--color-brand-brand-seguro-primary);
  border-bottom-color: var(--color-brand-brand-seguro-primary);
}

#achs-ui .tabs__item:hover {
  color: var(--color-brand-brand-seguro-primary);
}

/* Form Styles */
#achs-ui .form-field {
  margin-bottom: 1.25rem;
}

#achs-ui .form-field__label {
  display: block;
  margin-bottom: 0.5rem;
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text-titleDark);
}

#achs-ui .form-field__input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.5rem;
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--color-text-base);
  transition: border-color 0.2s ease;
}

#achs-ui .form-field__input:focus {
  outline: none;
  border-color: var(--color-brand-brand-seguro-primary);
}

#achs-ui .form-field__input--error {
  border-color: var(--color-semantic-semantic-negative-dark);
}

#achs-ui .form-field__helper {
  margin-top: 0.375rem;
  font-size: 0.75rem;
  color: var(--color-text-paragraphLight);
}

#achs-ui .form-field__error {
  margin-top: 0.375rem;
  font-size: 0.75rem;
  color: var(--color-semantic-semantic-negative-dark);
}

/* Badge Styles */
#achs-ui .badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
}

#achs-ui .badge--success {
  background-color: var(--color-semantic-semantic-positive-light);
  color: var(--color-semantic-semantic-positive-dark);
}

#achs-ui .badge--warning {
  background-color: var(--color-semantic-semantic-warning-light);
  color: var(--color-semantic-semantic-warning-dark);
}

#achs-ui .badge--error {
  background-color: var(--color-semantic-semantic-negative-light);
  color: var(--color-semantic-semantic-negative-dark);
}
`;

  return css;
}
