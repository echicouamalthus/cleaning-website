'use client';

import React, { useCallback } from 'react';
import Image from 'next/image';
import NavBar from '@/components/ui/custom/home/nav-bar';
import Hero from '@/components/ui/custom/home/hero';
import { Marquee } from '@/components/magicui/marquee';
import Solution from '@/components/ui/custom/home/solution';
import Stats from '@/components/ui/custom/home/stats';
import Works from '@/components/ui/custom/home/works';
import About from '@/components/ui/custom/home/about';
import {
	CheckSquare,
	FacebookLogo,
	InstagramLogo,
	LinkedinLogo,
} from '@phosphor-icons/react';
import useEmblaCarousel from 'embla-carousel-react';
import CarouselButton from '@/components/ui/custom/home/carousel-button';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

import logo_1 from '@/public/icons/logoipsum-368.png';
import logo_2 from '@/public/icons/logoipsum-376.png';
import logo_3 from '@/public/icons/logoipsum-377.png';
import logo_4 from '@/public/icons/logoipsum-381.png';
import logo_5 from '@/public/icons/logoipsum-383.png';

const partners = [
	{
		logo: logo_1,
	},
	{
		logo: logo_2,
	},
	{
		logo: logo_3,
	},
	{
		logo: logo_4,
	},
	{
		logo: logo_5,
	},
];

const faqs = [
	{
		question: 'Quels types de services de nettoyage proposez-vous ?',
		content:
			'Nous proposons des services de nettoyage résidentiel, commercial, de déménagement/emménagement, spécialisés, écologiques et après construction.',
	},
	{
		question: 'Vos produits de nettoyage sont-ils écologiques ?',
		content:
			'Oui, nous utilisons des produits de nettoyage écologiques et non toxiques pour garantir la sécurité de votre famille, de vos animaux de compagnie et de l’environnement.',
	},
	{
		question: 'Dois-je fournir des produits ou du matériel de nettoyage ?',
		content:
			'Non, notre équipe arrive entièrement équipée avec tous les produits et le matériel de nettoyage nécessaires.',
	},
	{
		question: 'Comment puis-je planifier un service de nettoyage ?',
		content:
			'Vous pouvez planifier un service de nettoyage en nous contactant via notre site web, par téléphone ou par email. Nous travaillerons avec vous pour trouver un moment qui vous convient.',
	},
	{
		question: 'Quelle est votre politique d’annulation ?',
		content:
			'Nous demandons un préavis d’au moins 24 heures pour les annulations ou les reprogrammations. Les annulations tardives peuvent entraîner des frais.',
	},
	{
		question: 'Vos agents de nettoyage sont-ils assurés et vérifiés ?',
		content:
			'Oui, tous nos agents de nettoyage sont entièrement assurés et font l’objet de vérifications approfondies pour garantir votre tranquillité d’esprit.',
	},
	{
		question: 'Proposez-vous des services de nettoyage récurrents ?',
		content:
			'Oui, nous proposons des plans de nettoyage hebdomadaires, bihebdomadaires et mensuels pour répondre à vos besoins.',
	},
];

