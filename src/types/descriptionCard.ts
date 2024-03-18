import { ReactNode } from "react";

export interface DescriptionCardProps {
    ikonSrc: string;
    info: string;
    query: string | ReactNode;
    id: number;
    setModalVisible: (e: boolean) => void;
}
