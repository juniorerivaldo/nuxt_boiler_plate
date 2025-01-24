<template>
	<div class="flex bg-black h-screen">
        <!-- sidebar -->
		<div class="bg-zinc-900 w-[516px] p-12 flex flex-col justify-center">
			<Logo/>
            <h1 class="font-bold text-lg text-white mt-8">
                Sign up for free account
            </h1>
            <p class="text-sm text-zinc-300 mt-0.5">Already registered? <span class="font-bold text-[#FFAC00] underline">Log in </span>to your account</p>
            <div class="mt-12">
                <label for="email" class="block text-zinc-300 text-sm mb-1">Email Address</label>
                <input type="email" placeholder="you@exemple.com" class="block bg-zinc-700 w-full border border-zinc-600 rounded text-white p-2 placeholder:text-zinc-400 text-sm">
            </div>
             <div class="mt-6">
                <label for="password" class="block text-zinc-300 text-sm mb-1">Password</label>
                <input type="password" placeholder="************" class="block bg-zinc-700 w-full border border-zinc-600 rounded text-white p-2 placeholder:text-zinc-400 text-sm">
            </div>
            <div class="mt-6">
                <button class="w-full mt-4 bg-[#FFAC00] rounded-full p-2 text-sm font-bold flex justify-center items-center gap-2">Sign Up<ArrowRight/></button>
            </div>
		</div>
        <!-- /sidebar -->
         <!-- note introduction -->
          <div>

          </div>
          <!-- /note introduction -->
	</div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'custom'
})
</script>
