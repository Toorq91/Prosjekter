<template>
  <div class="bg-neutral-900 min-h-screen">
    <h1 class="flex flex-col items-center text-center text-6xl font-bold underline w-full py-20
  text-transparent bg-clip-text bg-gradient-to-t from-yellow-500  to-red-500 shadow-xl shadow-red-500">
  Hjem:
</h1>
    <div class="flex flex-col items-center justify-center min-h-screen text-center -mt-60">
    <ul class="p-[10px] bg-gradient-to-r from-neutral-800/60 via-red-500/60 to-yellow-500/70 rounded-lg">
      <ul>
        <li class="w-[700px] py-4 text-neutral-900 text-5xl font-semibold transition duration-500 ease-in-out
        bg-gradient-to-b from-red-500 to-yellow-500
        hover:bg-gradient-to-b hover:from-yellow-500/60 hover:to-red-500/60">
        <RouterLink to="/about" class="block px-4 py-4 hover:text-blue-500/70 transition duration-500">
             Om meg
          </RouterLink>
        </li>
        <li class="w-[700px] py-4 text-neutral-900 text-5xl font-semibold transition duration-500 ease-in-out
        bg-gradient-to-b from-red-500 to-yellow-500
        hover:bg-gradient-to-b hover:from-yellow-500/60 hover:to-red-500/60">
          <RouterLink to="/interests" class="block px-4 py-4 hover:text-blue-500/70 transition duration-500">
            Interesser
          </RouterLink>
        </li>
        <li class="w-[700px] py-4 text-neutral-900 text-5xl font-semibold transition duration-500 ease-in-out
                   bg-gradient-to-b from-red-500 to-yellow-500
                   hover:bg-gradient-to-b hover:from-yellow-500/60 hover:to-red-500/60">
          <RouterLink to="/" class="block px-4 py-4 hover:text-blue-500/70 transition duration-500">
            Loading...
          </RouterLink>
        </li>
        <li class="w-[700px] py-4 text-neutral-900 text-5xl font-semibold transition duration-500 ease-in-out
                   bg-gradient-to-b from-red-500 to-yellow-500
                   hover:bg-gradient-to-b hover:from-yellow-500/60 hover:to-red-500/60">
          <RouterLink to="/" class="block px-4 py-4 hover:text-blue-500/70 transition duration-500">
            Loading...
          </RouterLink>
        </li>
        <li class="w-[700px] py-4 text-neutral-900 text-5xl font-semibold transition duration-500 ease-in-out
                   bg-gradient-to-b from-red-500 to-yellow-500
                   hover:bg-gradient-to-b hover:from-yellow-500/60 hover:to-red-500/60">
          <RouterLink to="/" class="block px-4 py-4 hover:text-blue-500/70 transition duration-500">
            Loading...
          </RouterLink>
        </li>
      </ul>
    </ul>
  </div>
</div>
</template>

