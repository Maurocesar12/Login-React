import { MouseEventHandler } from "react";

export interface IButtonProps {
    title: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}