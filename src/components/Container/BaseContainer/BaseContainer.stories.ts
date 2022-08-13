import BaseContainer from "./BaseContainer.vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
    title: 'Base Container',
    component: BaseContainer
} as Meta<typeof BaseContainer>

export const Default: StoryFn<typeof BaseContainer> = () => ({
    components: {BaseContainer},
    template: '<BaseContainer></BaseContainer>'
})

export const full: StoryFn<typeof BaseContainer> = () => ({
    components: {BaseContainer},
    template: '<BaseContainer width="full"></BaseContainer>'
})