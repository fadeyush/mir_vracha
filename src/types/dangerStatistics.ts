import { ReactNode } from "react";

export interface DangerStatisticsProps {
    id: number;
    ikonSrc: string;
    percent: string;
    info: string | ReactNode;
    source: string | ReactNode;
}