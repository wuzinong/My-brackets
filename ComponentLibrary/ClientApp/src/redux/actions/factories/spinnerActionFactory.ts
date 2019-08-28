export default class SpinnerActionFactory {
    static spinner(spinnerType: string, showSpinner: boolean) {
        return {
            type: spinnerType,
            payload: showSpinner
        };
    }
}