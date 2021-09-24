<template>
    <div class="grid grid-cols-12">
        <div class="col-span-12">
            <form>
                <div class="form-group">
                    <label>First Name: </label>
                    <input type="text" class="form-control" v-model.trim="$v.firstname.$model" :class="{'is-invalid': $v.firstname.$error, 'is-valid': !$v.firstname.invalid}">
                    <div class="valid-feedback">Your first name is valid!</div>
                    <div class="invalid-feedback">
                        <span v-if="!$v.firstname.required">First name is required.</span>
                        <span v-if="!$v.firstname.minLength">First name must have at least {{ $v.firstname.$params.minLength.min }} letters.</span>
                        <span v-if="!$v.firstname.minLength">First name must have at least {{ $v.firstname.$params.maxLength.max }} letters.</span>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import useVuelidate from '@vuelidate/core'
import { required, minLength, maxLength } from "vuelidate/lib/validators"

export default {
    name: "FormValidation",
    setup () {
        return { v$: useVuelidate() }
    },
    data () {
        return {
            firstname: '',
        }
    },
    validations() {
        return {
            firstname: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(10),
            }
        }
    }
}
</script>

<style scoped>

</style>