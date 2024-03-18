import { ReactNode } from "react";

export interface FocusItemProps {
    id: number;
    header?: string | ReactNode;
    info: string | ReactNode;
    isFullCard: boolean;
}