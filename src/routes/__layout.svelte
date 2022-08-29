<script lang="ts">
    import "$lib/global.css";
    import {onMount} from "svelte";
    import RealmApp from "../lib/realm";
    import {Credentials} from "realm-web";

    onMount(async () => {
        if (!RealmApp.currentUser) {
            const credentials = Credentials.anonymous();
            await RealmApp.logIn(credentials);
        }
    });

</script>
<div class="bg-slate-200">
<slot></slot>
</div>
