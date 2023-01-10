import React from 'react'

export const Content = () => {
  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            INFORMÁCIE O CVIČENIACH
          </h1>
          <p className='font-sans font-light pt-2 pl-4 '>
            Všetky študijné materiály potrebné k zvládnutiu náplne predmetu formou riadeného samoštúdia (s využitím technológie e-learningu) sú poskytované študentom prostredníctvom LMS (Learning Management System) systému v rámci akademického programu Cisco – portál: www.netacad.com. Prostredníctvom tohto LMS je zabezpečované aj priebežné overovanie vedomostí študentov. Náplň cvičení vychádza z osnovy predmetu.
          </p>
          <p className='font-sans font-light pt-2 pl-4 '>
            Cvičenia sa budú konať podľa rozvrhu cvičení pre jednotlivé študijné skupiny v laboratóriu L534A, 5. poschodie, hlavná budova TU Košice. Zmeny v rozvrhu cvičení resp. zaradení do skupín budú vykonané len na základe dohovoru medzi cvičiacim a študentom v odôvodnených prípadoch (kolidovanie cvičenia s iným a pod.). Presuny medzi študijnými skupinami počas výučby nebudú možné, účasť na cvičeniach je povinná.
          </p>
          <p className='font-sans font-light pt-2 pl-4 '>
            Náplň cvičení je založená na praktických cvičeniach kurzu CyberOps. Náplň a priebeh cvičení sa bude riadiť časovým harmonogramom štúdia. Študenti sú cvičiacim zaradení do virtuálnej triedy prostredníctvom portálu netacad.com, ktorého administratívne prostredie bude využívané v priebehu celého semestra pre riadenie výučby. Študenti majú prostredníctvom portálu sprístupnené učebné texty kurzov. Súčasťou učebného textu sú aj návody na cvičenia.
          </p>
          <p className='font-sans font-light pt-2 pl-4 '>
            Študenti sú povinní vykonávať priebežné testy podľa stanoveného časového harmonogramu štúdia. O dodatočné aktivovanie testov (mimo časového harmonogramu štúdia) je možné požiadať iba osobne na cvičení a len v odôvodniteľných prípadoch.
          </p>
          <h1 className="text-3xl font-bold text-gray-900 pt-3 pb-3">
            HODNOTENIE PREDMETU
          </h1>
          <p className='font-sans text-xl font-semibold pb-2'>
            Podmienky udelenia zápočtu
          </p>
          <ul class="max-w-2xl font-light space-y-1 text-black-500 list-disc list-inside dark:text-black-400 pb-2 pl-4">
            <li>
              Max. 3 absencie z cvičenia.
            </li>
            <li>
              Min. 21 bodov zo zápočtu, min. 31 bodov zo skúšky.
            </li>
            <li>
              Znalosť základov technickej angličtiny.
            </li>
            <li>
              Vykonávanie priebežných testov z modulov na portáli NetAcad.
            </li>
            <li>
              Podvádzanie: Vylúčenie z cvičenia (Opakované podvádzanie: Vylúčenie z predmetu).
            </li>
          </ul>
          <h1 className="text-3xl font-bold text-gray-900">
            Zápočet – max. 40 bodov:
          </h1>
          <p className='font-sans font-light pt-2 pl-4 '>
            Študent má možnosť získať:
          </p>
          <ul class="max-w-2xl font-light space-y-1 text-black-500 list-disc list-inside dark:text-black-400 pb-2 pl-4">
            <li>
              cvičenia z predmetu sú konzultačné,
            </li>
            <li>
              študent získava zápočet za absolvovanie priebežných testov z kurzu CyberOps Associate 1.0 (každý priebežný test nad 70% úspešnosť),
            </li>
            <li>
              výška zápočtu je daná percentom prepočtu výsledku záverečného testu kurzu CyberOps Associate (na prezenčnom cvičení v 11. týždni semestra, opravný final v 12. týždni semestra)
            </li>
          </ul>
          <h1 className="text-3xl font-bold text-gray-900">
            Skúška – max. 60 bodov:

          </h1>
          <p className='font-sans font-light pt-2 pl-4 '>
            maximálne 60 bodov za ústnu odpoveď, minimálne 31 pre úspešné absolvovanie ústnej odpovede
          </p>
 </div>
      </header>
    </div>
  )
}
