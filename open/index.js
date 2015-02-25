import { Promise } from "es6-promise";

export default function(key) {
  return new Promise(function(resolve, reject) {
    if (!localStorage) reject({msg: "No Local Storage"});
    let value = localStorage.getItem(`ORO::${key}`);
    return resolve(JSON.parse(value));
  });
};
