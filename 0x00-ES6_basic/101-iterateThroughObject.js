export default function iterateThroughObject(reportWithIterator) {
  let result = "";
  let employee;

  while ((employee = reportWithIterator.next())) {
    result += `${employee} | `;
  }

  result = result.slice(0, -3);

  return result;
}
