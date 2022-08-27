export default function subsecribtionType(num) {
  let type = '';
  switch (num) {
    case '1':
      type = 'Lite';
      break;
    case '2':
      type = 'Premium';
      break;
    default:
      type = 'Lite';
  }

  return type;
}
