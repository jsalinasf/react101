function ShowResult( { result } ) {
  return (
    <p>{Number.isInteger(result) ? result : result.toFixed(2)}</p>
  )
}

export default ShowResult