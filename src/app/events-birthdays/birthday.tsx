import React from 'react';

import logo_new from '../../assets/AtgariLi.png';
import Form from '../form';
import Slideshow from '../swiper';
import Image from 'next/image';
function birthday() {
	return (
		<div>
			<div className="object-fill">
				<Slideshow />
			</div>
			<div className="bg-blue-300 relative">
				<div className="text-right text-white ">
					<div className="text-6xl font-bold text-red-500 flex justify-center">
						<div className="mx-1 ">
							<Image
								src={logo_new.src}
								alt="תמונה של נוה"
								className="w-48 h-auto object-fill inline-block mr-2"
								width={350}
								height={350}
							/>
							אירועים וימי הולדת
						</div>
					</div>
					<br />
					<div className="   text-center ">
						<div className="text-2xl font-bold  justify-between">
							אתגרלי מציע את חווית האירוע האולטימטיבית
							<br /> בהתבסס על חווית האתגר של הפעילות שלנו <br />
							<br />
							יום ההולדת יכלול הפעלת ילדים מלאה (קרוב לשעתיים)
							<br />
							.ההפעלה תכלול: סיפור רקע, משחקי מכשולים ומעברי מכשולים
							<br />
							!וכמובן שגם בלונים בצורות
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
							<div className="text-3xl">?לאיזה גיל ההפעלה מתאימה</div>
							<div className="text-2xl"> ההפעלה מתאימה לגיל 4-8</div>
							<br />
							<div className="text-3xl">?איפה עושים את היום הולדת</div>
							<div className="text-2xl"> ההפעלה מתאימה לפארק\גינה\אולם</div>
							(אי אפשר לקיים את זה בתוך בית)
							<br />
							<br />
							<div className="text-3xl">?כמה מפעילים מגיעים</div>
							<br />
							<br />
							<div className="text-2xl">
								{' '}
								להפעלה מגיעים שני מפעילים
								<br />
								כמו כן כל אירוע יכול להמריא למקומות גבוהים על ידיי שיתוף פעולה
								מוקדם
								<br />
								בין הצדדים .על ידיי תשאול ותחקור על החוגג וסביבתו,
								<br /> ,פרט זה חשוב מאוד להצלחת האירוע
								<br />
								לנו כחברה מקצועית חשוב לבוא מוכנים ולתת את המיטב
								<br />
								בשביל שתהיו מרוצים עד הגג ותשתמשו בשירותינו בעתיד
								<br />
								<br />
							</div>
							<div className="text-3xl font-bold text-red-500">
								{' '}
								להרשמה ולקבלת מידע נוסף חייגו: 052-421-6936
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

export default birthday;
