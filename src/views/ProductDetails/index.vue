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
              border-b-none
            "
            :class="(tab === 1)? 'active-tab':''"
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
            :class="(tab == 2)? 'active-tab':''"
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
                        id="hwp"
                        type="text"
                        placeholder="HWP"
                        name="hwp"
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
                        id="publisher_id"
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
                        id="journal_title"
                        type="text"
                        name="journal_title"
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
                        id="journal_title_abbrv"
                        type="text"
                        name="journal_title_abbrv"
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
                        id="ppub_issn"
                        type="text"
                        name="ppub_issn"
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
                        id="epub_iisn"
                        type="text"
                        name="epub_iisn"
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
                        id="doi_prefix"
                        type="text"
                        name="doi_prefix"
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
                        id="publisher_name"
                        type="text"
                        name="publisher_name"
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
                        id="publisher_adress"
                        type="text"
                        name="publisher_adress"
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
                        id="copyright_statement"
                        type="text"
                        name="copyright_statement"
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
                        id="copyright_year"
                        type="text"
                        name="copyright_year"
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
  <div class="grid grid-cols-12">
    <div class="col-span-12">
      <h1>Form Validation</h1>
      <!-- <form @submit.prevent="submit">
        <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
          <label class="form__label">Name</label>
          <input class="form__input" v-model.trim="$v.name.$model"/>
        </div>
        <div class="error" v-if="!$v.name.required">Name is required</div>
        <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
        <button class="button" type="submit" :disabled="submitStatus === 'PENDING'">Submit!</button>
        <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
        <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
        <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
      </form> -->
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCopy, faTrash, faPen, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { required, minLength } from 'vuelidate/lib/validators';

library.add(faCopy, faTrash, faPen, faQuestionCircle);

export default {
  name: "BIR",
  data() {
    return {
      // name: '',
      age: 0,
      submitStatus: null,
      tab: 1,
    };
  },
  // validations: {
  //   name: {
  //     required,
  //     minLength: minLength(4)
  //   }
  // },
  methods: {
     submit() {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    },
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
