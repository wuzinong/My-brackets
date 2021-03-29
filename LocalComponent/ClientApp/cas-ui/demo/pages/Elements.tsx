
import { Alert } from 'cas-ui/src/components/Alert/Alert';
import { Block } from 'cas-ui/src/components/Block/Block';
import { Button, LinkButton, RouterLinkButton } from 'cas-ui/src/components/Button/Button';
import CardList from 'cas-ui/src/components/CardList/CardList';
import { CheckboxInput } from 'cas-ui/src/components/CheckboxInput/CheckboxInput';
import { ComboBox, ComboBoxOption } from 'cas-ui/src/components/ComboBox/ComboBox';
import { Container } from 'cas-ui/src/components/Container/Container';
import { FormSection } from 'cas-ui/src/components/FormSection/FormSection';
import { HelpIcon } from 'cas-ui/src/components/HelpIcon/HelpIcon';
import { Label } from 'cas-ui/src/components/Label/Label';
import { Modal } from 'cas-ui/src/components/Modal/Modal';
import { Panel } from 'cas-ui/src/components/Panel/Panel';
import { Property, PropertyList } from 'cas-ui/src/components/PropertyList/PropertyList';
import { RadioButtonGroup } from 'cas-ui/src/components/RadioButtonGroup/RadioButtonGroup';
import { RadioTagGroup } from 'cas-ui/src/components/RadioTagGroup/RadioTagGroup';
import { Select, SelectOption } from 'cas-ui/src/components/Select/Select';
import ShadowDelimiter from 'cas-ui/src/components/ShadowDelimiter/ShadowDelimiter';
import { Spinner } from 'cas-ui/src/components/Spinner/Spinner';
import { Tag } from 'cas-ui/src/components/Tag/Tag';
import { Text } from 'cas-ui/src/components/Text/Text';
import { TextInput } from 'cas-ui/src/components/TextInput/TextInput';
import { Tooltip } from 'cas-ui/src/components/Tooltip/Tooltip';
import { ValidationMessage } from 'cas-ui/src/components/ValidationMessage/ValidationMessage';
import { useScreenWidth } from 'cas-ui/src/util/useScreenWidth';
import React from 'react';

function Bomb() {
	throw new Error('💥 CABOOM 💥');
}

