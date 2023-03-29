<script lang="ts">
    import UserTableDetailDisplay from "../../components/UserTableDetailDisplay.svelte";
    import { userStore } from "../../stores/userDataStore";
    import type { User } from "../../types/User";
    export let data;

    let user: User | undefined = $userStore.find((x) => x.id.toString() == data.userId);
</script>

<div class="content">
    {#if user !== undefined}
        <UserTableDetailDisplay {user} />
    {:else}
        <div>Nenalezeno</div>
    {/if}
</div>

<style>
    .content {
        justify-content: center;
        align-items: center;
        margin: 100px;
    }
</style>
