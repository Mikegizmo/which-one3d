const SideSelector = () => {
  return (
    <center>
      <h3 className="radio-group">
        <label>
          <input type="radio" name='cube' value='1' />Side 1
        </label>
        <label>
          <input type="radio" name='cube' value='2' />Side 2
        </label>
        <label>
          <input type="radio" name='cube' value='3' />Side 3
        </label>
        <label>
          <input type="radio" name='cube' value='4' />Side 4
        </label>
        <label>
          <input type="radio" name='cube' value='5' />Side 5
        </label>
        <label>
          <input type="radio" name='cube' value='6' />Side 6
        </label>
      </h3>
    </center>
  )
}

export default SideSelector;