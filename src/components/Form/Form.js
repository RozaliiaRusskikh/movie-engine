import "./Form.scss";
import { useState } from "react";
import Message from "../Message/Message";
import axios from "axios";

function Form({ updateUsersMovieState }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState(null);

  const handleTitleInput = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionInput = (event) => {
    setDescription(event.target.value);
  };
  const isInputValid = () => {
    // Input must be at least 2 characters
    if (title.length < 2 && description.length < 2) {
      return false;
    }
    return true;
  };

  const isFormValid = () => {
    // Input field is required
    if (!title) {
      return false;
    }

    if (!description) {
      return false;
    }
    // Check if the input field is valid (contains 2 characters and more)
    if (!isInputValid()) {
      return false;
    }
    return true;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      //make an axios request to backend to add the movie
      axios
        .post("http://localhost:8080/movies", { title, description })
        .then((response) => {
          updateUsersMovieState(response.data);
          setFlashMessage("submitted");
          setTitle("");
          setDescription("");
        });
    } else {
      setFlashMessage("error");
    }
  };
  function setFlashMessage(message) {
    setMessage(message);
    setTimeout(() => {
      setMessage(null);
    }, 2000);
  }

  return (
    <section className="add-movie">
      <h2 className="add-movie__title">Add your movie here:</h2>
      {message && <Message message={message} />}
      <form className="add-movie__form" onSubmit={handleFormSubmit}>
        <div className="add-movie__label-input-group">
          <label htmlFor="title">Title:</label>
          <input
            onChange={handleTitleInput}
            type="text"
            name="title"
            id="title"
            placeholder="Add title here"
            value={title}
          ></input>
        </div>
        <div className="add-movie__label-input-group">
          <label htmlFor="description">Description:</label>
          <input
            onChange={handleDescriptionInput}
            type="description"
            name="description"
            id="description"
            placeholder="Add description here"
            value={description}
          ></input>
        </div>
        <button className="add-movie__button">Add Movie</button>
      </form>
    </section>
  );
}
export default Form;
