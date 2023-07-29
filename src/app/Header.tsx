'use client';
import React, { useState } from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import backgroun_phone from '../../public/background_phone.jpg';

// const backgroun_phone = '/../public/background_phone.jpg';
// const logo = '/../public/test.logo.png';
import logo from '../../public/test.logo.png';
import Image from 'next/image';

function Header() {
	const phoneNumber = '052-4216936';
	const whatsappNumber = '0524216936'; // Replace with your WhatsApp number

	const [menuOpen, setMenuOpen] = useState(false);
	const handleCallClick = () => {
		window.location.href = `tel:${phoneNumber}`;
	};

	const handleWhatsAppClick = () => {
		window.location.href = `https://wa.me/${whatsappNumber}`;
	};

	const handleMenuClick = () => {
		setMenuOpen(!menuOpen);
	};

	const handlelogoClick = () => {
		window.location.href = `/`;
	};

	return (
		<header className="border-b-8 border-red-500 rounded-md bg-yellow-200 ">
			<div className=" container relative mx-auto z-50">
				<nav className="  flex h-36  ">
					<div className="flex items-center justify-start gap-3 z-5 absolute left-4 top-1/2 -translate-y-1/2">
						<div
							className="flex items-center text-white p-4 rounded-lg cursor-pointer transform transition duration-300 hover:ring-4 hover:ring-green-500 hover:bg-green-500"
							onClick={handleWhatsAppClick}
							style={{
								backgroundColor: 'green',
							}}
						>
							<div className="text-2xl md:text-4xl lg:text-4xl">
								<FaWhatsapp />
							</div>
						</div>
						<div
							className="flex items-center text-white p-4 rounded-lg cursor-pointer transform transition duration-300 hover:ring-4 hover:ring-orange-500 hover:bg-orange-500"
							onClick={handleCallClick}
							style={{
								backgroundImage: `url(${backgroun_phone.src})`,
								backgroundSize: 'cover',
							}}
						>
							<span className="text-xl font-bold">{phoneNumber}</span>
							<div className="text-2xl md:text-4xl lg:text-4xl">
								<FaPhone />
							</div>
						</div>
					</div>
					<div
						className=" w-96 h-64 relative inset-0 cursor-pointer mx-auto mt-1/2"
						onClick={handlelogoClick}
					>
						<img
							src={logo.src}
							alt="Logoaa"
							sizes="(max-width: 640px) 100vw, 640px" // Example sizes value, adjust it according to your needs
							style={{ objectFit: 'contain' }}
						/>
					</div>
					<div
						className="absolute top-1/2 -translate-y-1/2 right-5  cursor-pointer "
						onClick={handleMenuClick}
					>
						<div className="text-5xl md:text-2xl lg:text-5xl ">
							<FiMenu />
						</div>
					</div>
				</nav>
				{menuOpen && (
					<>
						<div
							className="fixed inset-0 bg-black opacity-50 z-70"
							style={{
								transition: 'opacity 0.3s',
							}}
							onClick={handleMenuClick}
						></div>
						<div
							className="fixed inset-y-0 right-0 bg-yellow-300 w-64 transition-transform duration-300 transform translate-x-0 z-80"
							style={{
								boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
							}}
						>
							<div className="h-48 mt-4 relative inset-0 cursor-pointer mx-auto mt-1/2">
								<img
									src={logo.src}
									alt="Logo"
									style={{ objectFit: 'contain' }}
									sizes="(max-width: 640px) 100vw, 640px" // Example sizes value, adjust it according to your needs
								/>
							</div>
							<div className="flex flex-col items-center py-6">
								<ul className="text-black text-center">
									<li className="py-2">
										<a
											href="/"
											className="text-2xl font-bold hover:text-red-600 transition-colors duration-300"
										>
											עמוד הבית
										</a>
									</li>
									<li className="py-2">
										<a
											href="/who-am-i"
											className="text-2xl font-bold hover:text-red-600 transition-colors duration-300"
										>
											מי אני
										</a>
									</li>

									<li className="py-2">
										<a
											href="/events-birthdays"
											className="text-2xl font-bold hover:text-red-600 transition-colors duration-300"
										>
											ימי הולדת{' '}
										</a>
									</li>
									<li className="py-2">
										<a
											href="/events-actions"
											className="text-2xl font-bold hover:text-red-600 transition-colors duration-300"
										>
											הפעלות
										</a>
									</li>
									<li className="py-2">
										<a
											href="/Classes"
											className="text-2xl font-bold hover:text-red-600 transition-colors duration-300"
										>
											חוגים
										</a>
									</li>
									<li className="py-2">
										<a
											href="/safety-regulations"
											className="text-2xl font-bold hover:text-red-600 transition-colors duration-300"
										>
											תקנון בטיחות
										</a>
									</li>
									<li className="py-2">
										<a
											href="/contact"
											className="text-2xl font-bold hover:text-red-500 transition-colors duration-300"
										>
											צרו קשר
										</a>
									</li>
									<li className="py-6">
										<div
											className="text-2xl font-bold hover:text-red-500 transition-colors duration-300 cursor-pointer "
											onClick={handleCallClick}
										>
											לפרטים התקשרו
											<br />
											{phoneNumber}
										</div>
									</li>
								</ul>
							</div>
						</div>
					</>
				)}
			</div>
		</header>
	);
}

export default Header;
