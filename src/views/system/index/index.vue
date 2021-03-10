<template lang="pug">
    div(style="background-color:#fff;height:100%")
        router-view(:key="$route.path")
        div(class="index-logo")
            img(class="page-login--logo" src="../login/image/logo@2x.png")
</template>
<style scope>
    .index-logo{
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

    }
</style>