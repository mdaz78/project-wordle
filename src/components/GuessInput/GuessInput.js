import { useState } from 'react';

function GuessInput() {
  const [guess, setGuess] = useState('');

  const handleChange = (e) => {
    setGuess(e.target.value.toUpperCase());
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(guess.length !== 5) {
      window.alert("Please enter exactly 5 characters");
      return;
    }

    console.log({guess});

    setGuess('');
  }


  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter Guess:</label>
      <input
        type='text'
        id='guess-input'
        value={guess}
        onChange={handleChange}
        minLength={5}
        maxLength={5}
        pattern={"[a-zA-Z]{5}"}
        title={"5 letter word"}
      />
    </form>
  );
}

export default GuessInput;
