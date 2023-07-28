import React from 'react';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main>
			<div className="flex-1">
				{/* @ts-ignore */}
				{/* <My_page /> */}
				<div>{children}</div>
			</div>
		</main>
	);
}
