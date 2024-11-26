export type Status = 'success' | 'error' | 'info' | 'warning';

export type Toast = {
    icon: string;
    text: string;
    status: Status;
};
