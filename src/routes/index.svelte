<script>

    import RealmApp from "../lib/realm";
    import {onDestroy, onMount} from 'svelte';
    import {format} from 'date-fns';
    import MerchMetric from "../lib/components/MerchMetric.svelte";
    import ShopCard from "../lib/components/ShopCard.svelte";
    import LastTransactionsTable from "../lib/components/LastTransactionsTable.svelte";


    let transactions = [];
    let allTransactions = [];
    let intervals = [];

    async function load() {
        transactions = await RealmApp.currentUser.callFunction('pollTransactions', '');
    }
    async function loadAll() {
        allTransactions = await RealmApp.currentUser.callFunction('getAllTransactions', '');
    }

    async function insertMaybe() {
        if (Math.floor(Math.random() * 100) < 20) return;
        var customer = [
            'Jamie Wilkerson',
            'Moriah Cameron',
            'Bradyn Bender',
            'Ariana Price',
            'Johanna Best',
            'Athena Haas',
            'Curtis Bright',
            'Nathaly Baker',
            'Jaxson Harrington',
            'Jamir Hoover'
        ];
        var merch = [
            'PUG MUG',
            'PUG Shirt',
            'PUG Hoodie',
            'PUG Bow Tie',
            'PUG Collar',
            'PUG Mask',
            'PUG Fedora',
            'PUG Backpack',
            'PUG Surprise item',
            'PUG Puppie'
        ];

        var customerIndex = Math.floor(Math.random() * 10);
        var merchIndex = Math.floor(Math.random() * 10);
        await RealmApp.currentUser.callFunction('mock/transactions',
            {
                sum: Math.random() * 100,
                from: customer[customerIndex],
                merch: merch[merchIndex],
                timestamp: new Date()
            });
    }

    onMount(() => {
        load();
        intervals.push(setInterval(() => load(), 500));
        intervals.push(setInterval(() => loadAll(), 1000));
        intervals.push(setInterval(() => insertMaybe(), 1000));
        intervals.push(setInterval(() => (transactions = transactions), 1000));
    });

    onDestroy(() => {
        intervals.forEach(interval => clearInterval(interval));
    });


</script>

<div class="flex p-5">

    <ShopCard/>
    <LastTransactionsTable {transactions}/>
    <MerchMetric {allTransactions}/>

</div>
<style>

</style>

