import style from './CustomButton.module.css';

interface CustomButtonProps {
    children?: React.ReactNode;
    onClick: () => void;
    className?: string;
}

export default function CustomButton({ children, onClick }: CustomButtonProps) {
    return (
        <button className={style.customButton} onClick={onClick}>{children}</button>
    );
}