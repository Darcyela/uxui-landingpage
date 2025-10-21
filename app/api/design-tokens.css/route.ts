import { NextResponse } from 'next/server';
import { generateCSSVariables } from '@/lib/tokens';

export async function GET() {
  const css = generateCSSVariables();

  return new NextResponse(css, {
    headers: {
      'Content-Type': 'text/css',
      'Content-Disposition': 'attachment; filename="achs-tokens.css"',
    },
  });
}
