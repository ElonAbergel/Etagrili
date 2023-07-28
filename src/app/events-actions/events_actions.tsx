import React from 'react';
import Form from '../form';
import Slideshow from '../swiper';
function events_actions() {
	return (
		<div>
			<div className="object-fill">
				<Slideshow />
			</div>
			<div className="bg-blue-300 relative">
				<div className="text-right text-white ">
					<div className="text-6xl font-bold text-red-600 flex justify-center">
						<div className="mx-1 "> הפעלות</div>
					</div>
					<br />
					<div className="   text-center ">
						<div className="text-3xl font-bold justify-between text-yellow-600 ">
							{' '}
							<div>
								פעילות ספורטיבית יצירתית ומהנה
								<br />
								בגנים, בבית ספר ובקהילה
								<br />
								<br />
								<div className="text-red-600">
									כאירוע חד פעמי באירועי סוף שנה, חופשות וחגים
								</div>
							</div>
							<div className="text-white text-3xl">
								<br />
								חווית אירוע מהנה ומעצימה*
								<br />
								<br />
								הרפתקה ספורטיבית מאתגרת ומגבשת בשילוב מתקנים מתכווננים מותאמים
								לגיל*
								<br />
								<br />
								מגוון עשיר ורחב של הפעלות אתגריות במסלולים *
								<br />
								<br />
								פעילות סוחפת*
								<br />
								<br />
								בלונים בצורות*
								<br />
								<br />
								מוסיקת רקע*
							</div>
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
							<div className="text-3xl">?לאיזה גיל מותאמת ההפעלה</div>
							<div className="text-2xl"> גילאי 3-7 שנים</div>
							<br />
							<div className="text-3xl">?היכן נערך </div>
							<div className="text-2xl"> בתוך הגן / אולם / גינה / פארק</div>
							<br />
							<br />

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

export default events_actions;
