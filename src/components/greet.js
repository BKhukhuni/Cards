export const Greet = (props) => {
  return (
    <>
      <h1 style={props.style} onClick={props.onClick}>hellow Wishwas, {props.title}</h1>
    </>
  )
}
