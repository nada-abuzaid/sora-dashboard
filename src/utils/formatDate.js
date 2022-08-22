export default function formatDate(EntryDate) {
  const d = new Date(EntryDate);
  const mo = new Intl.DateTimeFormat('en', {
    month: '2-digit',
  }).format(d);
  const da = new Intl.DateTimeFormat('en', {
    day: '2-digit',
  }).format(d);
  const y = new Intl.DateTimeFormat('en', {
    year: '2-digit',
  }).format(d);
  const getDateFormat = `${da}-${mo}-${y}`;
  return getDateFormat;
}
