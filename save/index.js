import { Promise } from "es6-promise";

export default function(key) {
  return function(value) {
    return new Promise(function(resovle, reject) {
      if (localStorage && localStorage.setItem) {
        let _value = JSON.stringify(value);
        localStorage.setItem(`ORO::${key}`, _value);
      }
      return value;
    });
  }
}

export function blockingSave(key, value) {
  if (localStorage && localStorage.setItem) {
    let _value = JSON.stringify(value);
    localStorage.setItem(`ORO::${key}`, _value);
  }
  return value;
};
