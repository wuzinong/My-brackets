import { Alert } from 'cas-ui/src/components/Alert/Alert';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { createPortal } from 'react-dom';
import { toastStore } from './toast.store';
import styles from './toast.ui.scss';

/**
 * UI component for the `toastStore`. Uses a React portal to overlay toast messages over the interface.
 * Place one instance of this component somewhere at the root of the application and you're ready to go.
 */
export const ToastOverlay: React.FC = observer(() => {
	return createPortal(
		<div className={styles.toasts}>
			{toastStore.messages.map((msg) => (
				<div key={msg.id} className={styles.toast}>
					<Alert
						variant={msg.type}
						onClose={() => {
							msg.close();
						}}
						attr={{ style: { display: 'inline-flex', boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.28)' } }}
					>
						{msg.content}
					</Alert>
				</div>
			))}
			<div />
		</div>,
		document.body,
	);
});
