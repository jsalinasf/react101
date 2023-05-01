function Footer() {

  return (
    <footer style={ { textAlign: "center", fontWeight: "bolder", color:"#1E90FF" } }>
      <p>Learning React &copy; {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer