<script>

    import RealmApp from "../lib/realm";
    import {onMount} from 'svelte';
    import MerchMetric from "../lib/components/MerchMetric.svelte";
    import ShopCard from "../lib/components/ShopCard.svelte";
    import LastOrdersTable from "../lib/components/LastOrdersTable.svelte";

    let orders = [];
    let allOrders = [];

    async function load() {
        allOrders = await RealmApp.currentUser.callFunction('getOrders');
        allOrders = allOrders.filter((e, i, self) => self.findIndex(e2 => e.OrderNum === e2.OrderNum) === i)
        orders = allOrders.slice(0,50);
    }

    onMount(async () => {
        await load();

        const watchCursor = RealmApp.currentUser.mongoClient('mongodb-atlas')
            .db('pug2022')
            .collection('cdcorders')
            .watch();

        while (watchCursor) {
            if (await watchCursor.next() !== null) {
                await load();
            }
        }
    });

</script>

<div class="flex p-5 flex-row">
    <div class="flex flex-col">
        <ShopCard/>
        <MerchMetric {allOrders} fieldName="Carrier"/>
        <MerchMetric {allOrders} fieldName="SalesRep"/>
    </div>
    <LastOrdersTable {orders}/>
</div>

