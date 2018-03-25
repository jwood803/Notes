import _isEmpty from "lodash/isEmpty";
import _isNil from "lodash/isNil";

export const isBlank = item => {
  let itemText = _isNil(item) ? "" : item.toString();

  return _isEmpty(itemText);
};