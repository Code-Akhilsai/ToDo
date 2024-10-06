import "./App.css";

function Tasks(props) {
  return (
    <div>
      {props.data.map((task, index) => (
        <div>
          <div class="row gx-15" id="layout2">
            <div class="col">
              <h5 key={index}>{task}</h5>
            </div>
            <br />
            <div class="col">
              <button
                className="btn btn-danger"
                id="btn2"
                onClick={() => props.deleteTask(index)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}

      <br />
    </div>
  );
}

export default Tasks;
