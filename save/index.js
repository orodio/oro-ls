import Promise from "es6-promise";

export default function(key, value) {
  return new Promise(function(resolve, reject) {
    if (!localStorage) return resolve(value);
    localStorage.setItem(`ORO::${key}`, JSON.stringify(value));
    return resolve(value);
  });
}
