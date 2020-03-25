export interface CalendarInfo {
    date: string;
    count: number;
}

export interface CalendarModel extends CalendarInfo {
    list: CalendarItem[]
}

export interface CalendarItem {
    time: string;
    name: string;
    title: string;
    avatar?: string;
}

export interface InterviewModel {
    total: number;
    data: Array<{ time: string, list: CalendarItem[] }>
}