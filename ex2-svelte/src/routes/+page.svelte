<script lang="ts">
    import { onMount } from "svelte";
    import UserTableDetailDisplay from "../components/UserTableDetailDisplay.svelte";
    import TiArrowRight from "svelte-icons/ti/TiArrowRight.svelte";
    import type { User } from "../types/User";
    import "./tableStyles.css";
    import { userStore } from "../stores/userDataStore";

    let userList: User[] = $userStore;

    let selectedId: number | null = 1;
    let lastSelectedDivId: string | undefined;
    function tableRowClicked(id: number) {
        if (lastSelectedDivId !== undefined)
            document
                .getElementById(lastSelectedDivId)
                ?.classList.remove("selected");

        if (id == selectedId) {
            selectedId = null;
            return;
        }

        selectedId = id;

        const className = "table-row";
        const elem = document.getElementById(className + "-" + id);
        elem?.classList.add("selected");

        lastSelectedDivId = elem?.id;
    }
</script>

<svelte:head>
    <title>Exaple 2</title>
</svelte:head>

<main class="content">
    <table>
        <thead>
            <tr class="tr-table-header">
                <th>Id</th>
                <th>Jméno</th>
                <th>Příjmení</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {#each userList as user (user.id)}
                <tr
                    id={"table-row-" + user.id}
                    class="table-row"
                    on:click={() => tableRowClicked(user.id)}
                >
                    <td>{user.id}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                </tr>
                {#if selectedId === user.id}
                    <tr class="row-detail">
                        <td colspan="4">
                            <div class="row-detail-content">
                                <UserTableDetailDisplay {user} />
                            </div>
                        </td>
                    </tr>
                {/if}
            {/each}
        </tbody>
    </table>
</main>

<style>
    :global(.table-row.selected) {
        background-color: var(--selected-color);
    }

    .row-detail {
        border-left: 1px solid black;
        border-right: 1px solid black;
    }

    .row-detail-content {
        display: flex;
        width: 100%;
        padding: 10px 15px;
    }

    .table-row:hover:not(.selected) {
        background-color: var(--selected-color);
        cursor: pointer;
    }
</style>
