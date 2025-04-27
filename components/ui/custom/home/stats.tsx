import React from 'react';

export default function Stats() {
  return (
    <div className="bg-secondary text-white space-y-8 py-20 md:px-0 px-4">
      <div className="flex justify-center items-center flex-col gap-10">
        <h1 className="md:text-5xl text-4xl font-semibold">
          Pourquoi nous choisir
        </h1>
        <p className="text-[16px] max-w-3xl mx-auto text-center">
          Découvrez notre différence avec nos services de nettoyage
          exceptionnels, soutenus par des chiffres impressionnants qui
          démontrent notre engagement envers la qualité et la satisfaction de la
          clientèle.
        </p>
      </div>

      <div className="grid md:grid-flow-col gap-10 max-w-7xl mx-auto">
        <div className="border border-primary rounded-md flex flex-col justify-center items-center h-full md:p-15 p-6 gap-4">
          <h5 className="text-6xl font-semibold">100+</h5>
          <p>Années d'expérience</p>
        </div>
        <div className="border border-primary rounded-md flex flex-col justify-center items-center h-full md:p-15 p-6 gap-4">
          <h5 className="text-6xl font-semibold">98%</h5>
          <p>Taux de satisfaction</p>
        </div>
        <div className="border border-primary rounded-md flex flex-col justify-center items-center h-full md:p-15 p-6 gap-4">
          <h5 className="text-6xl font-semibold">1 000+</h5>
          <p>Espaces nettoyés</p>
        </div>
        <div className="border border-primary rounded-md flex flex-col justify-center items-center h-full md:p-10 p-6 gap-4">
          <h5 className="text-6xl font-semibold">100%</h5>
          <p>Produits écologiques</p>
        </div>
      </div>
    </div>
  );
}
