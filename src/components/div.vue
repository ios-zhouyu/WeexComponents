<template>
    <div class="box" @click="click" @appear="appear" @disappear="disappear" @longpress="longpress" @viewappear="viewappear" @viewdisappear="viewdisappear">
        <text class="text">{{name}}</text>
    </div>
</template>

<script>
	export default {
		name: "div",
        data() {
			return {
				name: ''
            }
        },
        methods: {
	        click() {
                this.name = 'click'
            },
	        appear() {
		        this.name = 'appear'
            },
	        longpress() {
		        this.name = 'longpress'
            },
	        viewappear() {
		        this.name = 'viewappear'
            },
	        viewdisappear() {
		        this.name = 'viewdisappear'
            }
        }
	}
</script>

<style scoped>
    .box {
        display: block;
        background-color: #00B4FF;
    }
    .text {
        width: 200px;
        height: 90px;
    }
</style>
