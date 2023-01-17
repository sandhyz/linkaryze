<template>
  <div>
    <router-view v-slot="{ Component }">
        <suspense timeout="0">
        <template #default>
            <component :is="Component" :key="$route.path"></component>
        </template>
        <template #fallback>
            <div class="flex justify-center items-center w-full h-full">
                Loading ...
            </div>
        </template>
        </suspense>
    </router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>