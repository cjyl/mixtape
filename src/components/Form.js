import React, { useState } from 'react';

const Form = (props) => {
  const [inputName, setInputName] = useState('');
  const [error, setError] = useState(false);

  const nameInputChangeHandler = (e) => {
    setInputName(
      e.target.value
    )
  }

  const submitSongHandler = (e) => {
    e.preventDefault()
    if (inputName.trim().length===0) {
      setError(true)
      return;
    }
    setError(false)
    props.addSong({
      name: inputName
    })
    setInputName("");
  }

  let errorMessage = <p>Please enter a song moTHERFUCKER`````1</p>;

  return (
    <form>
      {error && errorMessage}
      <label>
        song name
      </label>
      <input value={inputName} onChange={nameInputChangeHandler} />
      <button onClick={submitSongHandler} type="submit">submit</button>
    </form>
  )
}

export default Form;