export const Elements = () => {
	const screenWidth = useScreenWidth();

	const [checkbox, setCheckbox] = React.useState(false);
	const [checkbox2, setCheckbox2] = React.useState(false);

	const [radioGroup, setRadioGroup] = React.useState<'norway' | 'sweden' | 'denmark'>('norway');
	const [radioGroup2, setRadioGroup2] = React.useState('goats');
	// const [radioGroup3, setRadioGroup3] = React.useState('delicious');
	const [radioGroup4, setRadioGroup4] = React.useState('EUR');

	const [showModal, setShowModal] = React.useState(false);

	const [alertIsOpen, setAlertIsOpen] = React.useState(true);

	const [stateSection1, setStateSection1] = React.useState<'summary' | 'editing' | 'inactive'>('summary');
	const [formValuesSection1, setFormValuesSection1] = React.useState({
		firstname: 'First name',
		lastname: 'Last name',
		email: 'Email address',
		phone: 'Phone number',
	});

	const countries: ComboBoxOption[] = [
		{ value: 'AU', name: 'Australia' },
		{ value: 'CN', name: 'China' },
		{ value: 'ES', name: 'Spain' },
		{ value: 'FR', name: 'France' },
		{ value: 'NO', name: 'Norway' },
		{ value: 'US', name: 'United States of America' },
	];

	return (
		<>
			<Container>
				<Panel>
					<Text tag="h2">Typography</Text>
					<Text tag="h2" margin="48px 0 16px 0">
						Buttons
					</Text>
					<Text tag="h3" margin="48px 0 16px 0">
						Link buttons
					</Text>
					<LinkButton href="https://google.com" variant="blue">
						Google
					</LinkButton>
					<LinkButton href="https://vg.no" variant="subtle">
						VG
					</LinkButton>
					<Text tag="h3" margin="48px 0 16px 0">
						Router link buttons
					</Text>
					<RouterLinkButton to="another-page" variant="pink">
						Go to another page
					</RouterLinkButton>
					<Text tag="h3" margin="48px 0 16px 0">
						Variants
					</Text>
					<Button variant="blue">Primary</Button>
					<Button variant="green">Green</Button>
					<Button variant="dark">Dark</Button>
					<Button variant="pink">Pink</Button>
					<Button variant="red">Red</Button>
					<Button variant="subtle">Subtle</Button>
					<Button variant="text">Text</Button>
					<Text tag="h3" margin="48px 0 16px 0">
						Sizes (with and without <em>icon padding</em>)
					</Text>
					<Button size="small">Text</Button> &nbsp;{' '}
					<Button size="small" iconPadding>
					</Button>
					<br />
					<Button size="medium">Text</Button> &nbsp;{' '}
					<Button size="medium" iconPadding>
					</Button>
					<br />
					<Button size="large">Text</Button> &nbsp;{' '}
					<Button size="large" iconPadding>
					</Button>
					<Text tag="h3" margin="48px 0 16px 0">
						Disabled
					</Text>
					<Button variant="blue">I am not disabled</Button>
					<Button variant="blue" disabled>
						I am disabled
					</Button>
					<Text tag="h3" margin="48px 0 16px 0">
						With icons
					</Text>
					<Button variant="blue">
					</Button>
					<br />
					<Button variant="blue">
					</Button>
					<br />
					<Tooltip tagName="span" content="ahoy mate">
						<Button variant="pink">🧙</Button>
					</Tooltip>
				</Panel>

				<Panel>
					<Text tag="h2">Forms</Text>

					<Text tag="h3" margin="48px 0 16px 0">
						Input fields
					</Text>

					<Label>Text field</Label>
					<TextInput defaultValue="I'm a text field" />
					<ValidationMessage variant="info">This is an info message.</ValidationMessage>

					<Label>Disabled text field</Label>
					<TextInput defaultValue="I'm disabled" disabled={true} style={{ maxWidth: '400px' }} />

					<Label>
						Checkboxes &nbsp;
						<Tooltip content="ahoy">
						</Tooltip>
					</Label>
					<CheckboxInput
						id="hello"
						isChecked={checkbox}
						onChange={(x) => {
							setCheckbox(x);
						}}
					>
						I accept eggs
					</CheckboxInput>
					<Block height="8px" />
					<CheckboxInput
						id="hello2"
						isChecked={checkbox2}
						onChange={(x) => {
							setCheckbox2(x);
						}}
					>
						I accept bacon
					</CheckboxInput>

					<Label>
						Validation messages &nbsp;
						<Tooltip
							content={
								<span>
									La la la <a href="https://google.com">Google</a>, wow, such <strong>search</strong>
								</span>
							}
						>
						</Tooltip>
					</Label>
					<TextInput defaultValue="I'm invalid" state="invalid" />
					<ValidationMessage variant="error">Please enter a valid email address.</ValidationMessage>
					<ValidationMessage variant="error">Email address needs to be at least 8 characters.</ValidationMessage>
					<ValidationMessage variant="info">This is an info message.</ValidationMessage>
					<ValidationMessage variant="success">Great success!</ValidationMessage>
					<ValidationMessage variant="warning">Beware - here be dragons...</ValidationMessage>
					<ValidationMessage variant="success">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda hic quis cumque quam corrupti dolorum
						unde, commodi nostrum aperiam corporis molestiae ullam laudantium tenetur quaerat doloremque consequatur
						laboriosam nulla impedit ab fuga officia perspiciatis quasi ratione atque. Quo quod neque, id magnam
						aspernatur minus impedit reprehenderit nisi accusantium commodi maxime ut recusandae praesentium harum,
						quisquam totam unde obcaecati velit suscipit beatae? Ullam magni impedit voluptas illo id fuga dicta ab
						ducimus possimus unde, eligendi sapiente aut illum nam tempore! Numquam.
					</ValidationMessage>
				</Panel>

				<Panel>
					<Text tag="h2">Radio button groups</Text>
					<Label>What's your favorite country</Label>
					<RadioButtonGroup
						groupName="countries"
						options={[
							{ id: 'norway', label: 'Norway' },
							{ id: 'sweden', label: 'Sweden' },
							{ id: 'denmark', label: 'Denmark' },
							{
								id: 'finland',
								label: (
									<span>
										Finland <span style={{ fontStyle: 'italic' }}>(Nope, it's disabled)</span>
									</span>
								),
								disabled: true,
							},
						]}
						value={radioGroup}
						onChange={(value) => {
							setRadioGroup(value as any);
						}}
						size={'small'}
						layout={'horizontal'}
					/>

					<Label>What animals?</Label>
					<RadioButtonGroup
						groupName="animals"
						options={[
							{ id: 'frogs', label: 'I want frogs' },
							{ id: 'dinosaurs', label: 'I want dinosaurs', disabled: true },
							{ id: 'goats', label: 'I want goats' },
							{ id: 'cows', label: 'I want cows' },
						]}
						value={radioGroup2}
						onChange={(value) => {
							setRadioGroup2(value);
						}}
						size={'large'}
						layout={'horizontal'}
					/>

					<Label>Your opinion on spaghetti</Label>
					<RadioButtonGroup
						groupName="spaghetti"
						options={[
							{ id: 'delicious', label: 'Spaghetti is delicious' },
							{ id: 'nasty', label: 'Spaghetti is nasty' },
							{ id: 'indifferent', label: 'I am indifferent to this matter' },
						]}
						value={radioGroup4}
						onChange={(value) => {
							setRadioGroup4(value);
						}}
						size={'large'}
					/>

					<Label>Which currency</Label>
					<RadioTagGroup
						groupName="currency"
						options={[
							{ 
								id: 'EUR', 
								label: <Tag variant="blue">
								<Block tag="strong" fontSize="16px">EUR</Block>
								<Block fontSize="12px">Euro</Block>
							</Tag>
							},
							{ 
								id: 'USD',
								disabled:true,
								label: <Tag variant="blue">
								<Block tag="strong" fontSize="16px">USD</Block>
								<Block fontSize="12px">US Dollar</Block>
							</Tag>
							},
							{ 
								id: 'GBP', 
								label: <Tag variant="blue">
								<Block tag="strong" fontSize="16px">GBP</Block>
								<Block fontSize="12px">British Pound</Block>
							</Tag>
							},
						]}
						value={radioGroup4}
						onChange={(value) => {
							setRadioGroup4(value);
						}}
						layout={'horizontal'}
					/>
				</Panel>

				<Panel>
					<Text tag="h2">Select</Text>
					<Label>Bare Minimum</Label>
					<Select
						options={countries}
						onChange={(x: SelectOption) => {
							console.log(`Selected ${x.name}`);
						}}
					></Select>

					<Label>With A Default Value</Label>
					<Select
						options={countries}
						defaultValue="FR"
						onChange={(x: SelectOption) => {
							console.log(`Selected ${x.name}`);
						}}
					></Select>

					<Label>Fully Disabled</Label>
					<Select options={countries} disabled></Select>

					<Label>Some Disabled Options</Label>
					<Select
						options={countries.map((country) => {
							if (country.value === 'FR' || country.value === 'NO') {
								return {
									...country,
									disabled: true,
								};
							}
							return country;
						})}
					></Select>

					<Label>Invalid (just the style)</Label>
					<Select defaultValue="FI" options={countries} state="invalid"></Select>

					<Label>Small</Label>
					<Select
						size="small"
						defaultValue="FR"
						options={countries}
						onChange={(x: SelectOption) => {
							console.log(`Selected ${x.name}`);
						}}
					></Select>
				</Panel>

				<Panel>
					<Text tag="h2">ComboBox (Editable, unlike <code>&lt;Select/&gt;</code>)</Text>
					<Label>Bare Minimum</Label>
					<ComboBox
						options={countries}
						onChange={(x: ComboBoxOption) => {
							console.log(`Selected ${x.name}`);
						}}
					></ComboBox>

					<Label>With A Default Value</Label>
					<ComboBox
						options={countries}
						defaultValue="FR"
						onChange={(x: ComboBoxOption) => {
							console.log(`Selected ${x.name}`);
						}}
					></ComboBox>

					<Label>Placeholder</Label>
					<ComboBox options={countries} placeholder="Select a country..."></ComboBox>

					<Label>Fully Disabled</Label>
					<ComboBox options={countries} disabled></ComboBox>

					<Label>Some Disabled Options</Label>
					<ComboBox
						options={countries.map((country) => {
							if (country.value === 'FR' || country.value === 'NO') {
								return {
									...country,
									disabled: true,
								};
							}
							return country;
						})}
					></ComboBox>

					<Label>Invalid (just the style)</Label>
					<ComboBox defaultValue="FI" options={countries} state="invalid"></ComboBox>
				</Panel>

				<Panel>
					<Text tag="h2">Displaying data</Text>
					<Text tag="h3" margin="48px 0 16px 0">
						Property list
					</Text>
					<PropertyList breakIf={screenWidth < 900}>
						<Property label="VAT number" content="123123123"></Property>
						<Property
							label={
								<>
									Address &nbsp;
									<HelpIcon>I'm a tooltip on the property label</HelpIcon>
								</>
							}
							content={
								<>
									Veritasveien 1<br />
									Høvik Oslo
									<br />
									Bla bla bla
								</>
							}
						>
							{'>'}
						</Property>
					</PropertyList>
				</Panel>

				<Panel>
					{showModal && (
						<Modal>
							Hello from inside the modal
							<Block height="16px" />
							<Button
								onClick={() => {
									setShowModal(false);
								}}
							>
								Close
							</Button>
						</Modal>
					)}
					<Button
						onClick={() => {
							setShowModal(true);
						}}
					>
						Show the modal
					</Button>
				</Panel>

				<Panel>
					<Text tag="h2" marginBottom="16px">
						Alerts
					</Text>
					<Alert variant="warning">Something's wrong with the G-diffuser!</Alert>
					<Block height="16px" />
					<Alert variant="success">Mission accomplished!</Alert>
					<Block height="16px" />
					<Alert variant="info">Do a barrel roll!</Alert>
					<Block height="16px" />
					<Alert variant="error" onClose={() => null}>
						I'm sorry Dave, I'm afraid I can't do that.
					</Alert>

					<Text tag="h3" margin="48px 0 16px 0">
						Non-fullwidth by applying <code className="cas-code">display: 'inline-flex'</code>
					</Text>
					<Alert variant="error" style={{ display: 'inline-flex' }}>
						Look, I'm not full width!!
					</Alert>

					<Text tag="h3" margin="48px 0 16px 0">
						With close-button
					</Text>
					{alertIsOpen && (
						<Alert
							variant="info"
							onClose={() => {
								setAlertIsOpen(false);
							}}
						>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint inventore in sequi at similique suscipit
							ipsam autem laboriosam odio accusamus, quos nihil velit saepe perspiciatis placeat deleniti commodi
							repellendus? Et tenetur modi voluptatum ex cupiditate repellat, aliquid ipsam. Numquam nihil assumenda
							asperiores alias architecto blanditiis magni quae. Quaerat, veniam eos possimus hic officiis esse iste est
							quae quia! Magnam animi asperiores non, ducimus laborum laboriosam dicta amet. Explicabo, accusantium
							eligendi!
						</Alert>
					)}
				</Panel>

				<Panel>
					<Text tag="h2" marginBottom="16px">
						Tags
					</Text>
					<Tag variant="green">
						<strong>Newly renewed</strong>
					</Tag>
					<Tag variant="red">
						<strong>5 days</strong> remaining!
					</Tag>
					<Tag variant="yellow">
						<strong>30 days</strong> remaining
					</Tag>
					<Tag variant="blue">
						<Block tag="strong" fontSize="16px">EUR</Block>
						<Block fontSize="12px">Euro</Block>
					</Tag>
				</Panel>

				<Panel>
					<Text tag="h2" marginBottom="16px">
						Shadow Delimiter
					</Text>
					<ShadowDelimiter />
				</Panel>

				<Panel>
					<Text tag="h2" marginBottom="16px">
						Card List with dummy content
					</Text>
					<CardList>
						<div>1</div>
						<div>2</div>
						<div>3</div>
					</CardList>
					<Text tag="h2" marginBottom="16px">
						Card List with error
					</Text>
					<CardList>
						<Bomb />
					</CardList>
				</Panel>

				<Panel>
					<Text tag="h2" marginBottom="16px">
						Texts
					</Text>

					<Text tag="h1">Hello</Text>
					<Text tag="h2">Hello</Text>
					<Text tag="h3">Hello</Text>
					<Text tag="h4">Hello</Text>
					<Text tag="h5">Hello</Text>
					<Text tag="small">I'm a small little text</Text>
					<Text look="PREAMBLE_MEDIUM">I'm a preamle medium text</Text>
					<Text look="PREAMBLE_LARGE">I'm a preamle medium text</Text>
					<Text tag="p">I'm a paragraph</Text>
					<Text tag="label">
						I'm a normal label <br />
					</Text>
					<Text tag="label" look="LABEL_SMALL">
						I'm a small label <br />
					</Text>

					<Text tag="h3" margin="48px 0 16px 0">
						Texts by applying specific <code className="cas-code">look</code>{' '}
					</Text>

					<Text tag="h1" look="CAPTION">
						I'm a heading with caption look
					</Text>
					<Text tag="p" look="LABEL_SMALL">
						I'm a paragraph with small label look
					</Text>
				</Panel>
				<Panel>
					<FormSection
						id="aboutMe"
						step="1"
						name="ABOUT YOU"
						state={stateSection1}
						canEdit={true}
						onEdit={() => {
							setStateSection1('editing');
						}}
						summaryView={
							<>
								<PropertyList breakIf={screenWidth < 1000}>
									<Property
										label="Contact person"
										content={
											<>
												{formValuesSection1.firstname} {formValuesSection1.lastname}
												<br />
												{formValuesSection1.email}
												<br />
												{formValuesSection1.phone}
												<br />
											</>
										}
									/>
								</PropertyList>
							</>
						}
						editView={
							<>
								<Label>First name</Label>
								<TextInput
									defaultValue={formValuesSection1.firstname}
									onChange={(e) => {
										setFormValuesSection1({ ...formValuesSection1, firstname: e.target.value });
									}}
								/>
								<Label>Last name</Label>
								<TextInput
									defaultValue={formValuesSection1.lastname}
									onChange={(e) => {
										setFormValuesSection1({ ...formValuesSection1, lastname: e.target.value });
									}}
								/>
								<Label>
									Email address &nbsp;
									<HelpIcon>
										Please use your personal work email. Social email domains like gmail, hotmail,etc are not accepted.
									</HelpIcon>
								</Label>
								<TextInput
									defaultValue={formValuesSection1.email}
									onChange={(e) => {
										setFormValuesSection1({ ...formValuesSection1, email: e.target.value });
									}}
								/>
								<Label>
									Phone number &nbsp;
									<HelpIcon>
										Start with country code (eg. +01 for US). <br />
										We use your phone number to contact you, in case we need to clarify any details about your order.
									</HelpIcon>
								</Label>
								<TextInput
									defaultValue={formValuesSection1.phone}
									onChange={(e) => {
										setFormValuesSection1({ ...formValuesSection1, phone: e.target.value });
									}}
								/>
								<Block margin="32px 0 0">
									<CheckboxInput id="hello3" onChange={() => null}>
										I accept this
									</CheckboxInput>
									<Block height="8px" />
									<CheckboxInput id="hello4" onChange={() => null}>
										I accept that
									</CheckboxInput>
								</Block>
								<Block
									display="flex"
									flexWrap="wrap"
									margin="0 -16px"
									flexDirection={useScreenWidth() < 900 ? 'column' : 'row'}
								>
									<Block flex="2" margin="16px">
										<Button id="about_Cancel" variant="subtle">
											Cancel
										</Button>
									</Block>
									<Block flex="3" margin="16px">
										<Block width="16px" />
									</Block>
									<Block flex="2" margin="16px" textAlign={useScreenWidth() < 900 ? 'start' : 'end'}>
										<Button
											id="about_next"
											variant="dark"
											onClick={() => {
												setStateSection1('summary');
											}}
										>
											Next
										</Button>
									</Block>
								</Block>
							</>
						}
					/>
					<FormSection
						id="aboutCompany"
						step="2"
						name="COMPANY AND BILLING"
						state="editing"
						canEdit={false}
						onEdit={() => null}
						editView={
							<>
								<Label>Company name</Label>
								<TextInput defaultValue="Company name" />

								<Label>Address line 1</Label>
								<TextInput defaultValue="Address line 1" />

								<Label>
									Address line 2 <span>(optional)</span>
								</Label>
								<TextInput defaultValue="Address line 2" />

								<Label>City</Label>
								<TextInput defaultValue="City" />

								<Label>Zip/postal code</Label>
								<TextInput defaultValue="Zip/postal code" />

								<Label>
									State/province <span>(optional)</span>
								</Label>
								<TextInput defaultValue="State/province " />

								<Label>Country/region</Label>
								<TextInput defaultValue="Country/region" />
								<Block height="16px" />

								<Block
									display="flex"
									flexWrap="wrap"
									margin="0 -16px"
									flexDirection={useScreenWidth() < 900 ? 'column' : 'row'}
								>
									<Block flex="3" margin="16px">
										<Button id="previous" variant="subtle">
											Previous
										</Button>
									</Block>
									<Block flex="2" margin="16px" textAlign={useScreenWidth() < 900 ? 'start' : 'end'}>
										<Button id="go-payment-details" variant="dark">
											Go to payment details{' '}
										</Button>
									</Block>
								</Block>
							</>
						}
					/>
					<FormSection
						id="paymentDetails"
						step="3"
						name="PAYMENT"
						state="inactive"
						canEdit={false}
						onEdit={() => null}
					></FormSection>
				</Panel>
				<Panel>
					<Text tag="h2">Spinner</Text>
					<Spinner />
				</Panel>
			</Container>
		</>
	);
};
