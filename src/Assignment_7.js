import React from "react";

const Assignment_7 = (props) => {
  const { Status, handleclick, handlehide } = props.data;
  return (
    <div>
      {/* new assignment */}
      <ol className="list-group list-group-numbered">
        <h2>ASSINGEMENT 7</h2>{" "}
        <button
          onClick={handlehide}
          style={{
            backgroundColor: "red",
            cursor: "pointer",
            width: "2cm",
            height: "1cm",
          }}
        >
          hide
        </button>
        <li className="list-group-item">
          Which of the following is an incorrect statement about interfaces?
        </li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>
          {" "}
          All variables are static and methods are public if interface is
          defined public.
        </h2>
        {/* space  */}
        <li className="list-group-item">
          How do you access a static method of an interface?
        </li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>Using the interface name</h2>
        {/* space  */}
        <li className="list-group-item">
          What happens when we access the same variable defined in two
          interfaces implemented by the same class?
        </li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>
          The interfaceName.variableName needs to be defined
        </h2>
        {/* space  */}
        <li className="list-group-item">
          What happens if an exception is not caught in the catch block?
        </li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>
          the exception is thrown to the calller method
        </h2>
        {/* space  */}
        <li className="list-group-item">
          What is the purpose of the finally block in Java exception handling?
        </li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>
          to clean a reasoure after a try block
        </h2>
        {/* space  */}
        <li className="list-group-item">
          Which of the following is a correct constructor for a thread object?
        </li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}> Thread(Runnable a, String str);</h2>
        <li className="list-group-item">
          Which class in Java is used to create a new directory?
        </li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>file</h2>
        <li className="list-group-item">
          Which class in Java is used to read data line by line from a file?
        </li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>BufferReader</h2>
        <li className="list-group-item">
          FileInputStream fis = new FileInputStream("test.dat");
        </li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>
          {" "}
          It thows an error if the file named test.dat does not exist and opens
          the file, if it exists, so you can read from it and write into it, if
          write permission is available
        </h2>
      </ol>
    </div>
  );
};

export default Assignment_7;
