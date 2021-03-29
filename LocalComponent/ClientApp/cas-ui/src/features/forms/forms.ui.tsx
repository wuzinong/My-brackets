import { observer } from 'mobx-react-lite';
import React from 'react';
import { ValidationMessage } from '../../components/ValidationMessage/ValidationMessage';
import { FormField } from './forms.state';

/** Given some field data, render its messages. If there are no validation messages, show the field's hint instead. */
export const FieldMessagesPartial: React.FC<{ field: FormField<any> }> = observer((props) => {
	if (props.field.messages.length > 0) {
		return (
			<>
				{props.field.messages.map((msg, i) => (
					<ValidationMessage key={i} variant={msg.type}>
						{msg.content}
					</ValidationMessage>
				))}
			</>
		);
	} else if (props.field.hint) {
		return <ValidationMessage variant="plain">{props.field.hint}</ValidationMessage>;
	}
	return null;
});
