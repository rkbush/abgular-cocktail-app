<template>
  <div class="card border border-slate-500 shadow-xl">
    <figure>
      <img
        class="w-full"
        loading="lazy"
        :src="`${props.drink.strDrinkThumb}`" 
        alt="Drink" 
      />
    </figure>
    <div class="card-body px-5">
      <h2 class="card-title mb-2">
        {{ props.drink.strDrink }}
      </h2>
      <p class="text-justify leading-relaxed">
        <b>Glass:</b> {{ props.drink.strGlass }}
        <br />
        <br />
        <b>Ingredients:</b> {{ ingredients }}
        <br />
        <br />
        <b>Instructions:</b> {{ instructions }}
      </p>
    </div>
    <div class="flex gap-2 p-5 -mt-5">
      <div :class="`badge text-white gap-2 ${props.drink.strAlcoholic === 'Alcoholic' ? 'bg-red-600' : 'bg-blue-600'}` ">
        {{ props.drink.strAlcoholic }}
      </div>
      <div class="badge badge-info gap-2">
        {{ props.drink.strCategory }}
      </div>
    </div>
  </div>
</template>
<script setup>
  import { computed } from 'vue';
  import { languages } from '../enums/language';

  const props = defineProps({
    drink: {
      required: true
    },
    language: {
      required: true
    }
  });
  const instructions = computed(() => {
    let desc = props.drink.strInstructions;

    switch (props.language) {
      case languages.German:
        desc = props.drink.strInstructionsDE ?? props.drink.strInstructions;
        break;
      case languages.Spanish:
        desc = props.drink.strInstructionsES ?? props.drink.strInstructions;
        break;
      case languages.Italian:
        desc = props.drink.strInstructionsIT ?? props.drink.strInstructions;
        break;
      default:
        desc = props.drink.strInstructions
    }

    return desc;
  });
  const ingredients = computed(() => {
    let desc = [];
    
    for (let step = 1; step <= 15; step++) {
      if (props.drink[`strIngredient${step.toString()}`]) {
        desc.push(props.drink[`strIngredient${step.toString()}`]);
      }
    }

    if (desc.length > 0) {
      desc = desc.join(', ');
    }

    return desc;
  });
</script>