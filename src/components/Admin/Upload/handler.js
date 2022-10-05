import csvFileToArray from '../../../utils/Admin/csvFileToArray';

export default function handler(isFile, e) {
  const fileReader = new FileReader();
  const handleOnSubmit = () => {
    e.preventDefault();
    if (isFile) {
      fileReader.onload = (event) => {
        const text = event.target.result;
        csvFileToArray(text);
      };
      fileReader.readAsText(isFile);
    }
  };
  return handleOnSubmit();
}
