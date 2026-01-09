function calculateFreq(text) {
  const lines = text.split(/\r?\n/);
  let total = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line === "") continue;
    if (!/^[+-]?\d+$/.test(line)) {
      continue;
    }
    total += Number(line);
  }

  return total;
}

module.exports = { calculateFreq };
