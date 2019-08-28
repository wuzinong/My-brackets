
export interface IUser {
    firstName: string;
    lastName: string;
    displayName?: string;
    company?: string;
    notifications?: number;
    urls: string;
}
export interface ILayoutProps {
    fetchUser?: () => void;
    fetchNotifications?: () => void;
    user?: IUser;
    isBusy?: boolean;
}