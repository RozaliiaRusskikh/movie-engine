function Form() {
    return (
       <section> 
        <h2>Add your movie here:</h2>
        <form>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" placeholder="Add title here"></input>
            <label htmlFor="description">Description</label>
            <input type="description" name="description" id="description" placeholder="Add description here"></input>
            <button>Add Movie</button>
        </form>
        </section>
    );
  }
  export default Form;