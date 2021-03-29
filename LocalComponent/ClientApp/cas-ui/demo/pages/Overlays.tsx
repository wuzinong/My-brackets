import { Container } from 'cas-ui/src/components/Container/Container';
import { Panel } from 'cas-ui/src/components/Panel/Panel';
import { ModalsOverlay, modalsStore } from 'cas-ui/src/features/modals/modals';
import { toastStore } from 'cas-ui/src/features/toast/toast.store';
import { ToastOverlay } from 'cas-ui/src/features/toast/toast.ui';
import React from 'react';

export const Overlays = () => {
	return (
		<div className="cas-autostyled">
			<Container>
				<Panel>
					<h2>Managed modals</h2>
					<ModalsOverlay />

					<button
						onClick={async () => {
							await modalsStore.showModal({
								closeButton: () => null,
								content: function Modal({ close }) {
									return (
										<>
											<p>
												This is a custom modal. Check out the inner custom form modal, which returns a value that shows
												in a toast message.
											</p>
											<button onClick={() => close()}>OK</button>

											<button
												onClick={async () => {
													const result = await modalsStore.showModal<number>({
														closeButton: () => 999,
														content: function Modal({ close }) {
															const [num, setNum] = React.useState(25);
															return (
																<>
																	<p>Here we're using state and inputs to create a custom input modal.</p>
																	<input
																		type="number"
																		value={num}
																		onChange={(ev) => {
																			setNum(Number(ev.target.value));
																		}}
																	/>
																	<button onClick={() => close(num)}>Return input value (that is, {num})</button>
																	<button onClick={() => close(100)}>Return 100</button>
																	<button onClick={() => close(20)}>Return 20</button>
																</>
															);
														},
													});

													toastStore.displayMessage({
														type: 'info',
														content: `The modal returned ${result}`,
													});
												}}
											>
												Open custom form modal
											</button>
										</>
									);
								},
							});
						}}
					>
						Show custom modal
					</button>

					<button
						onClick={async () => {
							modalsStore.showMessage({
								icon: 'success',
								message: (
									<span>
										Great success! The{' '}
										<em>
											<strong>success</strong>
										</em>{' '}
										was successful!
									</span>
								),
								additionalText: 'I am the sub header',
							});
						}}
					>
						Show message
					</button>

					<button
						onClick={async () => {
							if (
								await modalsStore.askForConfirmation({
									icon: 'success',
									question: `Are you sure you want to do this?`,
									additionalText: (
										<span>
											Here goes a long text explaining the great ramifications of clicking that <em>OK</em> button down
											on the right. Also, check out the button that spawns another modal.
											<button onClick={() => modalsStore.askForConfirmation()}>Open modal!</button>
										</span>
									),
									cancelButtonText: 'Nope, go back',
									confirmButtonText: 'Yeah!!!',
								})
							) {
								toastStore.displayMessage({ type: 'success', content: `The user confirmed! ✌️` });
							} else {
								toastStore.displayMessage({ type: 'error', content: `The user didn't confirm.. 😢` });
							}
						}}
					>
						Ask for confirmation
					</button>
				</Panel>

				<Panel>
					<h2>Toast message overlay</h2>
					<ToastOverlay />
					<button
						onClick={() => {
							toastStore.displayMessage({ type: 'error', content: <div>Bzzt! 🤖</div> });
						}}
					>
						Message 1
					</button>
					<button
						onClick={() => {
							toastStore.displayMessage({
								type: 'info',
								content: (
									<div>
										aus dhiu ashd iaushd ash diuash fidufh idfuhg idufh gudfih usdh fsioaushd ash diuash fidufh idfuhg
										idufh gudfih usdh fsioaushd ash diuash fidufh idfuhg idufh gudfih usdh fsioaushd ash diuash fidufh
										idfuhg idufh gudfih usdh fsiodjf difj idofgj fguh siodh lsidh vsdvhs diush dvSomething's wrong with
										the G-diffuser!!!
									</div>
								),
							});
						}}
					>
						Message 2
					</button>
				</Panel>
			</Container>
		</div>
	);
};
