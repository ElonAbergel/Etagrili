import './globals.css';
import Header from './Header';
import Botton from './Botton';
import 'dotenv/config';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head></head>

			<body suppressHydrationWarning={true}>
				{/* @ts-ignore */}

				<Header />
				{children}
				<Botton />
			</body>
		</html>
	);
}
