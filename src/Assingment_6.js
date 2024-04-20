import React from 'react'

const Assingment_6 = (props) => {
    const { Status, handleclick, handlehide } = props.data;
  return (
    <div>
      <ol className="list-group list-group-numbered">
        <h2>ASSINGEMENT 3</h2> <button onClick={handlehide} style={{backgroundColor:'red',cursor:'pointer',width:'2cm',height:'1cm'}}>hide</button>
        <li className="list-group-item">Which of the following statement is true regarding the order of execution of constructors in an inheritance hierarchy?</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>A base class constructor followed by dervied class </h2>
       {/* space  */}
        <li className="list-group-item">The super() method is used to:</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>call constructor of parent class</h2>
      {/* space  */}
        <li className="list-group-item">n Java, is it possible to override a static method?</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>No, static methods cannot be overridden because they belong to the class, not the object.</h2>
        {/* space  */}
        <li className="list-group-item">What is the purpose of method hiding in Java inheritance?</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>To define methods with the same name in both the superclass and subclass</h2>
    
        {/* space  */}
        <li className="list-group-item">Can a class be marked as both “final” and “abstract” in Java?</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>No</h2>
       {/* space  */}
        <li className="list-group-item">In Java, is it possible to override a static method?</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>No, static methods cannot be overridden because they belong to the class, not the object.</h2>
      {/* space  */}
        </ol>

        {/* space  */}
      <ol className="list-group list-group-numbered">
      <h2>ASSINGEMENT 4</h2> <button onClick={handlehide} style={{backgroundColor:'red',cursor:'pointer',width:'2cm',height:'1cm'}}>hide</button>
        <li className="list-group-item">Which is the keyword used to specify the default access modifier in java?</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>no key</h2>
       {/* space  */}
        <li className="list-group-item">Which of the following is the correct representation of access modifiers in order of increasing visibility?</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}> private -default - protected-  public </h2>
      {/* space  */}
        <li className="list-group-item">Which of the following package stores all the standard java classes?</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>java.lang</h2>
        {/* space  */}
        <li className="list-group-item">Which of the following is/are true about packages in Java?</li>
        <button onClick={handleclick}>Click</button>
        <h5 style={{ display: Status }}> Every class is part of some package.

2.    All classes in a file are part of the same package.

3.    If no package is specified, the classes in the file go into a special unnamed package</h5>
        
        {/* space  */}
        <li className="list-group-item">Which of these access specifiers can be used for an interface?</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>public</h2>
       {/* space  */}
        <li className="list-group-item">Which of the following is the correct way of implementing an interface salary by class manager?</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>class Java implements NPTEL {}</h2>
        </ol>
    </div>
  )
}

export default Assingment_6
