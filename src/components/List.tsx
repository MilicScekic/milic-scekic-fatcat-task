import React from 'react';
import { UseQueryResult } from 'react-query';

interface ListProps<T> {
    useData: () => UseQueryResult<T[], Error>;
    renderItem: (item: T) => React.ReactNode;
    heading: string;
}

export const List = <T,>({ useData, renderItem, heading }: ListProps<T>) => {
    const { data, isLoading, isError, error } = useData();

    if (isLoading) return <div>Loading...</div>;

    if (isError) return <div>Error: {error?.message}</div>;

    if (!Array.isArray(data)) return <div>Data is not in array...</div>;

    return (
        <>
            <h2 className="text-2xl font-semibold my-4">{heading}</h2>
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
