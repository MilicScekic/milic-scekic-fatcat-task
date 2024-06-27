export type LayoutSectionData = {
    key: number;
    type: 'flexLayout' | 'gridLayout';
    props: LayoutSectionProps;
    components: ComponentData[];
}
  
export type LayoutSectionProps = {
    title: string;
}

export type ComponentProps = {
  children: React.ReactElement;
}

export type ComponentData = {
  type: ComponentType;
  props: ComponentProps;
}

export type LayoutType = 'flexLayout' | 'gridLayout';

export type ComponentType = 'componentHero' | 'componentItemsShowcase' | 'componentList' | 'componentForm';

export type PageData = LayoutSectionData[];