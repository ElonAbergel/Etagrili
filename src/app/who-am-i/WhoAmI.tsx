import React from 'react';
// import nave_name from '../../../public/nave-name.png';
// import Nave_run from '../../../public/Who_AM_I/nave run.jpeg';
// import Nave_strach from '../../../public/Who_AM_I/nave_strach.jpeg';

const nave_name = '/../public/nave-name.png';
const Nave_run = '/../public/Who_AM_I/nave run.jpeg';
const Nave_strach = '/../public/Who_AM_I/nave_strach.jpeg';
import Image from 'next/image';
function WhoAmI() {
	return (
		<div className="bg-blue-200  ">
			<div className=" relative ">
				<div className="container py-10 mx-auto">
					<div className="relative w-72 h-64 mt-20 mx-auto  transform transition-transform duration-300 hover:scale-110 ">
						<Image
							src={nave_name}
							fill={true}
							alt="Logo"
							style={{ objectFit: 'contain' }}
							sizes="(max-width: 640px) 100vw, 640px" // Example sizes value, adjust it according to your needs
						/>
					</div>

					<section className="text-right p-6 mb-8">
						<h2 className="text-3xl text-right font-bold mb-4 text-red-600">
							הסיפור שלי
						</h2>
						<div className="text-2xl flex">
							<Image
								src={Nave_run}
								alt="Nave Run"
								className="w-1/2 h-auto object-cover"
								style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 4)' }}
								width={800}
								height={800}
							/>
							<div className="mx-auto">
								נולדתי ב-11 לפברואר 1996 <br />
								יליד עמק חפר
								<br />
								,בצבא שירתתי כמאמן קרב מגע <br />
								שם למדתי לראשונה על כל נושא האימון וההדרכה
								<br /> והבנתי שיש אפשרות להדריך כל אדם
								<br />
								רק צריך למצוא את השיטה המתאימה לו
							</div>
						</div>
					</section>

					<section className="text-right p-6 mb-8">
						<h2 className="text-3xl text-right font-bold mb-4 text-red-600">
							השכלה
						</h2>
						<div className="text-2xl flex justify-between">
							<Image
								src={Nave_strach}
								alt="Nave Run"
								className="w-1/2 h-auto object-cover"
								style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 4)' }}
								width={800}
								height={800}
							/>
							<div>
								אחרי הצבא החלטתי ללמוד לתואר ראשון <br />
								,בחינוך גופני במכון ויניגט עם התמחות בגיל הרך
								<br />
								שם העמקתי את יכולות האימון והלימוד שלי
								<br />
								המשכתי ללימודי תואר שני בייעוץ חינוכי <br />
								CBT ולקראת לימודי
							</div>
						</div>
					</section>

					<section className="text-right p-6 mb-8 ">
						<h2 className="text-3xl text-right font-bold mb-4 text-red-600">
							כיום
						</h2>
						<div className="text-2xl flex justify-between">
							<Image
								src={Nave_strach}
								alt="Nave Run"
								className="w-1/2 h-auto object-cover"
								style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 4)' }}
								width={800}
								height={800}
							/>
							<div>
								עובד כמורה לחינוך גופני בבית ספר יסודי <br />
								ומקיים פעילויות ספורטביות במסגרת חוג בגנים
								<br /> מפעיל ימי הולדת והפעלות אתגריות שונות <br />
								ובעיקר אוהב מה שאני עושה
								<br />
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}

export default WhoAmI;
