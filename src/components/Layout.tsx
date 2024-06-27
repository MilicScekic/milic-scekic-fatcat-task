import { LayoutProps } from '@homework-task/typescript/interfaces';
import clsx from 'clsx';

export const Layout: React.FC<LayoutProps> = ({ children, background }) => {
    return <section className={clsx('py-20', background)}>{children}</section>;
};
