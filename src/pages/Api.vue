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
      <label for="searchProfession" class="form-label me-2">Enter profession</label> <br>
      <input
        type="text"
        class="form-control w-25 d-inline"
        id="searchProfession"
        placeholder="например: доярка"
        v-model="searchProfession"
      > &nbsp;
      <button class="btn btn-outline-primary" @click="getJobs(urlProfession)">Find</button>
    </div>

    <table class="table table-info table-hover table-bordered border-success align-middle">
      <template v-if="this.url === this.urlUdmurtia">
        <caption>Udmurt Rebublic</caption>
      </template>
      <template v-else-if="this.url === this.urlRussia">
        <caption>Russia</caption>
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
        <td>
          <a :href="job.vacancy.vac_url" target="_blank" title="Детали">{{ job.vacancy["job-name"] }}</a>
        </td>
        <td>{{ job.vacancy.salary }}</td>
        <td>{{ job.vacancy.company.name }}</td>
        <td>{{ job.vacancy["creation-date"] }}</td>
      </tr>
      </tbody>
    </table>

    <!--    <nav class="pagination-block">-->
    <!--      <ul class="pagination">-->
    <!--        <li class="page-item" v-for="page in totalPages" :key="page">-->
    <!--          <a href="#" class="page-link">-->
    <!--            {{ page }}-->
    <!--          </a>-->
    <!--        </li>-->
    <!--      </ul>-->
    <!--    </nav>-->

    <div class="pagination-wrapper">
      <div v-for="page in totalPages" :key="page" class="pagination-page">
        {{ page }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApiPage",
  data() {
    return {
      jobs: null,
      errorMessage: null,
      // urlRussia: "http://opendata.trudvsem.ru/api/v1/vacancies" + "?offset=" + this.offset +
      //   "&limit=" + this.limit,
      // urlUdmurtia: "http://opendata.trudvsem.ru/api/v1/vacancies/region/18",
      url: null,
      searchProfession: null,
      offset: 1,
      limit: 50,
      totalPages: 0
    };
  },
  computed: {
    urlRussia() {
      return "http://opendata.trudvsem.ru/api/v1/vacancies" + "?offset=" + this.offset +
        "&limit=" + this.limit;
    },
    urlUdmurtia() {
      return "http://opendata.trudvsem.ru/api/v1/vacancies/region/18" + "?offset=" + this.offset +
        "&limit=" + this.limit;
    },
    urlProfession() {
      return "http://opendata.trudvsem.ru/api/v1/vacancies/region/18?text=" +
        encodeURIComponent(this.searchProfession);
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
          this.totalPages = Math.ceil(data.meta.total / this.limit);
          // console.log(this.totalPages);
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
}

  .pagination-wrapper {
    display: flex;
    margin-top: 15px;
    flex-wrap: wrap;

    .pagination-page {
      border: 1px solid #444;
      padding: 10px;
      margin: 3px;
    }
  }

</style>