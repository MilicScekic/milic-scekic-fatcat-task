import {
    ComponentProps,
    ComponentType,
    LayoutSectionData,
    LayoutType,
} from '@homework-task/typescript/types';
import React from 'react';

const layoutMapping: Record<LayoutType, string> = {
    flexLayout: 'flex flex-col space-y-4',
    gridLayout: 'grid grid-cols-1 md:grid-cols-2 gap-4',
};

const renderComponent = (
    componentType: ComponentType,
    componentProps: ComponentProps
) => {
    switch (componentType) {
        case 'componentItemsShowcase':
            return <div key={componentType}>{componentProps.children}</div>;
        case 'componentHero':
            return <div key={componentType}>{componentProps.children}</div>;
        case 'componentList':
            return <div key={componentType}>{componentProps.children}</div>;
        case 'componentForm':
            return <div key={componentType}>{componentProps.children}</div>;
        default:
            return null;
    }
};

const LayoutSection: React.FC<LayoutSectionData> = ({
    type,
    props,
    components,
}) => {
    return (
        <>
            <h2 className="text-xl font-bold mb-2">{props.title}</h2>
            <div
                className={`${layoutMapping[type]} border border-gray-40 p-2 mb-10 py-5`}
            >
                {components.map((component) =>
                    renderComponent(component.type, component.props)
                )}
            </div>
        </>
    );
};

export default LayoutSection;
