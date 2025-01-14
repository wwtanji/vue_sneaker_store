<template>
  <div
    class="max-w-3xl mx-auto p-6 bg-gray-50 rounded-xl shadow-lg font-sans text-gray-800 mt-8 mb-8"
  >
    <!-- Title -->
    <h1 class="text-4xl font-bold text-center mb-8 text-gradient">Záruka Autenticity</h1>
    <p class="text-xl text-center mb-10 text-gray-600">Pohodlný nákup bez starostí</p>

    <!-- Description -->
    <p class="text-lg mb-8 text-gray-700 leading-relaxed">
      Našou hlavnou prioritou je vytvoriť maximálny zážitok pri nakupovaní vašich obľúbených
      značiek. Aby sme to dosiahli, chceme zabezpečiť, aby sa zákazníci pri nakupovaní cítili
      bezpečne a mali plnú dôveru v legitimitu a kvalitu produktov. Veríme tiež, že proces nákupu u
      nás by mal smerovať k celkovej udržateľnosti...
    </p>

    <!-- Sustainability Section -->
    <h2 class="text-3xl font-semibold mt-16 text-gray-800">Čo pre nás znamená udržateľnosť?</h2>
    <p class="text-lg text-gray-700 mb-8">
      Pre nás sa udržateľnosť netýka iba ekologických výziev. Vo SneakerStore chápeme udržateľnosť
      ako zodpovednosť voči zákazníkom, komunite a nášmu prostrediu, vrátane životného prostredia...
    </p>

    <!-- Accordion for Questions and Answers -->
    <div class="mt-8 space-y-6">
      <div class="accordion-item">
        <button
          class="w-full text-left px-6 py-4 bg-gray-200 rounded-lg text-lg font-semibold hover:bg-gray-300 transition duration-300"
          @click="toggleAnswer('guarantee')"
        >
          Ako garantujeme originalitu?
        </button>
        <div v-if="isAnswerActive('guarantee')" class="px-6 py-4 bg-gray-100 mt-2 rounded-md">
          <p>
            V SneakerStore máte prístup k rade prémiových produktov s vedomím, že to, čo kupujete,
            je pravé. Každý jednotlivý predmet, ktorý cez nás prejde, prechádza náročným procesom
            kontroly...
          </p>
          <div class="ml-6 mt-4 space-y-4">
            <h3 class="text-lg font-semibold">Krok 1: Naskladnenie</h3>
            <p>
              Dbáme na to, aby sme naše produkty odoberali iba od pôvodných výrobcov a dôveryhodných
              zdrojov.
            </p>

            <h3 class="text-lg font-semibold mt-4">Krok 2: Kontrola</h3>
            <p>Produkt je starostlivo kontrolovaný našimi pracovníkmi...</p>

            <h3 class="text-lg font-semibold mt-4">Krok 3: Expedícia</h3>
            <p>
              Produkt je pripravený na odoslanie kupujúcemu iba ak prešiel predchádzajúcim krokom...
            </p>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <button
          class="w-full text-left px-6 py-4 bg-gray-200 rounded-lg text-lg font-semibold hover:bg-gray-300 transition duration-300"
          @click="toggleAnswer('quality')"
        >
          Ako kontrolujeme kvalitu?
        </button>
        <div v-if="isAnswerActive('quality')" class="px-6 py-4 bg-gray-100 mt-2 rounded-md">
          <p>
            Produkty, ktoré ponúkame, sú nenosené a v pôvodnom stave, vrátane pôvodných doplnkov
            (napríklad náhradných šnúrok) a pôvodných obalov (krabice v prípade obuvi). Vo svete
            sneakers sa tento stav tiež označuje termínom DS. DS je skratka pre 'DeadStock', čo
            znamená úplne nové, 'fresh' a v pôvodnom stave...
          </p>
        </div>
      </div>

      <div class="accordion-item">
        <button
          class="w-full text-left px-6 py-4 bg-gray-200 rounded-lg text-lg font-semibold hover:bg-gray-300 transition duration-300"
          @click="toggleAnswer('customers')"
        >
          Čo ponúkame našim zákazníkom?
        </button>
        <div v-if="isAnswerActive('customers')" class="px-6 py-4 bg-gray-100 mt-2 rounded-md">
          <p>
            Našou najcennejšou komoditou vo SneakerStore sú bezpochyby naši zákazníci. Získavanie,
            udržiavanie a pomoc zákazníkom je preto dôležitou súčasťou dosiahnutia dlhodobej
            udržateľnosti...
          </p>
        </div>
      </div>

      <div class="accordion-item">
        <button
          class="w-full text-left px-6 py-4 bg-gray-200 rounded-lg text-lg font-semibold hover:bg-gray-300 transition duration-300"
          @click="toggleAnswer('environment')"
        >
          Ako môžeme znížiť náš dopad?
        </button>
        <div v-if="isAnswerActive('environment')" class="px-6 py-4 bg-gray-100 mt-2 rounded-md">
          <p>
            V Sneakerstore nám veľmi záleží na udržateľnosti životného prostredia. Je to
            problematika, ktorá je pravdepodobne najčastejšie spojená s podnikovou udržateľnosťou...
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AutenticitaComponent',
  data() {
    return {
      activeAnswers: [] // Changed to an array to store multiple active answers
    }
  },
  methods: {
    // Toggle the visibility of a specific answer
    toggleAnswer(answer) {
      const index = this.activeAnswers.indexOf(answer)
      if (index > -1) {
        // If it's already active, remove it
        this.activeAnswers.splice(index, 1)
      } else {
        // Otherwise, add it to the array
        this.activeAnswers.push(answer)
      }
    },
    // Check if a particular answer is active
    isAnswerActive(answer) {
      return this.activeAnswers.includes(answer)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

/* Title gradient text */
.text-gradient {
  background: black;
  -webkit-background-clip: text;
  color: transparent;
}
</style>
