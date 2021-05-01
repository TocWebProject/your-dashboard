<template>
    <form action="/" method="POST">
        <div class="relative">
            <div class="w-4 text-blue-900 absolute top-3 left-3">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="text" class="w-full pl-10 bg-blue-50 rounded-lg h-10 text-gray-800 outline-none focus:ring-2 focus:ring-blue-500">
        </div>
    </form>
</template>

<script>
export default {
    name: 'SearchForm',
}
</script>