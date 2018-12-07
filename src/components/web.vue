<template>
    <div>
        <web class="web" :src="src" ref="newWeb"></web>
        <div class="bottom">
            <text class="item" @click="pre">上一页</text>
            <text class="item" @click="reload">刷新</text>
            <text class="item" @click="next">下一页</text>
        </div>
    </div>
</template>

<script>
    const webview = weex.requireModule('webview')
    
	export default {
		data() {
			return {
				src: 'https://www.baidu.com'
			}
		},
        methods: {
			start(e) {
				console.log('start')
            },
            finish() {
	            console.log('finish')
            },
            error() {
	            console.log('error')
            },
	        pre() {
				webview.goBack(this.$refs.newWeb)
            },
	        reload() {
				webview.read(this.$refs.newWeb)
            },
	        next() {
				webview.goForward(this.$refs.newWeb)
            }
        }
	}
</script>

<style>
    .web {
        height: 1300px;
        width: 750px;
        background-color: #00B4FF;
    }
    .bottom {
        flex-direction: row;
        justify-content: space-around;
        position: fixed;
        left: 0px;
        right: 0px;
        bottom: 80px;
    }
    .item {
        border-style: solid;
        border-width: 1px;
        border-color: #0088fb;
        padding: 10px;
        background-color: #00B4FF;
        color: #ffffff;
    }
</style>
