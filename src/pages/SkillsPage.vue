<template>
  <q-page class="q-pt-xl bg-secondary" style="min-height: auto">
    <!-- Hard Skills -->
    <h1 class="text-center text-white">Hard Skilss</h1>
    <div class="row">
      <div class="col">
        <div>
          <q-carousel
            animated
            v-model="slide"
            arrows
            navigation
            infinite
            class="bg-secondary"
          >
            <q-carousel-slide :name="1" class="column no-wrap">
              <div
                class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <q-img
                  class="rounded-borders col"
                  style="height: 350px"
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
                <q-img
                  class="rounded-borders col"
                  style="height: 350px"
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
                <q-img
                  class="rounded-borders col"
                  style="height: 350px"
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
                <q-img
                  class="rounded-borders col"
                  style="height: 350px"
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
                <q-img
                  class="rounded-borders col"
                  style="height: 350px"
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
                <q-img
                  class="rounded-borders col"
                  style="height: 350px"
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" class="column no-wrap">
              <div
                class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <q-img
                  class="rounded-borders col"
                  style="height: 350px"
                  src="https://cdn.quasar.dev/img/mountains.jpg"
                />
                <q-img
                  class="rounded-borders col"
                  style="height: 350px"
                  src="https://cdn.quasar.dev/img/mountains.jpg"
                />
                <q-img
                  class="rounded-borders col"
                  style="height: 350px"
                  src="https://cdn.quasar.dev/img/mountains.jpg"
                />
                <q-img
                  class="rounded-borders col"
                  style="height: 350px"
                  src="https://cdn.quasar.dev/img/mountains.jpg"
                />
                <q-img
                  class="rounded-borders col"
                  style="height: 350px"
                  src="https://cdn.quasar.dev/img/mountains.jpg"
                />
                <q-img
                  class="rounded-borders col"
                  style="height: 350px"
                  src="https://cdn.quasar.dev/img/mountains.jpg"
                />
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </div>
    <!-- soft Skills -->
    <!-- <h1 class="text-center text-white">Soft Skilss</h1>
    <div class="row">
      <div class="col">
        <div>
          <q-carousel
            animated
            v-model="slide"
            arrows
            navigation
            infinite
            class="bg-secondary"
          >
            <q-carousel-slide :name="1" class="column no-wrap">
              <div
                class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <q-img
                  class="rounded-borders col"
                  style="height: 350px"
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
                <q-img
                  class="rounded-borders col"
                  style="height: 350px"
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
                <q-img
                  class="rounded-borders col"
                  style="height: 350px"
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
                <q-img
                  class="rounded-borders col"
                  style="height: 350px"
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
                <q-img
                  class="rounded-borders col"
                  style="height: 350px"
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
                <q-img
                  class="rounded-borders col"
                  style="height: 350px"
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" class="column no-wrap">
              <div
                class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <q-img
                  class="rounded-borders col"
                  style="height: 350px"
                  src="https://cdn.quasar.dev/img/mountains.jpg"
                />
                <q-img
                  class="rounded-borders col"
                  style="height: 350px"
                  src="https://cdn.quasar.dev/img/mountains.jpg"
                />
                <q-img
                  class="rounded-borders col"
                  style="height: 350px"
                  src="https://cdn.quasar.dev/img/mountains.jpg"
                />
                <q-img
                  class="rounded-borders col"
                  style="height: 350px"
                  src="https://cdn.quasar.dev/img/mountains.jpg"
                />
                <q-img
                  class="rounded-borders col"
                  style="height: 350px"
                  src="https://cdn.quasar.dev/img/mountains.jpg"
                />
                <q-img
                  class="rounded-borders col"
                  style="height: 350px"
                  src="https://cdn.quasar.dev/img/mountains.jpg"
                />
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </div> -->
  </q-page>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
    };
  },
};
</script>
