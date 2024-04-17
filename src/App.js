import "./App.css";
import { useState } from "react";
function App() {
  const [Status, setstatus] = useState("none");
  const handlehide=()=>{
    setstatus('none')
  }
  const handleclick = () => {
    setstatus("inline");
    setTimeout(() => {
      setstatus("none");
    }, 100000);
  };
  return (
    <div className="App">
      <ol className="list-group list-group-numbered">
       <h2>ASSINGEMENT FIRST</h2> 
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

        {/* breal */}
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
        {/* new assignment} */}
      <ol className="list-group list-group-numbered">
      <h2>ASSINGEMENT 5</h2> <button onClick={handlehide} style={{backgroundColor:'red',cursor:'pointer',width:'2cm',height:'1cm'}}>hide</button>
        <li className="list-group-item">Which of the following is an incorrect statement about interfaces?</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}> All variables are static and methods are public if interface is defined public.</h2>
       {/* space  */}
        <li className="list-group-item">How do you access a static method of an interface?
</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>Using the interface name
</h2>
       {/* space  */}
        <li className="list-group-item">What happens when we access the same variable defined in two interfaces implemented by the same class?</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>The interfaceName.variableName needs to be defined</h2>
        {/* space  */}
        <li className="list-group-item">What happens if an exception is not caught in the catch block?</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>the exception is thrown to the calller method</h2>
        
        {/* space  */}
        <li className="list-group-item">What is the purpose of the finally block in Java exception handling?</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}>to clean a reasoure after a try block</h2>
       {/* space  */}
        <li className="list-group-item">Which of the following is a correct constructor for a thread object?</li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}> Thread(Runnable a, String str);</h2>
      {/* space  */}
        <li className="list-group-item"></li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}></h2>
        {/* space  */}
        <li className="list-group-item"></li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}></h2>
          {/* space  */}
        <li className="list-group-item"></li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}></h2>
        {/* space  */}
        <li className="list-group-item"></li>
        <button onClick={handleclick}>Click</button>
        <h2 style={{ display: Status }}></h2>
        </ol>
      
    </div>
  );
}

export default App;
