'use client';
import React, { useState } from 'react';
import {
	FaPhone,
	FaUserNinja,
	FaCalendarAlt,
	FaUsers,
	FaRegGrinAlt,
} from 'react-icons/fa';
import emailjs from 'emailjs-com';
// import SwiperSlide from '../app/';
// import logo from '../../public/test.logo.png';

const logo = '/../public/test.logo.png';
import Image from 'next/image';
function Form() {
	const [eventType, setEventType] = useState('');
	const [phone, setPhone] = useState('');
	const [name, setName] = useState('');
	const [selectedMonth, setSelectedMonth] = useState('');
	const [numPeople, setNumPeople] = useState('');
	const [howHeard, setHowHeard] = useState('');
	const [formSubmitted, setFormSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// You need to set up your own email template and service ID from EmailJS
		const serviceID =
			process.env.NEXT_PUBLIC_DB_SERVICE || 'default-service-id';
		const templateID =
			process.env.NEXT_PUBLIC_DB_TEMPLATE || 'default-service-id';
		const userID = process.env.NEXT_PUBLIC_DB_USERID || 'default-service-id';

		const templateParams = {
			eventType,
			phone,
			name,
			selectedMonth,
			numPeople,
			howHeard,
		};

		emailjs
			.send(serviceID, templateID, templateParams, userID)
			.then((response) => {
				console.log('Email sent successfully!', response.status, response.text);
				// Reset form fields
				setEventType('');
				setPhone('');
				setName('');
				setSelectedMonth('');
				setNumPeople('');
				setHowHeard('');
			})
			.catch((error) => {
				console.error('Error sending email:', error);
			});
		setFormSubmitted(true); // <-- Update formSubmitted state
	};

	return (
		<div className=" flex bg-gradient-to-r from-purple-300 to-yellow-100 ">
			<div className="container mx-auto">
				<div className="relative h-48  mb-4 py-6">
					<Image
						src={logo}
						alt="Logo"
						fill={true}
						style={{ objectFit: 'contain' }}
						priority={true}
						sizes="(max-width: 640px) 100vw, 640px" // Example sizes value, adjust it according to your needs
					/>
				</div>
				{!formSubmitted ? (
					<>
						<div className="text-center font-assistant-bold text-white ">
							<div className="text-black text-4xl">
								?מוכנים לחוויה בסגנון נינג׳ה הכוללת הכל
							</div>
						</div>
						<br />
						<br />

						<div className="text-black text-2xl text-center">
							מלאו את הפרטים ונחזור אליכם בהקדם
						</div>
						<br />

						<form
							className="flex flex-wrap justify-center"
							onSubmit={handleSubmit}
						>
							<div className="w-full md:w-1/3 px-2 pb-3">
								<div className="flex items-center bg-white rounded-lg p-2">
									<select
										name="menu-381"
										className="w-full p-2 bg-transparent outline-none text-right"
										value={eventType}
										onChange={(e) => setEventType(e.target.value)}
										required // Add the "required" attribute
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
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
										required // Add the "required" attribute
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
										value={name}
										onChange={(e) => setName(e.target.value)}
										required // Add the "required" attribute
									/>
									<FaUserNinja />
								</div>
							</div>
							<div className="w-full md:w-1/3 px-2 pb-3">
								<div className="flex items-center bg-white rounded-lg p-2">
									<select
										name="menu-384"
										className="w-full p-2 bg-transparent outline-none text-right"
										value={selectedMonth}
										onChange={(e) => setSelectedMonth(e.target.value)}
										required // Add the "required" attribute
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
										value={numPeople}
										onChange={(e) => setNumPeople(e.target.value)}
										required // Add the "required" attribute
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
										value={howHeard}
										onChange={(e) => setHowHeard(e.target.value)}
										required // Add the "required" attribute
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
						</form>
					</>
				) : (
					<div className="text-red-500 font-bold text-center text-3xl">
						!פנתייך התקבלה נציג יחזור אליך בקרוב
					</div>
				)}

				<br />
				<br />
				<br />
				<br />
			</div>
		</div>
	);
}

export default Form;
