import { useNavigate } from "react-router-dom";

interface ButtonProps {
    textButton: string,
    url: string,
    idProfile: string
};


const Button: React.FC<ButtonProps> = ({textButton, url, idProfile}) => {
    const navigate = useNavigate();
    
    const handleButton = () => {
        navigate(url+'/'+idProfile);
    }

    return (
        <button className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" onClick={handleButton}>
            { textButton }
        </button>
    );
};

export default Button;