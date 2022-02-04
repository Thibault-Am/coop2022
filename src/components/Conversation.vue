<template>
    <router-link : to="{'Conversation',{idConversation:conversation.id}}">
        <p>{{conversation.topic}}</p>
        <p>{{conversation.label}}</p>
    </router-link>
</template>

<script>
export default {
    props: ["conversation"],
}
</script>

<style>

</style>