<template>
	<div class="">
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
			<div class="flex flex-wrap justify-between items-center form-header-section">
				<ul class="flex tabs-section">
					<li>
						<button @click="currentTab(1)" class="bg-gray-300 rounded-t-md text-gray-500 py-2 px-3 border border-gray-300 border-b-none" :class="(tab === 1)? 'active-tab':''">
							Project info
						</button>
					</li>
					<li class="ml-2">
						<button @click="currentTab(2)" class="bg-gray-300 rounded-t-md text-gray-500 py-2 px-3 border border-gray-300" :class="(tab == 2)? 'active-tab':''">
							Article details
						</button>
					</li>
				</ul>
				<ul class="flex form-edit-option flex-wrap">
					<li class="mr-4">
						<a href="#" class="bg-white border rounded-md border-purple-500 text-sm text-purple-500 py-2 px-3"><font-awesome-icon class="" icon="copy" /> Copy to new project</a>
					</li>
					<li class="mr-4">
						<a href="#" class="bg-white border rounded-md border-purple-500 text-sm text-purple-500 py-2 px-3"><font-awesome-icon icon="trash" /> Delete project</a>
					</li>
					<li v-if="isEdit == false">
						<button type="button" @click="editForm" class="text-white border rounded-md border-purple-500 text-sm bg-purple-500 py-2 px-3"><font-awesome-icon icon="pen" />Edit project</button>
					</li>
				</ul>
			</div>

			<div class="p-5 bg-white border mt-1">
				<div v-if="tab === 1">
					<div class="grid grid-cols-12 form-row-section-outer">
						<div class="col-span-9">
							<div class="grid grid-cols-12 form-row-section">
								<div class="col-span-6 pr-10">
									<div class="main">
										<div class="title">
											<h4 class="font-semibold border-b-2 border-purple-500 inline-block">Journal Info</h4>
										</div>
										<div class="journal-form">
											<div class="flex my-5 pl-3" :class="{ 'form-group--error': $v.hwp.$error }">
												<label class="mt-2 w-1/3 pr-2 font-semibold text-sm">HWP</label>
												<div class="w-2/3">
													<input class="appearance-none border rounded text-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="hwp" type="text" placeholder="HWP" name="hwp" v-model.trim="$v.hwp.$model" />
													<div class="error text-sm text-red-500" v-if="!$v.hwp.required">This field is required.</div>
													<div class="error text-sm text-red-500" v-if="!$v.hwp.spacesPunctuations">Please enter correct value.</div>
												</div>
											</div>
											<div class="flex my-5 pl-3" :class="{ 'form-group--error': $v.publisher_id.$error }">
												<label class="mt-2 w-1/3 pr-2 font-semibold text-sm">Publisher ID</label>
												<div class="w-2/3">
													<input class="appearance-none border rounded text-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="publisher_id" type="text" placeholder="Publisher ID" v-model.trim="$v.publisher_id.$model" />
													<div class="error text-sm text-red-500	" v-if="!$v.publisher_id.required">This field is required.</div>
												</div>
											</div>
											<div class="flex my-5 pl-3" :class="{ 'form-group--error': $v.journal_title.$error }">
												<label class="mt-2 w-1/3 pr-2 font-semibold text-sm">Journal title</label>
												<div class="w-2/3">
												<input class="appearance-none text-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="journal_title" type="text" name="journal_title" placeholder="Journal title" v-model.trim="$v.journal_title.$model" />
												<div class="error text-sm text-red-500" v-if="!$v.journal_title.required">This field is required.</div>
												</div>
											</div>
											<div class="flex my-5 pl-3" :class="{ 'form-group--error': $v.journal_title_abbrv.$error }">
												<label class="mt-2 w-1/3 pr-2 font-semibold text-sm">Journal title abbrv.</label>
												<div class="w-2/3">
													<input class="appearance-none text-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="journal_title_abbrv" type="text" name="journal_title_abbrv" placeholder="Journal title abbrv." v-model.trim="$v.journal_title_abbrv.$model" />
													<div class="error text-sm text-red-500	" v-if="!$v.journal_title_abbrv.required">This field. is required.</div>
												</div>
											</div>
											<div class="flex my-5 pl-3" :class="{ 'form-group--error': $v.ppub_issn.$error }">
												<label class="mt-2 w-1/3 pr-2 font-semibold text-sm">PPUB ISSN</label>
												<div class="w-2/3">
													<input class="appearance-none text-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ppub_issn" type="text" name="ppub_issn" placeholder="PPUB ISSN" v-model.trim="$v.ppub_issn.$model" />
													<div class="error text-sm text-red-500	" v-if="!$v.ppub_issn.required">This field is required.</div>
													<div class="error text-sm text-red-500	" v-if="!$v.ppub_issn.number">PPUB ISSN number is wrong.</div>
												</div>
											</div>
											<div class="flex my-5 pl-3" :class="{ 'form-group--error': $v.epub_iisn.$error }">
												<label class="mt-2 w-1/3 pr-2 font-semibold text-sm">EPUB IISN</label>
												<div class="w-2/3">
												<input class="appearance-none text-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="epub_iisn" type="text" name="epub_iisn" placeholder="EPUB IISN" v-model.trim="$v.epub_iisn.$model" />
												<div class="error text-sm text-red-500	" v-if="!$v.epub_iisn.required">This field is required.</div>
												<div class="error text-sm text-red-500	" v-if="!$v.epub_iisn.number">EPUB IISN number is wrong.</div>
												</div>
											</div>
											<div class="flex my-5 pl-3" :class="{ 'form-group--error': $v.doi_prefix.$error }">
												<label class="mt-2 w-1/3 pr-2 font-semibold text-sm">DOI Prefix</label>
												<div class="w-2/3">
													<input class="appearance-none text-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="doi_prefix" type="text" name="doi_prefix" placeholder="DOI Prefix" v-model.trim="$v.doi_prefix.$model" />
													<div class="error text-sm text-red-500	" v-if="!$v.doi_prefix.required">This field is required.</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-span-6 pr-10">
									<div class="w-full">
										<h4 class="font-semibold border-b-2 border-purple-500 inline-block">Publisher details</h4>
										<div class="journal-form">
											<div class="flex my-5 pl-3" :class="{ 'form-group--error': $v.publisher_name.$error }">
												<label class="mt-2 w-1/3 pr-2 font-semibold text-sm">Publisher Name</label>
												<div class="w-2/3">
													<input class="appearance-none border rounded text-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="publisher_name" type="text" name="publisher_name" placeholder="Publisher Name" v-model.trim="$v.publisher_name.$model" />
													<div class="error text-sm text-red-500	" v-if="!$v.publisher_name.required">This field is required.</div>
												</div>
											</div>
											<div class="flex my-5 pl-3" :class="{ 'form-group--error': $v.publisher_address.$error }">
												<label class="w-1/3 pr-2 font-semibold text-sm">Publisher address</label>
												<div class="w-2/3">
													<textarea rows="5" class="appearance-none border rounded text-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="publisher_address" type="text" name="publisher_address" placeholder="Publisher address" v-model.trim="$v.publisher_address.$model" />
													<div class="error text-sm text-red-500	" v-if="!$v.publisher_address.required">This field is required.</div>
												</div>
											</div>
										</div>
									</div>
									<div class="w-full">
										<h4 class="font-semibold border-b-2 border-purple-500 inline-block">Copyright details</h4>
										<div class="journal-form">
											<div class="flex my-5 pl-3" :class="{ 'form-group--error': $v.copyright_statement.$error }">
												<label class=" w-1/3 pr-2 font-semibold text-sm">Copyright statement</label>
												<div class="w-2/3">
													<textarea rows="5" class="appearance-none border rounded text-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="copyright_statement" type="text" name="copyright_statement" placeholder="Copyright statement" v-model.trim="$v.copyright_statement.$model" />
													<div class="error text-sm text-red-500	" v-if="!$v.copyright_statement.required">This field is required.</div>
												</div>
											</div>
											<div class="flex my-5 pl-3" @change="checkYear()" :class="{ 'form-group--error': ($v.copyright_year.$error || !isValidYear ) }">
												<label class="mt-2 w-1/3 pr-2 font-semibold text-sm">Copyright year</label>
												<div class="w-2/3">
													<input class="appearance-none border rounded text-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="copyright_year" type="text" name="copyright_year" placeholder="Copyright year" v-model.trim="$v.copyright_year.$model" />
													<div class="error text-sm text-red-500	" v-if="!$v.copyright_year.required">This field is required.</div>
													<div class="error text-sm text-red-500	" v-if="$v.copyright_year.required && !isValidYear">Please enter correct year.</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="grid grid-cols-12">
								<div class="col-span-12 pr-5" v-if="isEdit">
									<ul class="flex justify-end">
										<li class="ml-4">
											<button @click="resetForm" type="button" class="min-w-full text-center w-24 border rounded-md border-purple-500 text-sm text-purple-500 py-2 px-3">Cancel</button>
										</li>
										<li class="ml-4">
											<button type="button" @click="submit" class="text-white border min-w-full text-center w-24 rounded-md border-purple-500 text-sm bg-purple-500 py-2 px-3">Save</button>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-span-3 border-l pl-5">
							<p class="font-semibold">
								<font-awesome-icon icon="question-circle" class="text-purple-500" /> What some help?
							</p>
							<h6 class="font-semibold mt-5">Basic Details</h6>
							<p>Signature text can have variables. you can choose from the list of variable</p>
						</div>
					</div>
				</div>
				<div v-if="tab === 2">Article Details</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { required, helpers} from 'vuelidate/lib/validators';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCopy, faTrash, faPen, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
