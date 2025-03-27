<template>
  <div class="bg-gradient-to-b from-black via-neutral-800 to-teal-500 min-h-screen">
    <h1 class="flex flex-col items-center text-center text-6xl font-bold underline w-full py-10
      text-transparent bg-clip-text bg-gradient-to-b from-sky-400 via-teal-400 to-black shadow-lg shadow-red-500">
      Thor Christer Halvorsen Eikeland:
    </h1>

    <div class="flex flex-col items-center justify-center flex-1 text-center py-30 relative w-full px-6">
      <div class="p-[20px] rounded-xl bg-gradient-to-r from-red-500/60 via-yellow-500/70 to-yellow-500/20 relative w-full max-w-4xl">
        <div class="p-[20px] rounded-xl bg-neutral-900 relative z-10">

          <!-- Your main text content -->
          <p class="leading-relaxed text-white text-md font-bold">
            Jeg har nylig fullført kurs i CSS, HTML, JavaScript, C#, SQL,
            og andre teknologier, noe som har gitt meg en solid teknisk
            grunnmur og økt interesse for IT-utvikling.
            <br><br>
            Jeg trives med problemløsning, finjustering av detaljer, og
            effektiv gjennomføring av oppgaver, både selvstendig og i team.
            Etter en periode med helseutfordringer, har jeg fokusert på
            personlig utvikling og kommet sterkere ut av det.
            Nå søker jeg en arbeidsplass hvor jeg kan trives, utvikle meg
            videre, og få mer erfaring innen IT-utvikling.
          </p>
          <br>
          <h1 class="text-red-500 font-extrabold underline scale-100 text-xl text-left">
            Arbeidserfaring:
          </h1>
          <br>
          <div class="border-4 border-red-500 pt-6 rounded-xl">
            <div class="leading-relaxed text-white text-md font-bold border-b-4 border-b-red-500 pb-6">
              Sitecom AS (Deltids) <br>
              Telemontør, Vestfold & Telemark:<br>
              Utførte risikofylte oppgaver i samarbeid med
              helikopterflyging og arbeid på eller nær ved
              spenningssatte anlegg.
            </div>
            <br>
            <div class="leading-relaxed text-white text-md font-bold border-b-4 border-b-red-500 pb-6">
              Sitecom AS (Fulltid) <br>
              Telemontør, Vestfold & Telemark: <br>
              Levering og feilsøking av fibertjenester for
              bedriftskunder hos Broadnet.
              Opprettholdt god dialog med både
              prosjektledere og kunder.
              Ansvarlig for oppløring av nye ansatte.
            </div>
            <br>
          <div class="leading-relaxed text-white text-md font-bold pb-6">
            Sønnico (Eltel) <br>
            Lærling, Telemark: <br>
            Lærling hos Sønnico til bestått fagprøve.
          </div>
        </div>
          <br><br>
          <h1 class="text-yellow-500 font-extrabold underline scale-100 text-xl text-left">
            Utdannelse:
          </h1>
          <br>
          <div class="leading-relaxed text-white text-md font-bold border-4 border-yellow-500 rounded-xl">
                Get Academy (Fulltid) <br>
                Student, Nettbasert kurs: <br>
                Da ingen i gruppen tok lederrollen, tok jeg
                ansvar og startet organiseringen for å sikre at
                gruppeprosjektet ble ferdig.
                Var med på å starte det første studentrådet
                og tok opp saker fra fagskolens elever om
                frobedringspotensiale.
          </div>

        </div>

        <div class="absolute inset-0 z-10 pointer-events-none">
      <div class="absolute w-full h-full flex flex-wrap justify-around items-center opacity-20">

        <!-- Block 1 -->
        <div class="absolute top-52.5 left-57 w-22 h-22 bg-gradient-to-t from-sky-500 to-teal-500 rounded-full shadow-lg shadow-orange-500 animate-float"></div>

        <!-- Block 2 -->
        <div class="absolute top-63 right-18 w-18 h-18 bg-gradient-to-b from-teal-400 to-sky-600 rounded-xl shadow-lg shadow-blue-500 animate-float delay-1000"></div>

        <!-- Block 3 -->
        <div class="absolute top-106 left-30 w-24 h-24 bg-gradient-to-b from-teal-500 to-sky-700 rounded-xl shadow-lg shadow-green-500 animate-float delay-2000"></div>

        <!-- Block 4 -->
        <div class="absolute top-160 right-20 w-40 h-40 bg-gradient-to-b from-sky-700 to-teal-700 rounded-full shadow-xl shadow-purple-500 animate-float delay-1500"></div>

        <!-- Block 5 -->
        <div class="absolute top-192 left-50 w-28 h-28 bg-gradient-to-b from-teal-500 to-sky-600 rounded-full shadow-lg shadow-pink-500 animate-float delay-500"></div>
      </div>
    </div>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}
.animate-float {
  animation: float 5s ease-in-out infinite;
}
.delay-500 { animation-delay: 0.5s; }
.delay-1000 { animation-delay: 1s; }
.delay-1500 { animation-delay: 1.5s; }
.delay-2000 { animation-delay: 2s; }
</style>
