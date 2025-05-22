import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export async function generateDiagnosisPDF({
  disease,
  confidence,
  severity,
  treatment,
  imageUrl
}: {
  disease: string;
  confidence: number;
  severity: string;
  treatment: string | null;
  imageUrl: string;
}) {
  if (!treatment) throw new Error('Treatment content is missing');

  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595, 842]); // A4
  const { width, height } = page.getSize();

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontSize = 12;
  const margin = 50;

  let cursorY = height - margin;

  // Title (centered)
  const title = 'Crop Disease Diagnosis Report';
  const titleWidth = boldFont.widthOfTextAtSize(title, 18);
  page.drawText(title, {
    x: (width - titleWidth) / 2,
    y: cursorY,
    size: 18,
    font: boldFont,
  });

  cursorY -= 40;

  // Embed image
  const imageBytes = await fetch(imageUrl).then(res => res.arrayBuffer());
  const img = await pdfDoc.embedJpg(imageBytes);
  const imgDims = img.scale(0.5);

  page.drawImage(img, {
    x: (width - imgDims.width) / 2,
    y: cursorY - imgDims.height,
    width: imgDims.width,
    height: imgDims.height,
  });

  cursorY -= imgDims.height + 30;

  // Diagnosis Info
  const info = [
    { label: 'Disease:', value: disease },
    { label: 'Confidence:', value: `${(confidence * 100).toFixed(1)}%` },
    { label: 'Severity:', value: severity },
  ];

  info.forEach(({ label, value }) => {
    page.drawText(label, { x: margin, y: cursorY, size: fontSize, font: boldFont });
    page.drawText(` ${value}`, { x: margin + 75, y: cursorY, size: fontSize, font });
    cursorY -= 20;
  });

  cursorY -= 10;

  // Treatment Heading
  page.drawText('Treatment Suggestions:', {
    x: margin,
    y: cursorY,
    size: fontSize + 1,
    font: boldFont,
  });

  cursorY -= 20;

  // Split into lines
  const lines = treatment.split(/\r?\n/).filter(line => line.trim() !== '');
  const maxLineWidth = width - margin * 2;

  lines.forEach((line) => {
    const trimmed = line.trim();
    const isBullet = /^(\d+\.|[- •])/.test(trimmed);

    const wrappedLines = wrapText(trimmed, font, fontSize, maxLineWidth);

    wrappedLines.forEach((segment, i) => {
      const text = isBullet && i === 0 ? `${segment}` : `   ${segment}`;
      page.drawText(text, {
        x: margin,
        y: cursorY,
        size: fontSize,
        font,
      });
      cursorY -= 16;
    });

    cursorY -= 4;
  });

  return await pdfDoc.save();
}

// Utility to wrap long lines manually
function wrapText(text: string, font: any, fontSize: number, maxWidth: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let currentLine = '';

  for (const word of words) {
    const testLine = currentLine + word + ' ';
    const width = font.widthOfTextAtSize(testLine, fontSize);
    if (width > maxWidth) {
      lines.push(currentLine.trim());
      currentLine = word + ' ';
    } else {
      currentLine = testLine;
    }
  }

  if (currentLine.trim()) lines.push(currentLine.trim());

  return lines;
}
