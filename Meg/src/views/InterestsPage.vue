<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-neutral-900 text-center">
    <h1 class="text-6xl font-bold text-red-500">Mine interesser</h1>
    <ul class="text-2xl mt-4 list-disc border-6 border-red-500">
      <ul>
        <li class="px-4 py-2 bg-gradient-to-tr from-red-500 to-yellow-500 text-neutral-900 text-4xl font-semibold">
          <RouterLink to="/discgolf" class="block px-4 py-2 hover:text-red-400 transition">
          🥏 Disc golf
        </RouterLink>
      </li>
        <li class="px-4 py-2 bg-gradient-to-bl from-red-500 to-yellow-500 text-neutral-900 text-4xl font-semibold">
          <RouterLink to="/tv" class="block px-4 py-2 hover:text-red-400 transition">
          📺 TV series/Movies/Anime
        </RouterLink>
      </li>
        <li class="border-2 border-red-500 text-4xl text-green-600">
          <RouterLink to="/tv" class="block px-4 py-2 hover:text-red-400 transition">
          🎮 Gaming
          </RouterLink>
        </li>
        <li class="border-2 border-red-500 text-4xl text-green-600">🎶 Musikk</li>
        <li class="border-2 border-red-500 text-4xl text-green-600">💻 Programmering</li>
      </ul>
    </ul>
  </div>
</template>
