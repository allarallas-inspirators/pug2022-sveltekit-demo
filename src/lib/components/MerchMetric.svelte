<script>

    export let allTransactions = [];
    let stats = [];

    let groupBy = function(xs, key) {
        return xs.reduce(function(map, x) {
             if (!map.get(x[key])) {
                 map.set(x[key], []);
             }
             map.get(x[key]).push(x);
            return map;
        }, new Map());
    };

    $: if(allTransactions) {
        let map = groupBy(allTransactions, 'merch');
        stats =  [];
        map.forEach((value, key) => {
            stats.push( {
                merch: key,
                count: value.length
            })
        });
        console.log(stats);
    }
</script>

<div class="card flex flex-col shadow-xl m-2 h-max bg-white min-h-96">
    <div class="card-body">
    {#each stats as stat,i}
        <div class="flex">
            <div class="w-44">{stat.merch}: {i}</div> <progress class="progress w-32 progress-primary" value="{stat.count/allTransactions.length*stats.length*50}" max="100"></progress>
        </div>
    {/each}
    </div>
</div>


<style>

</style>
