<template>
  <div class="bg-neutral-900 min-h-screen">
    <h1 class="flex flex-col items-center text-center text-6xl font-bold underline w-full py-20
  text-transparent bg-clip-text bg-gradient-to-l from-yellow-500  to-red-500 shadow-xl shadow-red-500">
  Mine interesser:
</h1>
    <div class="flex flex-col items-center justify-center min-h-screen text-center -mt-80">
    <ul class="p-[10px] bg-gradient-to-r from-neutral-800/60 via-red-500/60 to-yellow-500/70 rounded-lg">
      <ul>
        <li class="px-4 py-2 text-neutral-900 text-4xl font-semibold transition duration-500 ease-in-out
        bg-gradient-to-b from-red-500 to-yellow-500
        hover:bg-gradient-to-b hover:from-yellow-500/40 hover:to-red-500/40">
        <RouterLink to="/discgolf" class="block px-4 py-2 hover:text-blue-500/70 transition duration-500">
            🥏 Disc golf
          </RouterLink>
        </li>
        <li class="px-4 py-2 text-neutral-900 text-4xl font-semibold transition duration-500 ease-in-out
        bg-gradient-to-b from-red-500 to-yellow-500
        hover:bg-gradient-to-b hover:from-yellow-500/40 hover:to-red-500/40">
          <RouterLink to="/tv" class="block px-4 py-2 hover:text-blue-500/70 transition duration-500">
            📺 TV series/Movies/Anime
          </RouterLink>
        </li>
        <li class="px-4 py-2 text-neutral-900 text-4xl font-semibold transition duration-500 ease-in-out
                   bg-gradient-to-b from-red-500 to-yellow-500
                   hover:bg-gradient-to-b hover:from-yellow-500/40 hover:to-red-500/40">
          <RouterLink to="/gaming" class="block px-4 py-2 hover:text-blue-500/70 transition duration-500">
            🎮 Gaming
          </RouterLink>
        </li>
        <li class="px-4 py-2 text-neutral-900 text-4xl font-semibold transition duration-500 ease-in-out
                   bg-gradient-to-b from-red-500 to-yellow-500
                   hover:bg-gradient-to-b hover:from-yellow-500/40 hover:to-red-500/40">
          <RouterLink to="/music" class="block px-4 py-2 hover:text-blue-500/70 transition duration-500">
            🎶 Musikk
          </RouterLink>
        </li>
        <li class="px-4 py-2 text-neutral-900 text-4xl font-semibold transition duration-500 ease-in-out
                   bg-gradient-to-b from-red-500 to-yellow-500
                   hover:bg-gradient-to-b hover:from-yellow-500/40 hover:to-red-500/40">
          <RouterLink to="/programmering" class="block px-4 py-2 hover:text-blue-500/70 transition duration-500">
            💻 Programmering
          </RouterLink>
        </li>
      </ul>
    </ul>
  </div>
</div>
</template>
