import React from 'react';
import Image from 'next/image';

export default function Solution() {
	return (
		<div className="max-w-7xl mx-auto space-y-10 md:min-h-screen md:px-0 px-4 md:py-0 py-10">
			<div className="flex justify-center items-center flex-col gap-10">
				<h1 className="md:text-5xl text-4xl text-center font-semibold">
					Solutions de nettoyage complètes
				</h1>
				<p className="text-[16px] text-stone-600 max-w-2xl mx-auto text-center">
					Chez Delta Cleaning, nous proposons des services de nettoyage de
					qualité supérieure, adaptés à vos besoins. Notre équipe veille à ce
					que chaque recoin de votre espace soit impeccable. Voici ce que nous
					proposons :
				</p>
			</div>

			<div className="grid md:grid-cols-2 gap-4">
				<div className="flex flex-col gap-2">
					<div className="bg-secondary text-white p-5 md:h-60 h-60 flex flex-col justify-between items-start rounded-md">
						<div className="space-y-4">
							<h1 className="text-2xl font-medium">Nettoyage résidentiel</h1>
							<p>
								Gardez votre maison impeccable et accueillante grâce à nos
								services complets, du ménage régulier au nettoyage en
								profondeur.
							</p>
						</div>
						<button className="border border-primary rounded-sm px-5 py-3 w-fit">
							En savoir plus
						</button>
					</div>
					<div className="bg-secondary text-white p-5 md:h-60 h-60 flex flex-col justify-between items-start rounded-md">
						<div className="space-y-4">
							<h1 className="text-2xl font-medium">Nettoyage commercial</h1>
							<p>
								Maintenez un espace de travail hygiénique grâce à nos solutions
								de nettoyage fiables pour les bureaux, les espaces de vente au
								détail et plus encore, augmentant ainsi la productivité.
							</p>
						</div>
						<button className="border border-primary rounded-sm px-5 py-3 w-fit">
							En savoir plus
						</button>
					</div>
				</div>

				<div className="relative md:h-full md:h-60 h-96">
					<Image
						className="absolute size-full object-cover rounded-md"
						src={
							'https://framerusercontent.com/images/HMcgJUZys12lXlUAkd9co4ldk8.jpg'
						}
						width={300}
						height={300}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}
