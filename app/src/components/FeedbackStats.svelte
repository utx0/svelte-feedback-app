<script>
    import {FeedbackStore} from "../stores";

    export let count
    export let avg

    $: count = $FeedbackStore.length
    $: avg = $FeedbackStore.reduce((avg, {rating}) => avg + rating, 0) / $FeedbackStore.length
</script>

<div class="feedback-stats">
    <h4>{count} Reviews</h4>
    <h4>Ratings Avg: {avg}</h4>
</div>

<style>
    .feedback-stats {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>