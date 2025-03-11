import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaHome } from "react-icons/fa";
import { motion } from "framer-motion";

function Exit() {

    const navigate = useNavigate();

    return(<>

        <motion.button 
            className="btn-back" 
            onClick={ () =>  navigate(-1)}
            initial={{ x: "-100%" }}
            whileInView={{ x: 0 }}
            >
            <FaArrowLeft size={ 14 } id="back"/> <FaHome size={ 18 } />
        </motion.button>
    
    </>);
} 

export default Exit;