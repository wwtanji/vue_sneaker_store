<template>
  <div class="max-w-7xl mx-auto px-6 py-12 bg-gray-50 mt-24 mb-24">
    <p class="text-black text-center text-xl md:text-2xl leading-relaxed mb-12">
      Všechno naše zboží je kvalitně zabaleno, aby nedošlo k poškození při přepravě, a to ve dvou
      krabicích (krabice s teniskami uvnitř lepenkové krabice). Zboží je expedováno v nejkratším
      možném čase. O všem budete informováni prostřednictvím emailu, ve kterém obdržíte sledovací
      číslo vaší zásilky.
    </p>

    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
      <div class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
        <img src="/svg/money.svg" alt="Možnosti platby" class="w-12 h-12 mb-4" />
        <h3 class="text-xl md:text-2xl font-semibold text-black mb-2">Možnosti platby</h3>
        <p class="text-black text-sm">
          Máte na výběr bankovní převod, dobírku (pouze pro expresní doručení), platbu kartou nebo
          Twisto platbu na splátky. Platba kartou (VISA, MasterCard, Apple Pay, Google Pay) je mezi
          našimi zákazníky nejoblíbenější pro svou rychlost a bezpečnost. Dobírka je možná pouze pro
          produkty s expresním doručením. Tuto možnost si ověříte u jednotlivých velikostí bot a při
          prvním kroku objednávky.
        </p>
      </div>

      <div class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
        <img src="/svg/post.svg" alt="Možnosti dopravy" class="w-12 h-12 mb-4" />
        <h3 class="text-xl md:text-2xl font-semibold text-black mb-2">Možnosti dopravy</h3>
        <p class="text-black text-sm">
          Nabízíme 2 možnosti doručení: 1) Expresní doručení – produkty, které expedujeme do 24
          hodin. 2) Standardní doručení – produkty z externích skladů s dobou doručení 3 až 10
          pracovních dní.
        </p>
      </div>

      <div class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
        <img src="/svg/transport-truct.svg" alt="Zásilkovna" class="w-12 h-12 mb-4" />
        <h3 class="text-xl md:text-2xl font-semibold text-black mb-2">
          Zásilkovna na výdejní místo
        </h3>
        <p class="text-black text-sm">
          Nechcete čekat na kurýra? Vyberte si nejbližší výdejní místo a zásilku si vyzvedněte, až
          budete mít čas.
        </p>
      </div>

      <div class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
        <img src="/svg/handshake.svg" alt="Doručení na adresu" class="w-12 h-12 mb-4" />
        <h3 class="text-xl md:text-2xl font-semibold text-black mb-2">Doručení na adresu</h3>
        <p class="text-black text-sm">
          Zboží Vám doručíme přímo na Vaši adresu, ať už domů, nebo do práce. Doručení zajišťují
          společnosti PPL a Packeta. O datu a čase doručení budete informováni e-mailem a SMS
          zprávou.
        </p>
      </div>

      <div class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
        <img src="/svg/rocket.svg" alt="Dodatočné zrýchlené odoslanie" class="w-12 h-12 mb-4" />
        <h3 class="text-xl md:text-2xl font-semibold text-black mb-2">
          Dodatočné zrýchlené odoslanie
        </h3>
        <p class="text-black text-sm">
          Na některý z našich produktů může být k dispozici možnost dodatečného zrýchleného
          odeslání, které výrazně zkrátí dobu čekání na doručení. Dostupnost ověříte v košíku.
          Dodatečné zrýchlené odeslání lze dojednat prostřednictvím Chatbota nebo e-mailem, a to i
          po dokončení objednávky.
        </p>
      </div>

      <div class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
        <img src="/svg/global.svg" alt="Doprava a platba pre Slovensko" class="w-12 h-12 mb-4" />
        <h3 class="text-xl md:text-2xl font-semibold text-black mb-2">
          Doprava a platba pre Slovensko
        </h3>
        <p class="text-black text-sm">
          Tovar na Slovensko je doručovaný službou Packeta na výdejní místo nebo na adresu. Platba
          je možná v Eurách kartou, na dobírku nebo převodem na bankovní účet (IBAN).
        </p>
      </div>
    </div>

    <div class="mt-24"></div>
  </div>
</template>

<script>
export default {
  name: 'DeliveryAndPayment'
}
</script>

<style scoped>
body {
  font-family: 'Open Sans', sans-serif;
}
</style>
