export default class ApiUrlHelper {
    static myUser = '/api/me';
    static myServices = '/api/me/services';
    static notificationCount = '/api/me/notification-count';
    static authenticate = (redirect: string) => `/auth?redirect=${redirect}`;
    static products = '/api/products';
    static product = (slug: string) => `/api/product/${slug}`;
}