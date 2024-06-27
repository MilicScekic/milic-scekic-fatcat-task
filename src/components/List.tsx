import { ListProps } from '@homework-task/typescript/interfaces';
import React from 'react';

export const List = <T,>({ useData, renderItem, heading }: ListProps<T>) => {
    const { data, isLoading, isError, error } = useData();

    if (isLoading) return <div>Loading...</div>;

    if (isError) return <div>Error: {error?.message}</div>;

    if (!Array.isArray(data)) return <div>Data is not in array...</div>;

    return (
        <>
            <h2 className="text-lg font-semibold my-4">{heading}</h2>
            <ul>
                {data.map((item: any) => (
                    <React.Fragment key={item.id}>
                        {renderItem(item)}
                    </React.Fragment>
                ))}
            </ul>
        </>
    );
};
