<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FooterComponent',
  data() {
    return {
      linkGroups: {
        Company: {
          About: '#',
          Careers: '#',
          'Brand Center': '#',
          Blog: '#',
        },
        'Help Center': {
          'Discord Server': '#',
          Twitter: '#',
          Facebook: '#',
          'Contact Us': '#',
        },
        Legal: {
          'Privacy Policy': '#',
          Licensing: '#',
          'Terms & Conditions': '#',
        },
        Download: {
          iOS: '#',
          Android: '#',
          Windows: '#',
          MacOS: '#',
        },
      },
    }
  },
  computed: {
    currentYear(): number {
      return new Date().getFullYear()
    },
  },
})
</script>

<template>
  <footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl">
      <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <!-- Генерація категорій і посилань -->
        <div v-for="(links, groupName) in linkGroups" :key="groupName">
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            {{ groupName }}
          </h2>
          <ul class="text-gray-500 dark:text-gray-400 font-medium">
            <li v-for="(href, linkName) in links" :key="linkName" class="mb-4">
              <a :href="href" class="hover:underline">
                {{ linkName }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Нижня частина футера -->
      <div class="text-center py-4 border-t border-gray-200 dark:border-gray-700">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          &copy; 2020 - {{ currentYear }} Your Company. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