export default function Home() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' });

	return (
		<div className="relative">
			<NavBar />
			<Hero />

			<div className="flex justify-center items-center h-[200px] bg-background md:px-0 px-4">
				<div className="relative flex w-full flex-col items-center justify-center overflow-hidden max-w-7xl mx-auto">
					<Marquee pauseOnHover className="[--duration:50s]">
						{partners.map((e, index) => (
							<div key={index} className="mx-4 flex items-center">
								<Image
									className="saturate-0"
									src={e.logo}
									width={80}
									height={80}
									alt="les partenaires de confiances"
								/>
							</div>
						))}
					</Marquee>
					<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
					<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
				</div>
			</div>

			<Solution />

			<Stats />

			<Works />

			<About />

			<div className="min-h-screen grid place-content-center space-y-20 py-20 md:px-0 px-4">
				<div className="flex justify-center items-center flex-col gap-10 ">
					<h1 className="md:text-5xl text-4xl md:text-start text-center font-semibold">
						Plans Tarifaires Abordables
					</h1>
					<p className="text-[16px] text-stone-600 max-w-2xl mx-auto text-center">
						Nous proposons des plans tarifaires flexibles et transparents conçus
						pour répondre à vos besoins et à votre budget. Choisissez le plan
						qui vous convient le mieux et profitez d'un espace impeccable et
						étincelant.
					</p>
				</div>

				<div className="max-w-6xl mx-auto ">
					<div className="grid md:grid-cols-3 gap-13">
						<div className="border border-black/50 rounded-xs p-5 flex flex-col justify-between space-y-10">
							<div className="bg-primary px-2 py-1 rounded-sm font-poppins font-regular text-md w-fit">
								Plan Basique
							</div>

							<div className="bg-white rounded-md flex flex-col space-y-5">
								<div className="space-y-4">
									<div className="relative flex justify-start items-end">
										<h1 className="font-semibold text-7xl">99€</h1>
										<p className="text-stone-500 font-medium">par mois</p>
									</div>

									<p>
										Parfait pour les petits espaces et les besoins de nettoyage
										de routine.
									</p>
								</div>

								<div className="border-1 border-black/15" />

								<ul className="space-y-2">
									<li className="flex items-center gap-2">
										<CheckSquare size={30} className="text-primary" />
										<p>Nettoyage Hebdomadaire</p>
									</li>
									<li className="flex items-center gap-2">
										<CheckSquare size={30} className="text-primary" />
										<p>Nettoyage en Profondeur Complet</p>
									</li>
									<li className="flex items-center gap-2">
										<CheckSquare size={30} className="text-primary" />
										<p>Nettoyage des Tapis et Meubles</p>
									</li>
									<li className="flex items-center gap-2">
										<CheckSquare size={30} className="text-primary" />
										<p>Produits Écologiques</p>
									</li>
								</ul>
							</div>

							<button className="bg-secondary rounded-sm px-5 py-3 text-white w-full">
								Acheter Maintenant
							</button>
						</div>
						<div className="border border-black/50 rounded-xs p-5 space-y-10 md:scale-105 scale-100">
							<div className="bg-primary px-2 py-1 rounded-sm font-poppins font-regular text-md w-fit">
								Plan Premium
							</div>

							<div className="bg-white rounded-md flex flex-col space-y-5">
								<div className="space-y-4">
									<div className="relative flex justify-start items-end">
										<h1 className="font-semibold text-7xl">299€</h1>
										<p className="text-stone-500 font-medium">par mois</p>
									</div>

									<p>
										Idéal pour les grands espaces et les services de nettoyage
										approfondi.
									</p>
								</div>

								<div className="border-1 border-black/15" />

								<ul className="space-y-2">
									<li className="flex items-center gap-2">
										<CheckSquare size={30} className="text-primary" />
										<p>Nettoyage Hebdomadaire</p>
									</li>
									<li className="flex items-center gap-2">
										<CheckSquare size={30} className="text-primary" />
										<p>Nettoyage en Profondeur Complet</p>
									</li>
									<li className="flex items-center gap-2">
										<CheckSquare size={30} className="text-primary" />
										<p>Nettoyage des Tapis et Meubles</p>
									</li>
									<li className="flex items-center gap-2">
										<CheckSquare size={30} className="text-primary" />
										<p>Nettoyage des Fenêtres</p>
									</li>
									<li className="flex items-center gap-2">
										<CheckSquare size={30} className="text-primary" />
										<p>Produits Écologiques</p>
									</li>
								</ul>
							</div>

							<button className="bg-secondary rounded-sm px-5 py-3 text-white w-full">
								Acheter Maintenant
							</button>
						</div>
						<div className="border border-black/50 rounded-xs p-5 space-y-10 flex flex-col justify-between">
							<div className="bg-primary px-2 py-1 rounded-sm font-poppins font-regular text-md w-fit">
								Plan Standard
							</div>

							<div className="bg-white rounded-md flex flex-col space-y-5">
								<div className="space-y-4">
									<div className="relative flex justify-start items-end">
										<h1 className="font-semibold text-7xl">199€</h1>
										<p className="text-stone-500 font-medium">par mois</p>
									</div>

									<p>
										Idéal pour les espaces de taille moyenne nécessitant un
										entretien régulier.
									</p>
								</div>

								<div className="border-1 border-black/15" />

								<ul className="space-y-2">
									<li className="flex items-center gap-2">
										<CheckSquare size={30} className="text-primary" />
										<p>Nettoyage Hebdomadaire</p>
									</li>
									<li className="flex items-center gap-2">
										<CheckSquare size={30} className="text-primary" />
										<p>Nettoyage en Profondeur Complet</p>
									</li>
									<li className="flex items-center gap-2">
										<CheckSquare size={30} className="text-primary" />
										<p>Nettoyage des Tapis et Meubles</p>
									</li>
									<li className="flex items-center gap-2">
										<CheckSquare size={30} className="text-primary" />
										<p>Produits Écologiques</p>
									</li>
								</ul>
							</div>

							<button className="bg-secondary rounded-sm px-5 py-3 text-white w-full">
								Acheter Maintenant
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-secondary text-white h-[600px] ">
				<div className="max-w-7xl mx-auto grid place-content-center h-full md:p-20 p-0 md:px-0 px-4 space-y-10">
					<div className="flex md:flex-row flex-col gap-3 justify-between items-center">
						<h1 className="md:text-5xl text-4xl md:text-start text-center font-semibold">
							Ce Que Disent Nos Clients
						</h1>
						<CarouselButton emblaApi={emblaApi} />
					</div>

					<div className="embla">
						<div className="embla__viewport" ref={emblaRef}>
							<div className="embla__container">
								<div className="embla__slide">
									<div className="border border-white/25 p-4 space-y-4">
										<p className="text-xl font-semibold">
											"Service impeccable ! Ma maison n'a jamais été aussi
											propre. L'équipe de Delta Cleaning a été professionnelle
											et n'a laissé aucun recoin intact. Je suis vraiment
											impressionnée par leur attention aux détails et leur
											dévouement à la propreté. Je recommande vivement !"
										</p>

										<div className="flex items-center gap-2">
											<div className="">
												<Image
													src={
														'https://framerusercontent.com/images/UM7myi2umXAFWdwmEncZFkdo2js.png'
													}
													alt="avatar témoin"
													width={60}
													height={60}
												/>
											</div>
											<div className="space-y-1">
												<h1 className="text-xl font-semibold">Sarah L.</h1>
												<p>Propriétaire</p>
											</div>
										</div>
									</div>
								</div>
								<div className="embla__slide">
									<div className="border border-white/25 p-4 space-y-4">
										<p className="text-xl font-semibold">
											"Professionnel et minutieux. Je recommande vivement ! Les
											agents de nettoyage de Delta Cleaning sont arrivés à
											l'heure et ont fait un travail remarquable. Ils ont été
											courtois, efficaces et ont laissé mon appartement
											impeccable. Je suis absolument ravi de leur service !"
										</p>

										<div className="flex items-center gap-2">
											<div className="">
												<Image
													src={
														'https://framerusercontent.com/images/UM7myi2umXAFWdwmEncZFkdo2js.png'
													}
													alt="avatar témoin"
													width={60}
													height={60}
												/>
											</div>
											<div className="space-y-1">
												<h1 className="text-xl font-semibold">Sarah L.</h1>
												<p>Propriétaire</p>
											</div>
										</div>
									</div>
								</div>
								<div className="embla__slide">
									<div className="border border-white/25 p-4 space-y-4">
										<p className="text-xl font-semibold">
											"Service impeccable ! Ma maison n'a jamais été aussi
											propre. L'équipe de Delta Cleaning a été professionnelle
											et n'a laissé aucun recoin intact. Je suis vraiment
											impressionnée par leur attention aux détails et leur
											dévouement à la propreté. Je recommande vivement !"
										</p>

										<div className="flex items-center gap-2">
											<div className="">
												<Image
													src={
														'https://framerusercontent.com/images/UM7myi2umXAFWdwmEncZFkdo2js.png'
													}
													alt="avatar témoin"
													width={60}
													height={60}
												/>
											</div>
											<div className="space-y-1">
												<h1 className="text-xl font-semibold">Sarah L.</h1>
												<p>Propriétaire</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="min-h-screen max-w-7xl mx-auto grid place-content-center md:px-0 px-4 py-20">
				<div className="grid md:grid-cols-2 gap-10">
					<div className="space-y-5">
						<div className="bg-primary px-2 py-1 rounded-sm font-poppins font-regular text-md w-fit">
							Questions Fréquemment Posées
						</div>

						<h1 className="md:text-5xl text-4xl font-semibold md:w-[500px] ">
							Trouvez des réponses aux questions les plus courantes.
						</h1>
					</div>

					<div>
						<Accordion type="single" collapsible className="w-full">
							{faqs.map((faq, index) => {
								return (
									<AccordionItem
										key={index}
										tabIndex={index}
										value={`item-${index}`}
									>
										<AccordionTrigger className="md:text-2xl text-xl font-semibold">
											{faq.question}
										</AccordionTrigger>
										<AccordionContent>{faq.content}</AccordionContent>
									</AccordionItem>
								);
							})}
						</Accordion>
					</div>
				</div>
			</div>

			<div className="bg-primary md:h-[600px]">
				<div className="grid md:grid-cols-2 h-full max-w-7xl mx-auto items-center space-y-4">
					<div className="space-y-5 flex flex-col md:items-start items-center py-10">
						<h1 className="md:text-7xl text-4xl md:text-start text-center font-semibold ">
							Prêt pour un espace impeccable ?
						</h1>
						<p className="text-stone-700 md:text-start text-center">
							Vivez la différence Delta Cleaning. Contactez-nous dès aujourd'hui
							pour des services de nettoyage de qualité supérieure adaptés à vos
							besoins. Apportons éclat et brillance à votre espace !
						</p>
						<button className="bg-secondary rounded-xs px-5 py-3 text-white md:w-fit w-60">
							Réservez une visite maintenant
						</button>
					</div>

					<div className="md:size-full flex justify-center">
						<Image
							className="object-cover"
							src={
								'https://framerusercontent.com/images/Hyho7c5bj43TI4WRiGqWP76X7hs.png'
							}
							alt="image de fond"
							width={400}
							height={400}
						/>
					</div>
				</div>
			</div>

			<footer className="bg-secondary text-white md:h-[450px] md:px-0 px-4">
				<div className="h-full flex flex-col justify-between max-w-7xl mx-auto py-10 space-y-10">
					<div
						className="flex md:flex-row flex-col justify-between md:items-start 
      items-center md:gap-3 gap-10"
					>
						<div className="space-y-5 flex flex-col items-center md:items-start">
							<Image
								className="invert"
								src={
									'https://framerusercontent.com/images/4w2V1XLOvX9FiwcTUo3eU60fSoc.svg'
								}
								alt="Logo de la marque"
								width={100}
								height={100}
							/>

							<p className="text-xl md:w-80 font-semibold text-center md:text-start">
								Besoin d'aide ou avez-vous des questions ? Contactez-nous
								directement.
							</p>

							<button className="bg-primary rounded-xs px-5 py-3 text-black font-medium">
								Contactez-nous
							</button>
						</div>

						<div className="grid md:grid-cols-2 gap-10">
							<div className="space-y-5 flex flex-col md:items-start items-center">
								<h1 className="font-semibold text-xl md:text-start text-center">
									Entreprise
								</h1>

								<ul className="space-y-2 flex flex-col md:items-start items-center">
									<li>À Propos</li>
									<li>Notre Méthode</li>
									<li>Tarifs</li>
								</ul>
							</div>

							<div className="space-y-5 flex flex-col md:items-start items-center">
								<h1 className="font-semibold text-xl">Contactez-nous</h1>

								<ul className="space-y-2 flex flex-col md:items-start items-center">
									<li>123 Rue Propre, Ville Étincelante, SC 12345</li>
									<li>(123) 456-7890</li>
									<li>info@deltacleaning.com</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="flex md:flex-row flex-col justify-between items-center md:py-10 py-4 border-t border-white/25 gap-3">
						<p className="text-center">
							©Delta Cleaning. Tous droits réservés.
						</p>

						<ul className="flex gap-5">
							<li>
								<LinkedinLogo size={32} weight="fill" />
							</li>
							<li>
								<InstagramLogo size={32} weight="fill" />
							</li>
							<li>
								<FacebookLogo size={32} weight="fill" />
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</div>
	);
}
