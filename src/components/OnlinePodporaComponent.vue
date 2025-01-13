<template>
  <section class="py-24">
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <div class="bg-gray-50 p-8 rounded-lg shadow">
        <h2 class="text-indigo-600 text-2xl font-bold mb-6">Máte nějaké otázky?</h2>
        <form @submit.prevent="handleSubmit">
          <div class="space-y-4">
            <input
              v-model="formData.name"
              type="text"
              class="w-full p-3 text-gray-700 border rounded-md"
              placeholder="Jméno a příjmení"
              required
            />
            <input
              v-model="formData.email"
              type="email"
              class="w-full p-3 text-gray-700 border rounded-md"
              placeholder="E-mail"
              required
            />
            <textarea
              v-model="formData.message"
              class="w-full p-3 text-gray-700 border rounded-md"
              placeholder="Zpráva"
              rows="4"
              required
            ></textarea>
            <div>
              <input type="checkbox" class="mr-2" required />
              <span class="text-sm text-gray-600">Souhlasím s podmínkami ochrany osobních údajů</span>
            </div>
            <button
              :class="isSubmitted ? 'bg-gray-600' : 'bg-indigo-600 hover:bg-indigo-800'"
              type="submit"
              class="w-full py-3 text-white rounded-md"
            >
              {{ isSubmitted ? 'Odesláno' : 'Odeslat' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
      isSubmitted: false,
    };
  },
  methods: {
    handleSubmit() {
      console.log('Form data:', this.formData);
      this.isSubmitted = true;

      setTimeout(() => {
        this.isSubmitted = false;
      }, 3000);
    },
  },
};
</script>

<style scoped>
input, textarea {
  border: 1px solid #d1d5db; /* light gray border */
}
</style>
