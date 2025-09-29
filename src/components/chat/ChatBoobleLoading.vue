<template>
  <div class="flex w-[21%]">
    <div class="bg-[#F3F4F6] rounded-2xl rounded-tl-none px-6 py-4 w-md">
      <div class="flex gap-1.5">
        <div
          class="w-2.5 h-2.5 bg-gray-500 rounded-full animate-bounce"
          :style="{ animationDelay: '0ms', animationDuration: '1.4s' }"
        ></div>
        <div
          class="w-2.5 h-2.5 bg-gray-500 rounded-full animate-bounce"
          :style="{ animationDelay: '200ms', animationDuration: '1.4s' }"
        ></div>
        <div
          class="w-2.5 h-2.5 bg-gray-500 rounded-full animate-bounce"
          :style="{ animationDelay: '400ms', animationDuration: '1.4s' }"
        ></div>
      </div>
    </div>
  </div>
</template>
