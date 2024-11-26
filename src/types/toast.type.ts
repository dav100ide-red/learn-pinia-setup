export type Status = 'success' | 'error' | 'info' | 'warning';

export type Toast = {
    id: number;
    //ui
    text: string;
    status: Status;
};
