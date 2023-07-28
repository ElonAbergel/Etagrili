import React from 'react';
import Classes from './classes';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main>
			<div className="flex-1">
				{/* @ts-ignore */}
				<Classes />
				<div>{children}</div>
			</div>
		</main>
	);
}
