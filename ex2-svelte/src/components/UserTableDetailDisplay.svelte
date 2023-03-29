<script lang="ts">
    import { goto } from "$app/navigation";
    import type { User } from "../types/User";

    export let user: User;

    function getRandomImgPath(): string {
        let min = 0;
        let max = 4;
        let randomNum = Math.ceil(Math.random() * (max - min) + min);
        return "img/" + randomNum + ".png";
    }
</script>

<div class="container">
    <div style="display: flex; align-items: center;">
        <div class="card">
            <img src={getRandomImgPath()} alt="avatar" />
        </div>
        <div class="info-container">
            <div class="label-value-container">
                <p class="label">Jméno</p>
                <p class="value">{user.firstName}</p>
            </div>
            <div class="label-value-container">
                <p class="label">Příjmení</p>
                <p class="value">{user.lastName}</p>
            </div>
            <div class="label-value-container">
                <p class="label">Email</p>
                <p class="value">{user.email}</p>
            </div>
        </div>

        <div class="info-container">
            <div class="label-value-container">
                <p class="label">Firma</p>
                <p class="value">{user.company.name}</p>
            </div>
            <div class="label-value-container">
                <p class="label">Země</p>
                <p class="value">{user.company.country}</p>
            </div>
        </div>
    </div>

    <div class="buttons-container">
        <a href="/{user.id}" target="_blank">Otevřít v novém okně</a>
    </div>
</div>

<style>
    a{
color: black;
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
    }

    .buttons-container {
        display: flex;
        justify-content: end;
        margin: 0px 40px;
    }

    .card img {
        width: 100%;
        height: 100%;
        display: block;
    }

    .card {
        width: 160px;
        height: 200px;
        border-radius: 28px;
        border: 1px solid black;
        overflow: hidden;
    }

    .info-container {
        display: block;
        margin-right: 40px;
    }

    .label {
        font-weight: bold;
        text-align: start;
        margin: 0;
    }

    .value {
        margin: 0px 30px;
        text-align: start;
    }

    .label-value-container {
        margin-left: 20px;
        margin-bottom: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
</style>