library.add(faCopy, faTrash, faPen, faQuestionCircle);

const number = helpers.regex("number", /^[0-9a-zA-Z]{4}[-]{1}[0-9a-zA-Z]{4}$/);
const spacesPunctuations = helpers.regex("spacesPunctuations", /^([0-9a-zA-Z]+\s{0,1}[0-9a-zA-Z]+)+$/);


export default {
	name: "BIR",
	data() {
		return {
			hwp: '',
			publisher_id: '',
			journal_title: '',
			journal_title_abbrv: '',
			ppub_issn: '',
			epub_iisn: '',
			doi_prefix: '',
			publisher_name: '',
			publisher_address: '',
			copyright_statement: '',
			copyright_year: '',
			submitStatus: null,
			tab: 1,
			isEdit: false,
			isValidYear: true,
		};
	},
	computed: {
		...mapState(['getProjectDetails', 'updateProjectDetails']),
		...mapGetters(['getProjectDetails', 'updateProjectDetails']),
	},
	validations: {
		hwp: {
			required,
			spacesPunctuations
		},
		publisher_id: {
			required,
		},
		journal_title: {
			required,
		},
		journal_title_abbrv: {},
		ppub_issn: {
			required,
			number
		},
		epub_iisn: {
			required,
			number
		},
		doi_prefix: {
			required,
		},
		publisher_name: {
			required,
		},
		publisher_address: {
			required,
		},
		copyright_statement: {
			required,
		},
		copyright_year: {
			required,
		}
	},
	methods: {
		checkYear: function() {
			let currentYear = new Date().getFullYear();
			if (this.$v.copyright_year.$model >= currentYear) {
				this.isValidYear = true;
			} else {
				this.isValidYear = false;
			}
		},
		 submit: function() {
			 try {
				this.$v.$touch();
					if (this.$v.$invalid) {
						this.submitStatus = 'ERROR'
					} else {
						let projectInfoDetails = {
							project_info: {
								journal_info: {
										hwp: this.$v.hwp.$model,
										publisher_id: this.$v.publisher_id.$model,
										journal_title: this.$v.journal_title.$model,
										Journal_title_abbrv: (this.$v.journal_title_abbrv.$model) ? this.$v.journal_title_abbrv.$model : this.$v.journal_title.$model,
										ppub_issn: this.$v.ppub_issn.$model,
										epub_iisn: this.$v.epub_iisn.$model,
										doi_prefix: this.$v.doi_prefix.$model
								},
								publisher_info: {
										publisher_name: this.$v.publisher_name.$model,
										publisher_address: this.$v.publisher_address.$model
								},
								copyright_info: {
										copyright_statement: this.$v.copyright_statement.$model,
										copyright_year: this.$v.copyright_year.$model
								}
							}
						};

						this.$store.dispatch('updateProjetDetails', projectInfoDetails).then((response) => {
							if (response.status != undefined && response.status == 200) {
								this.resetForm();
								alert("Your data has been updated.");
							}
						});
					}
			 } catch(e){
				console.log(e);
			 }
		},
		currentTab: function (tabNumber) {
			this.tab = tabNumber;
		},
		editForm: async function () {
			this.$store.dispatch('getProjectDetails').then((response) => {
				try {
					if(response.status != undefined && response.status == 200) {
						let data = response.data;
						this.hwp = data.project_info[0].journal_info.hwp;
						this.publisher_id = data.project_info[0].journal_info.publisher_id;
						this.journal_title = data.project_info[0].journal_info.journal_title;
						this.journal_title_abbrv = data.project_info[0].journal_info.Journal_title_abbrv;
						this.ppub_issn = data.project_info[0].journal_info.ppub_issn;
						this.epub_iisn = data.project_info[0].journal_info.epub_iisn;
						this.doi_prefix = data.project_info[0].journal_info.doi_prefix;

						this.publisher_name = data.project_info[0].publisher_info.publisher_name;
						this.publisher_address = data.project_info[0].publisher_info.publisher_address;

						this.copyright_statement = data.project_info[0].copyright_info.copyright_statement;
						this.copyright_year = data.project_info[0].copyright_info.copyright_year;

						this.isEdit = true;
					} else {
						alert("Something went wrong.");
					}
				} catch (e) {
					alert(e);
				}
			});
		},
		resetForm: function () {
			this.hwp = "";
			this.publisher_id = "";
			this.journal_title = "";
			this.journal_title_abbrv = "";
			this.ppub_issn = "";
			this.epub_iisn = "";
			this.doi_prefix = "";

			this.publisher_name = "";
			this.publisher_address = "";

			this.copyright_statement = "";
			this.copyright_year = "";

			this.$nextTick(() => {
				this.$v.$reset();
				this.isEdit = false;
			});
		}
	}
};
</script>
