import { ElementType, ReactNode } from "react";

export interface SideBarItemProps {
    Icon: ElementType | string;
    title: string;
    url: string;
    isActive?: boolean
}


export interface LargeSideBarSectionProps {
    children: ReactNode;
    title?: string;
    visibleItemCount?: number;
}


