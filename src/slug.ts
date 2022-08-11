export default function slug(text: string): string {
  const replacer = /(\s+|\.|_|@|\/|\|)+/g;

  return text
    .replace(replacer, "-")
    .replace(/(-)+/g, "-")
    .replace(/^(-)+/, "")
    .replace(/(-)+$/, "")
    .toLowerCase();
}

export const slugify = slug;
