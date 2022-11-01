<template>
  <div class="api">
    <div class="category">
      Get all vacancies in Russia &nbsp;
      <button class="btn btn-success" @click="getJobs(urlRussia)">Get</button>
    </div>
    <div class="category">
      Get vacancies in Udmurt Rebublic &nbsp;
      <button class="btn btn-success" @click="getJobs(urlUdmurtia)">Get</button>
    </div>
    <div class="category">
      Get profession "Программист" in Udmurt Republic &nbsp;
      <button class="btn btn-success" @click="getJobs(urlUdmurtiaProg)">Get</button>
    </div>
    <div class="category">
      <label for="searchProfession" class="form-label me-2">Enter profession</label>
      <input
        type="email"
        class="form-control w-50 d-inline"
        id="searchProfession"
        placeholder="озеленитель"
        v-model="searchProfession"
      > &nbsp;
      <button class="btn btn-success" @click="getJobs(urlProfession)">Find</button>
    </div>

    <table class="table table-info table-hover table-bordered border-success align-middle">
      <template v-if="this.url === this.urlUdmurtia">
        <caption>Udmurt Rebublic</caption>
      </template>
      <template v-else-if="this.url === this.urlRussia">
        <caption>Russia</caption>
      </template>
      <template v-else-if="this.url === this.urlUdmurtiaProg">
        <caption>"Программист" in Udmurt Republic</caption>
      </template>
      <template v-else>
        <caption>&nbsp;</caption>
      </template>
      <thead class="table-warning border-success align-middle">
      <tr>
        <th>№</th>
        <th>Профессия</th>
        <th>Зарплата</th>
        <th>Компания</th>
        <th>Дата создания</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="job in jobs" :key="job.vacancy.id">
        <td></td>
        <td><a :href="job.vacancy.vac_url" target="_blank">{{ job.vacancy["job-name"] }}</a></td>
        <td>{{ job.vacancy.salary }}</td>
        <td>{{ job.vacancy.company.name }}</td>
        <td>{{ job.vacancy["creation-date"] }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ApiPage",
  data() {
    return {
      jobs: null,
      errorMessage: null,
      urlRussia: "http://opendata.trudvsem.ru/api/v1/vacancies",
      urlUdmurtia: "http://opendata.trudvsem.ru/api/v1/vacancies/region/18",
      urlUdmurtiaProg: "http://opendata.trudvsem.ru/api/v1/vacancies/region/18?text=" +
        encodeURIComponent("Программист"),
      url: null,
      searchProfession: null,
    };
  },
  computed: {
    urlProfession() {
      return "http://opendata.trudvsem.ru/api/v1/vacancies/region/18?text=" +
      encodeURIComponent(this.searchProfession)
    }
  },
  methods: {
    getJobs(url) {
      fetch(url)
        .then(async response => {
          const data = await response.json();

          if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
          }
          this.jobs = data.results.vacancies;
          this.url = response.url;
        })
        .catch(error => {
          this.errorMessage = error;
          console.error("There was an error!", error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.api {
  background: linear-gradient(to bottom, var(--color-bg-api), var(--color-bg-api)),
  url(@/assets/images/Api.jpg) 50% 50% no-repeat;
  @include background();
  color: var(--color-bg-task);
  overflow: auto;
  //overflow-x: hidden;
  font-size: 0.9em;
}

.category {
  margin: 10px 0 20px 10px;
  text-align: left;
}

.table {
  font-size: 0.8em;
  max-width: 95vw;
  margin: 20px auto;
  counter-reset: rowNumber 1;

  caption {
    caption-side: top;
    font-size: 1.2em;
    text-align: center;
    color: var(--color-bg-task);
  }

  tr:not(:first-child) {
    counter-increment: rowNumber;
  }

  tr td:first-child::before {
    content: counter(rowNumber);
  }

  td {
    //max-width: 150px;
  }
}
</style>