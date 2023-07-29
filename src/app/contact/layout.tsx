import React from 'react';
import Contact from './contact';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main>
			<div className="flex-1">
				{/* @ts-ignore */}
				<Contact />
				<div>{children}</div>
			</div>
		</main>
	);
}
