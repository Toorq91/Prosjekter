<template>
  <div class="bg-gradient-to-br from-black via-neutral-800 to-teal-500 min-h-screen">
    <h1 class="flex flex-col items-center text-center text-6xl font-bold underline w-full py-10
  text-transparent bg-clip-text bg-gradient-to-t from-yellow-500 via-pink-400  to-red-500 shadow-lg shadow-red-500">
  Mine interesser:
</h1>
<div class="flex flex-col items-center justify-center flex-1 text-center py-30">
    <ul class="p-[20px] bg-gradient-to-r from-neutral-800/60 via-red-500/60 to-yellow-500/70 rounded-lg">
      <ul>
        <li class="w-[700px] py-2 text-neutral-900 text-5xl font-semibold transition duration-300 ease-in-out
        bg-gradient-to-b from-red-500 to-yellow-500
        hover:bg-gradient-to-b hover:from-yellow-500/60 hover:to-red-500/60">
        <RouterLink to="/discgolf" class="block px-4 py-2 hover:text-blue-500/70 transition duration-300">
            🥏 Disc golf
          </RouterLink>
        </li>
        <li class="w-[700px] py-2 text-neutral-900 text-5xl font-semibold transition duration-300 ease-in-out
        bg-gradient-to-b from-red-500 to-yellow-500
        hover:bg-gradient-to-b hover:from-yellow-500/60 hover:to-red-500/60">
          <RouterLink to="/tv" class="block px-4 py-2 hover:text-blue-500/70 transition duration-300">
            📺 TV series/Movies/Anime
          </RouterLink>
        </li>
        <li class="w-[700px] py-2 text-neutral-900 text-5xl font-semibold transition duration-300 ease-in-out
                   bg-gradient-to-b from-red-500 to-yellow-500
                   hover:bg-gradient-to-b hover:from-yellow-500/60 hover:to-red-500/60">
          <RouterLink to="/gaming" class="block px-4 py-2 hover:text-blue-500/70 transition duration-300">
            🎮 Gaming
          </RouterLink>
        </li>
        <li class="w-[700px] py-2 text-neutral-900 text-5xl font-semibold transition duration-300 ease-in-out
                   bg-gradient-to-b from-red-500 to-yellow-500
                   hover:bg-gradient-to-b hover:from-yellow-500/60 hover:to-red-500/60">
          <RouterLink to="/music" class="block px-4 py-2 hover:text-blue-500/70 transition duration-300">
            🎶 Musikk
          </RouterLink>
        </li>
        <li class="w-[700px] py-2 text-neutral-900 text-5xl font-semibold transition duration-300 ease-in-out
                   bg-gradient-to-b from-red-500 to-yellow-500
                   hover:bg-gradient-to-b hover:from-yellow-500/60 hover:to-red-500/60">
          <RouterLink to="/trening" class="block px-4 py-2 hover:text-blue-500/70 transition duration-300">
            🏋️‍♂️ Trening
          </RouterLink>
        </li>
        <li class="w-[700px] py-2 text-neutral-900 text-5xl font-semibold transition duration-300 ease-in-out
                   bg-gradient-to-b from-red-500 to-yellow-500
                   hover:bg-gradient-to-b hover:from-yellow-500/60 hover:to-red-500/60">
          <RouterLink to="/programmering" class="block px-4 py-2 hover:text-blue-500/70 transition duration-300">
            💻 Programmering
          </RouterLink>
        </li>
      </ul>
    </ul>
  </div>
</div>
</template>
