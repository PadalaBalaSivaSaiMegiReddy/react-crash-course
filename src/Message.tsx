export default function Message() {
  const name: string = "Siva";
  if(name)
  return <h1>Hello World {name}</h1>;
  else return <h1>Hello World User</h1>
}
