import { action, observable, runInAction } from 'mobx';
import { generateUniqueId } from 'src/utils/generateUniqueId';

export interface DisplayMessageParams {
	/** Determines the visual profile of the toast message. */
	type: 'info' | 'success' | 'warning' | 'error';

	/** The JSX content inside the toast message. */
	content: React.ReactNode;

	/** Interval in milliseconds after which the toast closes automatically. */
	time?: number;
}

export class ToastMessage {
	@observable store: ToastStore;
	@observable type: 'info' | 'success' | 'warning' | 'error';
	@observable content: React.ReactNode;
	@observable id: string;

	/** Close the message. */
	@action close() {
		this.store.messages = this.store.messages.filter((x) => x !== this);
	}
}

/**
 * Handles state and logic related to showing toast messages. There's an accompanying UI
 * component, `ToastOverlay`, that can be placed in the application to display the messages.
 */
export class ToastStore {
	@observable messages: ToastMessage[] = [];

	/** Display a toast message on the screen to notify the user about something. */
	@action displayMessage(params: DisplayMessageParams): ToastMessage {
		const time = params.time || 4000;

		const message = new ToastMessage();
		message.store = this;
		message.type = params.type;
		message.content = params.content;
		message.id = generateUniqueId();

		this.messages.push(message);

		setTimeout(() => {
			runInAction(() => {
				message.close();
			});
		}, time);

		return message;
	}
}

export const toastStore = new ToastStore();
