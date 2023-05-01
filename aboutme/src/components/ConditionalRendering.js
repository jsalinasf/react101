function ConditionalRendering() {

  const country = {
    "ec": "Ecuador",
    "pa": "Panama",
    "cl": "Chile",
    "hn": "Honduras"
  }

  const receivedCountry = 'ec' // simulating I receive this parameter as props
  
  // A couple of lists will be used for Contiditional Rendering
  const list1 = ['console', 'controller', 'power cable']
  // This list is empty on purpose
  const list2 = []

  console.log(list1.join(', '))

  return (
    <>      
      {/* Since list1 HAS items, it will render the list items*/}
      <h3>Using JS circuit operator (&&)</h3>
      <p>The folowing list has items, so each item will be displayed:</p>
      {/* Remember the left side of the circuit MUST evaluate to TRUE or FALSE */}
      {/* If the condition returns "ZERO - 0", the number zero will be displayed on the UI*/}
      <p><span style={{ fontWeight: "bolder", color:"crimson"}}>List Items: </span>{ list1.length > 0 && list1.join(', ')}</p>

      {/* Since list2 DOES NOT HAVE items, it will render the message "No available data"*/}
      <h3>Ternary Operator (condition ? true : false)</h3>
      <p>The following list doesn't have items, so a special message will be displayed:</p>
      <p><span style={{ fontWeight: "bolder", color:"crimson"}}>List Items:</span> { list2.length > 0 ? list2.join(', ') : 'None' }</p>

      {/* Another trick to avoid using multiple IFs is using alookup table */}
      {/* Pay attention to the country object */}
      <h3>Avoid using multiple IFs by using lookup tables</h3>
      <p>{country[receivedCountry]} is a nice place to live!</p>
    </>
  )
}

export default ConditionalRendering