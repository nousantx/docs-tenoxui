export default function generateColor(colors: string[]) {
  const genColor: { [key: string]: string } = {};
  colors.forEach(category => {
    for (let i = 100; i <= 900; i += 100) {
      const textClassName = `.text-${category}-${i}`;
      const textColorValue = `tc-[rgb(var(--tx_${category}-${i})\\_/\\_var(--text-opacity,\\_1))]`;
      genColor[textClassName] = textColorValue;
      const bgClassName = `.bg-${category}-${i}`;
      const bgColorValue = `bg-color-[rgb(var(--tx_${category}-${i})\\_/\\_var(--bg-opacity,\\_1))]`;
      genColor[bgClassName] = bgColorValue;
      const bcClassName = `.border-${category}-${i}`;
      const bcColorValue = `bc-[rgb(var(--tx_${category}-${i})\\_/\\_var(--border-opacity,\\_1))]`;
      genColor[bcClassName] = bcColorValue;
    }
  });
  return genColor;
}
