<template>
  <div id="app">
    <b-container>
      <b-form @submit="onSubmit" v-if="formData.show">
        <div>
          <b-form-group
            id="fieldset-1"
            description="Enter integer number."
            label="Enter integer"
            label-for="input-1"
            :state="validationInteger"
          >
            <b-form-input
              id="input-1"
              v-model="formData.integer.value"
              :state="validationInteger"
              trim
              type="number"
            ></b-form-input>

            <b-form-invalid-feedback id="input-live-feedback">
              Enter number greater than 0
            </b-form-invalid-feedback>
          </b-form-group>
        </div>

        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
      <b-card
        class="mt-3"
        header="Planteamiento del problema: 
        a. Recibe un número del conjunto de los números Enteros mayores a cero: {“número”:6}
        b. Se regresa un número inmediato de la serie de Fibonacci(0,1), menor o igual: {“fibonacci”:5}
        c. Las funciones internas que resuelvan el problema deben tener la característica de ser
        recursivas."
      >
        <pre
          class="m-0"
        ><strong style="color: red">Form fragment in state:</strong> {{ formData }}</pre>
        <hr />
        <pre style="color: red" class="m-0" v-show="fibonacciResult">
          closest value to your number in the fibonacci series: {{
            fibonacciResult
          }}
        </pre>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function() {
    return {
      fnZero: 0,
      fnOne: 1,
    };
  },
  computed: {
    formData() {
      return this.$store.getters.formData;
    },
    validationInteger() {
      return this.formData.integer.value
        ? this.formData.integer.value > 0
        : null;
    },
    fibonacciResult() {
      return this.$store.getters.fibinacciResult;
    },
  },
  methods: {
    onSubmit(event) {
      if (this.validationInteger) {
        event.preventDefault();
        const result = this.calculateInmediateNumber(
          this.fnOne,
          this.fnZero,
          this.formData.integer.value
        );
        this.$store.dispatch("setFibonacciNumber", result);
      }
    },
    calculateInmediateNumber: function(firstFn, lastFn, userNumber) {
      let currentFn = firstFn + lastFn;
      let prevFn = firstFn;

      if (currentFn <= userNumber) {
        return this.calculateInmediateNumber(currentFn, prevFn, userNumber);
      }
      return firstFn;
    },
  },
};
</script>

<style slot>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
