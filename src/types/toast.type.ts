export type Status = 'success' | 'error' | 'info' | 'warning';

export type Toast = {
    //ui
    text: string;
    status: Status;
};
