import {writable} from "svelte/store";

export const FeedbackStore = writable([
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
        id: 3,
        rating: 2,
        text: "Varnish a dozen pounds of chili in a handfull and a half teaspoons of condensed milk."
    },
    {
        id: 4,
        rating: 7,
        text: "Remember: roasted sauerkraut tastes best when drained in a casserole brushed with baking powder."
    }
])