import { ReactNode } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { UseMutationResult, UseQueryResult } from "react-query";
import { ZodType } from "zod";

export interface CardProps {
    title: string;
    text: string;
    link: string;
}

export interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
}

export interface CardsProps {
    cards: {
        title: string;
        image: string;
        description: string;
        background: string;
        onClick: () => void;
        buttonText: string;
    }[];
}

export interface FormProps<T extends FieldValues> {
    useMutation: () => UseMutationResult<any, unknown, T, unknown>;
    validationSchema: ZodType<T>;
    renderForm: (props: {
        register: UseFormRegister<T>;
        errors: FieldErrors<T>;
    }) => React.ReactNode;
    heading: string;
}

export interface HeroProps {
    title: string;
    image: string;
}

export interface ItemsShowcaseProps {
    items: { title: string; description: string; image?: string }[];
}

export interface LayoutProps {
    children: ReactNode;
    background: string;
}

export interface ListProps<T> {
    useData: () => UseQueryResult<T[], Error>;
    renderItem: (item: T) => React.ReactNode;
    heading: string;
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

export interface Post {
    id: number;
    title: string;
    body: string
}

export interface ListItemProps {
    user: User;
}

export interface TrustBarProps {
    images: string[];
}
