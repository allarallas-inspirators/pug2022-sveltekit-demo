<script>
    export let orders = [];

    console.log('orders', orders);
</script>
<table class="table m-2 w-screen">
    <thead>
        <tr>
            <th>OrderNum</th>
            <th>Carrier</th>
            <th>OrderStatus</th>
            <th>SalesRep</th>
            <th>Instructions</th>
        </tr>
    </thead>
    <tbody>
    {#each orders as order}
        <tr class="first:animate-pulse">
            <td>{order.OrderNum}</td>
            <td>{order.Carrier}</td>
            <td>{order.OrderStatus}</td>
            <td>{order.SalesRep}</td>
            <td>{order.Instructions}</td>
        </tr>
    {/each}

    </tbody>
</table>

<style>

</style>
