<template>
  <div class="api">
    <div class="category">
      Get vacancies in Russia &nbsp;
      <button class="btn btn-success" @click="getJobs(urlRussia)">Get</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Get vacancies in Udmurt Rebublic &nbsp;
      <button class="btn btn-success" @click="getJobs(urlUdmurtia)">Get</button>
    </div>
    <div class="category">
      <label for="searchProfession" class="form-label me-2">Search profession </label> <br>
      <input
        type="text"
        class="form-control w-25 d-inline"
        id="searchProfession"
        placeholder="in Udmurt Republic"
        v-model="searchProfession"
        @keyup.enter = "getJobs(urlProfession)"
      > &nbsp;
      <button
        class="btn btn-outline-primary"
        @click="getJobs(urlProfession)"
      >
        Find
      </button>

      <label for="searchProfessionRussia" class="form-label me-2"> </label>
      <input
        type="text"
        class="form-control w-25 d-inline"
        id="searchProfessionRussia"
        placeholder="in Russia"
        v-model="searchProfessionRussia"
        @keyup.enter = "getJobs(urlProfessionRussia)"
      > &nbsp;
      <button class="btn btn-outline-primary" @click="getJobs(urlProfessionRussia)">Find</button>
    </div>

    <table class="table table-info table-hover table-bordered border-success align-middle">
      <template v-if="this.url && this.url.includes('http://opendata.trudvsem.ru/api/v1/vacancies/region/18?')">
        <caption>Udmurt Rebublic</caption>
      </template>
      <template v-else-if="this.url && this.url.includes('http://opendata.trudvsem.ru/api/v1/vacancies?')">
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
      <tr v-for="(job, index) in jobs" :key="job.vacancy.id">
        <td>{{ (index + 1) + 100 * (this.offset - 1) }}</td>
        <td>
          <a :href="job.vacancy.vac_url" target="_blank" title="Детали">{{ job.vacancy["job-name"] }}</a>
        </td>
        <td>{{ job.vacancy.salary }}</td>
        <td>{{ job.vacancy.company.name }}</td>
        <td>{{ job.vacancy["creation-date"] }}</td>
      </tr>
      </tbody>
    </table>

    <div class="pagination-wrapper">
      <div
        v-show="offset > 6"
        class="pagination-page bigger-width"
        @click="changePage(1)"
      >
        1 ...
      </div>
      <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="pagination-page"
        :class="{
          'current-page': offset === pageNumber,
          'pagination-slice-right': pageNumber > offset + 5,
          'pagination-slice-left': pageNumber < offset - 5,
        }"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
      <div
        v-show="offset < totalPages - 5"
        class="pagination-page bigger-width"
        @click="changePage(totalPages)"
      >
        ... {{totalPages}}
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
      url: null,
      searchProfession: null,
      searchProfessionRussia: null,
      offset: 1,
      limit: 100,
      totalPages: 0,
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
        encodeURIComponent(this.searchProfession) + "&offset=" + this.offset + "&limit=" + this.limit;
    },
    urlProfessionRussia() {
      return "http://opendata.trudvsem.ru/api/v1/vacancies?text=" +
        encodeURIComponent(this.searchProfessionRussia) + "&offset=" + this.offset + "&limit=" + this.limit;
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
          // this.totalPages = Math.ceil(data.meta.total / this.limit);
          Math.floor(data.meta.total / this.limit) < 100
            ? this.totalPages = Math.floor(data.meta.total / this.limit)
            : this.totalPages = 99;
        })
        .catch(error => {
          this.errorMessage = error;
          console.error("There was an error!", error);
        });
    },
    changePage(pageNumber) {
      this.offset = pageNumber;
      if (this.url.includes("http://opendata.trudvsem.ru/api/v1/vacancies?") &&
        this.url.includes("http://opendata.trudvsem.ru/api/v1/vacancies?text=") === false) {
        this.getJobs(this.urlRussia);
      } else if (this.url.includes("http://opendata.trudvsem.ru/api/v1/vacancies/region/18?") &&
        this.url.includes("http://opendata.trudvsem.ru/api/v1/vacancies/region/18?text=") === false) {
        this.getJobs(this.urlUdmurtia);
      } else if (this.url.includes("http://opendata.trudvsem.ru/api/v1/vacancies/region/18?text=")) {
        this.getJobs(this.urlProfession);
      } else if (this.url.includes("http://opendata.trudvsem.ru/api/v1/vacancies?text=")) {
        this.getJobs(this.urlProfessionRussia);
      }
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

  .category {
    margin: 10px 0 20px 10px;
    text-align: left;
  }

  #searchProfessionRussia {
    margin-left: 50px;
  }
}

.table {
  font-size: 0.8em;
  max-width: 95vw;
  margin: 20px auto;

  caption {
    caption-side: top;
    font-size: 1.2em;
    text-align: center;
    color: var(--color-bg-task);
  }
}

.pagination-wrapper {
  display: flex;
  margin: 15px 10px;
  flex-wrap: wrap;

  .pagination-page {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--color-pagination-page);
    padding: 2px;
    margin: 2px;
    width: 50px;
    font-size: 0.7em;
    transition: all 0.5s ease;

    &:hover {
      color: var(--color-bg-teal);
      transition: all 0.5s ease;
    }

    &:first-child {
      margin-right: 30px;
    }

    &:last-child {
      margin-left: 30px;
    }
  }

  .current-page {
    border: 1px solid var(--color-bg-teal);
    color: var(--color-bg-teal);
  }

  .pagination-slice-right,
  .pagination-slice-left {
    display: none;
  }

  .bigger-width {
    min-width: 80px;
  }
}

</style>