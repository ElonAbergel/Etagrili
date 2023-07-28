import React from 'react';
import logo from '../../public/test.logo.png';
import Image from 'next/image';
import a from 'next/link';
function Botton() {
	return (
		<div className="  bg-yellow-200">
			<div className="  container  bg-yellow-200 relative mx-auto  ">
				<div className="relative h-48  mb-4 ">
					<Image
						src={logo.src}
						alt="Logo"
						fill={true}
						style={{ objectFit: 'contain' }}
						priority={true}
						sizes="(max-width: 640px) 100vw, 640px" // Example sizes value, adjust it according to your needs
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
