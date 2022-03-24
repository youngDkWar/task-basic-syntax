export function romanToInteger(str) {
    let result = 0;
    const d = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    for (let i = 0; i < str.length; i++) {
        if (
            i + 2 <= str.length &&
            str[i] == str[i + 1] &&
            d[str[i + 2]] > d[str[i]]
        ) {
            result += d[str[i + 2]] - 2 * d[str[i]];
            i += 2;
        } else if (i + 1 <= str.length && d[str[i + 1]] > d[str[i]]) {
            result += d[str[i + 1]] - d[str[i]];
            i++;
        } else {
            result += d[str[i]];
        }
    }
    return result;
}
