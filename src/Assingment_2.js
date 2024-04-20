import React from 'react'

const Assingment_2 = (props) => {
    const { Status, handleclick, handlehide } = props.data;
  return (
    <div>
      <ol className="list-group list-group-numbered">
       <h2>ASSINGEMENT 2</h2> 
       {/* space  */}
       <li className="list-group-item">n Java programming an object can take many forms. This feature is called</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>polymorphism</h2>
       {/* space  */}
        <li className="list-group-item">Which of the following is a valid declaration of an object of class, say NPTEL</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>NPTEL ojb=new NPTEL();</h2>
      {/* space  */}
        <li className="list-group-item">A default constructor_</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>no parameter</h2>
        {/* space  */}
        <li className="list-group-item">A top-level class may have which one of the following access modifiers?</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>public</h2>
        {/* space  */}
        <li className="list-group-item">Integer in Java is a\an _</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>wraper class</h2>
       {/* space  */}
        <li className="list-group-item">What is true about the new operator?</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>obtaine memory for new variable</h2>
      {/* space  */}
        <li className="list-group-item">Which one is not supported by OOP?</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>global variable</h2>
        {/* space  */}
        <li className="list-group-item">Which of the following modifiers can be used to disallow a method from being overridden?</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>final</h2>
          {/* space  */}
        <li className="list-group-item">Which of the following is TRUE about print() and println() methods?</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>println() prints and then appends a line break</h2>
      </ol>
    </div>
  )
}

export default Assingment_2
