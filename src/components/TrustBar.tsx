import { TrustBarProps } from '@homework-task/typescript/interfaces';
import React from 'react';
import Marquee from 'react-fast-marquee';

export const TrustBar: React.FC<TrustBarProps> = ({ images }) => {
    return (
        <Marquee>
            {images.map((image) => (
                <img width={100} key={image} src={image} className="mx-10" />
            ))}
        </Marquee>
    );
};
