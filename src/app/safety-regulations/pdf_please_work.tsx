'use client';
import React, { useEffect, useState } from 'react';
import {
	PDFViewer,
	Page,
	Document,
	Text,
	StyleSheet,
	View,
	Font,
} from '@react-pdf/renderer';

import { renderToString } from 'react-dom/server';

// import { Roboto_Mono } from 'next/font/google';
// const roboto_Mono = Roboto_Mono({ subsets: ['latin'] });

// const workSans = Work_Sans({ subsets: ['latin'], weight: '400' });
import OpenSans from '../fonts/OpenSansHebrew.ttf';

Font.register({ family: 'OpenSans', src: OpenSans });

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '120vh', // Adjust the height as needed
	},
	pdfViewer: {
		width: '100%', // Adjust the width as needed
		height: '100vh', // Adjust the height as needed
	},
	body: {
		// Specify the Hebrew font
		fontFamily: 'OpenSans',
		fontSize: 12,
		textAlign: 'right', // Set the text alignment to right for Hebrew text
		marginRight: 20, // Add margin from the right side
	},
	title: {
		fontFamily: 'OpenSans',
		fontSize: 18,
		textAlign: 'right', // Set the text alignment to right for Hebrew text
		marginRight: 20, // Add margin from the right side
	},

	button: {
		marginTop: 20, // Add margin from the top
		padding: '10px 20px',
		fontSize: 16,
		fontWeight: 'bold',
		borderRadius: 4,
		background: '#007bff',
		color: '#fff',
		border: 'none',
		cursor: 'pointer',
	},
});

const title = `
    
    
    תקנון ביטחון חברת אתגרלי לפעילות נינג'ה לילדים בגילאי 4-8 להורים ולמדריכים`;
const body = `
בבטיחות וחוקים:
  1.1. אתגרלי תתחייב ליצור תנאים בטיחותיים ולהפעיל את הפעילות בצורה המספקת הכי הגיונית למניעת תאונות ופציעות
  2.1. הפעילות תתבצע תחת פיקוח מדריכים מאומנים ומוסמכים, המכירים את כל הנהלי הבטיחות ומבצעים אותם באופן קפדני.
  3.1. יש לספק מתקנים וציוד בטיחות מתאימים לפעילות, כגון מגן ראש, כיסאות אבטחה ומתקני קיבוע.
  4.1. יש לספק מערכת עימוד ראשוני ואנשי עיזר בכל פעילות נינג\'ה.

  הדרכה והתאמה לגילאים:
  1.2. המדריכים יכירו במיוחד בצרכים הייחודיים של ילדים בגילאי 4-8 ויתאימו את הפעילות לפי כישוריהם וידעם.
  2.2. יש להסביר באופן ברור ומובנה את החוקים והנהלי הבטיחות לילדים ולהורים לפני תחילת הפעילות.
  3.2. יש לוודא כי הילדים מקבלים הדרכה בטיחותית בנוגע לשימוש נכון של המתקנים והציוד במהלך הפעילות.

  תנאי בטיחות במתקנים:
  1.3. יש לבדוק באופן יומי את מתקני הפעילות ולוודא תקינותם וביצוע תחזוקה רגילה.
  2.3. יש להתחייב לתקן כל פגיעה או נזק במתקנים מיד לאחר גילויו או דיווח על ידי מדריך או הורה.

  התנהלות במהלך הפעילות:
  1.4. המדריכים ישמשו כהפקדה וישמרו על סדר ובטיחות במהלך הפעילות.
  2.4. יש לוודא תפקיד מדריך מתקין וסבלני שיכוון את הילדים בצורה בטוחה ומעוררת עניין.
  3.4. יש להתייחס ברצינות לסימנים של פציעה או תקלה ולטפל בהם באופן מיידי ורצוני.
  4.4. יש למקם מדריכים במקומות אסטרטגיים כדי למנוע סכנות ולספק עזרה מהירה במקרה הצורך.

  תקנות נוספות:
  1.5. יש לספק מים שתיה לילדים במהלך הפעילות ולוודא חשיבות שתיית מים תקינה.
  2.5. אין להרשות פעילות פיזית חסרת ריכוז בעת צריבת חום חזקה.
  3.5. אין להשתמש במתקנים בלתי תקינים או פגומים.

  אני מקווה שזה יפתור את הבעיה ויעניק לך תצוגה נכונה של הקובץ. אם עדיין יש בעיות, אנא תן לי ידע נוסף ואנסה לעזור.
`;

const MyDocument = () => {
	return (
		<Document>
			<Page>
				<View style={{ display: 'flex', justifyContent: 'center' }}>
					<Text
						style={styles.title}
						wrap={false}
					>
						{title}
					</Text>
					<Text
						style={styles.body}
						wrap={false}
					>
						{body}
					</Text>
				</View>
			</Page>
		</Document>
	);
};

const MyPdf = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 900); // Adjust the breakpoint as needed
		};

		handleResize(); // Check on initial render
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handleDownload = () => {
		// Logic for downloading the PDF
	};

	return (
		<div style={styles.container}>
			{isMobile ? (
				<>
					<MyDocument />
					{/* <button
						style={styles.button}
						onClick={handleDownload}
					>
						Download PDF
					</button> */}
				</>
			) : (
				<PDFViewer style={styles.pdfViewer}>
					<MyDocument />
				</PDFViewer>
			)}
		</div>
	);
};

export default MyPdf;
