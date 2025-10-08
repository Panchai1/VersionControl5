<template>
  <q-page padding class="bg-grey-2">
    <div class="q-pa-md">
      <q-card class="q-pa-lg shadow-2 rounded-xl max-w-md mx-auto">
        <q-card-section>
          <div class="text-h6 text-center">Basic Form</div>
        </q-card-section>

        <q-separator />

        <q-card-section>
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input
              filled
              v-model="form.name"
              label="Full Name"
              required
            />
            <q-input
              filled
              v-model="form.email"
              type="email"
              label="Email"
              required
            />
            <q-input
              filled
              v-model="form.password"
              type="password"
              label="Password"
              required
            />

            <div class="row justify-between q-mt-md">
              <q-btn label="Submit" type="submit" color="primary" />
              <q-btn label="Reset" type="reset" color="secondary" flat />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  password: ''
})

function onSubmit() {
  alert(`ชื่อ: ${form.value.name}\nอีเมล: ${form.value.email}`)
}

function onReset() {
  form.value = { name: '', email: '', password: '' }
}
</script>
