<template>
  <div>
    <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
      <label class="form__label">Name</label>
      <input class="form__input" v-model.trim="$v.name.$model"/>
    </div>
    <div class="error" v-if="!$v.name.required">Name is required</div>
    <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
    <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
      <label class="form__label">Email</label>
      <input class="form__input" v-model.trim="$v.email.$model"/>
    </div>
    <div class="error" v-if="!$v.email.required">Email is required</div>
    <div class="error" v-if="!$v.email.minLength">Email must have at least {{$v.email.$params.minLength.min}} letters.</div>
    <button @click="submit" class="button" type="submit" :disabled="submitStatus === 'PENDING'">Submit!</button>
    <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
    <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
    <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
    <button type="button" class="p-2 border border-black">Parse XML</button>
</div>
</template>
<script>

// import useVuelidate from '@vuelidate/core'
import { required, minLength } from "vuelidate/lib/validators";
// import xml2json from "@/assets/xml/jobTemplate.xml";
import xml2js from 'xml2js';
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      age: 0,
      submitStatus: null
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    email: {
      required,
      minLength: minLength(7)
    }
  },
  methods: {
    parseXML(data) {
      return  new Promise(resolve => {
        var k="";
        var arr = [],
        parser = new xml2js.Parser({ trim: true, explicitArray: true });
        parser.parseString(data, function (err, result) {
          console.log("-->-- result --<--", result.article);
          // var obj = result.Employee;
          // for (k in obj.emp) {
          //   var item = obj.emp[k];
          //   arr.push({id: item.id[0], name: item.name[0], email: item.email[0]});
          // }
          // resolve(arr);
        });
      });
    },
    data: function() {
      return {
        xmlItems:[]
      }
    },
    submit() {
      console.log('submit!')
      this.$v.$touch()
      // if (this.$v.$invalid) {
      //   this.submitStatus = 'ERROR'
      // } else {
      //   // do your submit logic here
      //   this.submitStatus = 'PENDING'
      //   setTimeout(() => {
      //     this.submitStatus = 'OK'
      //   }, 500)
      // }
    },
  },
  async mounted() {
    var xml = `<article xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" article-type="research-article" xml:lang="en"><front><journal-meta><journal-id journal-id-type="hwp">archdischild</journal-id><journal-id journal-id-type="publisher-id">archdischild</journal-id><journal-title-group><journal-title>Archives of Disease in Childhood</journal-title><abbrev-journal-title>Arch Dis Child</abbrev-journal-title></journal-title-group><issn pub-type="ppub">0003-9888</issn><issn pub-type="epub">1468-2044</issn><publisher><publisher-name>BMJ Publishing Group</publisher-name><publisher-loc>BMA House, Tavistock Square, London, WC1H 9JR</publisher-loc></publisher></journal-meta><article-meta><article-id pub-id-type="publisher-id" data-doi-prefix="10.1136/">10.1136/MSID</article-id><article-id pub-id-type="doi">MSID</article-id><article-categories><subj-group subj-group-type="display-channel"><subject>SUBJECT</subject></subj-group></article-categories><title-group><article-title>ARTICLE TITLE</article-title></title-group><contrib-group><contrib contrib-type="author"><string-name>AUTHOR</string-name></contrib></contrib-group><permissions><copyright-statement data-statement="new">&#169; Author(s) (or their employer(s)) 2019. No commercial re-use. See rights and permissions. Published by BMJ.</copyright-statement><copyright-year>2019</copyright-year><license><license-p/></license></permissions><custom-meta-group/></article-meta></front><body/><back/><workflow><priority/><current-stage>Add Job</current-stage><paw-stage><current>Clean up</current></paw-stage><word-count/><word-count-without-ref/><stage><name>addJob</name><customer-stage-name>Add Job</customer-stage-name><start-date-time/><end-date-time/><start-date/><end-date/><status>in-progress</status><comments/><assigned><to>Exeter</to><by>Exeter</by><on/><reason/></assigned><time-log><log><start/><end/><duration/><status/></log></time-log></stage></workflow></article>`;
    this.parseXML(xml).then((data) => {
      this.xmlItems = data;
      console.log(data);
    });

    // let config = {
    //   method: 'get',
    //   url: 'http://localhost:8080/jobTemplate.xml'
    // };

    // await axios(config).then(response => {
    //   console.log("-->-- response --<--", response);
    //   this.parseXML(response.data).then((data) => {
    //     this.xmlItems = data;
    //   });
    // });
  }
}
</script>

<style scoped>
.error {
  display: none;
}
.form-group--error + .error {
  display: block !important;
}
</style>
