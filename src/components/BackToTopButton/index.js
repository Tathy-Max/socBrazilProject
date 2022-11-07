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
						bottom: '2.5rem',
						right: '2.5rem',
						height: '2.5rem',
						width: '2.5rem',
						fontSize: '1.9rem',
						color: '#d7dfe7',
						borderColor: '#d7dfe7',
						borderRadius: '0.5rem',
					}}
					onClick={scrollUp}
				>
					<VerticalAlignTopOutlined />
				</button>
			)}
		</div>
	);
}
