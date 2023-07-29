import React from 'react';
import logo from '../../public/test.logo.png';
// const logo = '/../public/test.logo.png';
import Image from 'next/image';
function Botton() {
	return (
		<div className="  bg-yellow-200">
			<div className="  container  bg-yellow-200 relative mx-auto  ">
				<div className="flex mb-4 mx-auto w-96 h-64 ">
					<img
						src={logo.src}
						alt="Logo"
						style={{
							objectFit: 'contain',
							display: 'block', // To center the image, set it to block-level element
							margin: '0 auto', // To center the image horizontally
							maxWidth: '250px', // Adjust the max-width to make the image smaller
						}}
					/>
				</div>
				<div className="flex justify-center items-center text-2xl h-60">
					<a
						href="/contact"
						className="cursor-pointer mx-2 font-rubik-moonrocks"
					>
						צור קשר
					</a>
					<span className="mx-2">|</span>
					<a
						href="/safety-regulations"
						className="cursor-pointer mx-2"
					>
						תקנון בטיחות
					</a>
					<span className="mx-2">|</span>
					{/* <a
					href="/ninja-camps"
					className="cursor-pointer mx-2"
				>
					חוגי נינג'ה וקייטנות
				</a> */}
					{/* <span className="mx-2">|</span> */}
					<a
						href="/Classes"
						className="cursor-pointer mx-2"
					>
						חוגים{' '}
					</a>
					<span className="mx-2">|</span>
					<a
						href="/events-actions"
						className="cursor-pointer mx-2"
					>
						הפעלות{' '}
					</a>
					<span className="mx-2">|</span>
					<a
						href="/events-birthdays"
						className="cursor-pointer mx-2"
					>
						ימי הולדת{' '}
					</a>

					<span className="mx-2">|</span>
					<a
						href="/"
						className="cursor-pointer mx-2"
					>
						עמוד הבית
					</a>
				</div>
			</div>
		</div>
	);
}

export default Botton;
