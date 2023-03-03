<template>
    <DefaultField
        :field="field"
        :errors="errors"
        :show-help-text="showHelpText"
    >
        <template #field>

            <div class="o1-flex o1-flex-col">
                <div class="o1-flex o1-flex-wrap o1-items-stretch o1-w-56 o1-relative">

                    <div class="o1-flex" style="width: 50%">
                        <input
                            :id="field.attribute"
                            type="number"
                            step="0.1"
                            class="o1-flex-shrink o1-flex-grow o1-flex-auto o1-leading-normal o1-w-px o1-flex-1 o1-rounded-l-none form-control form-input form-input-bordered"
                            :class="errorClasses"
                            :placeholder="field.name"
                            :max="maxLenght"
                            v-model="value"
                        />
                    </div>

                    <div class="o1-flex o1--mr-px">
                        <span
                            class="o1-flex o1-items-center o1-leading-normal o1-rounded o1-border o1-border-l-0 o1-border-gray-300 o1-px-3 o1-whitespace-no-wrap o1-text-80 o1-text-sm o1-font-bold dark:o1-border-gray-700 o1-rounded-l-none"
                        >
                          €
                        </span>
                    </div>

                </div>
            </div>


        </template>
    </DefaultField>
</template>

<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova'

export default {
    mixins: [FormField, HandlesValidationErrors],

    props: ['resourceName', 'resourceId', 'field'],

    data(){
        return {
            maxLenght: 50
        }
    },

    methods: {
        /*
         * Set the initial, internal value for the field.
         */
        setInitialValue() {
            this.value = this.field.value || ''
        },

        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill(formData) {
            formData.append(this.field.attribute, this.value || '')
        },
    },
}
</script>
