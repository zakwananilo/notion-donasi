function convertSnakeToCamel(snakeCaseString: string): string {
  return snakeCaseString.replace(/(_\w)/g, (match) => match[1].toUpperCase());
}

export function toIdDateString(timestamp: string): string {
  const date = new Date(timestamp);
  
  // return date.toUTCString();
  return date.toLocaleString('id-ID', {dateStyle: 'full', timeStyle: 'short', timeZone: 'UTC'});
}

export function plainToDecimal(number: string | number) {
  return new Intl.NumberFormat("id-ID", {
    style: "decimal",
    minimumFractionDigits: 0,
  }).format(Number(number));
}

export function decimalToPlain(number: string) {
  return number.replace(/\./g, '')
}