import React from 'react';
import Birthday from './birthday-action';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main>
			<div className="flex-1">
				{/* @ts-ignore */}
				<Birthday />
				<div>{children}</div>
			</div>
		</main>
	);
}
