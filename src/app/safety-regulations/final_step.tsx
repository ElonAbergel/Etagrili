'use client';
import React, { use, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Mypdf = dynamic(() => import('./pdf_please_work'), {
	ssr: false,
});

const my_page = () => {
	// const [client, SetClient] = useState(false);
	// useEffect(() => {
	// 	SetClient(true);
	// });

	return <Mypdf />;
};

export default my_page;
