import ZonedDecimalConverter from "../ZonedDecimalConverter";

describe("ZonedDecimalConverter Tests", () => {
  test("should convert positive values", () => {
    const converter = new ZonedDecimalConverter();
    let result = converter.convertToNumber("00000522{");
    expect(result).toBe(5220);

    result = converter.convertToNumber("00000522A");
    expect(result).toBe(5221);

    result = converter.convertToNumber("00000522B");
    expect(result).toBe(5222);

    result = converter.convertToNumber("00000522C");
    expect(result).toBe(5223);

    result = converter.convertToNumber("00000522D");
    expect(result).toBe(5224);

    result = converter.convertToNumber("00000522E");
    expect(result).toBe(5225);

    result = converter.convertToNumber("00000522F");
    expect(result).toBe(5226);

    result = converter.convertToNumber("00000522G");
    expect(result).toBe(5227);

    result = converter.convertToNumber("00000522H");
    expect(result).toBe(5228);

    result = converter.convertToNumber("00000522I");
    expect(result).toBe(5229);
  });

  test("should convert negative numbers", () => {
    const converter = new ZonedDecimalConverter();
    let result = converter.convertToNumber("00000522}");
    expect(result).toBe(-5220);

    result = converter.convertToNumber("00000522J");
    expect(result).toBe(-5221);

    result = converter.convertToNumber("00000522K");
    expect(result).toBe(-5222);

    result = converter.convertToNumber("00000522L");
    expect(result).toBe(-5223);

    result = converter.convertToNumber("00000522M");
    expect(result).toBe(-5224);

    result = converter.convertToNumber("00000522N");
    expect(result).toBe(-5225);

    result = converter.convertToNumber("00000522O");
    expect(result).toBe(-5226);

    result = converter.convertToNumber("00000522P");
    expect(result).toBe(-5227);

    result = converter.convertToNumber("00000522Q");
    expect(result).toBe(-5228);

    result = converter.convertToNumber("00000522R");
    expect(result).toBe(-5229);
  });

  test("should convert decimal with two digits", () => {
    const converter = new ZonedDecimalConverter();
    const result = converter.convertToString(52.27, 9, 2);
    expect(result).toBe("00000522G");
  });

  test("should convert decimal with three digits", () => {
    const converter = new ZonedDecimalConverter();
    const result = converter.convertToString(1.692, 9, 3);
    expect(result).toBe("00000169B");
  });

  test("should convert string to decimal", () => {
    const converter = new ZonedDecimalConverter();
    const result = converter.convertToNumber("00000522G", 2);
    expect(result).toBe(52.27);
  });
});
