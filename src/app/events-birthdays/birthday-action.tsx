import React from 'react';
import Form from '../form';
import Slideshow from '../swiper';
function birthday_action() {
	return (
		<div>
			<div className="object-fill">
				<Slideshow />
			</div>
			<div className="bg-blue-300 relative">
				<div className="text-right text-white ">
					<div className="text-6xl font-bold text-red-600 flex justify-center">
						<div className="mx-1 "> ימי הולדת </div>
					</div>
					<br />
					<div className="   text-center ">
						<div className="text-2xl font-bold justify-between ">
							{' '}
							חווית אירוע אולטימטיבית
							<br /> המתבססת על חוויות מאתגרות של הפעילות שלנו <br />
							<br />
							<p>
								ימי ההולדת של אתגרלי יקחו את האירוע שלכם לשלב הבא, שיהפוך את
								החגיגה לחוויה מושלמת הכוללת
								<br />
								הפעלה מגוונת, סיפורי רקע, חיוכים רבים ובאווירה משפחתית
								<br />
							</p>
							<div className="text-blue-950 text-3xl">
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
								הילד החוגג מועצם ובמרכז לאורך כל האירוע*
								<br />
								<br />
								בלונים בצורות*
								<br />
								<br />
								טקס עוגה*
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
							<div className="text-3xl">?לאיזה גיל מותאם יום ההולדת </div>
							<div className="text-2xl"> גילאי 3-7 שנים</div>
							<br />
							<div className="text-3xl">?היכן נערך יום ההולדת</div>
							<div className="text-2xl"> אולם/גינה/פארק</div>
							(אי אפשר לקיים את הפעילות בתוך הבית)
							<br />
							<br />
							<div className="text-3xl">?כמה מפעילים מגיעים</div>
							<div className="text-2xl">
								{' '}
								שני מפעילים <br />
							</div>
							<br />
							<div className="text-3xl">?אזור פעילות </div>
							<div className="text-2xl">
								{' '}
								עמק חפר, שרון והסביבה <br />
								<br />
								לנו כחברה מקצועית חשוב להעניק לילדיכם את המיטב
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

export default birthday_action;
