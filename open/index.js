import { Promise } from "es6-promise";

export default function(key) {
  return new Promise(function(resolve, reject) {
    if (!localStorage) reject({msg: "No localStorage"});
    let value = localStorage.getItem(`ORO::${key}`);
    return resolve(JSON.parse(value));
  });
};

export function blockingOpen(key) {
  if (localStorage && localStorage.getItem) {
    let _value = localStorage.getItem(`ORO::${key}`);
    return JSON.parse(_value);
  }
  return
};
