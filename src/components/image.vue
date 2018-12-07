<template>
    <div>
        <image class="icon" :src="src" ></image>
    </div>
</template>

<script>
	export default {
		name: "image",
        data() {
			return {
				src: 'local://app_icon120.png', //https://www.baidu.com/img/bd_logo1.png
				placeholder:'local:///app_icon120.png'
            }
        }
	}
</script>

<style scoped>
    .icon {
        width: 600px;
        height: 400px;
    }
</style>
