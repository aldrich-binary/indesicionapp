<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
</script>

<template>
  <div class="flex items-center space-x-3">
    <div class="relative">
      <Avatar class="rounded-md">
        <AvatarImage
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Kelly King"
          class="object-cover"
        />
        <AvatarFallback>KK</AvatarFallback>
      </Avatar>
      <span
        class="border-background absolute -end-1 -top-1 size-3 rounded-full border-2 bg-emerald-500"
      >
        <span class="sr-only">Online</span>
      </span>
    </div>
    <div class="flex flex-col">
      <h3 class="font-medium">Kelly King</h3>
      <p class="text-sm">En línea</p>
    </div>
  </div>
</template>
