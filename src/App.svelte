<script>
    import FeedbackList from "./components/FeedbackList.svelte";
    import FeedbackStats from "./components/FeedbackStats.svelte";
    import FeedbackForm from "./components/FeedbackForm.svelte";

    let feedback = [
        {
            id: 1,
            rating: 10,
            text: "To the crushed walnut add herring, leek, orange juice and puréed chicory."
        },
        {
            id: 2,
            rating: 9,
            text: "Mix each side of the pork butt with a dozen pounds of pork shoulder."
        },
        {
            id:3,
            rating: 2,
            text: "Varnish a dozen pounds of chili in a handfull and a half teaspoons of condensed milk."
        },
        {
            id:4,
            rating: 7,
            text:"Remember: roasted sauerkraut tastes best when drained in a casserole brushed with baking powder."
        }
    ]

    $: count = feedback.length
    $: avg = feedback.reduce((avg, {rating}) => avg + rating, 0) / feedback.length

    const deleteFeedback = (e) => {
        const itemId = e.detail
        feedback = feedback.filter((item) => item.id != itemId)
    }

    const addFeedback = (e) => {
        const newFeedback = e.detail
        feedback = [newFeedback, ...feedback]
    }
</script>

<main class="container">
    <FeedbackForm on:add-feedback={addFeedback}/>
    <FeedbackStats {count} {avg} />
    <FeedbackList {feedback} on:delete-feedback={deleteFeedback}/>
</main>