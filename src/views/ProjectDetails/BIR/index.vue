<template>
    <div class="flex w-full border border-black">
        <div class="border border-red-900 w-full p-3">
            <ul class="flex">
                <li class="mr-5"><a href="#">Home /</a></li>
                <li class="mr-5"><a href="#">Admin Panel /</a></li>
                <li class="mr-5"><a href="#">Projects /</a></li>
                <li class="mr-5">BIR</li>
            </ul>
        </div>
    </div>
    <div class="container">
        <ul class="flex space-x-2 text-white">
            <li><button @click="currentTab(1)" class="inline-block px-4 py-2 bg-blue-500">Tab 1</button></li>
            <li><button @click="currentTab(2)" class="inline-block px-4 py-2 bg-blue-500">Tab 2</button></li>
            <li><button @click="currentTab(3)" class="inline-block px-4 py-2 bg-blue-500">Tab 3</button></li>
        </ul>
        <div class="p-3 mt-6 bg-white border">
            <div v-if="tab === 1">
                <div class="grid grid-cols-12">
                    <div class="col-span-10">
                        <div class="grid grid-cols-12">
                            <div class="col-span-6">
                                <div class="main">
                                    <div class="title">
                                        <h5 class="before:(border-b-2 border-purple-600)">Journal Info</h5>
                                    </div>
                                    <div class="journal-form">
                                        <div class="flex items-center my-5">
                                            <label class="w-1/2">HWP</label>
                                             <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                                        </div>
                                        <div class="flex items-center my-5">
                                            <label class="w-1/2">HWP</label>
                                             <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                                        </div>
                                        <div class="flex items-center my-5">
                                            <label class="w-1/2">HWP</label>
                                             <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                                        </div>
                                        <div class="flex items-center my-5">
                                            <label class="w-1/2">HWP</label>
                                             <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                                        </div>
                                        <div class="flex items-center my-5">
                                            <label class="w-1/2">HWP</label>
                                             <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                                        </div>
                                        <div class="flex items-center my-5">
                                            <label class="w-1/2">HWP</label>
                                             <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                                        </div>
                                        <div class="flex items-center my-5">
                                            <label class="w-1/2">HWP</label>
                                             <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-6">
                                <h5>Publisher details</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <p>What some help?</p>
                    </div>
                </div>
            </div>
            <div v-if="tab === 2">
                Tab 2 Content show Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. aliquam rem. Exercitationem corporis eius voluptatibus.
            </div>
            <div v-if="tab === 3">
                Tab 3 Content show Lorem ipsum dolor sit amet consectetur adipisicing
                elit.
            </div>
        </div>
    </div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "BIR",
  data() {
    return {
      tab: 1,
    };
  },
  methods: {
    currentTab: function (tabNumber) {
      this.tab = tabNumber;
    },
  },
  components: {},
};
</script>
