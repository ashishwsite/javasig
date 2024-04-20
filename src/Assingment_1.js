import React from 'react'

const Assingment_1 = (props) => {
    const { Status, handleclick, handlehide } = props.data;
  return (
    <div>
        <ol className="list-group list-group-numbered">
       <h2>ASSINGEMENT 1</h2> 
       {/* space  */}
        <li className="list-group-item">What is the primary focus of Java programming?</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>pltform independence</h2>
{/* space  */}
        <li className="list-group-item">Which of the following programming principles is a key aspect of Java</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>object oriented programming</h2>
        {/* space  */}
        <li className="list-group-item">What is the last step in the Java programming process?
</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>Excution</h2>
       {/* space  */}
        <li className="list-group-item">Which of the following is NOT a Java programming tool?</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>GCC</h2>
      {/* space  */}
        <li className="list-group-item">What does the term "Write Once, Run Anywhere" (WORA) imply in Java?</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>platform independence</h2>
        {/* space  */}
        <li className="list-group-item">In Java, what is used to store multiple values of the same type?</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>array</h2>
         {/* space  */}
         <li className="list-group-item">What is the purpose of Java Language Subset</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>To define a smaller set of Java features for specific purposes</h2>
       {/* space  */}
        <li className="list-group-item">What is the primary purpose of the Java Virtual Machine (JVM) in the Java programming language?
</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>platform independence</h2>
      {/* space  */}
        <li className="list-group-item">What is emphasized during the Java Program Editing phase</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>editing and modifiy the soure code </h2>
        </ol>

      
    </div>
  )
}

export default Assingment_1
