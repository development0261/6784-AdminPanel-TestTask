<template>
  <div class="border-b border-b-black">
    <div class="container mx-auto px-4 max-w-full">
      <div class="flex w-full">
        <div class="w-full p-3">
          <ul class="flex">
            <li class="mr-2"><a href="#" class="underline">Home</a></li>
            /
            <li class="mr-2 ml-2">
              <a href="#" class="underline">Admin Panel</a>
            </li>
            /
            <li class="mr-2 ml-2">
              <a href="#" class="underline">Projects</a>
            </li>
            /
            <li class="mr-2 ml-2 text-purple-500">BIR</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto px-4 max-w-full mt-5">
    <div class="flex justify-between items-center">
      <ul class="flex tabs-section">
        <li>
          <button
            @click="currentTab(1)"
            class="
              bg-gray-300
              rounded-t-md
              text-gray-500
              py-2
              px-3
              border border-gray-300
              active-tab
              border-b-none
            "
          >
            Project info
          </button>
        </li>
        <li class="ml-2">
          <button
            @click="currentTab(2)"
            class="
              bg-gray-300
              rounded-t-md
              text-gray-500
              py-2
              px-3
              border border-gray-300
            "
          >
            Article details
          </button>
        </li>
      </ul>
      <ul class="flex">
        <li>
          <a
            href="#"
            class="
              bg-white
              border
              rounded-md
              border-purple-500
              text-sm text-purple-500
              py-2
              px-3
            "
            ><font-awesome-icon class="" icon="copy" /> Copy to new project</a
          >
        </li>
        <li class="ml-4">
          <a
            href="#"
            class="
              bg-white
              border
              rounded-md
              border-purple-500
              text-sm text-purple-500
              py-2
              px-3
            "
            ><font-awesome-icon icon="trash" /> Delete project</a
          >
        </li>
        <li class="ml-4">
          <a
            href="#"
            class="
              text-white
              border
              rounded-md
              border-purple-500
              text-sm
              bg-purple-500
              py-2
              px-3
            "
            ><font-awesome-icon icon="pen" /> Edit project</a
          >
        </li>
      </ul>
    </div>

    <div class="p-5 bg-white border mt-1">
      <div v-if="tab === 1">
        <div class="grid grid-cols-12">
          <div class="col-span-9">
            <div class="grid grid-cols-12">
              <div class="col-span-6 pr-10">
                <div class="main">
                  <div class="title">
                    <h4
                      class="
                        font-semibold
                        border-b-2 border-purple-500
                        inline-block
                      "
                    >
                      Journal Info
                    </h4>
                  </div>
                  <div class="journal-form">
                    <div class="flex items-center my-5 pl-3">
                      <label class="w-1/2 pr-2 font-semibold text-sm"
                        >HWP</label
                      >
                      <input
                        class="
                          appearance-none
                          border
                          rounded
                          text-sm
                          w-full
                          py-2
                          px-3
                          text-gray-700
                          leading-tight
                          focus:outline-none focus:shadow-outline
                        "
                        id="username"
                        type="text"
                        placeholder="HWP"
                      />
                    </div>
                    <div class="flex items-center my-5 pl-3">
                      <label class="w-1/2 pr-2 font-semibold text-sm"
                        >Publisher ID</label
                      >
                      <input
                        class="
                          appearance-none
                          border
                          rounded
                          text-sm
                          w-full
                          py-2
                          px-3
                          text-gray-700
                          leading-tight
                          focus:outline-none focus:shadow-outline
                        "
                        id="username"
                        type="text"
                        placeholder="Publisher ID"
                      />
                    </div>
                    <div class="flex items-center my-5 pl-3">
                      <label class="w-1/2 pr-2 font-semibold text-sm"
                        >Journal title</label
                      >
                      <input
                        class="
                          appearance-none
                          text-sm
                          border
                          rounded
                          w-full
                          py-2
                          px-3
                          text-gray-700
                          leading-tight
                          focus:outline-none focus:shadow-outline
                        "
                        id="username"
                        type="text"
                        placeholder="Journal title"
                      />
                    </div>
                    <div class="flex items-center my-5 pl-3">
                      <label class="w-1/2 pr-2 font-semibold text-sm"
                        >Journal title abbrv.</label
                      >
                      <input
                        class="
                          appearance-none
                          text-sm
                          border
                          rounded
                          w-full
                          py-2
                          px-3
                          text-gray-700
                          leading-tight
                          focus:outline-none focus:shadow-outline
                        "
                        id="username"
                        type="text"
                        placeholder="Journal title abbrv."
                      />
                    </div>
                    <div class="flex items-center my-5 pl-3">
                      <label class="w-1/2 pr-2 font-semibold text-sm"
                        >PPUB ISSN</label
                      >
                      <input
                        class="
                          appearance-none
                          text-sm
                          border
                          rounded
                          w-full
                          py-2
                          px-3
                          text-gray-700
                          leading-tight
                          focus:outline-none focus:shadow-outline
                        "
                        id="username"
                        type="text"
                        placeholder="PPUB ISSN"
                      />
                    </div>
                    <div class="flex items-center my-5 pl-3">
                      <label class="w-1/2 pr-2 font-semibold text-sm"
                        >EPUB IISN</label
                      >
                      <input
                        class="
                          appearance-none
                          text-sm
                          border
                          rounded
                          w-full
                          py-2
                          px-3
                          text-gray-700
                          leading-tight
                          focus:outline-none focus:shadow-outline
                        "
                        id="username"
                        type="text"
                        placeholder="EPUB IISN"
                      />
                    </div>
                    <div class="flex items-center my-5 pl-3">
                      <label class="w-1/2 pr-2 font-semibold text-sm"
                        >DOI Prefix</label
                      >
                      <input
                        class="
                          appearance-none
                          text-sm
                          border
                          rounded
                          w-full
                          py-2
                          px-3
                          text-gray-700
                          leading-tight
                          focus:outline-none focus:shadow-outline
                        "
                        id="username"
                        type="text"
                        placeholder="DOI Prefix"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-span-6 pr-10">
                <div class="w-full">
                  <h4
                    class="
                      font-semibold
                      border-b-2 border-purple-500
                      inline-block
                    "
                  >
                    Publisher details
                  </h4>
                  <div class="journal-form">
                    <div class="flex items-center my-5 pl-3">
                      <label class="w-1/2 pr-2 font-semibold text-sm"
                        >Publisher Name</label
                      >
                      <input
                        class="
                          appearance-none
                          border
                          rounded
                          text-sm
                          w-full
                          py-2
                          px-3
                          text-gray-700
                          leading-tight
                          focus:outline-none focus:shadow-outline
                        "
                        id="username"
                        type="text"
                        placeholder="Publisher Name"
                      />
                    </div>
                    <div class="flex my-5 pl-3">
                      <label class="w-1/2 pr-2 font-semibold text-sm"
                        >Publisher adress</label
                      >
                      <textarea
                        rows="5"
                        class="
                          appearance-none
                          border
                          rounded
                          text-sm
                          w-full
                          py-2
                          px-3
                          text-gray-700
                          leading-tight
                          focus:outline-none focus:shadow-outline
                        "
                        id="username"
                        type="text"
                        placeholder="Publisher adress"
                      />
                    </div>
                  </div>
                </div>
                <div class="w-full">
                  <h4
                    class="
                      font-semibold
                      border-b-2 border-purple-500
                      inline-block
                    "
                  >
                    Copyright details
                  </h4>
                  <div class="journal-form">
                    <div class="flex my-5 pl-3">
                      <label class="w-1/2 pr-2 font-semibold text-sm"
                        >Copyright statement</label
                      >
                      <textarea
                        rows="5"
                        class="
                          appearance-none
                          border
                          rounded
                          text-sm
                          w-full
                          py-2
                          px-3
                          text-gray-700
                          leading-tight
                          focus:outline-none focus:shadow-outline
                        "
                        id="username"
                        type="text"
                        placeholder="Copyright statement"
                      />
                    </div>
                    <div class="flex items-center my-5 pl-3">
                      <label class="w-1/2 pr-2 font-semibold text-sm"
                        >Copyright year</label
                      >
                      <input
                        class="
                          appearance-none
                          border
                          rounded
                          text-sm
                          w-full
                          py-2
                          px-3
                          text-gray-700
                          leading-tight
                          focus:outline-none focus:shadow-outline
                        "
                        id="username"
                        type="text"
                        placeholder="Copyright year"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-12">
              <div class="col-span-12 pr-5">
                <ul class="flex justify-end">
                  <li class="ml-4">
                    <a
                      href="#"
                      class="
                        min-w-full
                        text-center
                        w-24
                        border
                        rounded-md
                        border-purple-500
                        text-sm text-purple-500
                        py-2
                        px-3
                      "
                      >Cancle</a
                    >
                  </li>
                  <li class="ml-4">
                    <a
                      href="#"
                      class="
                        text-white
                        border
                        min-w-full
                        text-center
                        w-24
                        rounded-md
                        border-purple-500
                        text-sm
                        bg-purple-500
                        py-2
                        px-3
                      "
                      >Save</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-span-3 border-l pl-5">
            <p class="font-semibold">
              <font-awesome-icon
                icon="question-circle"
                class="text-purple-500"
              />
              What some help?
            </p>
            <h6 class="font-semibold mt-5">Basic Details</h6>
            <p>
              Signature text can have variables. you can choose from the list of
              variable
            </p>
          </div>
        </div>
      </div>
      <div v-if="tab === 2">Article Details</div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCopy,
  faTrash,
  faPen,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

library.add(faCopy, faTrash, faPen, faQuestionCircle);

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

<style scoped>
.active-tab {
  background: #fff;
  padding: 10px 12px 10px 12px;
  border-bottom-color: #fff;
  position: relative;
  bottom: -5px;
  font-size: 17px !important;
}
.tabs-section button {
  position: relative;
  top: 5px;
}
</style>
