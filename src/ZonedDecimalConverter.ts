class ZonedDecimalConverter {
  private positive: string[] = ["{", "A", "B", "C", "D", "E", "F", "G", "H", "I"];
  private negative: string[] = ["}", "J", "K", "L", "M", "N", "O", "P", "Q", "R"];

  private convertToInt(input: string) : number {
    const trimmed = input.trim();

    if (trimmed.length == 0) {
      return NaN;
    }

    const lastChar = trimmed.slice(-1);

    if (this.positive.lastIndexOf(lastChar) != -1) {
      const lastDigit = this.positive.lastIndexOf(lastChar);
      const result = trimmed.replace(lastChar, lastDigit.toString());
      return parseInt(result);
    }

    if (this.negative.lastIndexOf(lastChar) != -1) {
      const lastDigit = this.negative.lastIndexOf(lastChar);
      const result = trimmed.replace(lastChar, lastDigit.toString());
      return parseInt(result) * -1;
    }

    return NaN; 
  }

  convertToNumber(input: string, fractions: number = 0) : number {
    const integer = this.convertToInt(input) ?? 0;
    return integer != NaN ? integer / Math.pow(10, fractions) : NaN;
  }

  convertToString(input: number, length: number, fractions: number, paddingChar : string = "0") : string {
    const integer = input * Math.pow(10, fractions);
    const lastDigit = integer % 10;
    const lastChar =
      integer > 0 ? this.positive[lastDigit] : this.negative[lastDigit];

    return (integer.toString().slice(0, -1) + lastChar).padStart(length, paddingChar);
  }
}

export default ZonedDecimalConverter;
