import React from 'react';
interface CardProps {
    readonly columnStart: number;
    readonly columnEnd: number;
    readonly rowStart: number;
    readonly rowEnd: number;
    readonly hidden?: boolean;
    readonly className?: string;
}
declare const Card: React.FC<CardProps>;
export default Card;
