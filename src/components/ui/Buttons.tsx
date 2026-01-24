type ButtonProps = {
    label: string;
    onClick: () => void;
};


function Buttons({ label, onClick }: ButtonProps) {
    return (
        <button onClick={onClick} className="w-full">
            {label}
        </button>
    )
}

export default Buttons