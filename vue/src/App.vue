<template>
  <NavBar />

  <main class="h-screen w-[50rem] mx-auto pt-28 pb-4 flex flex-col justify-between items-center">
    <HelloI18n />
    
    <section class="w-full h-40 bg-detalhes rounded-2xl mb-20">
      <ul class="flex flex-col justify-center items-center list-disc text-fonte h-full flex-wrap">
        <li v-for="item in techs" :key="item" class="mb-1 w-[10rem]">
          {{item}}
        </li>
      </ul>
    </section>

    <nav class="mx-auto flex">
      <button 
          @click="$i18n.locale = locales[0]"
          class="transition-all hover:brightness-90 mr-4 box-border w-32 h-12 bg-detalhes flex items-center justify-center rounded-md text-fonte"
        >
            <img class="mr-2" src="@/assets/icons/brasil.svg" alt=""/>
            <p>Português</p>
        </button>

        <button 
          @click="$i18n.locale = locales[1]"
          class="transition-all hover:brightness-90 mr-4 box-border w-32 h-12 bg-detalhes flex items-center justify-center rounded-md text-fonte"
        >
            <img class="mr-2" src="@/assets/icons/eua.svg" alt=""/>
            <p>Inglês</p>
        </button>

        <button 
          @click="$i18n.locale = locales[2]"
          class="transition-all hover:brightness-90 mr-4 box-border w-32 h-12 bg-detalhes flex items-center justify-center rounded-md text-fonte"
        >
            <img class="mr-2" src="@/assets/icons/espanha.svg" alt=""/>
            <p>Espanhol</p>
        </button>
    </nav>
  </main>
</template>

<script>
import HelloI18n from './components/HelloI18n.vue';
import NavBar from './components/NavBar.vue'

import { useI18n } from 'vue-i18n'

export default {
  name: 'App',
  components: {
    HelloI18n,
    NavBar
  },
  setup() {
            const { t } = useI18n({
            inheritLocale: true,
            useScope: 'local'
            })
            // Something todo ..
            return { t }
        },
  data() {
    return {
      techs: [
        'HTML',
        'CSS',
        'Java',
        'React',
        'JavaScript',
        'Angular',
        'Vue',
        'Sass',
        'Tailwind',
        'Typescript',
        'Styled-components'
      ],
      locales: ["pt", "en", "es"],
    }
  },
}
</script>

