export function titleize(string: string, title?: boolean): string {
  const specialties = [];
  let str = string;
  for (let i = 0; i < ignores.length; i++) {
    if (str.includes(ignores[i])) {
      specialties.push({ temp: `%specialties${i}%`, value: ignores[i] });
      str = str.replace(ignores[i], `%specialties${i}%`);
    }
  }

  const splitString = title ? str.split(" ") : str.split(".");

  str = splitString
    .map((word) => {
      if (word.trim().length > 0) {
        const temp = `${word?.trim()?.[0]?.toUpperCase()}${word
          ?.trim()
          ?.slice(1)}`;
        return title ? temp : `${temp}.`;
      }
      return "";
    })
    .join(" ")
    .trim();

  if (specialties.length > 0) {
    for (let i = 0; i < specialties.length; i++) {
      if (str.includes(specialties[i].temp)) {
        str = str.replace(specialties[i].temp, specialties[i].value);
      }
    }
  }

  return str;
}

const ignores = ["e.g.", "Node.js"];
