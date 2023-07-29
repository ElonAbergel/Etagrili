import React from 'react';

import {
	FaPhone,
	FaWhatsapp,
	FaUserNinja,
	FaCalendarAlt,
	FaUsers,
	FaRegGrinAlt,
} from 'react-icons/fa';
function page() {
	return (
		<div className="bg-gradient-to-r from-purple-300 to-yellow-100  ">
			<div className="container relative mx-auto ">
				<div className="text-center  font-assistant-bold text-white py-24">
					{' '}
					<br />
					<div className="text-black text-4xl ">
						?מוכנים לחווית נינג׳ה כוללת הכל
					</div>
				</div>

				<div className="text-black text-2xl text-center">
					מלאו את הפרטים שלכם ונחזור אליכם בהקדם
				</div>
				<br />
				<div className="flex flex-wrap justify-center">
					<div className="w-full md:w-1/3 px-2 pb-3">
						<div className="flex items-center bg-white rounded-lg p-2">
							<select
								name="menu-381"
								className="w-full p-2 bg-transparent outline-none text-right"
							>
								<option value="">סוג אירוע</option>
								<option value="יום הולדת">יום הולדת</option>
								<option value="אחר">אחר</option>
							</select>
							<FaCalendarAlt />
						</div>
					</div>
					<div className="w-full md:w-1/3 px-2 pb-3">
						<div className="flex items-center bg-white rounded-lg p-2">
							<input
								type="tel"
								name="your-tel"
								className="w-full p-2 bg-transparent outline-none text-right"
								placeholder="טלפון"
							/>
							<FaPhone />
						</div>
					</div>
					<div className="w-full md:w-1/3 px-2 pb-3">
						<div className="flex items-center bg-white rounded-lg p-2">
							<input
								type="text"
								name="your-name"
								className="w-full p-2 bg-transparent outline-none text-right"
								placeholder="שם"
							/>
							<FaUserNinja />
						</div>
					</div>
					<div className="w-full md:w-1/3 px-2 pb-3">
						<div className="flex items-center bg-white rounded-lg p-2">
							<select
								name="menu-384"
								className="w-full p-2 bg-transparent outline-none text-right"
							>
								<option value="">בחר חודש</option>
								<option value="ינואר">ינואר</option>
								<option value="פברואר">פברואר</option>
								<option value="מרץ">מרץ</option>
								<option value="אפריל">אפריל</option>
								<option value="מאי">מאי</option>
								<option value="יוני">יוני</option>
								<option value="יולי">יולי</option>
								<option value="אוגוסט">אוגוסט</option>
								<option value="ספטמבר">ספטמבר</option>
								<option value="אוקטובר">אוקטובר</option>
								<option value="נובמבר">נובמבר</option>
								<option value="דצמבר">דצמבר</option>
							</select>
						</div>
					</div>
					<div className="w-full md:w-1/3 px-2 pb-3">
						<div className="flex items-center bg-white rounded-lg p-2">
							<input
								type="number"
								name="num-people"
								className="w-full p-2 bg-transparent outline-none text-right"
								placeholder="(15-50) כמות אנשים"
							/>
							<FaUsers />
						</div>
					</div>
					<div className="w-full md:w-1/3 px-2 pb-3">
						<div className="flex items-center bg-white rounded-lg p-2">
							<input
								type="text"
								name="how-hear"
								className="w-full p-2 bg-transparent outline-none text-right"
								placeholder="?איך שמעתה עלינו"
							/>
							<FaRegGrinAlt />
						</div>
					</div>
					<div className="w-full px-2 text-center mt-2">
						<button
							type="submit"
							className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-80 rounded"
						>
							לחץ כאן{' '}
						</button>
					</div>
				</div>
				<br />
				<br />
				<br />
				<br />
			</div>
		</div>
	);
}

export default page;
