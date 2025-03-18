<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-neutral-900 text-center">
    <h1 class="text-6xl font-bold text-red-500">Mine interesser</h1>
    <ul class="text-2xl mt-4 list-disc border-6 border-green-500">
      <ul>
        <li class="px-4 py-2 bg-gradient-to-b from-red-500 to-yellow-500 text-neutral-900 text-4xl font-semibold">
         <RouterLink to="/discgolf" class="block px-4 py-2 hover:text-blue-400 transition">
          🥏 Disc golf
         </RouterLink>
      </li>
        <li class="px-4 py-2 bg-gradient-to-b from-red-500 to-yellow-500 text-neutral-900 text-4xl font-semibold">
         <RouterLink to="/tv" class="block px-4 py-2 hover:text-blue-400 transition">
          📺 TV series/Movies/Anime
         </RouterLink>
      </li>
        <li class="px-4 py-2 bg-gradient-to-b from-red-500 to-yellow-500 text-neutral-900 text-4xl font-semibold">
          <RouterLink to="/gaming" class="block px-4 py-2 hover:text-blue-400 transition">
          🎮 Gaming
          </RouterLink>
        </li>
        <li class="px-4 py-2 bg-gradient-to-b from-red-500 to-yellow-500 text-neutral-900 text-4xl font-semibold">
          <RouterLink to="/music" class="block px-4 py-2 hover:text-blue-400 transition">
          🎶 Musikk
          </RouterLink>
        </li>
        <li class="px-4 py-2 bg-gradient-to-b from-red-500 to-yellow-500 text-neutral-900 text-4xl font-semibold">
          <RouterLink to="/programmering" class="block px-4 py-2 hover:text-blue-400 transition">
          💻 Programmering
          </RouterLink>
        </li>
      </ul>
    </ul>
  </div>
</template>
