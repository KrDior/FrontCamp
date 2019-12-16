export default function getId(location) {
  const { pathname } = location;
  return pathname.slice(6);
}

export function sortByRating(array) {
  console.log('!!!!3333', array);
  return array.sort((a, b) => (a.id > b.id ? 1 : -1));
}

export function sortByRelease(array) {
  return array.sort((a, b) => {
    return new Date(b.release_date) - new Date(a.release_date);
  });
}
