export default function truncate(input) {
  const len = input.split(',');
  if (len.length > 1) {
    return `${len[0]}...`;
  }
  return `${len}`;
}
