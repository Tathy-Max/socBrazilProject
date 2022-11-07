import React from 'react';
import { useEffect, useState } from 'react';
import { VerticalAlignTopOutlined } from '@ant-design/icons';

export function BackToTopButton() {
	const [BackToTopButton, setBackToTopButton] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				setBackToTopButton(true);
			} else {
				setBackToTopButton(false);
			}
		});
	}, []);

	const scrollUp = () => {
		window.scrollTo({
			top: 0,
			behaviour: 'smooth',
		});
	};

	return (
		<div className="App">
			{BackToTopButton && (
				<button
					style={{
						position: 'fixed',
						bottom: '40px',
						right: '40px',
						height: '40px',
						width: '40px',
						fontSize: '30px',
						color: '#d7dfe7',
						borderColor: '#d7dfe7',
					}}
					onClick={scrollUp}
				>
					<VerticalAlignTopOutlined />
				</button>
			)}
		</div>
	);
}
