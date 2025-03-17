<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-neutral-900 text-center">
    <h1 class="text-3xl font-bold mb-6 text-red-500">Velkommen til siden om meg</h1>
    <div class="space-x-4">
      <RouterLink to="/about" class="px-4 py-2 bg-gradient-to-r from-red-500 to-yellow-500 text-neutral-900 rounded text-4xl font-semibold">Om meg</RouterLink>
      <RouterLink to="/interests" class="px-4 py-2 bg-gradient-to-l from-red-500 to-yellow-500 text-netural-900 rounded text-4xl font-semibold border border-red-500">Interesser</RouterLink>
    </div>
  </div>
</template>
