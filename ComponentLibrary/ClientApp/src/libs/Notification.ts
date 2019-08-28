
export declare enum ToastType {
    default = "default",
    success = "success",
    info = "info",
    warning = "warning",
    error = "error"
}
export declare enum ToastPosition {
    topCenter = "top-center",
    topRight = "top-right",
    topLeft = "top-left",
    bottomRight = "bottom-right",
    bottomCenter = "bottom-center",
    bottomLeft = "bottom-left"
}
const notification = {
    notify: (message: string, type: ToastType = ToastType.default, position: ToastPosition = ToastPosition.bottomRight): void => {
        console.log(type + ': ' + message)
    },
    success: (message: string, position: ToastPosition = ToastPosition.bottomRight): void => {
        this.notify(message, ToastType.success, position);
    },
    info: (message: string, position: ToastPosition = ToastPosition.bottomRight): void => {
        this.notify(message, ToastType.info, position);
    },
    warn: (message: string, position: ToastPosition = ToastPosition.bottomRight): void => {
        this.notify(message, ToastType.warning, position);
    },
    error: (message: string, position: ToastPosition = ToastPosition.bottomRight): void => {
        this.notify(message, ToastType.error, position);
    }
}

export { notification }