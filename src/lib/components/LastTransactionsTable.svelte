<script>
    export let transactions = [];
</script>
<table class="table m-2">
    <thead>
    <tr>
        <!--<th>
            Timestamp
        </th>-->
        <th>
            From
        </th>
        <th>
            Item
        </th>
        <th>
            Sum
        </th>
    </tr>
    </thead>
    <tbody>
    {#each transactions as transaction}
        <tr class="first:animate-pulse">
            <!-- <td>{format(transaction.timestamp, 'yyyy-MM-dd hh:mm:ss')}</td> -->
            <td class="w-44">{transaction.from}</td>
            <td class="w-44">{transaction.merch}</td>
            <td>{ (transaction.sum).toLocaleString('et-EE', {
                style: 'currency',
                currency: 'EUR',
            })}</td>

        </tr>
    {/each}

    </tbody>
</table>

<style>

</style>
