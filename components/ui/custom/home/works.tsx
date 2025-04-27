import React from 'react';
import Image from 'next/image';

export default function Works() {
	return (
		<div className="md:h-screen h-80 md:p-20 p-6">
			<div className="size-full relative rounded-md">
				<Image
					className="absolute rounded-md size-full object-cover"
					src={
						'https://framerusercontent.com/images/Q01TUHtoOO6opYGfHCHNOgvQlKk.jpg'
					}
					height={300}
					width={300}
					alt=""
				/>
				<div className="relative size-full grid place-items-center">
					<div className="bg-secondary rounded-full w-fit aspect-square flex items-center justify-center p-4">
						<h1 className="text-white text-md w-24 w-24 text-center">
							Comment nous travaillons ?
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
}
