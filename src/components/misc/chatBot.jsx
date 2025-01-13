import { FaRobot } from "react-icons/fa";
import { IoSend } from "react-icons/io5";


function ChatBot(){


    return (
        <>
        <section className="chat-container">
            <div className="chat-container-div0"> {/*La respuestta se muestra en el p*/}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ullam, quod, quo rerum cumque debitis eum ipsa voluptatem perspiciatis tempore sed, enim obcaecati modi facere itaque vel aut dolore! Molestiae.</p>
            </div>

            <div className="chat-container-div1">
                <input type="text" name="" id="" />
                <button><IoSend /></button>
            </div>
        </section>
        <button className="btn-chatBot">
            <FaRobot />
        </button>
        </>
    );
}

export default ChatBot;