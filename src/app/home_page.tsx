import React from 'react';
import nave_picture from '../../public/Nave_picture.png';
// import SwiperSlide from '../app/';
import Form from './form';

import Slideshow from './swiper';
import Image from 'next/image';
function HomePage() {
	return (
		<div className="">
			<Slideshow />

			<div className="relative ">
				<div>
					<div className="flex-1 bg-orange-300 h-60 flex flex-col justify-center items-center">
						<div className="text-5xl font-bold text-red-800 text-center container  ">
							אֶתְגָרִילִי
							<br />
							פעילות אתגרית לילדים
							<p className="text-2xl font-rumi">בנים ובנות</p>
							<br />
							<div className="flex space-x-4 justify-center">
								<div className="bg-red-500 text-white px-4 py-2 rounded">
									חוג שנתי*{' '}
								</div>
								<div className="bg-green-500 text-white px-4 py-2 rounded">
									הפעלות*{' '}
								</div>

								<div className="bg-blue-500 text-white px-4 py-2 rounded">
									ימי הולדת*
								</div>
							</div>
						</div>
					</div>

					<div className="bg-blue-300 flex ">
						<div className="flex md:mr-5 md:mt-32">
							<div className="w-full md:w-3/5 mr-2 md:ml-40 md:mt-10">
								<Image
									src={nave_picture.src}
									alt="תמונה של נוה"
									style={{ boxShadow: '0 2px 6px rgba(0, 0, 0, 4)' }}
									width={800}
									height={800}
								/>
							</div>
							<div className="w-full md:w-2/3 text-right text-white mr-5">
								<div className="ml-auto">
									<div className="mt-5 mb-60 md:mr-5 ">
										{/* <div className="text-6xl font-bold">הפעלות</div> */}
										<br />
										<div className="text-6xl font-bold"> ימי הולדת</div>
										<br />
										<div className="text-2xl">
											{' '}
											חווית אירוע אולטימטיבית
											<br /> המתבססת על חוויות מאתגרות של הפעילות שלנו <br />
											<br />
											<p>
												ימי ההולדת/הפעלות של אתגרלי יקחו את האירוע שלכם לשלב
												הבא, שיהפוך את החגיגה לחוויה מושלמת הכוללת
												<br />
												הפעלה מגוונת, סיפורי רקע, חיוכים רבים, ובאווירה משפחתית
												<br />
											</p>
										</div>
										<br />
										<div className="relative inline-block">
											<div className="bg-blue-500 p-3 rounded-lg shadow-lg inline-block">
												<a
													href="/events-birthdays"
													className="text-white text-3xl font-bold"
												>
													ימי הולדת
												</a>
											</div>
										</div>
										<br />
										<br />
										<br />
										<br />

										<div className="text-6xl font-bold"> הפעלות</div>
										<br />
										<br />

										<div className="text-2xl">
											{' '}
											פעילות ספורטיבית יצירתית ומהנה בגנים, בתי ספר ובקהילה
										</div>
										<br />
										<div className="relative inline-block">
											<div className="bg-green-500 p-3 rounded-lg shadow-lg inline-block">
												<a
													href="/events-actions"
													className="text-white text-3xl font-bold"
												>
													הפעלות
												</a>
											</div>
										</div>
										<br />
										<br />
										<br />
										<div className="text-6xl font-bold">חוגים</div>
										<br />

										<div className="text-2xl">
											{' '}
											אתגרלי מציע חוגים שבועיים נפלאים לילדים
										</div>
										<br />
										<br />
										<div className="relative inline-block">
											<div className="bg-red-500 p-3 rounded-lg shadow-lg inline-block">
												<a
													href="/Classes"
													className="text-white text-3xl font-bold"
												>
													חוג שנתי
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<Form />
				</div>
			</div>
		</div>
	);
}

export default HomePage;
