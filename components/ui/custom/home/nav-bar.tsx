'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { AlignRight, X } from 'lucide-react';

export default function NavBar() {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleMenuToggle = () => setMenuOpen(prev => !prev);
	const closeMenu = () => setMenuOpen(false);

	return (
		<nav className="flex justify-between items-center h-[100px] max-w-7xl mx-auto absolute top-0 left-0 right-0 z-10 md:px-0 px-4">
			{/* Logo + Desktop Nav */}
			<div className="flex items-center gap-10">
				<Image
					src="https://framerusercontent.com/images/4w2V1XLOvX9FiwcTUo3eU60fSoc.svg"
					alt="Brand logo"
					width={100}
					height={100}
				/>
				<div className="hidden md:block">
					<ul className="flex gap-10">
						<li>
							<Link href="#" className="text-md font-poppins">
								Notre approche
							</Link>
						</li>
						<li>
							<Link href="#" className="text-md font-poppins">
								Nos Services
							</Link>
						</li>
						<li>
							<Link href="#" className="text-md font-poppins">
								Nos Tarifs
							</Link>
						</li>
						<li>
							<Link href="#" className="text-md font-poppins">
								Notre Equipe
							</Link>
						</li>
					</ul>
				</div>
			</div>

			{/* Desktop Button */}
			<button className="hidden md:block bg-secondary rounded-sm px-5 py-3 text-white font-semibold">
				Contactez-nous
			</button>

			{/* Mobile Icon */}
			<button className="md:hidden block" onClick={handleMenuToggle}>
				{menuOpen ? (
					<X size={30} color="black" />
				) : (
					<AlignRight size={30} color="black" />
				)}
			</button>

			{/* Mobile Menu */}
			<div
				className={`fixed top-[0px] left-0 right-0 bg-white shadow-md transform transition-transform duration-300 ease-in-out -z-30 md:hidden ${
					menuOpen ? 'translate-y-20' : '-translate-y-full'
				}`}
			>
				<ul className="flex flex-col gap-5 px-6 py-5">
					<li>
						<Link href="#" onClick={closeMenu} className="text-md font-poppins">
							Notre approche
						</Link>
					</li>
					<li>
						<Link href="#" onClick={closeMenu} className="text-md font-poppins">
							Nos Services
						</Link>
					</li>
					<li>
						<Link href="#" onClick={closeMenu} className="text-md font-poppins">
							Nos Tarifs
						</Link>
					</li>
					<li>
						<Link href="#" onClick={closeMenu} className="text-md font-poppins">
							Notre Equipe
						</Link>
					</li>
					<li>
						<button className="w-full bg-secondary rounded-sm px-5 py-3 text-white font-semibold mt-4">
							Contactez-nous
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
}
