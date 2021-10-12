<template>
    <div id="app">
        <!-- 方式1 -->
        <!-- <username-popup :info="{ name: '测试标题1' }" :sureback="(input) => { return input; }"></username-popup> -->
    </div>
</template>

<script>

// import UsernamePopup from '@/components/UsernamePopup';
export default {
    // components: { UsernamePopup },
    data() {
        return {};
    },
    methods: {},
    mounted() {
        // 方式2
        this.$popup({
            info: { name: '测试标题2' },
            sureback: (input) => {
                console.log(1111, input);
            }
        });
    },
    created() {}
};
</script>
<style lang="less"></style>
