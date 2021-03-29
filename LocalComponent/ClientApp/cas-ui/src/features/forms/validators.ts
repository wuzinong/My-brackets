import { FormField, IValidationMessage, } from 'cas-ui/src/features/forms/forms.state';

/** Validators return IValidationMessage for invalid results or null for valid. */
export class Validators {
    /** Returns invalid if string value is null, empty or only whitespace. */
    static required(message: IValidationMessage): (field: FormField<string>) => IValidationMessage {
        return (field) => {
            const empty = '';
            if (typeof field.value === 'undefined' || field.value === null || field.value.trim() === empty)
                return message;
            return null;
        };
    }

    static maxLength(maxLength: number, message: IValidationMessage): (field: FormField<string>) => IValidationMessage {
        return (field) => {
            if (field.value.length > maxLength)
                return message;
            return null;
        };
    }

    static mustEqual<T>(value: T, message: IValidationMessage): (field: FormField<T>) => IValidationMessage {
        return (field) => {
            if (field.value === value)
                return null
            return message;
        };
    }

    /** Combine multiple validators in to one multiple validation message result. */
    static combine<T>(field: FormField<T>, ...validators: { (f: FormField<T>): IValidationMessage }[]): IValidationMessage[] {
        const messages: IValidationMessage[] = [];
        for (let i = 0; i < validators.length; i++) {
            const message = validators[i](field);
            if (message)
                messages.push(message);
        }
        return messages;
    }

    /** Helper method to apply Validators.required only. */
    static requiredOnly(field: FormField<string>, message: IValidationMessage) {
        return this.combine(field, this.required(message));
    }

    /** Helper method to apply Validators.mustEqual only. */
    static mustEqualOnly<T>(field: FormField<T>, value: T, message: IValidationMessage) {
        return this.combine(field, this.mustEqual(value, message));
    }
}