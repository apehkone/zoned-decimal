const positive: string[] = ["{", "A", "B", "C", "D", "E", "F", "G", "H", "I"];
const negative: string[] = ["}", "J", "K", "L", "M", "N", "O", "P", "Q", "R"];

const convertToInt = (input: string): number => {
  const trimmed = input.trim();

  if (trimmed.length == 0) {
    return NaN;
  }

  const lastChar = trimmed.slice(-1);

  if (positive.lastIndexOf(lastChar) != -1) {
    const lastDigit = positive.lastIndexOf(lastChar);
    const result = trimmed.replace(lastChar, lastDigit.toString());
    return parseInt(result);
  }

  if (negative.lastIndexOf(lastChar) != -1) {
    const lastDigit = negative.lastIndexOf(lastChar);
    const result = trimmed.replace(lastChar, lastDigit.toString());
    return parseInt(result) * -1;
  }

  return NaN;
};

const convertToNumber = (input: string, fractions: number = 0): number => {
  const integer = convertToInt(input) ?? 0;
  return isNaN(integer) ? NaN : integer / Math.pow(10, fractions);
};

const convertToString = (
  input: number,
  length: number,
  fractions: number,
  paddingChar: string = "0"
): string => {
  const integer = (input < 0 ? input * -1 : input) * Math.pow(10, fractions)
  const lastDigit = integer % 10;
  const lastChar = input >= 0 ? positive[lastDigit] : negative[lastDigit];

  return (integer.toString().slice(0, -1) + lastChar).padStart(
    length,
    paddingChar
  );
};

export { convertToString, convertToNumber };
