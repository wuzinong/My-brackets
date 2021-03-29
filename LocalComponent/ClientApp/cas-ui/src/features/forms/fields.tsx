import { Validators } from 'cas-ui/src/features/forms/validators';
import { computed, toJS } from 'mobx';
import React, { ReactElement } from 'react';
import { userStore } from 'src/stores/UserStore';
import { isSocialEmail, isValidEmail } from 'src/utils/validation';
import { FormField, IValidationMessage } from './forms.state';
import { Block } from 'cas-ui/src/components/Block/Block';

/**
 * Reusable, pre-made, form fields based on the generic FormField constructor
 */

export class FirstName extends FormField<string> {
	constructor() {
		super({
			name: 'First name',
			initialValue: '',
			id: 'firstName',
			validator: (field) =>
				Validators.requiredOnly(field, { type: 'error', content: <span>First name is required.</span> }),
		});
	}
}

export class LastName extends FormField<string> {
	constructor() {
		super({
			name: 'Last name',
			initialValue: '',
			id: 'lastName',
			validator: (field) =>
				Validators.requiredOnly(field, { type: 'error', content: <span>Last name is required.</span> }),
		});
	}
}

export class Email extends FormField<string> {
	constructor() {
		super({
			name: 'Email',
			id: 'email',
			hint: userStore.isSignedIn ? (
				<span>You can not change your email at this point.</span>
			) : (
				<span>Use your company email address (eg. yourname@company.com).</span>
			),
			initialValue: '',
			validator: (field) => {
				const messages = Validators.combine(
					field,
					Validators.required({
						type: 'error',
						content: <span>Company email address is required (eg. yourname@company.com).</span>,
					}),
					(f) =>
						!isValidEmail(f.value)
							? { type: 'error', content: <span>Please enter a valid email address (eg. yourname@company.com).</span> }
							: null,
					(f) =>
						isSocialEmail(f.value)
							? {
									type: 'error',
									content: <span>Email addresses with the domain "{f.value.split('@')[1]}" are not allowed.</span>,
							  }
							: null,
				);
				if (messages.length > 0 && field.isFromServer) field.isFromServer = false;
				return messages.length == 0 ? [] : [messages[0]];
			},
		});
	}
}

export class PhoneNumber extends FormField<string> {
	constructor() {
		super({
			name: 'Phone number',
			id: 'phoneNumber',
			hint: <span>Start with country code (eg. +01 for US)</span>,
			initialValue: '',
			validator: (field) =>
				Validators.requiredOnly(field, { type: 'error', content: <span>Phone number is required.</span> }),
			// TODO: reintroduce phone validation
			// if (!isValidPhoneNumber(field.value)) messages.push({ type: 'info', content: <span>Are you sure this is a valid number? Remember to add the country code at the beginning.</span> });
			// else field.value = formatPhoneNumber(field.value);
		});
	}
}

interface CountryCodeOptions {
	parentStore: any;
	withValidation: boolean;
}

export class CountryCode extends FormField<string> {
	parentStore: any;
	constructor({ parentStore, withValidation = true }: CountryCodeOptions) {
		super({
			name: 'CountryCode',
			id: 'country',
			initialValue: '',
			validator: (field) => {
				let messages: IValidationMessage[] = [];
				if (field.value?.length === 0)
					messages.push({ type: 'error', content: <span>Country/region is required.</span> });

				const validateCountry = (value: string): IValidationMessage[] => {
					const messages: IValidationMessage[] = [];
					const countryData = this.countryOptions.find((x) => x.countryCode == value);
					if (countryData && countryData.sellTo == false) {
						messages.push({
							type: 'error',
							content: (
								<span>
									This product is not available for digital sale in this country. Please contact the provider.
								</span>
							),
						});
					}
					return messages;
				};

				if (withValidation) {
					messages = messages.concat(validateCountry(field.value));
				}

				return messages;
			},
		});
		this.parentStore = parentStore;
	}

	@computed get countryOptions() {
		return toJS(this.parentStore.countryOptions);
	}
}

export class CompanyName extends FormField<string> {
	constructor() {
		super({
			name: 'Company name',
			id: 'payment-companyName',
			initialValue: '',
			validator: (field) =>
				Validators.requiredOnly(field, { type: 'error', content: <span>Company name is required.</span> }),
		});
	}
}

export class Subject extends FormField<string> {
	constructor({ hint }: MessageOptions) {
		super({
			name: 'Subject',
			hint: hint ? hint : undefined,
			id: 'subject',
			initialValue: '',
			isAutoRun: true,
			len: 50,
			placement: 'Describe your problem in a few words',
			validator: (field) =>
				Validators.requiredOnly(field, { type: 'error', content: <span>Subject is required.</span> }),
		});
	}
}

export class BrowserType extends FormField<string> {
	constructor() {
		super({
			name: 'browserType',
			id: 'browserType',
			initialValue: '',
			placement: 'Eg. Chrome, IE, Safari',
			validator: () => [],
		});
	}
}

export class FileName extends FormField<string> {
	constructor({ hint }: MessageOptions) {
		super({
			name: 'fileName',
			id: 'fileName',
			hint: hint ? hint : undefined,
			initialValue: '',
			validator: () => [],
		});
	}
}

export class Assignee extends FormField<string> {
	constructor() {
		super({
			name: 'assignee',
			id: 'assignee',
			initialValue: '',
			validator: (field) =>
				Validators.requiredOnly(field, { type: 'error', content: <span>Please select an area of support.</span> }),
		});
	}
}

interface MessageOptions {
	hint?: ReactElement;
}
export class Description extends FormField<string> {
	constructor({ hint }: MessageOptions) {
		super({
			name: 'Full description',
			initialValue: '',
			hint: hint ? hint : undefined,
			id: 'fullDescription',
			validator: (field) =>
				Validators.requiredOnly(field, { type: 'error', content: <span>Your description is required.</span> }),
		});
	}
}

export class Newsletter extends FormField<boolean> {
	constructor() {
		super({
			name: 'Newsletter',
			initialValue: false,
			validator: () => [],
		});
	}
}
