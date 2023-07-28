import React from 'react';
import Form from '../form';
import Slideshow from '../swiper';
function classes() {
	return (
		<div>
			<div className="object-fill">
				<Slideshow />
			</div>
			<div className="bg-blue-300 relative">
				<div className="text-right text-white ">
					<div className="text-6xl font-bold text-red-600 flex justify-center">
						<div className="mx-1 "> חוג שנתי</div>
					</div>
					<br />
					<div className="   text-center ">
						<div className="text-2xl font-bold justify-between ">
							<div className="text-yellow-800 text-3xl">
								<br />
								חוג התעמלות אתגרית לילדים * <br />
								<br />
								הרפתקה ספורטיבית מאתגרת ומגבשת בשילוב מתקנים מתכווננים מותאמים
								לגיל*
								<br />
								<br />
								מגוון עשיר ורחב של הפעלות אתגריות במסלולים *
								<br />
								<br />
								פעילות סוחבת*
								<br />
								<br />
								עמידה באתגרים והתגברות על קשיים*
								<br />
								<br />
								למידה חוויתית גופנית*
								<br />
								<br />
								שיפור מסוגלות ובטחון עצמי*
								<br />
								<br />
								הקניית ערכים ומיומניות חברתיות*
								<br />
								<br />
								חוויה קסומה, מהנה ויצירתית*
								<br />
								<br />
								מוסיקת רקע*
							</div>
							<br />
							<div className="text-5xl">!שיעור ניסיון ראשון בחינם</div>
						</div>
					</div>
					<br />
					<br />
					<div className=" text-center ">
						{/* <img
							src={ninja_character.src}
							alt="תמונה של נוה"
							className="w-full md:w-2/5 h-auto object-none"
						/> */}
						<div>
							<div className="text-3xl font-bold text-red-500">
								שאלות נפוצות
							</div>
							<div className="text-3xl">?לאיזה גיל מותאם החוג </div>
							<div className="text-2xl"> גילאי 3-7 שנים</div>
							<br />

							<div className="text-3xl">?היכן נערך החוג</div>
							<div className="text-2xl">
								שים פה מפה
								<br />
								<br />
								לנו כחברה מקצועית חשוב להעניק לילדיכם את המיטב
								<br />
								<br />
							</div>
							<div className="text-3xl font-bold text-red-500">
								{' '}
								להרשמה ולקבלת מידע נוסף חייגו: 052-421-6936
								<br />
								למילוי פרטים גלול מטה
								<br />
								<br />
								<br />
								<br />
							</div>
						</div>
					</div>
				</div>
				<Form />
			</div>
		</div>
	);
}

export default classes;
