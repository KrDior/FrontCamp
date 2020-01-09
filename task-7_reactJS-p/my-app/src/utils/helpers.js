export default function getId(location) {
  const { pathname } = location;
  return pathname.slice(6);
}

export function sortByRating(array) {
  return array.sort((a, b) => (b.vote_average > a.vote_average ? 1 : -1));
}

export function sortByRelease(array) {
  return array.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
}
