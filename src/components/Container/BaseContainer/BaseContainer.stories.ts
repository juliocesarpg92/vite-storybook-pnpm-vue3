import BaseContainer from "./BaseContainer.vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
    title: 'Base Container',
    component: BaseContainer
} as Meta<typeof BaseContainer>

export const full: StoryFn<typeof BaseContainer> = () => ({
    components: {BaseContainer},
    template: '<BaseContainer width="full"></BaseContainer>'
})

export const half: StoryFn<typeof BaseContainer> = () => ({
    components: {BaseContainer},
    template: '<BaseContainer width="half"></BaseContainer>'
})