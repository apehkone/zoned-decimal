# zoned-decimal

A small utility library for working with EBCDIC zoned-decimal values where the last character represents the sign (positive/negative) of the number as well as the last digit of the number. This format might be seen in legacy COBOL / mainframe file integrations.

## Usage

### Convert decimal to string

```JS
    import { convertToString } from "zoned-decimal";
    const result = convertToString(52.27, 9, 2);
    expect(result).toBe("00000522G");
```

### Convert string to decimal

```JS
    import { convertToNumber } from "zoned-decimal";
    let result = convertToNumber("00000522{");
    expect(result).toBe(5220);
```
