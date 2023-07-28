import React from 'react';
import Events_actions from './events_actions';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main>
			<div className="flex-1">
				{/* @ts-ignore */}
				<Events_actions />
				<div>{children}</div>
			</div>
		</main>
	);
}
