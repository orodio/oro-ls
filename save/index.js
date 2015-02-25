export default function(key, value) {
  if (localStorage && localStorage.setItem) {
    let _value = JSON.stringify(value);
    localStorage.setItem(`ORO::${key}`, _value);
  }
  return value;
}
