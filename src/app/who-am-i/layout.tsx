import React from 'react';
import WhoAmI from './WhoAmI';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main>
			<div className="flex-1">
				{/* @ts-ignore */}
				<WhoAmI />
				<div>{children}</div>
			</div>
		</main>
	);
}
