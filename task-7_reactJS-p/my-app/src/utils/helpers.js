export default function getId(location) {
  const { pathname } = location;
  return pathname.slice(6);
}
