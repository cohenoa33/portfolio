export function titleize(string: string): string {
  const str = string.split(".");
  return str
    .map((word: string) => {
      if (word.trim().length > 0) {
        return `${word?.trim()?.[0]?.toUpperCase()}${word?.trim()?.slice(1)}.`;
      }
      return "";
    })
    .join(" ")
    .trim();
}
export function titleizeTitle(string: string): string {
  const specialties = [];
  for (let i = 0; i < ignores.length; i++) {
    if (string.includes(ignores[i])) {
      specialties.push({ temp: `%specialties${i}%`, value: ignores[i] });
      string.replace(ignores[i], `%specialties${i}%`);
    }
  }
  console.log(specialties);
  let str = string
    .split(" ")
    .map((word) => {
      if (word.trim().length > 0) {
        return `${word?.trim()?.[0]?.toUpperCase()}${word?.trim()?.slice(1)}`;
      }
      return "";
    })
    .join(" ")
    .trim();

  for (let i = 0; i < specialties.length; i++) {
    if (str.includes(specialties[i].temp)) {
      str.replace(specialties[i].temp, specialties[i].value);
    }
  }

  return str;
}

const ignores = ["e.g.", "Node.Js"];
