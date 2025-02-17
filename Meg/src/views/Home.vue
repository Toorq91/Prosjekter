<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-600 text-center">
    <h1 class="text-3xl font-bold mb-6">Velkommen til min personlige app</h1>
    <div class="space-x-4">
      <RouterLink to="/about" class="px-4 py-2 bg-blue-500 text-white rounded">Om meg</RouterLink>
      <RouterLink to="/interests" class="px-4 py-2 bg-green-500 text-white rounded">Interesser</RouterLink>
    </div>
  </div>
</template>
